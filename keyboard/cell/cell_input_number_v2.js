import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import KeyboardCell from '../core/cell'
import { isInputUnBoundary, scrollIntoViewFixedWidth } from '../core/util'
import { InputNumberV2 } from '../../src'

const KeyboardCellInput = props => {
  const { disabled, onKeyDown, onFocus, ...rest } = props

  const cellRef = useRef(null)
  const targetRef = useRef(null)

  const handleFocus = () => {
    targetRef.current.apiDoFocus()
  }

  const handleInputFocus = e => {
    if (onFocus) {
      onFocus(e)
      return
    }

    e.target && e.target.select()
  }

  const handleScroll = fixedWidths => {
    scrollIntoViewFixedWidth(
      ReactDOM.findDOMNode(targetRef.current),
      fixedWidths
    )
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
      cellRef.current.apiDoEnter()
    }
  }

  return (
    <KeyboardCell
      ref={cellRef}
      onFocus={handleFocus}
      onScroll={handleScroll}
      disabled={disabled}
    >
      <InputNumberV2
        {...rest}
        onFocus={handleInputFocus}
        ref={targetRef}
        disabled={disabled}
        onKeyDown={handleKeyDown}
      />
    </KeyboardCell>
  )
}

KeyboardCellInput.propTypes = {
  ...InputNumberV2.propTypes,
  disabled: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func
}

export default KeyboardCellInput
