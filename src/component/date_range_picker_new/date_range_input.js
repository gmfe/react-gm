import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import SVGCalendar from '../../../svg/calendar.svg'
import SVGCloseCircle from '../../../svg/close-circle.svg'

const DateRange = props => {
  const { begin, end, disabled, renderInputValue, canClear, clearDate } = props

  return (
    <div
      className={classNames('date-range-picker-new', {
        disabled
      })}
    >
      <SVGCalendar />
      <input
        className='date-input gm-cursor'
        type='text'
        placeholder='开始日期'
        value={renderInputValue(begin)}
        disabled={disabled}
        readOnly
      />
      <span className='gm-margin-left-10'> — </span>
      <input
        className='date-input gm-cursor'
        type='text'
        placeholder='结束日期'
        value={renderInputValue(end)}
        disabled={disabled}
        readOnly
      />
      {canClear && (
        <SVGCloseCircle
          className='gm-clean-icon gm-inline-block'
          onClick={clearDate}
        />
      )}
    </div>
  )
}

DateRange.propTypes = {
  /** 禁止选择 */
  disabled: PropTypes.bool,
  /** 选择的开始日期，Date()对象 */
  begin: PropTypes.object,
  /** 选择的结束日期，Date()对象 */
  end: PropTypes.object,
  /** 自定义渲染格式 */
  renderInputValue: PropTypes.func,
  /** 清除日期 */
  canClear: PropTypes.bool,
  /** 清除日期回调函数 */
  clearDate: PropTypes.func
}

DateRange.defaultProps = {
  renderInputValue: date => (date ? moment(date).format('YYYY-MM-DD') : '')
}

export default DateRange
