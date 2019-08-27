import React from 'react'
import { Checkbox } from '../../../src'
import _ from 'lodash'
import { referOfWidth } from '../../util'
import Table from '../../table/base'
import PropTypes from 'prop-types'

export default (Component, options) => {
  const wrapper = class RTSelectTable extends React.Component {
    handleToggleSelection = key => {
      const { selected, onSelect } = this.props

      // 兼容 react-table@6.10.0
      let result = key
      if (_.isString(result) && result.startsWith('select-')) {
        result = result.slice(7)
      }

      const newSelected = _.xor(selected, [result])
      onSelect(newSelected)
    }

    handleToggleAll = isCurrentSelectedAll => {
      const { onSelectAll } = this.props
      onSelectAll(!isCurrentSelectedAll)
    }

    rowSelector = row => {
      // eslint-disable-next-line no-prototype-builtins
      if (!row || !row.hasOwnProperty(this.props.keyField)) return null

      const { keyField, selected, isSelectorDisable } = this.props

      const disabled = isSelectorDisable(row)
      const checked = selected.includes(row[keyField])
      const key = `select-${row[keyField]}`

      return (
        <Checkbox
          disabled={disabled}
          value={key}
          checked={checked}
          onChange={this.handleToggleSelection.bind(this, key)}
        />
      )
    }

    headSelector = () => {
      const { data, selected, isSelectorDisable } = this.props

      const checked =
        selected.length === data.filter(row => !isSelectorDisable(row)).length
      const key = 'select-all'

      return (
        <Checkbox
          value={key}
          checked={checked}
          onChange={this.handleToggleAll.bind(this, checked)}
        />
      )
    }

    // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll
    getWrappedInstance() {
      if (!this.wrappedInstance)
        console.warn('RTSelectTable - No wrapped instance')
      if (this.wrappedInstance.getWrappedInstance)
        return this.wrappedInstance.getWrappedInstance()
      else return this.wrappedInstance
    }

    render() {
      const {
        columns: originalCols,
        isSelected,
        toggleSelection,
        toggleAll,
        keyField,
        selectType,
        selectWidth,
        ...rest
      } = this.props
      const select = {
        id: '_selector',
        accessor: () => 'x', // this value is not important
        Header: this.headSelector.bind(this),
        Cell: ci => {
          return this.rowSelector.bind(this)(ci.original)
        },
        width: selectWidth || referOfWidth.noCell,
        filterable: false,
        sortable: false,
        resizable: false
      }

      const columns =
        options !== undefined && options.floatingLeft === true
          ? [...originalCols, select]
          : [select, ...originalCols]
      const extra = {
        columns
      }
      return (
        <Component {...rest} {...extra} ref={r => (this.wrappedInstance = r)} />
      )
    }
  }

  wrapper.displayName = 'RTSelectTable'

  wrapper.propTypes = {
    ...Table.propTypes,

    /** 被选中项数组[keyField] */
    selected: PropTypes.array.isRequired,
    /** 选中一行的回调 */
    onSelect: PropTypes.func.isRequired,
    /** 选中所有行的回调 */
    onSelectAll: PropTypes.func.isRequired,
    /** 每一行的CheckBox的disable设置行数 */
    isSelectorDisable: PropTypes.func,
    /** 自定义被选中项的id */
    keyField: PropTypes.string
  }

  wrapper.defaultProps = {
    keyField: 'value',
    isSelectorDisable: row => false,
    onSelect: key => {
      console.log('No toggleSelection handler provided:', { key })
    },
    onSelectAll: () => {
      console.log('No toggleAll handler provided.')
    }
  }

  return wrapper
}
