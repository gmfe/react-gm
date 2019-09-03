import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Flex from '../flex'
import RangeCalendar from '../calendar/range_calendar'

const Two = props => {
  const { begin, end, onSelect, min, max, disabledDate } = props

  const _will = begin || moment().toDate()
  let _will_end = null

  // 判断 begin && end 是否同月份，确定 日历2 应该显示的月份
  if (begin && end) {
    const isSameMonth = moment(begin).month() === moment(end).month()
    _will_end = isSameMonth
      ? moment(begin)
          .add(1, 'month')
          .toDate()
      : end
  } else {
    _will_end = moment()
      .add(1, 'month')
      .toDate()
  }

  // 告诉 日历1 应该显示的月份
  const [will, setWill] = useState(_will)
  // 告诉 日历2 应该显示的月份
  const [will_end, setWillEnd] = useState(_will_end)

  const handleWillChange = date => {
    setWill(date)
  }

  const handleWillChangeByEnd = date => {
    setWillEnd(date)
  }

  const disabledYearOrMonth = () => {
    // 两个日历显示为 同年相邻月份，disabled相应的 年 / 月 切换按钮
    const _begin = moment(will)
      .startOf('day')
      .add(1, 'month')
      .toDate()
    const _end = moment(will_end)
      .startOf('day')
      .toDate()

    return +_begin === +_end
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
        disabledYearAndMonth={disabledYearOrMonth() ? 'right' : undefined}
      />
      <div className='gm-date-range-picker-overlay-calendar-gap gm-border-bottom' />
      <RangeCalendar
        className='gm-border-0 gm-date-range-picker-overlay-second-calendar'
        begin={begin}
        end={end}
        willActiveSelected={will_end}
        onWillActiveSelected={handleWillChangeByEnd}
        onSelect={onSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
        disabledYearAndMonth={disabledYearOrMonth() ? 'left' : undefined}
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
