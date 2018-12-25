import React from 'react'
import classNames from 'classnames'

class DropDownItems extends React.Component {
  render () {
    const { className, ...rest } = this.props
    return (
      <ul
        {...rest}
        className={classNames('dropdown-menu', className)}
      >{this.props.children}</ul>
    )
  }
}

export default DropDownItems
