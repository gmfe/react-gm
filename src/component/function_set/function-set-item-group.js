import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FunctionSetItemGroup extends Component {
  render() {
    const { title, children } = this.props
    return (
      <li className='function-set-item-group'>
        <div className='gm-list-group-item'>
          <div className='gm-text-desc gm-list-label function-set-item-group-title'>
            {title}
          </div>
          <ul>{children}</ul>
        </div>
      </li>
    )
  }
}

FunctionSetItemGroup.propTypes = {
  /** group title */
  title: PropTypes.string.isRequired
}
