import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'
import { withWrapContext, colWidth } from './util'

const FormBlock = withWrapContext(
  ({ children, className, col, style, ...rest }) => {
    // 暂时
    const _style = Object.assign({}, style, { width: colWidth * col })

    return (
      <Flex
        {...rest}
        wrap
        style={_style}
        className={classNames('gm-form-block', className)}
      >
        {_.map(React.Children.toArray(children), (child, i) => {
          return (
            <Flex key={i} column>
              {child}
            </Flex>
          )
        })}
      </Flex>
    )
  }
)

FormBlock.displayName = 'FormBlock'

FormBlock.propTypes = {
  col: PropTypes.oneOf([1, 2, 3]),
  className: PropTypes.string,
  style: PropTypes.object
}

FormBlock.defaultProps = {
  col: 1
}

export default FormBlock
