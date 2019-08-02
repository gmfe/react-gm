import React from 'react'
import PropTypes from 'prop-types'
import baseSelectTableHoc from 'react-table/lib/hoc/selectTable'
import _ from 'lodash'
import Table from '../table'

function selectTableHOC(Component) {
  // 先包一层 hocSelectTable
  const SelectComponent = baseSelectTableHoc(Component)

  class SelectTable extends React.Component {
    isSelected = key => {
      const { selected } = this.props

      return selected.includes(key)
    }

    handleToggleSelection = key => {
      const { selected, onSelect, selectType } = this.props

      // 兼容 react-table@6.10.0
      let result = key
      if (_.isString(result) && result.startsWith('select-')) {
        result = result.slice(7)
      }

      if (selectType === 'radio') {
        onSelect([result])
      } else {
        onSelect(_.xor(selected, [result]))
      }
    }

    render() {
      const {
        selectAll,
        onSelectAll,
        selectAllTip,
        selectType,
        keyField,
        ...rest
      } = this.props

      return (
        <div className='gm-react-table-select'>
          <SelectComponent
            {...rest}
            selectAll={selectAll}
            isSelected={this.isSelected}
            toggleSelection={this.handleToggleSelection}
            toggleAll={onSelectAll}
            selectType={selectType}
            keyField={keyField}
          />
          {selectAllTip && selectAll && (
            <div className='gm-box-shadow-bottom gm-react-table-select-all-tip'>
              <span className='gm-react-table-select-all-tip-arrow' />
              {selectAllTip}
            </div>
          )}
        </div>
      )
    }
  }

  SelectTable.propTypes = {
    ...Table.propTypes,

    // select 专有
    /** 如果是 radio， selectAll  onSelectAll 没意义 */
    selectType: PropTypes.oneOf(['checkbox', 'radio']),
    selected: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectAll: PropTypes.bool.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    selectAllTip: PropTypes.node,
    keyField: PropTypes.string
  }

  SelectTable.defaultProps = {
    selectType: 'checkbox',
    keyField: 'value'
  }

  return SelectTable
}

export default selectTableHOC
