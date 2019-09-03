import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// 只判断 下
function isElementInViewport(dom, predictingHeight) {
  const rect = dom.getBoundingClientRect()

  const height = window.innerHeight || document.documentElement.clientHeight

  if (predictingHeight) {
    // 会差那么一丢丢，所以给个阈值
    return rect.top + predictingHeight <= height - 10
  }

  // 会差那么一丢丢，所以给个阈值
  return rect.bottom <= height - 10
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
        className={classNames('gm-popup-arrow', {
          'gm-popup-arrow-top': top,
          'gm-popup-arrow-bottom': !top,
          'gm-popup-arrow-right': !center && right,
          'gm-popup-arrow-left': !center && !right,
          'gm-popup-arrow-center': center
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
      pureContainer,
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
      minWidth: Math.max(rect.width, width)
    }

    if (center) {
      sStyle.left = rect.left + rect.width / 2 - width / 2 + offset
    } else if (right) {
      // sStyle.left = rect.left + rect.width - width + offset
      sStyle.right =
        document.documentElement.clientWidth - rect.left - rect.width - offset
    } else {
      sStyle.left = rect.left + offset
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
          'gm-popup',
          {
            'gm-popup-pure': pureContainer,
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
  predictingHeight: PropTypes.number,
  /** 纯粹的，目前是没有背景色，没有阴影 */
  pureContainer: PropTypes.bool
}

Popup.defaultProps = {
  top: false,
  right: false,
  showArrow: false,
  offset: 0
}

export default Popup
