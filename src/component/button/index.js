import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { is } from 'gm-util'
import Loading from '../loading'

/**
 * 原生 button 在处理异步事情的时候，容易造成重复点击。
 *
 * 使用 Button 可以方便解决该类问题，还有 loading UI。
 * */
const Button = props => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = e => {
    const { onClick } = props
    const result = onClick(e)

    if (!is.promise(result)) {
      return
    }

    setIsLoading(true)

    Promise.resolve(result)
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const {
    onClick, // eslint-disable-line
    children,
    className,
    disabled,
    ...rest
  } = props

  return (
    <button
      {...rest}
      className={classNames('gm-button btn btn-default', className)}
      disabled={isLoading || disabled}
      onClick={handleClick}
    >
      {isLoading && <Loading className='gm-inline-block' size={12} />}
      {children}
    </button>
  )
}

// 只封装了 loading
Button.propTypes = {
  /** 返回 Promise 才有 loading */
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

Button.defaultProps = {
  onClick: _.noop
}
export default Button
