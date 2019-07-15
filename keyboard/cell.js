import React from 'react'
import PropTypes from 'prop-types'
import {
  IdContext,
  CellKeyContext,
  KEYBOARD_ONFOCUS,
  KEYBOARD_DIRECTION,
  KEYBOARD_ENTER,
  KEYBOARD_TAB
} from './util'

/**
 * Cell 和 Wrap 配合使用，使单元格具有响应键盘能力
 *
 * 使用：
 * - 实现 onFocus
 * - 监听 keydown，并根据自身需要处理 keydown 事件，每个组件都会不太一样
 * - 把动作 方向、Tab、Enter 通过 Cell 提供的方法 refCell.current.apiDoXXX 反馈给 Cell。具体方法见代码
 * */
class KeyboardCell extends React.Component {
  dispatch = (eventName, detail) => {
    const { keyboardId, cellKey } = this.props

    window.dispatchEvent(
      new window.CustomEvent(eventName + keyboardId, {
        detail: {
          ...detail,
          cellKey
        }
      })
    )
  }

  apiDoDirection = direction => {
    this.dispatch(KEYBOARD_DIRECTION, { direction })
  }

  apiDoDirectionByEventKey = eventKey => {
    this.apiDoDirection(eventKey.slice(5).toLowerCase())
  }

  apiDoTab = () => {
    this.dispatch(KEYBOARD_TAB)
  }

  apiDoEnter = () => {
    this.dispatch(KEYBOARD_ENTER)
  }

  handleFocus = event => {
    const { onFocus, cellKey } = this.props

    if (event.detail.cellKey !== cellKey) {
      return
    }

    onFocus()
  }

  componentDidMount() {
    const { keyboardId } = this.props
    window.addEventListener(KEYBOARD_ONFOCUS + keyboardId, this.handleFocus)
  }

  componentWillUnmount() {
    const { keyboardId } = this.props
    window.removeEventListener(KEYBOARD_ONFOCUS + keyboardId, this.handleFocus)
  }

  render() {
    const { children, cellKey } = this.props

    return React.cloneElement(children, {
      'data-cell-key': cellKey
    })
  }
}

KeyboardCell.propTypes = {
  keyboardId: PropTypes.string.isRequired,
  /** Cell 的身份表示，让 Wrap 方便找到 */
  cellKey: PropTypes.string.isRequired,
  /** Wrap 要 focus 到单元格的时候会触发 onFocus，请实现此功能 */
  onFocus: PropTypes.func.isRequired
}

const withIdAndCellKey = Component => {
  const WithContext = props => {
    const { forwardedRef, ...rest } = props
    return (
      <IdContext.Consumer>
        {id => (
          <CellKeyContext.Consumer>
            {cellKey => (
              <Component
                ref={forwardedRef}
                {...rest}
                keyboardId={id}
                cellKey={cellKey}
              />
            )}
          </CellKeyContext.Consumer>
        )}
      </IdContext.Consumer>
    )
  }

  WithContext.propTypes = {
    forwardedRef: PropTypes.any,
    onFocus: PropTypes.func.isRequired
  }

  // 转发下 ref
  return React.forwardRef((props, ref) => (
    <WithContext {...props} forwardedRef={ref} />
  ))
}

export default withIdAndCellKey(KeyboardCell)
