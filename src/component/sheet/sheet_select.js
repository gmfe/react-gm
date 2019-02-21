import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getLocale } from '../../locales'

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
  selectAllTip: PropTypes.string,
  selectAllPageTip: PropTypes.string,
  onSelectAllPage: PropTypes.func,
  hasSelectAllPage: PropTypes.bool
}
SheetSelect.defaultProps = {
  onSelect: _.noop,
  isDisabled: () => false,
  isRadio: false,
  hasSelectTip: false,
  selectAllTip: getLocale('sheet', 'hasSelectedCurrentPage'),
  selectAllPageTip: getLocale('sheet', 'hasSelectedAllPage'),
  hasSelectAllPage: false,
  onSelectAllPage: _.noop
}

export default SheetSelect
