import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { createChainedFunction, getScrollTop, getScrollLeft } from 'gm-util'
import LayoutRoot from '../layout_root'
import Popup from '../popup/popup'
import _ from 'lodash'
import classNames from 'classnames'
import EVENT_TYPE from '../../event_type'

function isContains(target, fun) {
  let node = target
  while (node) {
    if (fun(node)) {
      return true
    }
    node = node.parentNode
  }

  return false
}

function getElementPositionWithScroll(element) {
  let { left, top } = element.getBoundingClientRect()
  left += getScrollLeft()
  top += getScrollTop()

  return {
    top,
    left
  }
}

class Popover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }

    this.debounceHandleModalScroll = _.debounce(this.handleModalScroll, 200)
    this.debounceHandleBrowserScroll = _.debounce(this.handleBrowserScroll, 200)
    this.debounceHandleDrawerScroll = _.debounce(this.handleDrawerScroll, 200)
    this.debounceHandleTableScroll = _.debounce(this.handleTableScroll, 200)

    this.timer = null

    // 延迟的，可能不存在。使用的时候判断下
    this.refPopup = null

    this.id = +new Date() + '' + Math.random()

    this._isUnmounted = false
  }

  /** 注意，先调用这个，再处理业务的 onXXX。比如 date_picker */
  apiDoSetActive = active => {
    this.setActive(active)
  }

  componentDidMount() {
    if (this.props.type === 'click' || this.props.type === 'focus') {
      window.document.body.addEventListener('click', this.handleBodyClick)
    } else if (this.props.type === 'realFocus') {
      // 原生 blur 不能冒泡，focusout 才能冒泡
      window.document.body.addEventListener('focusout', this.handleBodyFocusOut)
    }

    // 用 debounce
    window.addEventListener(
      EVENT_TYPE.MODAL_SCROLL,
      this.debounceHandleModalScroll
    )
    window.addEventListener(
      EVENT_TYPE.BROWSER_SCROLL,
      this.debounceHandleBrowserScroll
    )
    window.addEventListener(
      EVENT_TYPE.DRAWER_SCROLL,
      this.debounceHandleDrawerScroll
    )
    window.addEventListener(
      EVENT_TYPE.TABLE_SCROLL,
      this.debounceHandleTableScroll
    )
  }

  componentWillUnmount() {
    this._isUnmounted = true

    if (this.props.type === 'click' || this.props.type === 'focus') {
      window.document.body.removeEventListener('click', this.handleBodyClick)
    } else if (this.props.type === 'realFocus') {
      window.document.body.removeEventListener(
        'focusout',
        this.handleBodyFocusOut
      )
    }

    LayoutRoot._removeComponentPopup(this.id)

    window.removeEventListener(
      EVENT_TYPE.MODAL_SCROLL,
      this.debounceHandleModalScroll
    )
    window.removeEventListener(
      EVENT_TYPE.BROWSER_SCROLL,
      this.debounceHandleBrowserScroll
    )
    window.removeEventListener(
      EVENT_TYPE.DRAWER_SCROLL,
      this.debounceHandleDrawerScroll
    )
    window.removeEventListener(
      EVENT_TYPE.TABLE_SCROLL,
      this.debounceHandleTableScroll
    )
  }

  handleDrawerScroll = () => {
    if (this.state.active) {
      this.setActive(this.state.active)
    }
  }

  handleModalScroll = () => {
    if (this.state.active) {
      this.setActive(this.state.active)
    }
  }

  handleBrowserScroll = () => {
    if (this.state.active) {
      this.setActive(this.state.active)
    }
  }

  handleTableScroll = () => {
    if (this.state.active) {
      this.setActive(this.state.active)
    }
  }

  componentDidUpdate() {
    this.doRenderPopup(this.state.active)
  }

  doRenderPopup(active) {
    const {
      style,
      className,
      popup,
      type,
      top,
      right,
      center,
      offset,
      showArrow,
      arrowLeft,
      animName,
      predictingHeight,
      pureContainer,
      isInPopup
    } = this.props

    const disabled = this.getDisabled()

    if (active) {
      LayoutRoot._setComponentPopup(
        this.id,
        <Popup
          key={'popup_' + this.id}
          ref={ref => (this.refPopup = ref)}
          onMouseEnter={
            !disabled && type === 'hover' ? this.handleMouseEnter : _.noop
          }
          onMouseLeave={
            !disabled && type === 'hover' ? this.handleMouseLeave : _.noop
          }
          rect={this.rect}
          top={top}
          right={right}
          center={center}
          offset={offset}
          showArrow={showArrow}
          arrowLeft={arrowLeft}
          animName={animName}
          predictingHeight={predictingHeight}
          pureContainer={pureContainer}
          className={classNames(
            {
              'gm-popover-is-in-popup': isInPopup
            },
            className
          )}
          style={style}
        >
          {_.isFunction(popup) ? popup() : popup}
        </Popup>
      )
    } else {
      LayoutRoot._removeComponentPopup(this.id)
    }
  }

  setActive = active => {
    if (this._isUnmounted) {
      return
    }

    if (active) {
      const dom = findDOMNode(this)
      const pos = getElementPositionWithScroll(dom)
      const rect = {
        left: pos.left,
        top: pos.top,
        height: dom.offsetHeight,
        width: dom.offsetWidth
      }
      this.rect = rect
    }

    this.setState({
      active
    })

    // 不需要，重复了，didUpdate 会做了
    // this.doRenderPopup(active)
  }

  doBodyClickAndFocusOut = target => {
    const { active } = this.state

    // 没激活就没有必要判断了
    if (!active) {
      return
    }

    // type 为 focus 存在 由于时机问题，可能 refPopup 还没出来，此时啥也不做
    if (!this.refPopup) {
      return
    }

    const $this = findDOMNode(this)
    const $popup = findDOMNode(this.refPopup)

    if (
      isContains(target, node => {
        return (
          node === $this ||
          node === $popup ||
          (node.classList && node.classList.contains('gm-popover-is-in-popup'))
        )
      })
    ) {
      return
    }

    this.setActive(false)
  }

  handleBodyClick = event => {
    this.doBodyClickAndFocusOut(event.target)
  }

  handleBodyFocusOut = event => {
    this.doBodyClickAndFocusOut(event.relatedTarget)
  }

  handleClick = () => {
    // focus 也会进来
    const { type } = this.props

    if (type === 'click') {
      this.setActive(!this.state.active)
    } else {
      this.setActive(true)
    }
  }

  handleFocus = () => {
    this.setActive(true)
  }

  handleMouseEnter = () => {
    clearTimeout(this.timer)
    this.setActive(true)
  }

  handleMouseLeave = () => {
    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.setActive(false)
    }, 500)
  }

  getDisabled = () => {
    const { disabled, children } = this.props
    return disabled || children.props.disabled
  }

  render() {
    const { children, type } = this.props

    const { active } = this.state

    const child = React.Children.only(children)

    const p = {}
    if (!this.getDisabled()) {
      if (type === 'click' || type === 'focus') {
        p.onClick = createChainedFunction(child.props.onClick, this.handleClick)
      } else if (type === 'realFocus') {
        p.onFocus = createChainedFunction(child.props.onFocus, this.handleFocus)
      } else if (type === 'hover') {
        p.onMouseEnter = createChainedFunction(
          child.props.onMouseEnter,
          this.handleMouseEnter
        )
        p.onMouseLeave = createChainedFunction(
          child.props.onMouseLeave,
          this.handleMouseLeave
        )
      }
    }

    // 通过类名告知 target 做好 active 的应变
    return React.cloneElement(child, {
      ...p,
      className: classNames(child.props.className, {
        'gm-popover-active': active
      })
    })
  }
}

