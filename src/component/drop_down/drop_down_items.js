import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DropDownItems extends React.Component {
  render() {
    const { className, children, ...rest } = this.props
    return (
      <ul {...rest} className={classNames('dropdown-menu', className)}>
        {children}
      </ul>
    )
  }
}

DropDownItems.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default DropDownItems
