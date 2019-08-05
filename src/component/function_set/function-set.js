import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'
import Popover from '../popover'
import _ from 'lodash'
import { store } from './store'

export default class FunctionSet extends Component {
  /**
   * change the placement of menu
   * @returns {{top: boolean, right: boolean}}
   */
  changePlacement() {
    const { placement } = this.props
    const [vertical, horizontal] = _.kebabCase(placement).split('-')
    return {
      top: vertical === 'top',
      right: horizontal === 'right'
    }
  }

  render() {
    const { overlay, children, disabled, trigger } = this.props
    const child = children
      ? React.cloneElement(children, {
          disabled: disabled
        })
      : undefined
    const { top, right } = this.changePlacement()
    return (
      <Popover
        popup={overlay}
        top={top}
        right={right}
        type={trigger}
        ref={ref => store.setPopover(ref)}
      >
        {child || <Button disabled={disabled}>...</Button>}
      </Popover>
    )
  }
}

FunctionSet.propTypes = {
  /** to show the overlay */
  overlay: PropTypes.elementType.isRequired,
  /** the placement to show the overlay：bottomLeft、bottomRight、topLeft、topRight */
  placement: PropTypes.oneOf([
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
  ]),
  /** the way to open the overlay，default is hover */
  trigger: PropTypes.oneOf(['click', 'hover']),
  /** the overlay is abandon or not */
  disabled: PropTypes.bool
}

FunctionSet.defaultProps = {
  placement: 'bottomLeft',
  trigger: 'hover',
  disabled: false
}
