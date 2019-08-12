import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Popup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    const dom = findDOMNode(this.refPopup)

    this.setState({
      width: dom.offsetWidth,
      height: dom.offsetHeight
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
      arrowLeft, // eslint-disable-line
      children,
      rect,
      style,
      className,
      ...rest
    } = this.props

    const { width, height } = this.state

    const sStyle = {
      top: rect.top + rect.height + (showArrow ? 5 : 1),
      left: rect.left + offset
    }

    if (center) {
      sStyle.left = rect.left + rect.width / 2 - width / 2 + offset
    } else if (right) {
      sStyle.left = rect.left + rect.width - width + offset
    }

    // TODO 考虑是否提供 sStyle width

    if (top) {
      sStyle.top = rect.top - height - 5
    }

    return (
      <div
        ref={ref => (this.refPopup = ref)}
        {...rest}
        style={Object.assign(sStyle, style)}
        className={classNames('gm-popup gm-box-shadow-bottom', className)}
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
  arrowLeft: PropTypes.string
}

Popup.defaultProps = {
  top: false,
  right: false,
  showArrow: false,
  offset: 0
}

export default Popup