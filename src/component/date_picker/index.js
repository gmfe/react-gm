import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../calendar'
import classNames from 'classnames'
import Popover from '../popover'

/**
 * DatePicker -- 日期选择
 *
 * 主要功能：日期选择
 * */

const DatePicker = props => {
  const datepickerRef = useRef(null)

  const {
    date,
    min,
    max,
    disabledDate,
    className,
    children,
    placeholder,
    disabled,
    inputValueRender,
    canClear,
    onChange
  } = props

  const handleSelectDate = date => {
    onChange(date)
    // 选择日期后直接关闭弹出的日历组件
    datepickerRef.current.click()
  }

  const handleClearDate = () => {
    onChange()
  }

  const popup = (
    <Calendar
      className='gm-border-0'
      selected={date}
      onSelect={handleSelectDate}
      min={min}
      max={max}
      disabledDate={disabledDate}
    />
  )

  // input渲染的数据
  const renderInput = () => {
    if (date) {
      return inputValueRender
        ? inputValueRender(date)
        : moment(date).format('YYYY-MM-DD')
    } else {
      return placeholder
    }
  }

  const renderChildren = () => {
    if (children === undefined) {
      return (
        <div
          className={classNames(
            'gm-datepicker-inner gm-cursor',
            { disabled },
            className
          )}
        >
          {renderInput()}
        </div>
      )
    }
    return children
  }

  return (
    <div
      ref={datepickerRef}
      className={classNames(
        'gm-datepicker gm-inline-block gm-position-relative',
        {
          disabled,
          'gm-datepicker-placeholder': !date
        },
        className
      )}
    >
      <Popover popup={popup} animName disabled={disabled || false}>
        {renderChildren()}
      </Popover>
      {children === undefined && canClear && date && (
        <button
          type='button'
          className='gm-datepicker-clear-btn close'
          onClick={handleClearDate}
        >
          &times;
        </button>
      )}
      {children === undefined && <i className='xfont xfont-calendar' />}
    </div>
  )
}

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  /** Date对象，表示选择的日期 */
  date: PropTypes.object,
  /** 选择日期回调，传入参数为Date对象（若canClear为true，则清除date时会传null） */
  onChange: PropTypes.func.isRequired,
  /** 定义所选时间是否可以清除 */
  canClear: PropTypes.bool,
  /** - */
  placeholder: PropTypes.string,
  /** 定义日期是否可选 */
  disabled: PropTypes.bool,

  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 定义不可选择的日期，传入参数为Date对象，返回true or false */
  disabledDate: PropTypes.func,
  /** 定义日期框内value的展示形式，传入参数为Date对象，返回展示格式，如定义value展示为 'xx月-xx日‘ */
  inputValueRender: PropTypes.func,

  children: PropTypes.any,
  className: PropTypes.string
}

export default DatePicker
