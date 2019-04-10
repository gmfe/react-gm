import React from 'react'
import PropTypes from 'prop-types'
import BaseTable from './base'
import hocSelectTable from './hoc/select_table_hoc'
import _ from 'lodash'

const HocSelectTable = hocSelectTable(BaseTable)

class SelectTable extends React.Component {
  isSelected = (key) => {
    const { selected } = this.props

    return selected.includes(key)
  }

  handleToggleSelection = (key) => {
    const { selected, onSelect, selectType } = this.props

    if (selectType === 'radio') {
      onSelect([key])
    } else {
      onSelect(_.xor(selected, [key]))
    }
  }

  render () {
    const {
      onSelectAll,
      ...rest
    } = this.props

    return (
      <HocSelectTable
        {...rest}
        ref={ref => (this.ref = ref)}
        className='-striped -highlight'
        showPagination={false}
        isSelected={this.isSelected}
        toggleSelection={this.handleToggleSelection}
        toggleAll={onSelectAll}
      />
    )
  }
}

SelectTable.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectAll: PropTypes.bool.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  selectAllTip: PropTypes.string,
  keyField: PropTypes.string,
  selectType: PropTypes.oneOf(['checkbox', 'radio']), // 如果是 radio， selectAll  onSelectAll 没意义
  selectAllPageTip: PropTypes.string, // 选择所有页提示
  onSelectAllPage: PropTypes.func, // 选择 所有页/当前页 回调
  hasSelectAllPage: PropTypes.bool // 是否存在 所有页/当前页 按钮
}

SelectTable.defaultProps = {
  selectType: 'checkbox',
  hasSelectAllPage: false
}

export default SelectTable
