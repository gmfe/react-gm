import React from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'
import classNames from 'classnames'

const ToolTip = props => {
  let {
    popup,
    children,

    right,
    top,
    center,

    className,
    ...rest
  } = props

  return (
    <Popover
      showArrow
      type='hover'
      right={right}
      top={top}
      center={center}
      popup={popup}
      animName={top ? 'zoom-in-top' : 'zoom-in-bottom'}
    >
      {children !== undefined ? (
        children
      ) : (
        <i
          {...rest}
          className={classNames(
            'xfont xfont-info-circle-o gm-text-desc',
            className
          )}
        />
      )}
    </Popover>
  )
}

ToolTip.propTypes = {
  children: PropTypes.element,
  popup: PropTypes.element,

  right: PropTypes.bool,
  top: PropTypes.bool,
  center: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.object
}

export default ToolTip
