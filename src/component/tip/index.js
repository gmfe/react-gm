import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import LayoutRoot from '../layout_root'

const TipStatics = {
  tip: function(options) {
    const id = +new Date() + '' + Math.random()
    const _onClose = options.onClose

    options.onClose = () => {
      LayoutRoot._removeComponentTip(id)
      if (_onClose) {
        _onClose()
      }
    }
    LayoutRoot._setComponentTip(id, <TipOverlay {...options} />)

    return id
  },
  success: function(options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.type = 'success'
    return TipStatics.tip(options)
  },
  info: function(options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.type = 'info'
    return TipStatics.tip(options)
  },
  warning: function(options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.type = 'warning'
    return TipStatics.tip(options)
  },
  danger: function(options) {
    if (typeof options === 'string') {
      options = {
        children: options
      }
    }
    options.type = 'danger'
    return TipStatics.tip(options)
  },
  clear(id) {
    LayoutRoot._removeComponentTip(id)
  },
  clearAll() {
    LayoutRoot._removeComponentTipAll()
  }
}

class TipOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.hasClosed = false
    this.handleClose = ::this.handleClose
  }

  componentDidMount() {
    const { time } = this.props
    if (time) {
      this.timer = setTimeout(() => this.fadeOut(), time)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleClose() {
    this.fadeOut()
  }

  fadeOut() {
    if (!this.hasClosed) {
      this.hasClosed = true
      this.props.onClose()
    }
  }

  render() {
    const { title, type, children } = this.props
    return (
      <div className='gm-animated gm-animated-fade-in-right-100'>
        <Tip title={title} type={type} onClose={this.handleClose}>
          {children}
        </Tip>
      </div>
    )
  }
}

TipOverlay.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
  time: PropTypes.number,
  children: PropTypes.any
}

TipOverlay.defaultProps = {
  time: 3000
}

class Tip extends React.Component {
  handleClose = () => {
    this.props.onClose()
  }

  render() {
    const { title, type, children } = this.props
    const iconClassName = {
      success: 'glyphicon glyphicon-ok-sign',
      info: 'glyphicon glyphicon-info-sign',
      warning: 'glyphicon glyphicon-exclamation-sign',
      danger: 'glyphicon glyphicon-remove-sign'
    }

    return (
      <div className='gm-tip panel panel-default gm-box-shadow-bottom'>
        <button type='button' className='close' onClick={this.handleClose}>
          <span>&times;</span>
        </button>
        <i className={'text-' + type + ' ' + iconClassName[type]} />
        <div className='panel-body'>
          {title ? (
            <div>
              <strong>{title}</strong>
            </div>
          ) : (
            undefined
          )}
          {children}
        </div>
      </div>
    )
  }
}

Tip.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any
}

Tip.defaultProps = {
  title: '',
  type: 'info',
  onClose: _.noop
}

Object.assign(Tip, TipStatics)

export default Tip
