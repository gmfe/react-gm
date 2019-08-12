import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/** 这是 Box */
const Box = props => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={classNames('gm-box', className)}>
      {children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Box
