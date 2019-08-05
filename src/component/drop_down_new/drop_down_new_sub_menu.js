import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Next from '../../../svg/next.svg'
import _ from 'lodash'

class DropDownNewSubMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubmenu: false, // 是否显示Submenu
      style: {}
    }
    this.menuItem = createRef()
    this.submenu = createRef()
  }

  /**
   * 当显示方式为click时
   * @param disabled 是否禁用
   * @param trigger 显示方式
   * @private
   */
  _onClick(disabled, trigger, event) {
    event.stopPropagation()
    if (disabled) {
      return
    }
    if (trigger === 'click') {
      this.setState({
        showSubmenu: true
      })
      this._changePlacement()
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
    clearTimeout(this.timer) // 清除计时器
    if (trigger === 'hover') {
      this.setState({
        showSubmenu: true
      })
      this._changePlacement()
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
    this.timer = setTimeout(
      () =>
        this.setState({
          showSubmenu: false
        }),
      250
    )
  }

  /**
   * 修改显示位置
   * @private
   */
  _changePlacement() {
    // 需要等模版加载完成才能获取
    setTimeout(() => {
      const {
        current: { offsetWidth: submenuWidth, offsetHeight: submenuHeight }
      } = this.submenu
      const {
        left,
        right,
        top,
        bottom
      } = this.menuItem.current.getBoundingClientRect()
      const { offsetWidth, offsetHeight } = document.body
      const { placement } = this.props
      let [vertical, horizontal] = _.kebabCase(placement).split('-')
      if (top < submenuHeight + 4) {
        vertical = 'bottom'
      }
      if (offsetHeight - bottom < submenuHeight + 4) {
        vertical = 'top'
      }
      if (left < submenuWidth + 4) {
        horizontal = 'right'
      }
      if (offsetWidth - right < submenuWidth + 4) {
        horizontal = 'left'
      }
      const style = {}
      if (vertical === 'top') {
        style['bottom'] = `-4px`
      } else {
        style['top'] = `0`
      }
      if (horizontal === 'left') {
        style['left'] = `-${submenuWidth + 4}px`
      } else {
        style['right'] = `-${submenuWidth + 4}px`
      }
      this.setState({ style })
    }, 0)
  }

  /**
   * 模版渲染Submenu
   * @returns element
   * @private
   */
  _renderSubmenu() {
    const { children } = this.props
    const { style } = this.state
    return (
      <div
        style={style}
        className='dropdown-new-menu-submenu'
        ref={this.submenu}
      >
        <div className='dropdown-new-menu'>
          <ul className='dropdown-new-menu-ul'>{children}</ul>
        </div>
      </div>
    )
  }

  render() {
    const { title, disabled, trigger } = this.props
    const { showSubmenu } = this.state
    return (
      <li
        className={classNames({
          'dropdown-new-menu-item': true,
          'dropdown-new-menu-item-disabled': disabled
        })}
        ref={this.menuItem}
        onClick={event => this._onClick(disabled, trigger, event)}
        onMouseEnter={() => this._onMouseEnter(disabled, trigger)}
        onMouseLeave={() => this._onMouseOut(disabled)}
      >
        <div className='dropdown-new-menu-submenu-title'>
          {title}
          <span className='dropdown-new-menu-submenu-arrow'>
            <Next />
          </span>
        </div>
        {showSubmenu && this._renderSubmenu()}
      </li>
    )
  }
}

DropDownNewSubMenu.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  trigger: PropTypes.oneOf(['hover', 'click']),
  placement: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight'
  ])
}

DropDownNewSubMenu.defaultProps = {
  disabled: false,
  trigger: 'hover',
  placement: 'bottomRight'
}

export default DropDownNewSubMenu
