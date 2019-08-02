import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/** Box，用来包裹一块内容 */
const Box = props => {
  const { hasGap, className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={classNames(
        'gm-box',
        {
          'gm-padding-tb-10 gm-padding-lr-20 ': hasGap
        },
        className
      )}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  hasGap: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Box
