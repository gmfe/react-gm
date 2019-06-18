import React from 'react'
import PropTypes from 'prop-types'

const Affix = ({ children, top, bottom }) => {
  const style = {
    position: 'sticky',
    bottom: bottom !== undefined ? `${bottom}px` : null,
    top: top !== undefined ? `${top}px` : null,
    zIndex: 950
  }

  return <div style={style}>{children}</div>
}

Affix.propTypes = {
  children: PropTypes.any,
  top: PropTypes.number,
  bottom: PropTypes.number
}

export default Affix
