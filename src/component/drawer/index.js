import React from 'react'
import PropTypes from 'prop-types'
import LayoutRoot from '../layout_root'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'
import _ from 'lodash'
import EVENT_TYPE from '../../event_type'

class Drawer extends React.Component {
  constructor () {
    super()
    this.throttleDoScroll = _.throttle(this.doScroll, 200)
  }

  doScroll = () => {
    window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.DRAWER_SCROLL))
  }

  componentDidMount () {
    window.document.body.addEventListener('keydown', this.handleKeyDown)

    findDOMNode(this.refDrawer).addEventListener('scroll', this.throttleDoScroll)
  }

  componentWillUnmount () {
    window.document.body.removeEventListener('keydown', this.handleKeyDown)

    findDOMNode(this.refDrawer).removeEventListener('scroll', this.throttleDoScroll)
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.props.onHide()
    }
  }

  handleMask = (e) => {
    if (e.target.className.split(' ').indexOf('gm-drawer') > -1) {
      this.props.onHide()
    }
  }

  handleClose = () => {
    this.props.onHide()
  }

  render () {
    const { children, style, className, animation, opacityMask } = this.props

    return (
      <div>
        <div className={classNames('gm-drawer-mask', { 'gm-drawer-mask-opacity': opacityMask })}/>
        <div
          ref={ref => (this.refDrawer = ref)}
          className={classNames('gm-drawer', {
            'gm-animated': animation,
            'gm-animated-fade-in-right': animation
          }, className)}
          tabIndex='-1'
          onClick={this.handleMask}
        >
          <div
            className={classNames('gm-drawer-content', {
              'gm-border': opacityMask,
              'gm-box-shadow-bottom': opacityMask
            })}
            style={style}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Drawer.render = (props) => {
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.MODAL_SHOW))
  LayoutRoot.setComponent(LayoutRoot.TYPE.DRAWER, (
    <Drawer {...props}/>
  ))
}

Drawer.hide = () => {
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.MODAL_HIDE))
  LayoutRoot.setComponent(LayoutRoot.TYPE.DRAWER, null)
}

Drawer.propTypes = {
  onHide: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  animation: PropTypes.bool,
  opacityMask: PropTypes.bool,
  children: PropTypes.element
}

Drawer.defaultProps = {
  onHide: _.noop,
  animation: true,
  opacityMask: false
}

export default Drawer
