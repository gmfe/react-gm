import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getColumnKey } from '../table/util'
import Table from '../table/table'
import _ from 'lodash'
import Wrap from './wrap'
import { CellKeyContext } from './util'
import { devWarn } from '../src/util'

// TODO columns Context

function keyboardTableHOC(Component) {
  /**
   * 要求 props 是 id 和 onAddRow。
   * and column 需要标志 isKeyboard，同时需要 accessor or id
   * */
  const KeyboardTableHOC = props => {
    const { id, onAddRow, ...tableProps } = props
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
    const newColumns = _.map(columns, column => {
      if (!(column.isKeyboard && column.show !== false)) {
        return column
      }

      const columnKey = getColumnKey(column)
      columnKeys.push(columnKey)

      const oldCell = column.Cell

      // Cell 是个方法
      // 用 <Cell {...cellProps}/>  会导致重新渲染组件，不知道为什么
      return {
        ...column,
        Cell: cellProps => (
          <CellKeyContext.Provider value={`${cellProps.index}_${columnKey}`}>
            {oldCell(cellProps)}
          </CellKeyContext.Provider>
        )
      }
    })

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
      >
        <Component {...tableProps} columns={newColumns} />
      </Wrap>
    )
  }

  KeyboardTableHOC.propTypes = {
    ...Table.propTypes,
    /** 通过 id 来确定本单元格内通信，避免多表格时候混了。请确保 id 唯一 */
    id: PropTypes.string.isRequired,
    /** 增加一行数据 */
    onAddRow: PropTypes.func.isRequired
  }

  return KeyboardTableHOC
}

export default keyboardTableHOC
