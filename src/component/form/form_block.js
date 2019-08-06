import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'

const FormBlock = ({ children, block, inline, ...rest }) => {
  return (
    <Flex
      {...rest}
      className={classNames('gm-form-block', {
        'gm-form-block-inline': inline
      })}
    >
      {_.map(React.Children.toArray(children), (child, i) => {
        return (
          <Flex flex={inline ? false : block[i] || 1} key={i}>
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
  inline: PropTypes.bool,
  children: PropTypes.any
}

FormBlock.defaultProps = {
  block: []
}

export default FormBlock
