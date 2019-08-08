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
// 记录每一次选择的日期, 元素形式{ date, type }
// type: 1 左侧日历  2 右侧日历
let hasSelectDay = []

const CalendarSelect = props => {
  const {
    dateStart,
    dateEnd,
    selectedList,
    handleSelectDay,
    begin,
    end
  } = props

  // _select1 左侧日历选择日期, array
  // _select2 右侧日历选择日期, array
  // showToggle 是否展示整个日历组的切换
  const isSameMonth = moment(begin).month() === moment(end).month()
  let _select1 = []
  let _select2 = []
  let showToggle = false

  if (isSameMonth) {
    // 暂定 dateStart = dateEnd时展示 dateStart前一个月 && dateStart月份
    _select2 = [moment(begin), moment(end)]
  } else {
    _select1 = [moment(begin)]
    _select2 = [moment(end)]
  }

  const [select1, setSelect1] = useState(_select1)
  const [select2, setSelect2] = useState(_select2)

  const setNewSelect = (select1, select2) => {
    setSelect1(select1)
    setSelect2(select2)
  }

  const SetleftSelect = () => {
    let _select1 = select1.slice()
    let _select2 = select2.slice()

    const startMonth = moment(selectedList[0]).month()
    const endMonth = moment(selectedList[1]).month()
    const select1Month = moment(select1[0]).month()

    if (startMonth === endMonth) {
      select1.length && startMonth === select1Month
        ? (_select1 = selectedList)
        : (_select2 = selectedList)
    } else {
      _select1.push(selectedList[0])
      _select2.push(selectedList[1])
    }
    setNewSelect(_select1, _select2)
  }

  useEffect(() => {
    // 已选择两个日期，更新
    if (hasSelectDay.length === 2) {
      const list1 = []
      const list2 = []
      _.each(hasSelectDay, item => {
        item.type === 1 ? list1.push(item.date) : list2.push(item.date)
      })
      setNewSelect(list1, list2)
      // 清空已选择日期
      hasSelectDay = []
    }
  }, [begin, end])
  useEffect(() => {
    // 选中左侧参数，更新日历
    if (selectedList.length) {
      SetleftSelect()
    }
  }, [selectedList])

  const changeMonthOrYear = (type, date, list) => {
    let _select = []
    if (list.length) {
      _select = _.map(list, item => {
        return type === 'month'
          ? moment(item).month(date)
          : moment(item).year(date)
      })
    } else {
      const item = type === 'month' ? moment().month(date) : moment().year(date)
      _select.push(item)
    }
    return _select
  }

  // 选择日期判断
  const changeDate = (type, date) => {
    if (hasSelectDay.length) {
      let _begin = null
      let _end = null
      const one = moment(date)
      const two = moment(hasSelectDay[0].date)
      if (hasSelectDay[0].type === type) {
        const _before = two.isBefore(one)
        _begin = _before ? two : one
        _end = _before ? one : two
      } else {
        _begin = type === 1 ? one : two
        _end = type === 2 ? one : two
      }
      hasSelectDay.push({ date, type })
      handleSelectDay(_begin, _end)
    } else {
      hasSelectDay.push({ date, type })
      const one = select1.slice()
      const two = select2.slice()
      type === 1
        ? setNewSelect([hasSelectDay[0].date], two)
        : setNewSelect(one, [hasSelectDay[0].date])
    }
  }

  // 选择 年 / 月 / 日 更新日历
  const handleSelectDate = (calendar, type, date) => {
    if (type === 'day') {
      calendar === 'begin' ? changeDate(1, date) : changeDate(2, date)
    } else {
      const object = calendar === 'begin' ? select1 : select2
      const _select = changeMonthOrYear(type, date, object)
      calendar === 'begin' ? setSelect1(_select) : setSelect2(_select)
    }
  }

  const handleSelectStartDate = (type, date) => {
    handleSelectDate('begin', type, date)
  }

  const handleSelectEndDate = (type, date) => {
    handleSelectDate('end', type, date)
  }

  // dateOne, dateTwo 防止日历选择为空
  const dateOne = select1.length
    ? moment(select1[0])
    : moment(select2[0]).subtract(1, 'M')
  const dateTwo = select2.length
    ? moment(select2[0])
    : moment(select1[0]).add(1, 'M')

  if (select1.length) {
    const month1 = moment(select1[0]).month()
    const month2 = moment(select2[0]).month()
    const year1 = moment(select1[0]).year()
    const year2 = moment(select2[0]).year()

    showToggle = (month2 - month1 !== 1 && year2 === year1) || year2 !== year1
  }

  console.log(select1, select2)

  return (
    <div className='date-range-select-right'>
      <CalendarV2
        className='gm-margin-right-10 gm-border-0'
        type={1}
        selected={select1}
        date={dateOne}
        showToggle={showToggle}
        onSelect={handleSelectStartDate}
        selectedList={selectedList}
      />
      <CalendarV2
        className='gm-border-0'
        type={2}
        selected={select2}
        min={dateStart}
        date={dateTwo}
        showToggle={showToggle}
        onSelect={handleSelectEndDate}
        selectedList={selectedList}
      />
    </div>
  )
}

CalendarSelect.propTypes = {
  dateStart: PropTypes.object,
  dateEnd: PropTypes.object,
  begin: PropTypes.object,
  end: PropTypes.object,
  handleSelectDay: PropTypes.func,
  /** 被选中日期 */
  selectedList: PropTypes.array
}

/** 底部展示与按钮 */
const Bottom = props => {
  const { begin, end, onOk, onCancel, selectDate } = props

  const _begin = begin ? moment(begin).format('YYYY-MM-DD') : '开始日期'
  const _end = end ? moment(end).format('YYYY-MM-DD') : '结束日期'

  const handleOk = () => {
    selectDate(begin, end)
    onOk()
  }

  return (
    <div className='date-range-select-bottom'>
      <span className='date-range-select-bottom-text'>{`${_begin} - ${_end}`}</span>
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
  /** 选择的开始日期 */
  begin: PropTypes.object,
  /** 选择的结束日期 */
  end: PropTypes.object,
  /** 日期更新回调函数，参数: 开始日期 && 结束日期 */
  selectDate: PropTypes.func,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

/** 日期段选择 */
const DateRangeSelect = props => {
  const { dateStart, dateEnd, onOk, onCancel, selectDate } = props

  const _begin = moment(dateStart) || moment()
  const _end = moment(dateEnd) || moment()

  // begin && end 记录展开点击选择的日期
  const [begin, setBeginDate] = useState(_begin)
  const [end, setEndDate] = useState(_end)
  // beSelectList 记录左侧选择的日期范围
  const [selectedList, setSelectList] = useState([])

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
        .startOf('day')
        .toDate()
      const yesterday = moment()
        .add(-1, 'days')
        .startOf('day')
        .toDate()

      dateList = [startDay, yesterday]
    }
    setSelectList(dateList)
  }

  const handleSelectDay = (_begin, _end) => {
    setBeginDate(_begin)
    setEndDate(_end)
  }

  return (
    <div className='date-range-select'>
      <div className='date-range-select-top'>
        <DateParamsList selectDateParams={handleSelectDateParams} />
        <CalendarSelect
          dateStart={dateStart}
          dateEnd={dateEnd}
          begin={begin}
          end={end}
          selectedList={selectedList}
          handleSelectDay={handleSelectDay}
        />
      </div>
      <Bottom
        begin={begin}
        end={end}
        onOk={onOk}
        onCancel={onCancel}
        selectDate={selectDate}
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
  selectDate: PropTypes.func
}

export default DateRangeSelect
