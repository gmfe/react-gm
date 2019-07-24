import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Overlay } from './../overlay'
import { store } from './store'

class DropDownNew extends Component {
  constructor(props) {
    super(props)
    this.containerRef = createRef()
    store.setPlacement(this.props.placement)
  }

  componentDidUpdate() {
    store.setPlacement(this.props.placement)
  }

  /**
   * 当显示方式为click时
   * @param disabled 是否禁用
   * @param trigger 显示方式
   * @private
   */
  _onClick(disabled, trigger) {
    if (disabled) {
      return
    }
    if (trigger === 'click') {
      this._createOverlay()
    }
  }

  /**
   * 当显示方式为hover时
   * @param disabled 是否禁用
   * @param trigger 显示方式
   * @private
   */
  _onMouseEnter(disabled, trigger) {
    if (disabled) {
      return
    }
    clearTimeout(this.timer)
    if (trigger === 'hover') {
      this._createOverlay()
    }
  }

  /**
   * 鼠标离开时，设定计时器关闭Submenu
   * @private
   */
  _onMouseOut(disabled) {
    if (disabled) {
      return
    }
    this.timer = setTimeout(() => Overlay.close(), 500)
  }

  /**
   * 清除计时器
   * @param element
   * @private
   */
  _clearTimer(element) {
    element.addEventListener('mouseenter', () => {
      clearTimeout(this.timer)
    })
    element.addEventListener('mouseleave', () => {
      this.timer = setTimeout(() => Overlay.close(), 500)
    })
  }

  /**
   * 创建overlay
   * @private
   */
  _createOverlay() {
    const { overlay } = this.props
    Overlay.create({
      content: overlay
    }).then(element => {
      store.setDropdownNewWidth(this.containerRef.current.offsetWidth)
      const style = this._changePlacement(element)
      Overlay.update(overlay, style)
      this._clearTimer(element)
    })
  }

  /**
   * 改变位置
   * @private
   */
  _changePlacement(element) {
    const { placement } = this.props
    const [vertical, horizontal] = _.kebabCase(placement).split('-')
    const {
      left,
      right,
      top,
      bottom
    } = this.containerRef.current.getBoundingClientRect()
    const { offsetWidth: containerWidth } = this.containerRef.current
    let { offsetWidth: overlayWidth, offsetHeight: overlayHeight } = element
    const { dropdownNewWidth } = store
    overlayWidth =
      dropdownNewWidth > overlayWidth ? dropdownNewWidth : overlayWidth
    const style = {}
    style['top'] = `${
      vertical === 'top' ? top - overlayHeight - 5 : bottom + 5
    }px`
    switch (horizontal) {
      case 'left':
        style['left'] = `${left}px`
        break
      case 'center':
        style['left'] = `${left - overlayWidth / 2 + containerWidth / 2}px`
        break
      case 'right':
        style['left'] = `${right - overlayWidth}px`
        break
    }
    return style
  }

  render() {
    const { children, trigger, disabled } = this.props
    const cloneChildren = React.cloneElement(children, {
      className: disabled ? 'dropdown-new-disabled' : ''
    })
    return (
      <div
        className='dropdown-new'
        ref={this.containerRef}
        onClick={() => this._onClick(disabled, trigger)}
        onMouseEnter={() => this._onMouseEnter(disabled, trigger)}
        onMouseLeave={() => this._onMouseOut(disabled)}
      >
        {cloneChildren}
      </div>
    )
  }
}

DropDownNew.propTypes = {
  overlay: PropTypes.element.isRequired,
  placement: PropTypes.oneOf([
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight'
  ]),
  trigger: PropTypes.oneOf(['click', 'hover']),
  disabled: PropTypes.bool
}
DropDownNew.defaultProps = {
  placement: 'bottomLeft',
  trigger: 'hover',
  disabled: false
}

export default DropDownNew
