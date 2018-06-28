import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Affix extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      boxStyle: {},
      style: {}
    }

    this.throttleHandleScroll = _.throttle(this.handleScroll, 500)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.throttleHandleScroll)
    this.dom = ReactDOM.findDOMNode(this)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.throttleHandleScroll)
  }

  handleScroll = () => {
    const rect = this.dom.getBoundingClientRect()
    const {top, bottom, offset} = this.props

    if (top && rect.top - offset <= 0) {
      this.setState({
        boxStyle: {
          width: rect.width,
          height: rect.height
        },
        style: {
          position: 'fixed',
          top: offset + 'px',
          left: rect.left,
          width: rect.width
        }
      })
    } else if (bottom && rect.bottom + offset >= (window.innerHeight || window.document.documentElement.clientHeight)) {
      this.setState({
        boxStyle: {
          width: rect.width,
          height: rect.height
        },
        style: {
          position: 'fixed',
          bottom: offset + 'px',
          left: rect.left,
          width: rect.width
        }
      })
    } else {
      this.setState({
        boxStyle: {},
        style: {}
      })
    }
  }

  render () {
    const {children} = this.props
    const {style, boxStyle} = this.state

    return (
      <div style={boxStyle}>
        <div style={style}>
          {children}
        </div>
      </div>
    )
  }
}

Affix.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  offset: PropTypes.number
}

Affix.defaultProps = {
  top: false,
  bottom: true,
  offset: 0
}

export default Affix