// 注意 Popover 的 popup 不会随 render 更新
Popover.propTypes = {
  // 命名问题，focus 不是真正的 focus事件，和 click 类似，只不过 focus 不会因为二次点击而关掉。
  // 想要 focus 事件的效果，请用 realFocus，失焦会 hide
  type: PropTypes.oneOf(['focus', 'click', 'hover', 'realFocus']),
  popup: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool, // 也可以用children props disable

  className: PropTypes.string,
  style: PropTypes.object,

  right: PropTypes.bool,
  top: PropTypes.bool,
  center: PropTypes.bool,
  offset: PropTypes.number, // 偏移量

  showArrow: PropTypes.bool, // 是否显示三角标
  arrowLeft: PropTypes.string,
  pureContainer: PropTypes.bool,

  isInPopup: PropTypes.bool,

  animName: PropTypes.oneOf([
    false,
    true,
    'fade-in-right',
    'fade-in-left',
    'fade-in-top',
    'fade-in-bottom',
    'zoom-in',
    'zoom-in-top',
    'zoom-in-bottom'
  ]),

  /** 预判高度。因为 popup 的宽高会是可变的，所以没法判断视窗内是否能放得下，于是有此。 */
  predictingHeight: PropTypes.number
}

Popover.defaultProps = {
  type: 'focus',
  showArrow: false,
  animName: true,
  isInPopup: false
}

export default Popover
