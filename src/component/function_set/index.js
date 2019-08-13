import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Popover from '../popover'
import Overlay from './overlay'
import IconDownUp from '../icon_down_up'

const Default = props => {
  const { disabled, className } = props
  return (
    <Button disabled={disabled}>
      更多功能 &nbsp;&nbsp;
      <IconDownUp active={(className || '').includes('gm-popover-active')} />
    </Button>
  )
}

Default.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string
}

const FunctionSet = props => {
  const { data, right, disabled, children } = props
  const refPopover = React.createRef()

  const handleSelect = selected => {
    // 只有 onClick 才有意义
    if (!selected.onClick) {
      return
    }
    refPopover.current.apiDoSetActive(false)
    selected.onClick()
  }

  return (
    <Popover
      ref={refPopover}
      popup={<Overlay data={data} onSelect={handleSelect} isReverse={right} />}
      right={right}
      // type='hover'
      disabled={disabled}
      disabledBoxShadow
    >
      <div className='gm-inline-block'>
        {children || <Default disabled={disabled} />}
      </div>
    </Popover>
  )
}

FunctionSet.propTypes = {
  /** [{text, disabled, onClick, children}] */
  data: PropTypes.array.isRequired,
  right: PropTypes.bool,
  disabled: PropTypes.bool
}

export default FunctionSet
