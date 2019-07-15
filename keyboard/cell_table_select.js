import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import KeyboardCell from './cell'
import { TableSelect } from '../src'
import { isInputUnBoundary } from './util'

const KeyboardCellMoreSelect = props => {
  const { onKeyDown, ...rest } = props

  const cellRef = useRef(null)
  const targetRef = useRef(null)

  const handleFocus = () => {
    targetRef.current.apiDoFocus()
  }

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event)
    }

    if (isInputUnBoundary(event)) {
      return
    }

    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowLeft'
    ) {
      // 需要阻止。
      // 如果下一个是input，切过去的时候光标会右移一位是 keydown
      event.preventDefault()
      cellRef.current.apiDoDirectionByEventKey(event.key)
    } else if (event.key === 'Tab') {
      // 要阻止默认的
      event.preventDefault()
      cellRef.current.apiDoTab()
    } else if (event.key === 'Enter') {
      // 要阻止默认的
      event.preventDefault()
      // enter 要选择
      targetRef.current.apiDoSelectWillActive()
      cellRef.current.apiDoEnter()
    }
  }

  return (
    <KeyboardCell ref={cellRef} onFocus={handleFocus}>
      <TableSelect
        {...rest}
        ref={targetRef}
        popoverType='realFocus'
        onKeyDown={handleKeyDown}
      />
    </KeyboardCell>
  )
}

KeyboardCellMoreSelect.propTypes = {
  ...TableSelect.propTypes,
  onKeyDown: PropTypes.func
}

export default KeyboardCellMoreSelect
