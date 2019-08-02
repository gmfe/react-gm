import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

const Info = props => {
  return (
    <div
      {...props}
      className={classNames('gm-box-table-info', props.className)}
    />
  )
}

Info.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

const BoxTable = props => {
  const { info, action, children, className, ...rest } = props

  return (
    <div {...rest} className={classNames('gm-box gm-box-table', className)}>
      <Flex className='gm-box-table-header' alignCenter>
        <Flex>{info}</Flex>
        <Flex flex />
        <Flex>{action}</Flex>
      </Flex>
      <div>{children}</div>
    </div>
  )
}

BoxTable.Info = Info

BoxTable.propTypes = {
  info: PropTypes.element,
  action: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BoxTable
