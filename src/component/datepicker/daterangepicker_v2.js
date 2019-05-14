import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { SvgCalendar } from 'gm-svg'
import classNames from 'classnames'
import Calendar from '../calendar'
import Flex from '../flex'
import List from '../list'
import Tip from '../tip'
import Popover from '../popover'
import _ from 'lodash'
import { getLocale } from '../../locales'

const getComputedDate = type => {
  switch (type) {
    case 'today': {
      const today = moment().startOf('day').toDate()
      return [today, today]
    }

    case 'yesterday': {
      const yesterday = moment().startOf('day').add(-1, 'days').toDate()
      return [yesterday, yesterday]
    }

    case 'thisWeek': {
      const weekStart = moment().startOf('isoWeek').toDate() // isoWeek 周一为week的第一天
      const today = moment().startOf('day').toDate() // 结束日为当天
      return [weekStart, today]
    }

    case 'lastWeek': {
      const lastWeek = moment().add(-1, 'weeks')
      const weekStart = lastWeek.startOf('isoWeek').toDate() // isoWeek 周一为week的第一天
      const weekEnd = lastWeek.endOf('isoWeek').toDate()
      return [weekStart, weekEnd]
    }

    case 'thisMonth': {
      const monthStart = moment().startOf('month').toDate()
      const today = moment().startOf('day').toDate()
      return [monthStart, today]
    }

    case 'lastMonth': {
      const lastMonth = moment().add(-1, 'months')
      const monthStart = lastMonth.startOf('month').toDate()
      const monthEnd = lastMonth.endOf('month').toDate()
      return [monthStart, monthEnd]
    }

    case 'last_7':
    case 'last_14':
    case 'last_30':
    case 'last_60':
    case 'last_90': {
      const beforeDays = type.split('_')[1]
      const startDay = moment().add(-beforeDays, 'days').startOf('day').toDate()
      const yesterday = moment().add(-1, 'days').startOf('day').toDate()
      return [startDay, yesterday]
    }

    default:
      throw new Error('没有这个日期类型') // 抛出错误
  }
}

const CalendarPanel = props => {
  const { begin, end, format, onChange, beginProps, endProps, calendarPanelWidth } = props

  const today = moment().startOf('day').toDate()
  const [beginDate, setBeginDate] = useState(begin || today)
  const [endDate, setEndDate] = useState(end || today)

  return (
    <Flex style={{ width: `${calendarPanelWidth}px` }}>
      <div className='gm-padding-10'>
        <div className='gm-padding-5 text-center'>
          {getLocale('dateRangePickerV2', 'startTime')}：
          <span className='text-primary'>{moment(beginDate).format(format)}</span>
        </div>
        <Calendar
          selected={beginDate}
          onSelect={(b) => {
            setBeginDate(b)
          }}
          {...beginProps}
        />
      </div>

      <div className='gm-padding-10'>
        <div className='gm-padding-5 text-center'>
          {getLocale('dateRangePickerV2', 'endTime')}：
          <span className='text-primary'>{moment(endDate).format(format)}</span>
        </div>
        <Calendar
          selected={endDate}
          onSelect={(e) => {
            setEndDate(e)
          }}
          min={beginDate}
          {...endProps}
        />
      </div>

      <Flex className='gm-position-relative gm-border-left gm-padding-10'>
        <List className='gm-border-0'
          onSelect={selected => {
            const [begin, end] = getComputedDate(selected)
            onChange(begin, end)
            window.document.body.click()
          }}
          data={getLocale('dateRangePickerV2', 'dateList1')}
        />
        <List className='gm-border-0'
          onSelect={selected => {
            const [begin, end] = getComputedDate(selected)
            onChange(begin, end)
            window.document.body.click()
          }}
          data={getLocale('dateRangePickerV2', 'dateList2')}
        />

        <button
          onClick={() => {
            if (moment(beginDate).isAfter(endDate)) {
              Tip.warning(getLocale('dateRangePickerV2', 'error'))
            } else {
              onChange(beginDate, endDate)
              window.document.body.click()
            }
          }}
          className='btn btn-primary btn-xs'
          style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {getLocale('dateRangePickerV2', 'ok')}
        </button>
      </Flex>
    </Flex>
  )
}

const DateRangePickerV2 = props => {
  const {
    begin, end,
    beginPlaceholder, endPlaceholder,
    format, children, onChange,
    className, style, canClear, disabled,
    calendarPanelWidth
  } = props

  let picker = null
  if (children) {
    picker = children(begin, end)
  } else {
    const beginPicker = begin ? moment(begin).format(format) : beginPlaceholder
    const endPicker = end ? moment(end).format(format) : endPlaceholder
    picker = `${beginPicker} ~ ${endPicker}`
  }

  const [isInRight, setIsInRight] = useState(false)
  const pickerRef = useRef(null)

  const onPickerClick = () => {
    const { left } = pickerRef.current.getBoundingClientRect()
    // 使日历在视窗右边缘弹出
    if (window.document.body.clientWidth - left < calendarPanelWidth) {
      setIsInRight(true)
    } else {
      setIsInRight(false)
    }
  }

  return (
    <div
      ref={pickerRef}
      className={classNames('gm-daterangepickerv2', { 'disabled': disabled }, className)}
      style={style}
    >
      <Popover
        type='click'
        animName
        right={isInRight}
        popup={<CalendarPanel {...props}/>}
      >
        <div className={'gm-daterangepickerv2-inner'} disabled={disabled} onClick={onPickerClick}>
          {picker}
          <SvgCalendar className='gm-daterangepickerv2-icon'/>
        </div>
      </Popover>
      {canClear && (begin || end) && (
        <button type='button' className='gm-daterangepickerv2-clear-btn close'
          onClick={() => { onChange(null, null) }}
        >&times;</button>)}
    </div>
  )
}

DateRangePickerV2.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,

  beginProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),
  endProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),

  beginPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,

  children: PropTypes.func,

  disabled: PropTypes.bool,
  canClear: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,

  onChange: PropTypes.func
}

CalendarPanel.propTypes = DateRangePickerV2.propTypes

DateRangePickerV2.defaultProps = {
  beginPlaceholder: getLocale('dateRangePickerV2', 'startTime'),
  endPlaceholder: getLocale('dateRangePickerV2', 'endTime'),

  format: 'YYYY-MM-DD',
  onChange: _.noop,
  calendarPanelWidth: 602 // 日历给定宽度,防止popup定位不准确
}

export default DateRangePickerV2
