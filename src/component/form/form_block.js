import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'

class FormBlock extends React.Component {
  render () {
    let {
      children,
      block,
      inline,
      ...rest
    } = this.props

    return (
      <Flex className={classNames('gm-form-block', {
        'gm-form-block-inline': inline
      })}>
        {_.map(children, (child, i) => {
          if (child === null || child === undefined) {
            return null
          }
          return (
            <Flex flex={inline ? false : (block[i] || 1)} key={i}>
              {child.type.displayName === 'FormItem' ? React.cloneElement(child, {
                ...rest,
                ...child.props
              }) : child}
            </Flex>
          )
        })}
      </Flex>
    )
  }
}

FormBlock.displayName = 'FormBlock'

FormBlock.propTypes = {
  block: PropTypes.array,
  inline: PropTypes.bool
}

FormBlock.defaultProps = {
  block: []
}

export default FormBlock
