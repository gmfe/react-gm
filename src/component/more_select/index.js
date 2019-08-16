import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Base from './base'

class MoreSelect extends React.Component {
  ref = React.createRef()

  apiDoFocus = () => {
    this.ref.current.apiDoFocus()
  }

  apiDoSelectWillActive = () => {
    this.ref.current.apiDoSelectWillActive()
  }

  handleSelect = selected => {
    const { multiple, onSelect } = this.props

    if (multiple) {
      onSelect(selected)
    } else {
      onSelect(selected[0])
    }
  }

  render() {
    const { data, selected, multiple, isGroupList, ...rest } = this.props

    let oData
    if (isGroupList) {
      oData = data
    } else {
      oData = [
        {
          label: '',
          children: data
        }
      ]
    }

    let oSelected
    if (multiple) {
      oSelected = selected
    } else {
      oSelected = selected ? [selected] : []
    }

    return (
      <Base
        {...rest}
        ref={this.ref}
        data={oData}
        selected={oSelected}
        onSelect={this.handleSelect}
        multiple={multiple}
        isGroupList={isGroupList}
      />
    )
  }
}

MoreSelect.propTypes = {
  // 其他来源于 Base
  ...Base.propTypes,

  // 基本属性
  data: PropTypes.array.isRequired, // [{value, text}]
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // item。 非 value，也非引用，原因是想解耦 selected 和 data 的关系。这样当
  onSelect: PropTypes.func.isRequired // 返回 item
}

MoreSelect.defaultProps = {
  renderSelected: item => item.text,

  delay: 500,
  renderListItem: item => item.text,
  listHeight: '180px',

  renderListFilterType: 'default',

  popoverType: 'focus',
  onKeyDown: _.noop
}

// 介绍 selected
// 假设 selected 是 value，那么在搜索的时候 data 是一份新的数据，这份数据内不存在 已选的 values，那么 selected 怎么显示就束手无策了
// 估用了 item
// 由于引用方式诟病比较多，所以也改成了非引用方式。

export default MoreSelect
