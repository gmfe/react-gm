import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

class DropDownNewItem extends Component {
  constructor(props) {
    super(props)
    this._handleClick = ::this._handleClick
  }

  /**
   * 点击事件，排除disabled以及未传onClick方法
   * @param disabled
   * @param onClick
   * @private
   */
  _handleClick(disabled, onClick) {
    if (!disabled && onClick) {
      onClick()
    }
  }

  render() {
    const { children, disabled, onClick } = this.props
    return (
      <li
        className={className({ 'dropdown-new-menu-item': true })}
        onClick={() => this._handleClick(disabled, onClick)}
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
