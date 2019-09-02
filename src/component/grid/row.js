import React from 'react'
import Flex from '../flex'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Flex 布局
 *
 * Flex 的props都可用
 * */
const Row = props => {
  const { children, className, ...rest } = props
  return (
    <Flex row wrap {...rest} className={classNames('gm-grid-row', className)}>
      {children}
    </Flex>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  /** 栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}， 默认为10 */
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
}

Row.defaultProps = {
  gutter: 10
}

export default Row
