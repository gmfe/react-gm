import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Box = props => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={classNames('gm-box')}>
      {children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Box
