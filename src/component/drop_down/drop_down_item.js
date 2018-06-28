import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DropDownItem extends React.Component {
  render () {
    const {children, active, className, ...rest} = this.props

    return (
      <li {...rest} className={classNames({
        active
      }, className)}>
        <a href='javascript:;'>{children}</a>
      </li>
    )
  }
}

DropDownItem.propTypes = {
  active: PropTypes.bool
}

export default DropDownItem
