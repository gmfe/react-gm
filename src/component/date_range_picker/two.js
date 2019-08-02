import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Flex from '../flex'
import RangeCalendar from '../calendar/range_calendar'

const Two = props => {
  const { begin, end, onSelect, min, max, disabledDate } = props

  const _will = begin || moment().toDate()

  // 告诉日历应该显示的月份
  const [will, setWill] = useState(_will)

  const handleWillChange = date => {
    setWill(date)
  }

  const handleWillChangeByEnd = date => {
    setWill(
      moment(date)
        .add(-1, 'month')
        .toDate()
    )
  }

  return (
    <Flex className='gm-padding-10'>
      <RangeCalendar
        className='gm-border-0'
        begin={begin}
        end={end}
        willActiveSelected={will}
        onWillActiveSelected={handleWillChange}
        onSelect={onSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
      <div className='gm-gap-10' />
      <RangeCalendar
        className='gm-border-0 gm-date-range-picker-overlay-second-calendar'
        begin={begin}
        end={end}
        willActiveSelected={moment(will)
          .add(1, 'month')
          .toDate()}
        onWillActiveSelected={handleWillChangeByEnd}
        onSelect={onSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
    </Flex>
  )
}

Two.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func
}

export default Two
