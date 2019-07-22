import React from 'react'
import PropTypes from 'prop-types'
import {
  WrapContext,
  CellKeyContext,
  KEYBOARD_ONFOCUS,
  KEYBOARD_DIRECTION,
  KEYBOARD_ENTER,
  KEYBOARD_TAB
} from './util'

// {id: {cellName, detail}}
// 存起来，方便cell不可用的时候把命令给下一个响应者
const lastDispatch = {}

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
    const { wrapData, cellKey } = this.props

    lastDispatch[wrapData.id] = {
      eventName,
      detail
    }

    window.dispatchEvent(
      new window.CustomEvent(eventName + wrapData.id, {
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
    const { wrapData, onFocus, onScroll, cellKey, disabled } = this.props

    if (event.detail.cellKey !== cellKey) {
      return
    }

    if (!disabled) {
      onFocus()
      onScroll(wrapData.fixedWidths)
    }
    // 不可响应，则抛给下一个响应者
    else {
      this.dispatch(
        lastDispatch[wrapData.id].eventName,
        lastDispatch[wrapData.id].detail
      )
    }
  }

  componentDidMount() {
    const { wrapData } = this.props
    window.addEventListener(KEYBOARD_ONFOCUS + wrapData.id, this.handleFocus)
  }

  componentWillUnmount() {
    const { wrapData } = this.props
    window.removeEventListener(KEYBOARD_ONFOCUS + wrapData.id, this.handleFocus)
  }

  render() {
    const { children, cellKey } = this.props

    return React.cloneElement(children, {
      'data-cell-key': cellKey
    })
  }
}

KeyboardCell.propTypes = {
  wrapData: PropTypes.object.isRequired,
  /** Cell 的身份表示，让 Wrap 方便找到 */
  cellKey: PropTypes.string.isRequired,
  /** Wrap 要 focus 到单元格的时候会触发 onFocus，请实现此功能。 */
  onFocus: PropTypes.func.isRequired,
  /** 表格多的时候需要滚到视窗, 提供 fixedWidths 信息给调用方，即 { leftFixedWidth, rightFixedWidth } */
  onScroll: PropTypes.func.isRequired,
  /** 是否有响应能力 */
  disabled: PropTypes.bool
}

const withIdAndCellKey = Component => {
  const WithContext = props => {
    const { forwardedRef, ...rest } = props
    return (
      <WrapContext.Consumer>
        {wrap => (
          <CellKeyContext.Consumer>
            {cellKey => (
              <Component
                ref={forwardedRef}
                {...rest}
                wrapData={wrap}
                cellKey={cellKey}
              />
            )}
          </CellKeyContext.Consumer>
        )}
      </WrapContext.Consumer>
    )
  }

  WithContext.propTypes = {
    forwardedRef: PropTypes.any
  }

  // 转发下 ref
  return React.forwardRef((props, ref) => (
    <WithContext {...props} forwardedRef={ref} />
  ))
}

export default withIdAndCellKey(KeyboardCell)
