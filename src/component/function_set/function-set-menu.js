import React, { Component } from 'react'
class FunctionSetMenu extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='gm-list' style={{ overflowY: 'initial' }}>
        <ul>{children}</ul>
      </div>
    )
  }
}

export default FunctionSetMenu
