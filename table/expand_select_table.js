import React from 'react'
import PropTypes from 'prop-types'
import ExpandTable from './expand_table'
import hocSelectTable from 'react-table/lib/hoc/selectTable'
import _ from 'lodash'

const HocSelectTable = hocSelectTable(ExpandTable)

class ExpandSelectTable extends React.Component {
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
      loading, data, columns,
      defaultPageSize,
      selectAll, onSelectAll, selectAllTip,
      selectType,
      keyField,
      SubComponent,
      noDataText, loadingText,
      ...rest
    } = this.props

    return (
      <div className='gm-react-table-select'>
        <HocSelectTable
          {...rest}
          ref={ref => (this.ref = ref)}
          loading={loading}
          data={data}
          columns={columns}
          defaultPageSize={defaultPageSize}
          className='-striped -highlight'
          showPagination={false}
          selectAll={selectAll}
          isSelected={this.isSelected}
          toggleSelection={this.handleToggleSelection}
          toggleAll={onSelectAll}
          selectType={selectType}
          keyField={keyField}
          noDataText={noDataText}
          loadingText={loadingText}
          SubComponent={SubComponent}
        />
        {selectAllTip && selectAll && <div className='gm-react-table-select-all-tip'>{selectAllTip}</div>}
      </div>
    )
  }
}

ExpandSelectTable.propTypes = {
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
  SubComponent: PropTypes.func.isRequired
}

ExpandSelectTable.defaultProps = {
  selectType: 'checkbox'
}

export default ExpandSelectTable
