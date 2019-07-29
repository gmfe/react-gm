import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Next from '../../../svg/next.svg'

class DropDownNewSubMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubmenu: false // 是否显示Submenu
    }
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
      this.setState({
        showSubmenu: true
      })
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
   * 模版渲染Submenu
   * @returns element
   * @private
   */
  _renderSubmenu() {
    const { children } = this.props
    return (
      <div className='dropdown-new-menu-submenu'>
        <ul className='dropdown-new-menu'>{children}</ul>
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
        onClick={() => this._onClick(disabled, trigger)}
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
  title: PropTypes.string,
  trigger: PropTypes.oneOf('hover', 'click')
}

DropDownNewSubMenu.defaultProps = {
  disabled: false,
  trigger: 'hover'
}

export default DropDownNewSubMenu
