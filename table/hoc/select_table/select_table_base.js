import React from 'react'
import { Checkbox, Radio } from '../../../src'
import _ from 'lodash'
import { referOfWidth } from '../../util'
import Table from '../../table/base'
import PropTypes from 'prop-types'

export default (Component, options) => {
  const wrapper = class RTSelectTable extends React.Component {
    handleToggleSelection = result => {
      const { selected, onSelect, selectType } = this.props
      // checkbox多选, ratio单选
      const newSelected =
        selectType === 'checkbox' ? _.xor(selected, [result]) : [result]

      onSelect(newSelected)
    }

    handleToggleAll = isCurrentSelectedAll => {
      const { onSelectAll } = this.props
      onSelectAll(!isCurrentSelectedAll)
    }

    rowSelector = row => {
      // eslint-disable-next-line no-prototype-builtins
      if (!row || !row.hasOwnProperty(this.props.keyField)) return null

      const { keyField, selected, isSelectorDisable, selectType } = this.props

      const key = row[keyField]

      const inputProps = {
        key: `select-${key}`,
        disabled: isSelectorDisable(row),
        checked: selected.includes(row[keyField]),
        onChange: this.handleToggleSelection.bind(this, key)
      }

      return selectType === 'checkbox' ? (
        <Checkbox {...inputProps} />
      ) : (
        <Radio {...inputProps} />
      )
    }

    headSelector = () => {
      const { data, selected, isSelectorDisable, selectType } = this.props

      if (selectType === 'ratio') return null

      const checked =
        selected.length !== 0 &&
        selected.length === data.filter(row => !isSelectorDisable(row)).length
      const key = 'select-all'
      const disabled = data.length === 0

      return (
        <Checkbox
          value={key}
          disabled={disabled}
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
        id: '__selector', // 不要随便更改
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

    selectType: PropTypes.oneOf(['checkbox', 'ratio']),
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
    selectType: 'checkbox',
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
