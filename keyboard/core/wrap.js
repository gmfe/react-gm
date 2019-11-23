import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  WrapContext,
  KEYBOARD_DIRECTION,
  KEYBOARD_ENTER,
  KEYBOARD_TAB,
  KeyboardActionsName,
  doFocus
} from './util'
import _ from 'lodash'

const getKey = cellKey => {
  const index = cellKey.indexOf('_')
  const rowKey = parseInt(cellKey.slice(0, index), 10)
  const columnKey = cellKey.slice(index + 1)
  return { columnKey, rowKey }
}

/**
 * 包裹 Table，使 Table 具有键盘响应能力
 *
 * Wrap 负责调度，接收来自 Cell 的操作反馈，然后做出后续动作
 * Cell 监听键盘事件，把 方向、Enter、Tab 反馈给 Wrap
 * Wrap 做出动作，其中包括 focus 到 Cell
 * */
const Wrap = props => {
  const {
    id,
    children,
    onAddRow,
    columnKeys,
    dataLength,
    fixedWidths,
    onBeforeDispatch
  } = props

  const timer = useRef(null)

  // 处理 focus
  const doFocusWithColumnRowKey = (actionName, rowKey, columnKey, cellKey) => {
    const result = onBeforeDispatch({
      actionName,
      to: { rowKey, columnKey },
      from: getKey(cellKey)
    })

    // 返回 false 阻止默认行为
    if (result === false) {
      return
    }

    doFocus(id, rowKey, columnKey)
  }

  // 处理方向
  const toDirectionRight = (rowKey, columnKey, cellKey) => {
    const columnIndex = columnKeys.indexOf(columnKey)
    // 如果不是最后一列
    if (columnIndex < columnKeys.length - 1) {
      doFocusWithColumnRowKey(
        KeyboardActionsName.RIGHT,
        rowKey,
        columnKeys[columnIndex + 1],
        cellKey
      )
    }
  }

  const doDirectionDown = (rowKey, columnKey, cellKey) => {
    clearTimeout(timer.current)

    // 往下一个
    if (rowKey < dataLength - 1) {
      doFocusWithColumnRowKey(
        KeyboardActionsName.DOWN,
        rowKey + 1,
        columnKey,
        cellKey
      )
    }
    // 最后一行
    else if (rowKey === dataLength - 1) {
      onAddRow()
      timer.current = setTimeout(() => {
        // 去到第一列
        doFocusWithColumnRowKey(
          KeyboardActionsName.DOWN,
          rowKey + 1,
          columnKeys[0],
          cellKey
        )
      }, 10)
    }
  }
  const doDirectionLeft = (rowKey, columnKey, cellKey) => {
    const columnIndex = columnKeys.indexOf(columnKey)
    // 如果不是第一列
    if (columnIndex > 0) {
      doFocusWithColumnRowKey(
        KeyboardActionsName.LEFT,
        rowKey,
        columnKeys[columnIndex - 1],
        cellKey
      )
    }
  }
  const doDirectionUp = (rowKey, columnKey, cellKey) => {
    // 往上一个
    if (rowKey > 0) {
      doFocusWithColumnRowKey(
        KeyboardActionsName.UP,
        rowKey - 1,
        columnKey,
        cellKey
      )
    }
    // 循环到最后一个
    else if (rowKey === 0) {
      doFocusWithColumnRowKey(
        KeyboardActionsName.UP,
        dataLength - 1,
        columnKey,
        cellKey
      )
    }
  }

  // 处理方向事件, 依赖 dataLength 的变动
  useEffect(() => {
    const handleDirection = event => {
      const { cellKey, direction } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)

      if (direction === 'right') {
        toDirectionRight(rowKey, columnKey, cellKey)
      } else if (direction === 'down') {
        doDirectionDown(rowKey, columnKey, cellKey)
      } else if (direction === 'left') {
        doDirectionLeft(rowKey, columnKey, cellKey)
      } else if (direction === 'up') {
        doDirectionUp(rowKey, columnKey, cellKey)
      }
    }

    window.addEventListener(KEYBOARD_DIRECTION + id, handleDirection)

    return () => {
      window.removeEventListener(KEYBOARD_DIRECTION + id, handleDirection)
    }
  }, [dataLength, columnKeys.length])

  // 处理 Enter 依赖 dataLength 的变动
  useEffect(() => {
    const handleEnter = event => {
      clearTimeout(timer.current)

      const { cellKey } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)
      const columnIndex = columnKeys.indexOf(columnKey)

      // 如果不是最后一列
      if (columnIndex < columnKeys.length - 1) {
        doFocusWithColumnRowKey(
          KeyboardActionsName.ENTER,
          rowKey,
          columnKeys[columnIndex + 1],
          cellKey
        )
      }
      // 最后一列了
      else if (columnIndex === columnKeys.length - 1) {
        // 如果不是最后一行
        if (rowKey < dataLength - 1) {
          doFocusWithColumnRowKey(
            KeyboardActionsName.ENTER,
            rowKey + 1,
            columnKeys[0],
            cellKey
          )
        }
        // 最后一行了
        else if (rowKey === dataLength - 1) {
          onAddRow()
          timer.current = setTimeout(() => {
            // 去到第一列
            doFocusWithColumnRowKey(
              KeyboardActionsName.ENTER,
              rowKey + 1,
              columnKeys[0],
              cellKey
            )
          }, 10)
        }
      }
    }

    window.addEventListener(KEYBOARD_ENTER + id, handleEnter)

    return () => {
      window.removeEventListener(KEYBOARD_ENTER + id, handleEnter)
    }
  }, [dataLength, columnKeys.length])

  useEffect(() => {
    const handleTab = event => {
      const { cellKey } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)
      const columnIndex = columnKeys.indexOf(columnKey)

      // 如果不是最后一列
      if (columnIndex < columnKeys.length - 1) {
        doFocusWithColumnRowKey(
          KeyboardActionsName.TAB,
          rowKey,
          columnKeys[columnIndex + 1],
          cellKey
        )
      }
      // 最后一列了
      else if (columnIndex === columnKeys.length - 1) {
        // 如果不是最后一行
        if (rowKey < dataLength - 1) {
          doFocusWithColumnRowKey(
            KeyboardActionsName.TAB,
            rowKey + 1,
            columnKeys[0],
            cellKey
          )
        }
        // 最后一行了
        else if (rowKey === dataLength - 1) {
          doFocusWithColumnRowKey(
            KeyboardActionsName.TAB,
            0,
            columnKeys[0],
            cellKey
          )
        }
      }
    }

    window.addEventListener(KEYBOARD_TAB + id, handleTab)

    return () => {
      window.removeEventListener(KEYBOARD_TAB + id, handleTab)
    }
  }, [dataLength, columnKeys.length])

  return (
    <WrapContext.Provider
      value={JSON.stringify({
        id,
        fixedWidths
      })}
    >
      {children}
    </WrapContext.Provider>
  )
}

Wrap.propTypes = {
  /** 通过 id 来确定本单元格内通信，避免多表格时候混了。请确保 id 唯一 */
  id: PropTypes.string.isRequired,
  /** 增加一行数据 */
  onAddRow: PropTypes.func.isRequired,
  /** (actionName, to, from) */
  onBeforeDispatch: PropTypes.func,

  /** Wrap 需要知道字段集合，以便能找到相应的单元格。请确保表格的顺序一样 */
  columnKeys: PropTypes.array.isRequired,
  /** Wrap 需要知道有多少行，以便能找到相应的单元格，同时必要时会触发 onAddRow 告知调用方需要增加一行数据 */
  dataLength: PropTypes.number.isRequired,
  fixedWidths: PropTypes.object.isRequired
}

Wrap.defaultProps = {
  onBeforeDispatch: _.noop
}

export default Wrap
