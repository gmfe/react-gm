import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'
import CalendarV2 from '../calendar/calendarV2'
import moment from 'moment'

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

// 出具体样式以及详细交互后 优化
const RangeCalendar = props => {
  const { selectDates, onSelectDay, dateRangeSelect, disabledDate } = props

  const paramDates = dateRangeSelect.length ? dateRangeSelect : selectDates
  const _showDates = pickerValueShow(paramDates)

  // showDates 保存变化的日期值
  const [showDates, setShowDates] = useState(_showDates)

  useEffect(() => {
    if (selectDates.length === 2) {
      const newDates = pickerValueShow(selectDates)
      setShowDates(newDates)
    }
  }, [selectDates])
  useEffect(() => {
    if (dateRangeSelect.length) {
      const newDates = pickerValueShow(dateRangeSelect)
      setShowDates(newDates)
    }
  }, [dateRangeSelect])

  const changeYearOrMonth = (type, changeType, date) => {
    if (type === 1) {
      const newDate =
        changeType === 'month'
          ? moment(showDates[0]).month(date)
          : moment(showDates[0]).year(date)
      setShowDates([newDate, showDates[1]])
    } else {
      const newDate =
        changeType === 'month'
          ? moment(showDates[1]).month(date)
          : moment(showDates[1]).year(date)
      setShowDates([showDates[0], newDate])
    }
  }

  const handleSelectDay = (type, date) => {
    onSelectDay(type, date)
  }

  return (
    <div className='date-range-select-right'>
      <CalendarV2
        className='gm-margin-right-10 gm-border-0'
        type={1}
        showDates={showDates}
        selectDates={selectDates}
        changeYearOrMonth={changeYearOrMonth}
        onSelect={handleSelectDay}
        dateRangeSelect={dateRangeSelect}
        disabledDate={disabledDate}
      />
      <CalendarV2
        className='gm-border-0'
        type={2}
        showDates={showDates}
        selectDates={selectDates}
        changeYearOrMonth={changeYearOrMonth}
        onSelect={handleSelectDay}
        dateRangeSelect={dateRangeSelect}
        disabledDate={disabledDate}
      />
    </div>
  )
}

RangeCalendar.propTypes = {
  /** 选中日期数组，数组元素为Date对象 */
  selectDates: PropTypes.array,
  /** 日期选择回调函数 */
  onSelectDay: PropTypes.func,
  /** 被选日期范围数组 */
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
  const { dateStart, dateEnd, onOk, onCancel, disabledDate } = props

  const begin = dateStart === null ? moment() : dateStart
  const end = dateEnd === null ? moment() : dateEnd
  const _selectDates = [begin, end]

  // selectDate 选中的日期值
  const [selectDates, setSelectDates] = useState([])
  // dateRangeSelect 左侧被选择状态
  const [dateRangeSelect, setDateRangeSelect] = useState([])

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
    setDateRangeSelect(dateList)
    setSelectDates(dateList)
  }

  const handleSelectDay = (type, date) => {
    if (!selectDates.length || selectDates.length === 2) {
      setSelectDates([date])
      setDateRangeSelect([])
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
          dateRangeSelect={dateRangeSelect}
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
  dateStart: PropTypes.object,
  dateEnd: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  disabledDate: PropTypes.func
}

export default DateRangeSelect
