import React from 'react'

class SheetAction extends React.Component {
  render () {
    return <div>{this.props.children}</div>
  }
}

SheetAction.displayName = 'SheetAction'

export default SheetAction
