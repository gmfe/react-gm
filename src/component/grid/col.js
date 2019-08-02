import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'

const sizeList = ['sm', 'md', 'lg', 'xl']

const Col = props => {
  const { children, className, span, offset, ...rest } = props
  let sizeClasses = {}
  _.forEach(sizeList, size => {
    let sizeProps = {}
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size]
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {}
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

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

Col.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number, // 栅格占位格数，为 0 时相当于 display: none
  offset: PropTypes.number, // 栅格左侧的间隔格数,
  sm: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // 768px，响应式栅格，可为栅格数或一个包含其他属性的对象
  md: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // 992px，响应式栅格，可为栅格数或一个包含其他属性的对象
  lg: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // 1200px, 响应式栅格，可为栅格数或一个包含其他属性的对象
  xl: PropTypes.oneOfType([PropTypes.object, PropTypes.number]) // 1920px, 响应式栅格，可为栅格数或一个包含其他属性的对象
}

export default Col
