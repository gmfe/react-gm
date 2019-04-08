import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class SheetSelect extends React.Component {
  render () {
    return <div>{this.props.children}</div>
  }
}

SheetSelect.displayName = 'SheetSelect'
SheetSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func,
  onChange: PropTypes.func,
  isDisabled: PropTypes.func,
  isRadio: PropTypes.bool,
  hasSelectTip: PropTypes.bool,
  selectAllTip: PropTypes.string
}
SheetSelect.defaultProps = {
  onSelect: _.noop,
  isDisabled: () => false,
  isRadio: false,
  hasSelectTip: false,
  selectAllTip: '已选中所有'
}

export default SheetSelect
