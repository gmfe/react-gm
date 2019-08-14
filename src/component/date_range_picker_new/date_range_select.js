import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'
import moment from 'moment'
import MulCalendar from '../calendar/mul_calendar'

/** 左侧选择参数列表 */
const list = [
  { name: 'today', text: getLocale('今天') },
  { name: 'last_7', text: getLocale('近7天') },
  { name: 'last_30', text: getLocale('近30天') }
]

const DateParamsList = props => {
  const { selectDateParams } = props

  return (
    <div className='date-range-select-left'>
      {_.map(list, item => (
        <span
          className='date-range-select-param'
          key={item.name}
          onClick={() => selectDateParams(item.name)}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}

DateParamsList.propTypes = {
  /** 选择回调函数 */
  selectDateParams: PropTypes.func
}

/** 日期选择 */
const pickerValueShow = value => {
  const len = value.length
  const startMonth = moment(value[0]).month()
  if (len === 2) {
    const endMonth = moment(value[1]).month()
    return startMonth === endMonth
      ? [value[0], moment(value[0]).add(1, 'month')]
      : value
  } else if (len === 1) {
    return [value[0], moment(value[0]).add(1, 'month')]
  } else {
    return [moment(), moment().add(1, 'month')]
  }
}

const RangeCalendar = props => {
  const { selectDates, onSelectDay, disabledDate } = props

  const _showDates = pickerValueShow(selectDates)
  // 左右日历当前选择日期
  const [selectLeft, setSelectLeft] = useState(_showDates[0])
  const [selectRight, setSelectRight] = useState(_showDates[1])

  useEffect(() => {
    if (selectDates.length === 2) {
      const newDates = pickerValueShow(selectDates)
      setSelectLeft(newDates[0])
      setSelectRight(newDates[1])
    }
  }, [selectDates])

  const changeYearOrMonth = (position, changeType, date) => {
    if (position === '1') {
      const newDate =
        changeType === 'month'
          ? moment(selectLeft).month(date)
          : moment(selectLeft).year(date)
      setSelectLeft(newDate)
    } else {
      const newDate =
        changeType === 'month'
          ? moment(selectRight).month(date)
          : moment(selectRight).year(date)
      setSelectRight(newDate)
    }
  }

  const handleSelectDay = (type, date) => {
    onSelectDay(type, date)
  }

  const isNearMonth = () => {
    const isNearMonth =
      moment(selectRight).month() - moment(selectLeft).month() === 1
    const isSameYear = moment(selectRight).year() === moment(selectLeft).year()
    return !isSameYear || (!isNearMonth && isSameYear)
  }

  return (
    <div className='date-range-select-right'>
      <MulCalendar
        className='gm-margin-right-10 gm-border-0'
        select={selectLeft}
        selectedBegin={selectDates[0]}
        selectedEnd={selectDates[1]}
        onSelect={handleSelectDay}
        disabledDate={disabledDate}
        toggleYearAndMonth={isNearMonth() ? 'all_1' : 'left_1'}
        onYearAndMonthChange={changeYearOrMonth}
      />
      <MulCalendar
        className='gm-border-0'
        select={selectRight}
        selectedBegin={selectDates[0]}
        selectedEnd={selectDates[1]}
        onSelect={handleSelectDay}
        disabledDate={disabledDate}
        toggleYearAndMonth={isNearMonth() ? 'all_2' : 'right_2'}
        onYearAndMonthChange={changeYearOrMonth}
      />
    </div>
  )
}

RangeCalendar.propTypes = {
  // 选中日期数组，数组元素为Date对象
  selectDates: PropTypes.array,
  // 日期选择回调函数
  onSelectDay: PropTypes.func,
  // 被选日期范围数组
  dateRangeSelect: PropTypes.array,
  disabledDate: PropTypes.func
}

/** 底部展示与按钮 */
const Bottom = props => {
  const { selectDates, onOk, onCancel } = props

  let begin = '开始日期'
  let end = '结束日期'

  const len = selectDates.length
  if (len === 1) {
    begin = moment(selectDates[0]).format('YYYY-MM-DD')
    end = moment(selectDates[0]).format('YYYY-MM-DD')
  } else if (len === 2) {
    begin = moment(selectDates[0]).format('YYYY-MM-DD')
    end = moment(selectDates[1]).format('YYYY-MM-DD')
  }

  const handleOk = () => {
    onOk(begin, end)
  }

  return (
    <div className='date-range-select-bottom'>
      <span className='date-range-select-bottom-text'>{`${begin} - ${end}`}</span>
      <div className='date-range-select-btn'>
        <button className='btn-default gm-margin-right-10' onClick={handleOk}>
          确定
        </button>
        <button className='btn-default' onClick={onCancel}>
          取消
        </button>
      </div>
    </div>
  )
}

Bottom.propTypes = {
  /** 选中日期数组，数组元素为Date对象 */
  selectDates: PropTypes.array,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

/** 日期段选择 */
const DateRangeSelect = props => {
  const { begin, end, onOk, onCancel, disabledDate } = props

  const _begin = begin === null ? moment() : begin
  const _end = end === null ? moment() : end
  const _selectDates = [_begin, _end]

  // selectDate 选中的日期值
  const [selectDates, setSelectDates] = useState([])

  // 左侧选择确定日期范围
  const handleSelectDateParams = type => {
    let dateList = null
    if (type === 'today') {
      const today = moment()
        .startOf('day')
        .toDate()

      dateList = [today, today]
    } else {
      const beforeDays = type.split('_')[1]

      const startDay = moment()
        .add(-beforeDays, 'days')
        .add(1, 'days')
        .startOf('day')
        .toDate()
      const yesterday = moment()
        .startOf('day')
        .toDate()

      dateList = [startDay, yesterday]
    }
    setSelectDates(dateList)
  }

  const handleSelectDay = (type, date) => {
    if (!selectDates.length || selectDates.length === 2) {
      setSelectDates([date])
    } else {
      // 判断选择日期先后
      const isSame = moment(date).isSame(moment(selectDates[0]))
      const isBefore = moment(date).isBefore(moment(selectDates[0]))

      isSame
        ? setSelectDates([date, date])
        : isBefore
        ? setSelectDates([date, selectDates[0]])
        : setSelectDates([selectDates[0], date])
    }
  }

  const handleOk = (begin, end) => {
    onOk(begin, end)
  }

  return (
    <div className='date-range-select'>
      <div className='date-range-select-top'>
        <DateParamsList selectDateParams={handleSelectDateParams} />
        <RangeCalendar
          selectDates={selectDates.length ? selectDates : _selectDates}
          onSelectDay={handleSelectDay}
          disabledDate={disabledDate}
        />
      </div>
      <Bottom
        selectDates={selectDates.length === 2 ? selectDates : _selectDates}
        onOk={handleOk}
        onCancel={onCancel}
      />
    </div>
  )
}

DateRangeSelect.displayName = 'DateRangeSelect'

DateRangeSelect.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  disabledDate: PropTypes.func
}

export default DateRangeSelect
