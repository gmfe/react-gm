import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withWrapContext } from './util'

const sizeList = ['sm', 'md', 'lg', 'xl']

const Col = withWrapContext(
  ({ gutter, children, className, span, offset, style, ...rest }) => {
    let sizeClasses = {}
    _.forEach(sizeList, size => {
      let sizeProps = {}
      if (typeof rest[size] === 'number') {
        sizeProps.span = rest[size]
      } else if (typeof rest[size] === 'object') {
        sizeProps = rest[size] || {}
      }
      delete rest[size]

      sizeClasses = {
        ...sizeClasses,
        [`gm-grid-col-${size}-${sizeProps.span}`]: sizeProps.span,
        [`gm-grid-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset
      }
    })

    const classes = classNames(
      'gm-grid-col',
      {
        [`gm-grid-col-${span}`]: span,
        [`gm-grid-col-offset-${offset}`]: offset
      },
      className,
      sizeClasses
    )
    const colStyle =
      gutter > 0
        ? {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
            ...style
          }
        : style

    return (
      <div style={colStyle} {...rest} className={classes}>
        {children}
      </div>
    )
  }
)

Col.propTypes = {
  className: PropTypes.string,
  /** 栅格占位格数，为 0 时相当于 display: none */
  span: PropTypes.number,
  /** 栅格左侧的间隔格数 */
  offset: PropTypes.number,
  /** 768px，响应式栅格，可为栅格数或一个包含其他属性的对象 */
  sm: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  /** 992px，响应式栅格，可为栅格数或一个包含其他属性的对象 */
  md: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  /** 1200px, 响应式栅格，可为栅格数或一个包含其他属性的对象 */
  lg: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  /** 1920px, 响应式栅格，可为栅格数或一个包含其他属性的对象 */
  xl: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
}

Col.displayName = 'Col'

export default Col
