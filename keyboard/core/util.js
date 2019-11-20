import React from 'react'

const WrapContext = React.createContext(null)
const CellKeyContext = React.createContext(null)

const KEYBOARD_ONFOCUS = 'KEYBOARD_ONFOCUS_'
const KEYBOARD_DIRECTION = 'KEYBOARD_DIRECTION_'
const KEYBOARD_ENTER = 'KEYBOARD_ENTER_'
const KEYBOARD_TAB = 'KEYBOARD_TAB_'

const KeyboardActionsName = {
  ENTER: 'enter',
  TAB: 'tab',
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
}

// 请在 keydown 事件内用此方法
// type text 才有 selectionStart selectionEnd，why?
const isInputUnBoundary = event => {
  const {
    key,
    target: { tagName, type, selectionStart, selectionEnd, value }
  } = event

  if (
    tagName === 'INPUT' &&
    type === 'text' &&
    (key === 'ArrowLeft' || key === 'ArrowRight')
  ) {
    // 有选择文本呢
    if (selectionStart !== selectionEnd) {
      return true
    }
    if (selectionStart !== selectionEnd) {
      return
    } else if (event.key === 'ArrowLeft') {
      if (selectionStart !== 0) {
        return true
      }
    } else if (event.key === 'ArrowRight') {
      if (selectionEnd !== value.length) {
        return true
      }
    }
  }

  return false
}

const getTd = dom => {
  let parentDom = dom.parentNode

  while (
    !(
      parentDom.classList.contains('rt-td') ||
      parentDom.classList.contains('gm-table-x-td')
    )
  ) {
    parentDom = parentDom.parentNode
    if (parentDom === document) {
      return null
    }
  }

  return parentDom
}

const getTable = dom => {
  let parentDom = dom.parentNode

  while (
    !(
      parentDom.classList.contains('rt-table') ||
      parentDom.classList.contains('gm-table-x')
    )
  ) {
    parentDom = parentDom.parentNode
    if (parentDom === document) {
      return null
    }
  }

  return parentDom
}

// 此 dom 一定是 td 内 的元素
const scrollIntoViewFixedWidth = (dom, fixedWidth) => {
  const td = getTd(dom)
  if (!td) {
    return
  }

  const table = getTable(dom)
  if (!table) {
    return
  }

  const { leftFixedWidth, rightFixedWidth } = fixedWidth
  const { scrollLeft } = table
  const { offsetLeft, offsetWidth } = td

  // 要 if else
  if (offsetLeft - leftFixedWidth < scrollLeft) {
    table.scrollLeft = offsetLeft - leftFixedWidth
  } else if (
    offsetLeft + offsetWidth - (table.offsetWidth - rightFixedWidth) >
    scrollLeft
  ) {
    table.scrollLeft =
      offsetLeft + offsetWidth - (table.offsetWidth - rightFixedWidth)
  }
}

const doFocus = (id, rowKey, columnKey) => {
  window.dispatchEvent(
    new window.CustomEvent(KEYBOARD_ONFOCUS + id, {
      detail: {
        cellKey: `${rowKey}_${columnKey}`
      }
    })
  )
}

export {
  WrapContext,
  CellKeyContext,
  KEYBOARD_ONFOCUS,
  KEYBOARD_DIRECTION,
  KEYBOARD_ENTER,
  KEYBOARD_TAB,
  KeyboardActionsName,
  isInputUnBoundary,
  scrollIntoViewFixedWidth,
  doFocus
}
