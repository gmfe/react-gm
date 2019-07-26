import React, { Component } from 'react'

class DropDownNewMenu extends Component {
  render() {
    const { children } = this.props

    return <ul className='dropdown-new-menu'>{children}</ul>
  }
}

export default DropDownNewMenu
