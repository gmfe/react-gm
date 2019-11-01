import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../calendar'
import classNames from 'classnames'
import Popover from '../popover'
import _ from 'lodash'
import SVGCalendar from '../../../svg/calendar.svg'

/**
 * DateRangePicker -- 日期段选择
 *
 * 主要功能：日期段选择
 * */

const DateRangePicker = props => {
  const dateRangePickerRef = useRef(null)
  const endDateRef = useRef(null)

  const {
    begin,
    end,
    onChange,
    beginLabel,
    endLabel,
    beginProps,
    endProps,
    disabled,
    canClear,
    beginRenderInputValue,
    endRenderInputValue,
    className
  } = props

  const handleSelectBeginDate = date => {
    onChange(date, date <= end ? end : date)
    // 选择开始日期后，调用结束日期框点击事件，弹出日历组件进行结束日期的选择
    endDateRef.current.click()
  }

  const handleSelectEndDate = date => {
    onChange(begin <= date ? begin : date, date)
    // 所有日期选择完成后，关闭弹出的日历组件
    dateRangePickerRef.current.click()
  }

  const handleClearBeginDate = () => {
    onChange(null, end)
  }

  const handleClearEndDate = () => {
    onChange(begin, null)
  }

  const renderBeginInputValue = () => {
    if (begin) {
      return beginRenderInputValue
        ? beginRenderInputValue(begin)
        : moment(begin).format('YYYY-MM-DD')
    } else {
      return <span>&nbsp;</span>
    }
  }

  const renderEndInputValue = () => {
    if (end) {
      return endRenderInputValue
        ? endRenderInputValue(end)
        : moment(end).format('YYYY-MM-DD')
    } else {
      return <span>&nbsp;</span>
    }
  }

  return (
    <div
      ref={dateRangePickerRef}
      className={classNames(
        'gm-date-range-picker gm-inline-block',
        {
          'gm-date-range-picker-can-clear': canClear,
          disabled
        },
        className
      )}
    >
      {beginLabel && <span className='gm-padding-right-5'>{beginLabel}</span>}
      <div className='gm-date-range-picker-item gm-inline-block gm-position-relative'>
        <Popover
          animName
          disabled={disabled || false}
          popup={
            <Calendar
              selected={begin}
              onSelect={handleSelectBeginDate}
              className='gm-border-0'
              {...beginProps}
            />
          }
        >
          <div
            className={classNames('gm-date-range-picker-inner gm-cursor', {
              disabled
            })}
          >
            {renderBeginInputValue()}
          </div>
        </Popover>
        {canClear && begin && (
          <button
            type='button'
            className='gm-date-range-picker-clear-btn close'
            onClick={handleClearBeginDate}
          >
            &times;
          </button>
        )}
        <SVGCalendar />
      </div>
      {!endLabel && <span> ~ </span>}
      {endLabel && <span className='gm-padding-lr-5'>{endLabel}</span>}
      <div className='gm-date-range-picker-item gm-inline-block gm-position-relative'>
        <Popover
          animName
          disabled={disabled || false}
          component={<div className='gm-inline-block' />}
          popup={
            <Calendar
              selected={end}
              onSelect={handleSelectEndDate}
              className='gm-border-0'
              min={begin}
              {...endProps}
            />
          }
        >
          <div
            ref={endDateRef}
            className={classNames('gm-date-range-picker-inner gm-cursor', {
              disabled
            })}
          >
            {renderEndInputValue()}
          </div>
        </Popover>
        {canClear && end && (
          <button
            type='button'
            className='gm-date-range-picker-clear-btn close'
            onClick={handleClearEndDate}
          >
            &times;
          </button>
        )}
        <SVGCalendar />
      </div>
    </div>
  )
}

DateRangePicker.displayName = 'DateRangePicker'

DateRangePicker.propTypes = {
  /** 有初始值时为Date对象，定义选择的开始日期 */
  begin: PropTypes.object,
  /** 有初始值为Date对象，定义选择的结束日期 */
  end: PropTypes.object,
  /** 开始日期框标签展示 */
  beginLabel: PropTypes.string,
  /** 结束日期框标签展示 */
  endLabel: PropTypes.string,
  /** 点击选择日期回调，传入两个Date对象参数begin && end，表示选择的开始日期 && 结束日期 */
  onChange: PropTypes.func,
  /** 定义日期是否可选 */
  disabled: PropTypes.bool,
  /** 定义所选时间是否可以清除 */
  canClear: PropTypes.bool,

  /** 结构是DatePicker的 {'{min max disabledDate}'}
   *  min为开始日期的最小可选日期
   *  max为开始日期的最大可选日期
   *  disabledDate为定义不可选择的日期函数，传入参数为Date对象，返回true or false
   */
  beginProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),
  /** 定义开始日期框value的展示形式，传入参数为Date对象，返回展示格式，如定义value展示为 'xx年‘ */
  beginRenderInputValue: PropTypes.func,

  /** 结构是DatePicker的 {'{min max disabledDate}'}
   *  min为结束日期的最小可选日期
   *  max为结束日期的最大可选日期
   *  disabledDate为定义不可选择的日期函数，传入参数为Date对象，返回true or false
   */
  endProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),
  /** 定义开始日期框value的展示形式，传入参数为Date对象，返回展示格式，如定义value展示为 'xx年-xx月-xx日‘ */
  endRenderInputValue: PropTypes.func,
  className: PropTypes.string
}

DateRangePicker.defaultProps = {
  onChange: _.noop
}

export default DateRangePicker
