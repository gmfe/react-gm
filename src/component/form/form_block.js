import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'
import { withWrapContext, colWidthDefault } from './util'

/** 一堆同类表单元素的集 */
const FormBlock = withWrapContext(
  ({ children, disabledCol, inline, className, col, style, colWidth }) => {
    const _cw = colWidth ? +colWidth.replace('px', '') : colWidthDefault
    const _style = Object.assign(
      {},
      style,
      disabledCol || inline
        ? {}
        : {
            width: _cw * col
          }
    )

    return (
      <Flex
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
  /** 占用栏数 */
  col: PropTypes.oneOf([1, 2, 3]),

  /** Form 传下来，不要动 */
  disabledCol: PropTypes.bool,
  /** Form 传下来，不要动 */
  inline: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.object
}

FormBlock.defaultProps = {
  col: 1
}

export default FormBlock
