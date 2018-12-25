import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import classNames from 'classnames'
import { createChainedFunction, contains } from 'gm-util'

class Trigger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.handleClick = ::this.handleClick
    this.handleMouseEnter = ::this.handleMouseEnter
    this.handleMouseLeave = ::this.handleMouseLeave
    this.handleBodyClick = ::this.handleBodyClick
    this.setActive = ::this.setActive

    this.timer = null
    this.refPopup = null
  }

  componentDidMount () {
    window.document.body.addEventListener('click', this.handleBodyClick)
    console.warn('Trigger is deprecated. Use Popover instead.')
  }

  componentWillUnmount () {
    window.document.body.removeEventListener('click', this.handleBodyClick)
  }

  setActive (active) {
    this.setState({
      active
    })
  }

  handleBodyClick (event) {
    const target = event.target
    const root = findDOMNode(this)
    if (!contains(root, target)) {
      this.setActive(false)
    }
  }

  handleClick (event) {
    const { disabled, children, type } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    let active = true
    if (type === 'click') {
      // 如果是点击的，点击 popup 内部不改变active
      if (contains(findDOMNode(this.refPopup), event.target)) {
        return
      }

      active = !this.state.active
    }

    if (disabled === false) {
      this.setActive(active)
    }
    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.setActive(active)
    }
  }

  handleMouseEnter () {
    const { disabled, children } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    clearTimeout(this.timer)

    if (disabled === false) {
      this.setActive(true)
    }

    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.setActive(true)
    }
  }

  handleMouseLeave () {
    const { disabled, children } = this.props
    // 优先获取props的disabled
    if (disabled === true) {
      return
    }

    clearTimeout(this.timer)

    if (disabled === false) {
      this.timer = setTimeout(() => {
        this.setActive(false)
      }, 500)
    }

    // 如果没有props disabled，判定children是否不可用状态
    if (!children.props.disabled) {
      this.timer = setTimeout(() => {
        this.setActive(false)
      }, 500)
    }
  }

  // 添加浮层的三角标，三角标背景用border模拟，三角标的boder用box-shadow模拟
  renderTriggerArrow (showArrow, arrowBgColor, arrowBorderColor) {
    let arrowStyle = {}
    if (showArrow) {
      const { right, top } = this.props
      arrowStyle = {
        'borderRightColor': arrowBgColor,
        'borderBottomColor': arrowBgColor
      }
      if (arrowBorderColor) {
        arrowStyle = Object.assign({}, arrowStyle, {
          'boxShadow': `1px 1px 0px ${arrowBorderColor}`
        })
      }

      return (
        <div
          className={classNames('gm-trigger-arrow', {
            'gm-trigger-arrow-right': right,
            'gm-trigger-arrow-top': top
          })}
          style={arrowStyle}
        />
      )
    }
  }

  render () {
    const {
      component, children, popup,
      type, right, top,
      showArrow, arrowBgColor, arrowBorderColor,
      animName
    } = this.props
    const { active } = this.state

    let animate = animName

    if (animName === true) {
      if (top) {
        if (right) {
          animate = 'fade-in-left'
        } else {
          animate = 'fade-in-right'
        }
      } else {
        if (right) {
          animate = 'fade-in-left'
        } else {
          animate = 'fade-in-right'
        }
      }
    }

    const child = React.Children.only(children)

    const p = {}
    if (type === 'focus' || type === 'click') {
      p.onClick = createChainedFunction(component.props.onClick, this.handleClick)
    } else if (type === 'hover') {
      p.onMouseEnter = createChainedFunction(component.props.onMouseEnter, this.handleMouseEnter)
      p.onMouseLeave = createChainedFunction(component.props.onMouseLeave, this.handleMouseLeave)
    }

    const componentProps = Object.assign({}, component.props, p)

    return React.cloneElement(component, Object.assign({}, componentProps, {
      className: classNames(component.props.className, 'gm-trigger'),
      children: [
        child,
        active ? this.renderTriggerArrow(showArrow, arrowBgColor, arrowBorderColor) : undefined,
        active ? React.createElement('div', {
          key: 'popup',
          ref: ref => (this.refPopup = ref),
          className: classNames('gm-trigger-popup gm-box-shadow-bottom', {
            'gm-trigger-popup-right': right,
            'gm-trigger-popup-top': top,
            'gm-box-shadow-top': top,
            'gm-trigger-popup-no-arrow': !showArrow,
            'gm-animated': !!animate,
            ['gm-animated-' + animate]: animate
          }),
          children: [popup]
        }) : undefined
      ]
    }))
  }
}

Trigger.propTypes = {
  type: PropTypes.oneOf(['focus', 'click', 'hover']),
  component: PropTypes.element.isRequired,
  popup: PropTypes.element, // 有可能是无
  children: PropTypes.element,
  right: PropTypes.bool,
  top: PropTypes.bool,
  disabled: PropTypes.bool,
  showArrow: PropTypes.bool, // 是否显示三角标
  arrowBgColor: PropTypes.string, // 三角标的背景颜色
  arrowBorderColor: PropTypes.string, // 三角标的border颜色
  animName: PropTypes.oneOf([false, true, 'fade-in-right', 'fade-in-left', 'fade-in-top', 'fade-in-bottom'])
}

Trigger.defaultProps = {
  type: 'focus',
  showArrow: false,
  arrowBgColor: '#FFF',
  animName: true
}

export default Trigger
