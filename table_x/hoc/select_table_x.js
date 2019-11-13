import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { COLUMN_WIDTH, TABLEX_SELECT_ID } from '../util'
import { Checkbox, Radio, Flex } from '../../src'
import _ from 'lodash'

function selectTableXHOC(Component) {
  const SelectTableX = ({
    selected,
    onSelect,
    onSelectAll,
    batchActionBar,
    isSelectorDisable,
    selectType,
    keyField,
    fixedSelect,
    columns,
    data,
    ...rest
  }) => {
    const canSelectData = data.filter(row => !isSelectorDisable(row))

    let selectAll = false
    if (selected.length > 0) {
      selectAll = selected.length === canSelectData.length
    }

    const handleSelectAll = () => {
      onSelectAll(!selectAll)
      onSelect(!selectAll ? _.map(canSelectData, v => v[keyField]) : [])
    }

    const newColumns = [
      {
        id: TABLEX_SELECT_ID,
        width: COLUMN_WIDTH.FUN_WIDTH,
        maxWidth: COLUMN_WIDTH.FUN_WIDTH,
        fixed: fixedSelect ? 'left' : null,
        Header: () =>
          selectType === 'checkbox' ? (
            <Checkbox
              className='gm-tablex-select'
              disabled={data.length === 0} // eslint-disable-line
              checked={selectAll}
              onChange={handleSelectAll}
            />
          ) : null,
        Cell: ({ row }) => {
          const value = row.original[keyField]
          const isChecked = selected.includes(value)
          const disabled = isSelectorDisable(row)

          if (selectType === 'checkbox') {
            return (
              <Checkbox
                className='gm-tablex-select'
                disabled={disabled}
                checked={isChecked}
                onChange={() => {
                  onSelect(_.xor(selected, [value]))
                }}
              />
            )
          } else {
            return (
              <Radio
                className='gm-tablex-select'
                disabled={disabled}
                checked={isChecked}
                onClick={() => {
                  onSelect(isChecked ? [] : [value])
                }}
              />
            )
          }
        }
      }
    ].concat(columns)

    return (
      <div className='gm-tablex-select-container'>
        {batchActionBar && (
          <div className='gm-tablex-select-batch-action-bar-container'>
            <Flex
              column
              justifyCenter
              className='gm-tablex-select-batch-action-bar'
            >
              {batchActionBar}
            </Flex>
          </div>
        )}
        <Component {...rest} columns={newColumns} data={data} />
      </div>
    )
  }

  SelectTableX.propTypes = {
    ...TableX.propTypes,

    // select 专有
    selected: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    batchActionBar: PropTypes.element,
    isSelectorDisable: PropTypes.func,
    selectType: PropTypes.oneOf(['checkbox', 'radio']),
    keyField: PropTypes.string,
    fixedSelect: PropTypes.bool
  }

  SelectTableX.defaultProps = {
    selectType: 'checkbox',
    keyField: 'value',
    isSelectorDisable: () => false
  }

  return SelectTableX
}

export default selectTableXHOC
