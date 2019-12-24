import React, { useEffect, useRef, useMemo } from 'react'
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
   * and 如果是 fixed，则需要提供 width，focus 的时候如果在 fixed 遮挡则需要滚动到可视区域，这时候就要用到 width 了
   * */
  const KeyboardTableXHOC = props => {
    const { id, onAddRow, onBeforeDispatch, onScroll, ...tableProps } = props
    const { data, columns } = tableProps

    // 检测下 columns
    // 需要提供能够 accessor or id
    // 用 isKeyboard 也必要会用到了 Cell
    devWarn(() => {
      useEffect(() => {
        _.each(columns, column => {
          if (column.isKeyboard && column.show !== false) {
            if (getColumnKey(column) === null) {
              console.error('column need accessor or id', column)
            } else if (!column.Cell) {
              console.error('column need Cell', column)
            }
          }

          if (column.fixed && !column.width) {
            console.error('column fixed need width', column)
          }
        })
      }, [])
    })

    // 使用 useRef 不至于渲染次数多
    // 默认 null，只有发现 refVirtualized 的时候才会有真正的值
    const refVirtualized = useRef(null)
    const refInitialScrollOffset = useRef(0)

    // Cell 会产生 新组件，所以需要 useMemo
    const { newColumns, columnKeys } = useMemo(() => {
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
            <CellKeyContext.Provider
              value={`${cellProps.row.index}_${columnKey}`}
            >
              {oldCell(cellProps)}
            </CellKeyContext.Provider>
          )
        }
      })

      return { newColumns, columnKeys }
    }, [columns])

    // useMemo 性能优化咯
    // fix hoc 带来的问题
    let leftFixedWidth = 0
    let rightFixedWidth = 0
    useMemo(() => {
      _.each(columns, column => {
        if (column.show !== false) {
          if (column.fixed === 'left' && column.width) {
            leftFixedWidth += column.width
          } else if (column.fixed === 'right' && column.width) {
            rightFixedWidth += column.width
          }
        }
      })
    }, [columns])

    const handleScroll = e => {
      onScroll && onScroll(e)
      // 如果存在，证明用了虚拟列表
      if (refVirtualized.current) {
        refInitialScrollOffset.current = e.target.scrollTop
      }
    }

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
        <Component
          {...tableProps}
          id={id}
          columns={newColumns}
          onScroll={handleScroll}
          refVirtualized={ref => {
            refVirtualized.current = ref
            if (tableProps.refVirtualized) {
              refVirtualized.refVirtualized.current = ref
            }
          }}
          initialScrollOffset={refInitialScrollOffset.current}
        />
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
