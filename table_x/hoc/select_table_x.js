import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { TABLE_X, TABLE_X_SELECT_ID } from '../util'
import { Checkbox, Radio, Flex } from '../../src'
import _ from 'lodash'
import { devWarn } from '../../src/util'

function selectTableXHOC(Component) {
  const SelectTableX = ({
    selected,
    onSelect,
    batchActionBar,
    isSelectorDisable,
    selectType,
    keyField,
    fixedSelect,
    columns,
    onSelectAll,
    data,
    ...rest
  }) => {
    devWarn(() => {
      if (onSelectAll) {
        throw Error('onSelectAll已经废弃，使用onSelect即可！')
      }
    })

    const canSelectData = data.filter(row => !isSelectorDisable(row))

    let selectAll = false
    if (selected.length > 0) {
      selectAll = selected.length === canSelectData.length
    }

    const handleSelectAll = React.useCallback(() => {
      onSelect(!selectAll ? _.map(canSelectData, v => v[keyField]) : [])
    }, [canSelectData, selectAll])

    const newColumns = React.useMemo(
      () =>
        [
          {
            id: TABLE_X_SELECT_ID,
            width: TABLE_X.WIDTH_FUN,
            maxWidth: TABLE_X.WIDTH_FUN,
            fixed: fixedSelect ? 'left' : null,
            Header: () =>
              selectType === 'checkbox' ? (
                <Checkbox
                  className='gm-table-x-select'
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
                    className='gm-table-x-select'
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
                    className='gm-table-x-select'
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
        ].concat(columns),
      [
        columns,
        selectType,
        selected,
        fixedSelect,
        selectAll,
        keyField,
        isSelectorDisable,
        handleSelectAll,
        onSelect
      ]
    )

    return (
      <div className='gm-table-x-select-container'>
        {batchActionBar && (
          <div className='gm-table-x-select-batch-action-bar-container'>
            <Flex
              column
              justifyCenter
              className='gm-table-x-select-batch-action-bar'
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
