import React from 'react'
import PropTypes from 'prop-types'

class Affix extends React.Component {
  constructor (props) {
    super(props)

    this.style = {
        position: 'sticky'
    }
  }

  render () {
    const { children, offset, top, bottom } = this.props
    top ? this.style.top = `${offset}px` : null
    bottom ? this.style.bottom = `${offset}px` : null
    return (
      <div style={this.style}>
          {children}
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
