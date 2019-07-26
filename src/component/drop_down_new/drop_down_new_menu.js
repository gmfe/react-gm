import React, { Component, createRef } from 'react'
import { store } from './store'

class DropDownNewMenu extends Component {
  constructor(props) {
    super(props)
    this.currentRef = createRef()
    this.widthFlag = store.width
    this.state = {
      style: {
        width: 0
      },
      flag: false
    }
  }

  componentDidMount() {
    if (this.widthFlag > this.currentRef.current.offsetWidth) {
      this.setState({
        style: {
          width: `${this.widthFlag}px`
        },
        flag: true
      })
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
