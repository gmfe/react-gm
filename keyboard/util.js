import React from 'react'

const IdContext = React.createContext(null)
const CellKeyContext = React.createContext(null)

const KEYBOARD_ONFOCUS = 'KEYBOARD_ONFOCUS_'
const KEYBOARD_DIRECTION = 'KEYBOARD_DIRECTION_'
const KEYBOARD_ENTER = 'KEYBOARD_ENTER_'
const KEYBOARD_TAB = 'KEYBOARD_TAB_'

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

export {
  IdContext,
  CellKeyContext,
  KEYBOARD_ONFOCUS,
  KEYBOARD_DIRECTION,
  KEYBOARD_ENTER,
  KEYBOARD_TAB,
  isInputUnBoundary
}
