import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { store } from './store'
import { observer } from 'mobx-react'
import _ from 'lodash'

@observer
class DropDownNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {}
    }
    this.dropdownNew = createRef()
    this.container = createRef()
  }

  componentDidMount() {
    store.setDropdownNewWidth(this.dropdownNew.current.offsetWidth)
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

  /**
   * 当显示方式为click时
   * @param disabled 是否禁用
   * @param trigger 显示方式
   * @private
   */
  _onClick(disabled, trigger) {
    if (disabled) {
      return
    }
    if (trigger === 'click') {
      const { showMenu } = store
      store.setShowMenu(!showMenu)
      this._changePlacement()
    }
  }

  /**
   * 当显示方式为hover时
   * @param disabled 是否禁用
   * @param trigger 显示方式
   * @private
   */
  _onMouseEnter(disabled, trigger) {
    if (disabled) {
      return
    }
    clearTimeout(this.timer) // 清除计时器
    if (trigger === 'hover') {
      store.setShowMenu(true)
      this._changePlacement()
    }
  }

  /**
   * 鼠标离开时，设定计时器关闭Submenu
   * @private
   */
  _onMouseOut(disabled) {
    if (disabled) {
      return
    }
    this.timer = setTimeout(() => store.setShowMenu(false), 500)
  }

  /**
   * 改变位置
   * @private
   */
  _changePlacement() {
    // 需要等模版加载完毕才能获取containerWidth，containerHeight
    setTimeout(() => {
      if (store.showMenu) {
        const { placement: placementString } = this.props
        const style = {}
        const placement = _.kebabCase(placementString).split('-')
        const {
          current: { offsetWidth: dropdownNewWidth }
        } = this.dropdownNew
        const {
          current: {
            offsetWidth: containerWidth,
            offsetHeight: containerHeight
          }
        } = this.container
        const {
          // 获取当前元素距离屏幕的边距自动修改位置
          left,
          right,
          top,
          bottom
        } = this.dropdownNew.current.getBoundingClientRect()
        const {
          offsetWidth: clientWidth,
          offsetHeight: clientHeight
        } = document.body
        if (right < containerWidth) {
          placement[1] = 'left'
        }
        if (clientWidth - left < containerWidth) {
          placement[1] = 'right'
        }
        if (top < containerHeight) {
          placement[0] = 'bottom'
        }
        if (clientHeight - bottom < containerHeight) {
          placement[0] = 'top'
        }
        // 修复位置之后绑定样式
        if (placement[0] === 'top') {
          style['top'] = `-${containerHeight}px`
        }
        switch (placement[1]) {
          case 'center':
            style['left'] = `-${dropdownNewWidth}px`
            break
          case 'right':
            style['right'] = 0
            break
          default:
        }
        this.setState({ style })
      }
    })
  }

  render() {
    const { showMenu } = store
    const { style } = this.state
    const { children, overlay, trigger, disabled } = this.props
    const cloneChildren = this._cloneChildren(children, disabled)
    return (
      <div
        ref={this.dropdownNew}
        className='dropdown-new'
        onClick={() => this._onClick(disabled, trigger)}
        onMouseEnter={() => this._onMouseEnter(disabled, trigger)}
        onMouseLeave={() => this._onMouseOut(disabled)}
      >
        {cloneChildren}
        {showMenu && (
          <div
            className='dropdown-new-menu-container'
            style={style}
            ref={this.container}
          >
            {overlay}
          </div>
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
