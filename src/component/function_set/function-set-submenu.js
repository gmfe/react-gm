import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FunctionSetMenu } from './index'
import _ from 'lodash'
import ClassNames from 'classnames'
import Next from '../../../svg/next.svg'

export default class FunctionSetSubmenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubmenu: false,
      style: {}
    }
  }

  componentDidMount() {}

  changePlacement() {
    const { placement } = this.props
    const [vertical, horizontal] = _.kebabCase(placement).split('-')
    const style = {
      [`${horizontal === 'left' ? 'right' : 'left'}`]: '100%',
      [`${vertical === 'top' ? 'top' : 'bottom'}`]: 0
    }
    this.setState({ style })
  }

  showSubmenu({ target, disabled, trigger }) {
    if (disabled) {
      return
    }
    if (target === trigger) {
      this.changePlacement()
      this.setState({
        showSubmenu: true
      })
    }
  }

  closeSubmenu(disabled) {
    if (disabled) {
      return
    }
    this.setState({
      showSubmenu: false
    })
  }

  render() {
    const { children, title, disabled } = this.props
    const { showSubmenu, style } = this.state
    return (
      <li
        style={{ position: 'relative' }}
        onClick={() => this.showSubmenu({ target: 'click', ...this.props })}
        onMouseEnter={() =>
          this.showSubmenu({ target: 'hover', ...this.props })
        }
        onMouseLeave={() => this.closeSubmenu(disabled)}
      >
        <div
          className={ClassNames('gm-list-item', { disabled })}
          style={{ paddingRight: '40px' }}
        >
          {title}
          <span style={{ position: 'absolute', right: '3px' }}>
            <Next />
          </span>
        </div>
        <div className='function-set-submenu' style={style}>
          {showSubmenu && <FunctionSetMenu>{children}</FunctionSetMenu>}
        </div>
      </li>
    )
  }
}

FunctionSetSubmenu.propTypes = {
  /** the submenu is abandon or not */
  disabled: PropTypes.bool,
  /** the submenu's title */
  title: PropTypes.string.isRequired,
  /** the way to open the submenu */
  trigger: PropTypes.oneOf(['hover', 'click']),
  /** the placement of the submenu */
  placement: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight'
  ])
}

FunctionSetSubmenu.defaultProps = {
  disabled: false,
  trigger: 'hover',
  placement: 'topRight'
}
