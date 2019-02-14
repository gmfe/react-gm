import React from 'react'
import PropTypes from 'prop-types'

class Affix extends React.Component {
  render () {
    const { children, top, bottom } = this.props
    const style = {
      position: 'sticky',
      bottom: bottom !== undefined ? `${bottom}px` : null,
      top: top !== undefined ? `${top}px` : null,
      zIndex: 950
    }

    return (
      <div style={style}>
        {children}
      </div>
    )
  }
}

Affix.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number
}

export default Affix
