import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'
import DateRangeSelect from './date_range_select'
import DateRange from './date_range_input'

/**
 * DateRangePickerNew -- 日期段选择
 *
 * 主要功能：提供日期段选择
 * */

const DateRangePickerNew = props => {
  const dateRangePickerNewRef = useRef(null)
  const {
    dateStart,
    dateEnd,
    disabled,
    onChange,
    renderInputValue,
    canClear
  } = props

  const handleOk = () => {
    dateRangePickerNewRef.current.click()
  }

  const handleCancel = () => {
    dateRangePickerNewRef.current.click()
  }

  const selectDate = (_begin, _end) => {
    onChange(_begin, _end)
  }

  const clearDate = () => {
    onChange(null, null)
  }

  const popup = (
    <DateRangeSelect
      dateStart={dateStart}
      dateEnd={dateEnd}
      onOk={handleOk}
      onCancel={handleCancel}
      selectDate={selectDate}
    />
  )

  return (
    <div ref={dateRangePickerNewRef}>
      <Popover animName disabled={disabled || false} popup={popup}>
        <div>
          <DateRange
            startDate={dateStart}
            endDate={dateEnd}
            disabled={disabled || false}
            canClear={canClear || false}
            clearDate={clearDate}
            renderInputValue={renderInputValue}
          />
        </div>
      </Popover>
    </div>
  )
}

DateRangePickerNew.displayName = 'DateRangePickerNew'

DateRangePickerNew.propTypes = {
  disabled: PropTypes.bool,
  dateStart: PropTypes.object,
  dateEnd: PropTypes.object,
  onChange: PropTypes.func,
  renderInputValue: PropTypes.func,
  canClear: PropTypes.bool
}

export default DateRangePickerNew
