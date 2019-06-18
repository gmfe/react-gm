import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Context from './context'

const Left = props => {
  const { style, className, children, ...rest } = props
  const { leftWidth } = React.useContext(Context)

  return (
    <div
      {...rest}
      style={Object.assign({ width: leftWidth }, style)}
      className={classNames('gm-framework-left-default', className)}
    >
      <div className='gm-framework-left-default-inner'>{children}</div>
    </div>
  )
}

Left.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}

export default Left
