import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Flex from '../flex'
import RangeCalendar from '../calendar/range_calendar'

const Two = props => {
  const {
    begin,
    end,
    onSelect,
    min,
    max,
    disabledDate,
    enabledTimeSelect
  } = props

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
  // 告诉 此时hover的日期
  const [hoverDay, setHoverDay] = useState(null)

  // 可以选择时间时，针对快速选择日期项需要更新日历
  useEffect(() => {
    const beginMonth = moment(begin).month()
    const endMonth = moment(end).month()

    if (enabledTimeSelect && begin && end) {
      // begin && end 同月份
      if (beginMonth === endMonth) {
        const willMonth = moment(will).month()
        const willEndMonth = moment(will_end).month()
        // 当前选择月份不在展示中 -- 针对快速选择
        if (beginMonth !== willMonth && beginMonth !== willEndMonth) {
          setWill(begin)
          setWillEnd(moment(begin).add(1, 'month'))
        }
      } else {
        setWill(begin)
        setWillEnd(end)
      }
    }
  }, [begin, end])

  const handleWillChange = date => {
    setWill(date)
  }

  const handleWillChangeByEnd = date => {
    setWillEnd(date)
  }

  const disabledYearOrMonth = () => {
    // 两个日历显示为 同年相邻月份，disabled相应的 年 / 月 切换按钮
    const _begin = moment(will)
      .startOf('month')
      .add(1, 'month')
      .toDate()
    const _end = moment(will_end)
      .startOf('month')
      .toDate()

    return +_begin === +_end
  }

  return (
    <Flex className='gm-padding-lr-10 gm-padding-tb-5'>
      <RangeCalendar
        className='gm-border-0 gm-date-range-picker-overlay-calendar'
        begin={begin}
        end={end}
        willActiveSelected={will}
        onWillActiveSelected={handleWillChange}
        onSelect={onSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
        disabledYearAndMonth={disabledYearOrMonth() ? 'right' : undefined}
        hoverDay={hoverDay}
        onHoverDay={setHoverDay}
      />
      <div className='gm-date-range-picker-gap gm-border-bottom' />
      <RangeCalendar
        className='gm-border-0 gm-date-range-picker-overlay-calendar'
        begin={begin}
        end={end}
        willActiveSelected={will_end}
        onWillActiveSelected={handleWillChangeByEnd}
        onSelect={onSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
        disabledYearAndMonth={disabledYearOrMonth() ? 'left' : undefined}
        hoverDay={hoverDay}
        onHoverDay={setHoverDay}
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
  disabledDate: PropTypes.func,
  enabledTimeSelect: PropTypes.bool
}

export default Two
