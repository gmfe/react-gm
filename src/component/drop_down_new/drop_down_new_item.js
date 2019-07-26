import React, { Component } from 'react'

class DropDownNewItem extends Component {
  render() {
    const { children } = this.props
    return <li className='dropdown-new-menu-item'>{children}</li>
  }
}

export default DropDownNewItem
