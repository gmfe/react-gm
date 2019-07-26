import React, { Component } from 'react'
import Popover from '../popover'
import PropTypes from 'prop-types'
import _ from 'lodash'

class DropDownNew extends Component {
  /**
   * 由于Popover组件设计原因，需将传进来的placement属性进行转化
   * @param e string
   * @private
   */
  _judgePlacement(e) {
    const placement = _.kebabCase(e).split('-')
    const top = placement[0] === 'top'
    const right = placement[1] === 'right'
    const center = placement[1] === 'center'
    return { top, right, center }
  }
  // todo 添加disabled样式

  render() {
    const { children, overlay, placement, trigger, disabled } = this.props
    const { right, center, top } = this._judgePlacement(placement)
    return (
      <Popover
        popup={overlay}
        disabled={disabled}
        right={right}
        center={center}
        top={top}
        type={trigger}
      >
        {children}
      </Popover>
    )
  }
}

DropDownNew.propTypes = {
  overlay: PropTypes.element.isRequired,
  placement: PropTypes.string,
  trigger: PropTypes.string,
  disabled: PropTypes.bool
}
DropDownNew.defaultProps = {
  placement: 'bottomLeft',
  trigger: 'focus',
  disabled: false
}

export default DropDownNew
