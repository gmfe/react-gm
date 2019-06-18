import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../calendar'
import classNames from 'classnames'
import Popover from '../popover'

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.datepicker = null
    this.handleSelect = ::this.handleSelect
    this.handleClear = ::this.handleClear
  }

  handleSelect(date) {
    this.props.onChange(date)
    setTimeout(() => {
      this.datepicker.click()
    }, 0)
  }

  handleClear() {
    this.props.onChange()
  }

  render() {
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
      canClear
    } = this.props

    const popup = (
      <Calendar
        className='gm-border-0'
        selected={date}
        onSelect={this.handleSelect}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
    )

    return (
      <div
        ref={ref => (this.datepicker = ref)}
        className={classNames(
          'gm-datepicker gm-inline-block gm-position-relative',
          {
            disabled: disabled,
            'gm-datepicker-placeholder': !date
          },
          className
        )}
      >
        <Popover popup={popup} animName>
          {children || (
            <div disabled={disabled} className='gm-datepicker-inner gm-cursor'>
              {date
                ? inputValueRender
                  ? inputValueRender(date)
                  : moment(date).format('YYYY-MM-DD')
                : placeholder}
            </div>
          )}
        </Popover>
        {!children && canClear && date && (
          <button
            type='button'
            className='gm-datepicker-clear-btn close'
            onClick={this.handleClear}
          >
            &times;
          </button>
        )}
        {!children && <i className='xfont xfont-calendar' />}
      </div>
    )
  }
}

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  date: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  canClear: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,

  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func,
  inputValueRender: PropTypes.func,

  children: PropTypes.any,
  className: PropTypes.string
}

export default DatePicker
