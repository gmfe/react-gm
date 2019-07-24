import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import LayoutRoot from '../layout_root'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'
import _ from 'lodash'
import Flex from '../flex'
import EVENT_TYPE from '../../event_type'

const iconClassName = {
  confirm: 'xfont xfont-question-circle',
  success: 'xfont xfont-success-circle',
  info: 'xfont xfont-info-circle',
  warning: 'xfont xfont-warning-circle'
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.handleMask = ::this.handleMask
    this.handleClose = ::this.handleClose
    this.handleKeyDown = ::this.handleKeyDown
    this.handleOk = ::this.handleOk
    this.handleCancel = ::this.handleCancel
  }

  componentDidMount() {
    window.document.body.addEventListener('keydown', this.handleKeyDown)

    // 只做一开始是 show 的情况。 其他情况 componentDidUpdate 不做，比如组件形式调用的。
    if (this.props.show) {
      findDOMNode(this.refModal).addEventListener(
        'scroll',
        _.throttle(this.doScroll, 200)
      )
    }
  }

  componentWillUnmount() {
    window.document.body.removeEventListener('keydown', this.handleKeyDown)
    if (this.refModal) {
      findDOMNode(this.refModal).removeEventListener('scroll', this.doScroll)
    }
  }

  doScroll = () => {
    window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.MODAL_SCROLL))
  }

  handleKeyDown(event) {
    if (this.props.show) {
      if (event.keyCode === 27) {
        this.props.onHide()
      }
    }
  }

  handleMask(e) {
    if (
      !this.props.disableMaskClose &&
      e.target.className.split(' ').indexOf('gm-modal') > -1
    ) {
      this.props.onHide()
    }
  }

  handleClose() {
    this.props.onHide()
  }

  handleCancel() {
    Modal.hide()
    this.props.onCancel()
  }

  handleOk() {
    Modal.hide()
    this.props.onOk()
  }

  renderTypeModal() {
    const {
      show,
      title,
      children,
      type,
      okBtnClassName,
      className
    } = this.props

    return (
      <div>
        <div className='gm-modal-mask' />
        <div
          ref={ref => (this.refModal = ref)}
          className={classNames('gm-modal', className)}
          tabIndex='-1'
          onClick={this.handleMask}
        >
          <div
            className={classNames('gm-modal-dialog', 'gm-modal-type', {
              in: show
            })}
          >
            <Flex justifyCenter alignCenter className='gm-modal-type-title'>
              <i className={iconClassName[type]} />
              {title}
            </Flex>
            <div className='gm-text-desc gm-padding-tb-15'>{children}</div>

            <Flex justifyEnd>
              {type === 'confirm' && (
                <button
                  className='btn btn-sm btn-default'
                  onClick={this.handleCancel}
                >
                  {getLocale('取消')}
                </button>
              )}
              <div className='gm-gap-10' />
              <button
                className={classNames('btn btn-sm btn-primary', okBtnClassName)}
                onClick={this.handleOk}
              >
                {getLocale('确认')}
              </button>
            </Flex>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      show,
      title,
      size,
      children,
      type,
      style,
      noContentPadding,
      className,
      noCloseBtn,
      opacityMask,
      animName
    } = this.props
    if (!show) {
      return null
    }

    if (type) {
      return this.renderTypeModal()
    }

    let animate = false
    if (animName) {
      if (animName === true) {
        animate = 'fade-in-bottom'
      } else {
        animate = animName
      }
    }

    const inner = (
      <div
        key='modal-dialog'
        className={classNames('gm-modal-dialog', 'gm-modal-' + size, {
          in: show,
          'gm-modal-dialog-has-title': title,
          'gm-border': opacityMask,
          'gm-box-shadow-bottom': opacityMask
        })}
        style={style}
      >
        {noCloseBtn || (
          <button
            type='button'
            className='close gm-modal-close'
            onClick={this.handleClose}
          >
            <span>×</span>
          </button>
        )}
        {title ? (
          <div className='gm-modal-title-wrap'>
            <div className='gm-modal-title'>{title}</div>
          </div>
        ) : null}
        <div
          className={classNames('gm-modal-content', {
            'gm-padding-0': noContentPadding
          })}
        >
          {children}
        </div>
      </div>
    )

    return (
      <div>
        <div
          className={classNames('gm-modal-mask', {
            'gm-modal-mask-opacity': opacityMask
          })}
        />
        <div
          ref={ref => (this.refModal = ref)}
          className={classNames(
            'gm-modal',
            {
              'gm-animated': !!animate,
              ['gm-animated-' + animate]: animate
            },
            className
          )}
          tabIndex='-1'
          onClick={this.handleMask}
        >
          {inner}
        </div>
      </div>
    )
  }
}

Modal.render = props => {
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.MODAL_SHOW))
  LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, <Modal show {...props} />)
}

Modal.confirm = props => {
  console.warn('Deprecated. Use Dialog.xxx instead.')
  Modal.render(
    Object.assign(
      {},
      {
        disableMaskClose: true,
        type: 'confirm'
      },
      props
    )
  )
}

Modal.info = props => {
  console.warn('Deprecated. Use Dialog.xxx instead.')
  Modal.render(
    Object.assign(
      {},
      {
        disableMaskClose: true,
        type: 'info'
      },
      props
    )
  )
}

Modal.success = props => {
  console.warn('Deprecated. Use Dialog.xxx instead.')
  Modal.render(
    Object.assign(
      {},
      {
        disableMaskClose: true,
        type: 'success'
      },
      props
    )
  )
}

Modal.warning = props => {
  console.warn('Deprecated. Use Dialog.xxx instead.')
  Modal.render(
    Object.assign(
      {},
      {
        disableMaskClose: true,
        type: 'warning'
      },
      props
    )
  )
}

Modal.hide = () => {
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.MODAL_HIDE))
  LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, null)
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string,
  onHide: PropTypes.func,
  disableMaskClose: PropTypes.bool,
  opacityMask: PropTypes.bool,
  size: PropTypes.string, // lg md sm
  title: PropTypes.string,
  okBtnClassName: PropTypes.string, // Modal confirm okbtn的className
  className: PropTypes.string,
  noContentPadding: PropTypes.bool,
  noCloseBtn: PropTypes.bool,
  style: PropTypes.object,
  animName: PropTypes.oneOf([
    false,
    true,
    'fade-in-right',
    'fade-in-left',
    'fade-in-top',
    'fade-in-bottom'
  ]),
  children: PropTypes.any,
  onCancel: PropTypes.func,
  onOk: PropTypes.func
}

Modal.defaultProps = {
  onHide: _.noop,
  size: 'md',
  disableMaskClose: false,
  opacityMask: false,
  noContentPadding: false,
  noCloseBtn: false,
  animName: true
}

export default Modal
