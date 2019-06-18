import React from 'react'
import PropTypes from 'prop-types'

class SheetAction extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

SheetAction.propTypes = {
  children: PropTypes.any
}

SheetAction.displayName = 'SheetAction'

export default SheetAction
