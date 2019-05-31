import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../calendar'
import classNames from 'classnames'
import Popover from '../popover'
import _ from 'lodash'

class DateRangePicker extends React.Component {
  constructor (props) {
    super(props)
    this.refDateRangePicker = null
    this.refEndTarget = null
    this.handleSelectBegin = ::this.handleSelectBegin
    this.handleSelectEnd = ::this.handleSelectEnd
    this.handleClearEnd = ::this.handleClearEnd
    this.handleClearBegin = ::this.handleClearBegin
  }

  handleSelectBegin (date) {
    const { end, onChange } = this.props
    onChange(date, date <= end ? end : date)

    setTimeout(() => {
      this.refEndTarget.click()
    }, 0)
  }

  handleSelectEnd (date) {
    const { begin, onChange } = this.props
    onChange(begin <= date ? begin : date, date)

    setTimeout(() => {
      this.refDateRangePicker.click()
    }, 0)
  }

  handleClearEnd () {
    const { begin, onChange } = this.props
    onChange(begin, null)
  }

  handleClearBegin () {
    const { end, onChange } = this.props
    onChange(null, end)
  }

  render () {
    const {
      begin, end,
      beginLabel, endLabel,
      beginProps, endProps,
      disabled, canClear,
      beginRenderInputValue, endRenderInputValue,
      className
    } = this.props

    return (
      <div
        ref={ref => (this.refDateRangePicker = ref)}
        className={classNames('gm-daterangepicker gm-inline-block', {
          'gm-daterangepicker-can-clear': canClear,
          'disabled': disabled
        }, className)}
      >
        {beginLabel && <span className='gm-padding-right-5'>{beginLabel}</span>}
        <div className='gm-daterangepicker-item gm-inline-block gm-position-relative'>
          <Popover
            animName
            popup={(
              <Calendar
                selected={begin}
                onSelect={this.handleSelectBegin}
                className='gm-border-0'
                {...beginProps}
              />
            )}
          >
            <div
              disabled={disabled}
              className={classNames('gm-daterangepicker-inner gm-cursor')}
            >
              {begin ? (beginRenderInputValue ? beginRenderInputValue(begin) : moment(begin).format('YYYY-MM-DD'))
                : <span>&nbsp;</span>}
            </div>
          </Popover>
          {canClear && begin && (
            <button
              type='button'
              className='gm-daterangepicker-clear-btn close'
              onClick={this.handleClearBegin}
            >&times;</button>
          )}
          <i className='xfont xfont-calendar'/>
        </div>
        {!endLabel && <span> ~ </span>}
        {endLabel && <span className='gm-padding-lr-5'>{endLabel}</span>}
        <div className='gm-daterangepicker-item gm-inline-block gm-position-relative'>
          <Popover
            animName
            component={<div className='gm-inline-block'/>}
            popup={(
              <Calendar
                selected={end}
                onSelect={this.handleSelectEnd}
                className='gm-border-0'
                {...Object.assign({
                  min: begin
                }, endProps)}
              />
            )}
          >
            <div
              ref={ref => (this.refEndTarget = ref)}
              disabled={disabled}
              className={classNames('gm-daterangepicker-inner gm-cursor')}
            >
              {end ? (endRenderInputValue ? endRenderInputValue(end) : moment(end).format('YYYY-MM-DD'))
                : <span>&nbsp;</span>}
            </div>
          </Popover>
          {canClear && end && (
            <button
              type='button'
              className='gm-daterangepicker-clear-btn close'
              onClick={this.handleClearEnd}
            >&times;</button>
          )}
          <i className='xfont xfont-calendar'/>
        </div>
      </div>
    )
  }
}

DateRangePicker.displayName = 'DateRangePicker'

DateRangePicker.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  beginLabel: PropTypes.string,
  endLabel: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  canClear: PropTypes.bool,

  beginProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),
  beginRenderInputValue: PropTypes.func,
  endProps: PropTypes.shape({
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
  }),
  endRenderInputValue: PropTypes.func,

  className: PropTypes.string
}

DateRangePicker.defaultProps = {
  onChange: _.noop
}

export default DateRangePicker
