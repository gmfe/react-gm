import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/** Box，用来包裹一块内容 */
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
