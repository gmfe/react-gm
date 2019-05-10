import React from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'

const ToolTip = (props) => {
  const {
    popup,
    children
  } = props

  return (
    <Popover
      showArrow
      type='hover'
      right
      center
      popup={popup}
      animName='zoom-in-bottom'
    >
      {children !== undefined ? children : <i className='xfont xfont-info-circle-o gm-text-desc'/>}
    </Popover>
  )
}

ToolTip.propTypes = {
  children: PropTypes.element,
  popup: PropTypes.element
}

export default ToolTip
