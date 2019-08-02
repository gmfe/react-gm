import React from 'react'
import PropTypes from 'prop-types'
import SVGDownSmall from '../../../svg/down.svg'
import classNames from 'classnames'

const IconDownUp = props => {
  const { active, className, ...rest } = props
  return (
    <SVGDownSmall
      {...rest}
      className={classNames(
        'gm-icon-down-up',
        {
          active: props.active
        },
        className
      )}
    />
  )
}

IconDownUp.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default IconDownUp
