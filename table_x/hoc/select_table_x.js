import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { TABLEX_SELECT_ID } from '../util'
import { Checkbox, Radio } from '../../src'
import _ from 'lodash'

function selectTableXHOC(Component) {
  const SelectTableX = ({
    selected,
    onSelect,
    selectAll,
    onSelectAll,
    selectType,
    keyField,
    columns,
    data,
    ...rest
  }) => {
    const newColumns = [
      {
        id: TABLEX_SELECT_ID,
        Header: () =>
          selectType === 'checkbox' ? (
            <Checkbox
              checked={selectAll}
              onChange={() => {
                onSelectAll(!selectAll)
                onSelect(!selectAll ? _.map(data, v => v[keyField]) : [])
              }}
            />
          ) : null,
        Cell: ({ row }) => {
          const value = row.original[keyField]
          const isChecked = selected.includes(value)

          if (selectType === 'checkbox') {
            return (
              <Checkbox
                checked={isChecked}
                onChange={() => {
                  onSelect(_.xor(selected, [value]))
                }}
              />
            )
          } else {
            return (
              <Radio
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

    return <Component {...rest} columns={newColumns} data={data} />
  }

  SelectTableX.propTypes = {
    ...TableX.propTypes,

    // select 专有

    selected: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectAll: PropTypes.bool.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    selectAllTip: PropTypes.element,
    selectType: PropTypes.oneOf(['checkbox', 'radio']),
    keyField: PropTypes.string
  }

  SelectTableX.defaultProps = {
    selectType: 'checkbox',
    keyField: 'value'
  }

  return SelectTableX
}

export default selectTableXHOC
