import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DropDownItem extends React.Component {
  handleClick = () => {
    if (this.props.disabled) {
      return
    }
    this.props.onClick()
  }

  render() {
    const { children, active, className, disabled, ...rest } = this.props

    return (
      <li
        {...rest}
        className={classNames(
          active,
          {
            disabled: disabled
          },
          className
        )}
        onClick={this.handleClick}
      >
        <a href='javascript:;'>{children}</a>
      </li>
    )
  }
}

DropDownItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default DropDownItem
