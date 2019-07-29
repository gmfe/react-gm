import React, { Component, createRef } from 'react'
import { store } from './store'

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

  componentDidMount() {
    if (store.dropdownNewWidth > this.currentRef.current.offsetWidth) {
      const style = {
        width: `${store.dropdownNewWidth}px`
      }
      this.setState({ style, flag: true })
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
