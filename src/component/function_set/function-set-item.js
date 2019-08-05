import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { store } from './store'
import ClassNames from 'classnames'

export default class FunctionSetItem extends Component {
  /**
   * click the Item and close the overlay
   * @param onClick
   * @param disabled
   */
  clickItem({ onClick, disabled }) {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick()
    }
    const { popover } = store
    popover.apiDoSetActive(false)
  }

  render() {
    const { children, disabled } = this.props
    return (
      <li onClick={() => this.clickItem(this.props)}>
        <div className={ClassNames('gm-list-item', { disabled })}>
          {children}
        </div>
      </li>
    )
  }
}

FunctionSetItem.propTypes = {
  /** the item is abandon or not */
  disabled: PropTypes.bool,
  /** the click event and close the overlay */
  onClick: PropTypes.func
}

FunctionSetItem.defaultProps = {
  disabled: false
}
