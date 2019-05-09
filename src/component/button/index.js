import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { is } from 'gm-util'
import Loading from '../loading'

const Button = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()

    const { onClick } = props
    const result = onClick(e)

    if (!is.promise(result)) {
      return
    }

    setIsLoading(true)

    Promise.resolve(result).then(() => {
      setIsLoading(false)
    }).catch(() => {
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
      className={classNames('gm-button', className)}
      disabled={isLoading || disabled}
      onClick={handleClick}
    >
      {isLoading && <Loading
        className='gm-inline-block'
        size={12}
      />}
      {children}
    </button>
  )
}

// 只封装了 loading
Button.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

Button.defaultProps = {
  onClick: _.noop
}

export default Button
