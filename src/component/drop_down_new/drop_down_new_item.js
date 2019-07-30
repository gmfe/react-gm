import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { Overlay } from '../overlay'

class DropDownNewItem extends Component {
  constructor(props) {
    super(props)
    this._handleClick = ::this._handleClick
  }

  /**
   * 点击事件，排除disabled以及未传onClick方法
   * @param disabled 是否disabled
   * @param onClick 传进来的onClick事件
   * @private
   */
  _handleClick(disabled, onClick, event) {
    event.stopPropagation()
    if (!disabled) {
      if (onClick) {
        onClick()
      }
      Overlay.close()
    }
  }

  render() {
    const { children, disabled, onClick } = this.props
    return (
      <li
        className={className({
          'dropdown-new-menu-item': true,
          'dropdown-new-menu-item-disabled': disabled
        })}
        onClick={event => this._handleClick(disabled, onClick, event)}
      >
        {children}
      </li>
    )
  }
}

DropDownNewItem.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
export default DropDownNewItem
