import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import _ from 'lodash'
import classNames from 'classnames'
import { withWrapContext, WrapContext, colWidth } from './util'

const FormBlock = withWrapContext(
  ({ labelWidth, canValidate, children, className, col, style, ...rest }) => {
    // 暂时
    const _style = Object.assign({}, style, { width: colWidth * col })

    return (
      <WrapContext.Provider
        value={{
          labelWidth,
          canValidate
        }}
      >
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
      </WrapContext.Provider>
    )
  }
)

FormBlock.displayName = 'FormBlock'

FormBlock.propTypes = {
  // 以下不要用， 由context传过来的
  labelWidth: PropTypes.string,
  canValidate: PropTypes.bool,
  // 以上 由context传过来的

  col: PropTypes.oneOf([1, 2, 3]),
  className: PropTypes.string,
  style: PropTypes.object
}

FormBlock.defaultProps = {
  col: 1
}

export default FormBlock
