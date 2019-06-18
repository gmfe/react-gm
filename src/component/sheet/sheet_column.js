import React from 'react'
import PropTypes from 'prop-types'

class SheetColumn extends React.Component {
  render() {
    return null
  }
}

SheetColumn.displayName = 'SheetColumn'
SheetColumn.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  render: PropTypes.func,
  placeholder: PropTypes.any
}

export default SheetColumn
