import React, { Component, createRef } from 'react'

class DropDownNewMenu extends Component {
  constructor(props) {
    super(props)
    this.currentRef = createRef()
    this.state = {
      style: {
        width: 0
      },
      flag: false
    }
  }

  render() {
    const { children } = this.props
    const { style, flag } = this.state
    return (
      <ul
        style={flag ? style : {}}
        ref={this.currentRef}
        className='dropdown-new-menu'
      >
        {children}
      </ul>
    )
  }
}

export default DropDownNewMenu
