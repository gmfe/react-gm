import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import SVGCalendar from '../../../svg/calendar.svg'
import SVGCloseCircle from '../../../svg/close-circle.svg'

// 后续 svg 需替换
const DateRange = props => {
  const {
    begin,
    end,
    disabled,
    renderInputValue,
    canClear,
    clearDate,
    className,
    totalWidth
  } = props

  return (
    <div
      className={classNames('date-range-picker-new', {
        disabled,
        className
      })}
      style={{ width: totalWidth }}
    >
      <SVGCalendar />
      <input
        className='date-input gm-cursor'
        style={{ width: totalWidth === '300px' ? '115px' : '45%' }}
        type='text'
        placeholder='开始日期'
        value={renderInputValue(begin)}
        disabled={disabled}
        readOnly
      />
      <span>—</span>
      <input
        className='date-input gm-cursor'
        style={{ width: totalWidth === '300px' ? '115px' : '45%' }}
        type='text'
        placeholder='结束日期'
        value={renderInputValue(end)}
        disabled={disabled}
        readOnly
      />
      {canClear && (
        <div className='gm-inline-block gm-clean-date'>
          <SVGCloseCircle className='gm-clean-date-icon' onClick={clearDate} />
        </div>
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
  clearDate: PropTypes.func,
  className: PropTypes.string,
  /** 自定义宽度 */
  totalWidth: PropTypes.string
}

DateRange.defaultProps = {
  renderInputValue: date => (date ? moment(date).format('YYYY-MM-DD') : ''),
  totalWidth: '300px'
}

export default DateRange
