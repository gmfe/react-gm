import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { pinYinFilter } from 'gm-util'
import Base from './base'

class MoreSelect extends React.Component {
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
        data={oData}
        selected={oSelected}
        onSelect={this.handleSelect}
        multiple={multiple}
        isGroupList={isGroupList}
      />
    )
  }
}

function renderListFilterDefault(data, query) {
  return _.filter(data, item => item.text.includes(query))
}

function renderListFilterPinYin(data, query) {
  return pinYinFilter(data, query, item => item.text)
}

MoreSelect.renderListFilterDefault = renderListFilterDefault
MoreSelect.renderListFilterPinYin = renderListFilterPinYin

MoreSelect.propTypes = {
  // 基本属性
  data: PropTypes.array.isRequired, // [{value, text}]
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // item。 非 value，也非引用，原因是想解耦 selected 和 data 的关系。这样当
  onSelect: PropTypes.func.isRequired, // 返回 item
  multiple: PropTypes.bool,

  // 状态
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,

  // 列表 搜索
  onSearch: PropTypes.func, // searchValue, data
  delay: PropTypes.number,
  searchPlaceholder: PropTypes.string,
  disabledSearch: PropTypes.bool, // 不需要搜索
  renderListFilter: PropTypes.func, // 过滤，提供 searchValue 和 data
  renderListFilterType: PropTypes.oneOf(['default', 'pinyin']), // 也可简单指定 默认的过滤类型

  // 展示
  renderSelected: PropTypes.func, // 定制已选的区域，提供 selected
  renderListItem: PropTypes.func, // 定制列表

  // 样式
  listMaxHeight: PropTypes.string,

  // isGroupList
  isGroupList: PropTypes.bool,

  popoverType: PropTypes.oneOf(['focus', 'realFocus'])
}

MoreSelect.defaultProps = {
  renderSelected: item => item.text,

  delay: 500,
  renderListItem: item => item.text,
  listMaxHeight: '250px',

  renderListFilterType: 'default',

  popoverType: 'focus'
}

// 介绍 selected
// 假设 selected 是 value，那么在搜索的时候 data 是一份新的数据，这份数据内不存在 已选的 values，那么 selected 怎么显示就束手无策了
// 估用了 item
// 由于引用方式诟病比较多，所以也改成了非引用方式。

export default MoreSelect
