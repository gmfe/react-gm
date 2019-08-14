import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Base from './base'
import { warn, devWarn } from '../../util'

/** 列表组件 */
class List extends React.Component {
  constructor(props) {
    super(props)

    devWarn(() => {
      if (props.multiple && !_.isArray(props.selected)) {
        warn('多选情况下 selected 请传数组')
      }
    })
  }

  handleSelected = selected => {
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
      // 如果 selected 为 null，需要转成 []
      oSelected = selected || []
    } else {
      oSelected = selected ? [selected] : []
    }

    return (
      <Base
        {...rest}
        data={oData}
        selected={oSelected}
        onSelect={this.handleSelected}
        multiple={multiple}
        isGroupList={isGroupList}
      />
    )
  }
}

List.propTypes = {
  ...Base.propTypes,

  /**
   * [{value, text, disabled}]
   * group [{label, children: [{value, text, disabled}]}]
   * */
  data: PropTypes.array.isRequired, // value text
  /** 单选 value，多选 [value, value]。多选请务必提供数组 */
  selected: PropTypes.any,
  /** 单选 value，多选 [value, value] */
  onSelect: PropTypes.func
}

List.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  renderItem: item => item.text,
  getItemProps: () => ({})
}

export default List
