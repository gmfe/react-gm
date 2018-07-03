import React from 'react'
import PropTypes from 'prop-types'
import LayoutRoot from '../layout_root'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'
import _ from 'lodash'
import Emitter from '../../emitter'

class Drawer extends React.Component {
  constructor () {
    super()
    this.throttleDoScroll = _.throttle(this.doScroll, 200)
  }

  doScroll = () => {
    Emitter.emit(Emitter.TYPE.DRAWER_SCROLL)
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
    if (!this.props.disableMaskClose && e.target.className.split(' ').indexOf('gm-drawer') > -1) {
      this.props.onHide()
    }
  }

  handleClose = () => {
    this.props.onHide()
  }

  render () {
    const {title, children, style, className, noCloseBtn, opacityMask, animation, noContentPadding} = this.props

    return (
      <div>
        <div className={classNames('gm-drawer-mask', {
          'gm-drawer-mask-opacity': opacityMask
        })}/>
        <div
          ref={ref => (this.refDrawer = ref)}
          className={classNames('gm-drawer', {
            'gm-animated': animation,
            'gm-animated-fade-in-right': animation
          }, className)}
          tabIndex='-1'
          onClick={this.handleMask}
        >
          {/* 内容区 */}
          <div
            key='drawer-container'
            className={classNames('gm-drawer-container', {
              'gm-drawer-container-has-title': title,
              'gm-border': opacityMask,
              'gm-box-shadow-bottom': opacityMask
            })}
            style={style}
          >
            {noCloseBtn || (
              <button
                type='button'
                className='close gm-drawer-close'
                onClick={this.handleClose}
              >
                <span>×</span>
              </button>
            )}
            {title && (
              <div className='gm-drawer-title'>
                {title}
              </div>
            )}
            <div
              className={classNames('gm-drawer-content', {
                'gm-padding-0': noContentPadding
              })}>
              {children}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Drawer.render = (props) => {
  Emitter.emit(Emitter.TYPE.MODAL_SHOW)
  LayoutRoot.setComponent(LayoutRoot.TYPE.DRAWER, (
    <Drawer {...props}/>
  ))
}

Drawer.hide = () => {
  Emitter.emit(Emitter.TYPE.MODAL_HIDE)
  LayoutRoot.setComponent(LayoutRoot.TYPE.DRAWER, null)
}

Drawer.propTypes = {
  onHide: PropTypes.func,
  disableMaskClose: PropTypes.bool,
  opacityMask: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  noCloseBtn: PropTypes.bool,
  style: PropTypes.object,
  animation: PropTypes.bool,
  noContentPadding: PropTypes.bool
}

Drawer.defaultProps = {
  onHide: _.noop,
  disableMaskClose: false,
  opacityMask: false,
  noCloseBtn: false,
  animation: true,
  noContentPadding: false
}

export default Drawer
