import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getColumnKey } from '../../table_x/util'
import TableX from '../../table_x/base'
import _ from 'lodash'
import Wrap from '../core/wrap'
import { CellKeyContext } from '../core/util'
import { devWarn } from '../../src/util'

function keyboardTableXHOC(Component) {
  /**
   * 要求 props 是 id 和 onAddRow。
   * and column 需要标志 isKeyboard，同时需要 accessor or id
   * */
  const KeyboardTableXHOC = props => {
    const { id, onAddRow, onBeforeDispatch, ...tableProps } = props
    const { data, columns } = tableProps

    // 不显示的也不能生产 key
    const keyboardColumns = _.filter(
      columns,
      column => column.isKeyboard && column.show !== false
    )

    // 检测下 columns
    // 需要提供能够 accessor or id
    // 用 isKeyboard 也必要会用到了 Cell
    devWarn(() => {
      useEffect(() => {
        _.each(keyboardColumns, column => {
          if (getColumnKey(column) === null) {
            console.error('column need accessor or id', column)
          } else if (!column.Cell) {
            console.error('column need Cell', column)
          }
        })
      }, [])
    })

    const columnKeys = []
    const newColumns = React.useMemo(
      () =>
        _.map(columns, column => {
          if (!(column.isKeyboard && column.show !== false)) {
            return column
          }

          const columnKey = getColumnKey(column)
          columnKeys.push(columnKey)

          const ColumnCell = column.Cell

          const Cell = cellProps => {
            return (
              <CellKeyContext.Provider
                value={`${cellProps.row.index}_${columnKey}`}
              >
                {ColumnCell(cellProps)}
              </CellKeyContext.Provider>
            )
          }

          return {
            ...column,
            Cell
          }
        }),
      []
    )

    // fix hoc 带来的问题
    let leftFixedWidth = 0
    let rightFixedWidth = 0
    _.each(columns, column => {
      if (column.show !== false) {
        if (column.fixed === 'left' && column.width) {
          leftFixedWidth += column.width
        } else if (column.fixed === 'right' && column.width) {
          rightFixedWidth += column.width
        }
      }
    })

    return (
      <Wrap
        id={id}
        columnKeys={columnKeys}
        fixedWidths={{
          leftFixedWidth,
          rightFixedWidth
        }}
        dataLength={data.length}
        onAddRow={onAddRow}
        onBeforeDispatch={onBeforeDispatch}
      >
        <Component {...tableProps} columns={newColumns} />
      </Wrap>
    )
  }

  KeyboardTableXHOC.propTypes = {
    ...TableX.propTypes,
    /** 通过 id 来确定本单元格内通信，避免多表格时候混了。请确保 id 唯一 */
    id: PropTypes.string.isRequired,
    /** 增加一行数据 */
    onAddRow: PropTypes.func.isRequired,
    onBeforeDispatch: PropTypes.func
  }

  return KeyboardTableXHOC
}

export default keyboardTableXHOC
