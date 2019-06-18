import React from 'react'
import PropTypes from 'prop-types'

class SheetBatchAction extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

SheetBatchAction.propTypes = {
  children: PropTypes.any
}

SheetBatchAction.displayName = 'SheetBatchAction'

export default SheetBatchAction
