import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DropDownNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  /**
   * 用于传入disabled时修改当前组件样式
   * @param children element
   * @param disabled boolean
   * @private
   */
  _cloneChildren(children, disabled) {
    return React.cloneElement(children, {
      className: disabled ? 'dropdown-new-disabled' : ''
    })
  }

  _showMenu(flag) {
    if (flag) {
      clearTimeout(this.timer)
    }
    this.setState({
      showMenu: true
    })
  }

  _closeMenu(disabled) {
    if (disabled) {
      return
    }
    this.timer = setTimeout(() => {
      this.setState({
        showMenu: false
      })
    }, 250)
  }

  render() {
    const { showMenu } = this.state
    const { children, overlay, trigger, disabled } = this.props
    const cloneChildren = this._cloneChildren(children, disabled)
    return (
      <div
        className='dropdown-new'
        ref={ref => (this.currentRef = ref)}
        onClick={
          trigger === 'click' && !disabled ? () => this._showMenu() : undefined
        }
        onMouseEnter={
          trigger === 'hover' && !disabled
            ? () => this._showMenu(true)
            : undefined
        }
        onMouseLeave={() => this._closeMenu(disabled)}
      >
        {cloneChildren}
        {showMenu && (
          <div className='dropdown-new-menu-container'>{overlay}</div>
        )}
      </div>
    )
  }
}

DropDownNew.propTypes = {
  overlay: PropTypes.element.isRequired,
  placement: PropTypes.oneOf(
    'leftTop',
    'leftCenter',
    'leftRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight'
  ),
  trigger: PropTypes.oneOf('click', 'hover'),
  disabled: PropTypes.bool
}
DropDownNew.defaultProps = {
  placement: 'bottomLeft',
  trigger: 'hover',
  disabled: false
}

export default DropDownNew
