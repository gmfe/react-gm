import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'

const FormBlock = ({ children, block, className, ...rest }) => {
  return (
    <Flex {...rest} className={classNames('gm-form-block', className)}>
      {_.map(React.Children.toArray(children), (child, i) => {
        return (
          <Flex flex={block[i] || 1} key={i}>
            {child}
          </Flex>
        )
      })}
    </Flex>
  )
}

FormBlock.displayName = 'FormBlock'

FormBlock.propTypes = {
  block: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object
}

FormBlock.defaultProps = {
  block: []
}

export default FormBlock
