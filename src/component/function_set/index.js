import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Popover from '../popover'
import Overlay from './overlay'
import IconDownUp from '../icon_down_up'
import _ from 'lodash'

const Default = props => {
  const { disabled, active } = props
  return (
    <Button className='btn-primary btn-plain' disabled={disabled}>
      更多功能 &nbsp;
      <IconDownUp active={active} />
    </Button>
  )
}

Default.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool
}

const Inner = props => {
  const { disabled, className, children, ...rest } = props
  return (
    <div {...rest} className='gm-inline-block'>
      {children || (
        <Default
          active={(className || '').includes('gm-popover-active')}
          disabled={disabled}
        />
      )}
    </div>
  )
}

Inner.propTypes = {
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

  const newData = _.filter(data, d => d.show !== false)

  if (newData.length === 0) {
    return null
  }

  return (
    <Popover
      ref={refPopover}
      popup={
        <Overlay data={newData} onSelect={handleSelect} isReverse={right} />
      }
      right={right}
      type='hover'
      disabled={disabled}
      pureContainer
    >
      <Inner disabled={disabled}>{children}</Inner>
    </Popover>
  )
}

FunctionSet.propTypes = {
  /** [{text, disabled, show, onClick, children}] */
  data: PropTypes.array.isRequired,
  right: PropTypes.bool,
  disabled: PropTypes.bool
}

export default FunctionSet
