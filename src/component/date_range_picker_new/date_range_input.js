import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import SVGCalendar from '../../../svg/calendar.svg'
import SVGCloseCircle from '../../../svg/close-circle.svg'

const DateRange = props => {
  const {
    startDate,
    endDate,
    disabled,
    inputValueRender,
    canClear,
    clearDate
  } = props

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
        value={inputValueRender(startDate)}
        disabled={disabled}
        readOnly
      />
      <span className='gm-margin-left-10'> — </span>
      <input
        className='date-input gm-cursor'
        type='text'
        placeholder='结束日期'
        value={inputValueRender(endDate)}
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
  disabled: PropTypes.bool,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  /** 自定义渲染格式 */
  inputValueRender: PropTypes.func,
  canClear: PropTypes.bool,
  clearDate: PropTypes.func
}

DateRange.defaultProps = {
  inputValueRender: date => (date ? moment(date).format('YYYY-MM-DD') : '')
}

export default DateRange
