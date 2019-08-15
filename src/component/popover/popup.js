import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// 只判断 下
function isElementInViewport(dom, predictingHeight) {
  const rect = dom.getBoundingClientRect()

  const height = window.innerHeight || document.documentElement.clientHeight

  if (predictingHeight) {
    return rect.top + predictingHeight <= height
  }

  return rect.bottom <= height
}

class Popup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isInit: false,
      width: 0,
      height: 0,
      top: props.top
    }
  }

  componentDidMount() {
    const dom = findDOMNode(this.refPopup)

    let top = this.state.top

    // 如果是 bottom，且不够位置的时候，就强制 top
    if (!top && !isElementInViewport(dom, this.props.predictingHeight)) {
      top = true
    }

    this.setState({
      width: dom.offsetWidth,
      height: dom.offsetHeight,
      top,
      isInit: true
    })
  }

  renderTriggerArrow() {
    const { top, right, center, arrowLeft } = this.props

    const style = {}
    if (arrowLeft) {
      style.left = arrowLeft
    }

    return (
      <div
        className={classNames('gm-popover-popup-arrow', {
          'gm-popover-popup-arrow-top': top,
          'gm-popover-popup-arrow-bottom': !top,
          'gm-popover-popup-arrow-right': !center && right,
          'gm-popover-popup-arrow-left': !center && !right,
          'gm-popover-popup-arrow-center': center
        })}
        style={style}
      />
    )
  }

  render() {
    const {
      top,
      right,
      center,
      offset,
      showArrow,
      arrowLeft,
      children,
      rect,
      animName,
      predictingHeight,
      className,
      style,
      ...rest
    } = this.props

    const { isInit, width, height } = this.state

    const sStyle = {
      top: rect.top + rect.height + (showArrow ? 5 : 1),
      left: rect.left + offset
    }

    if (center) {
      sStyle.left = rect.left + rect.width / 2 - width / 2 + offset
    } else if (right) {
      sStyle.left = rect.left + rect.width - width + offset
    }

    if (this.state.top) {
      sStyle.top = rect.top - height - 5
    }

    let animate = animName

    if (animName === true) {
      if (this.state.top) {
        animate = 'zoom-in-top'
      } else {
        animate = 'zoom-in-bottom'
      }
    }

    return (
      <div
        ref={ref => (this.refPopup = ref)}
        tabIndex={0}
        {...rest}
        style={Object.assign(sStyle, style)}
        className={classNames(
          'gm-popup  gm-box-shadow-bottom gm-no-outline',
          {
            // 在计算的时候不能出现动画，否则会偏差
            'gm-animated': isInit && animate,
            [`gm-animated-${animate}`]: isInit && animate
          },
          className
        )}
      >
        {showArrow && this.renderTriggerArrow()}
        {children}
      </div>
    )
  }
}

Popup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  rect: PropTypes.object.isRequired,
  center: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  offset: PropTypes.number,
  showArrow: PropTypes.bool, // 是否显示三角标
  arrowLeft: PropTypes.string,
  animName: PropTypes.string,
  /** 预判高度。因为 popup 的宽高会是可变的，所以没法判断视窗内是否能放得下，于是有此。 */
  predictingHeight: PropTypes.number
}

Popup.defaultProps = {
  top: false,
  right: false,
  showArrow: false,
  offset: 0
}

export default Popup
