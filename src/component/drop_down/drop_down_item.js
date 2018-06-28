import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DropDownItem extends React.Component {
  handleClick = () => {
    if (this.props.disabled) {
      return null
    }
    this.props.onClick()
  }

  render () {
    const {children, active, className, disabled, ...rest} = this.props

    return (
      <li {...rest} className={classNames(active, {
        'disabled': disabled
      }, className)} disabled={disabled} onClick={this.handleClick}>
        <a href='javascript:;'>{children}</a>
      </li>
    )
  }
}

DropDownItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default DropDownItem
