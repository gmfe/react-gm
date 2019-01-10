import React from 'react'
import PropTypes from 'prop-types'
import { isNumber } from 'util';

class Affix extends React.Component {

  render () {
    const { children, top, bottom } = this.props
    const style = {
      position: 'sticky',
      bottom: isNumber(bottom) ? `${bottom}px` : null,
      top: isNumber(top) ? `${top}px` : null
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
