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
  className: PropTypes.string
}

export default Row
