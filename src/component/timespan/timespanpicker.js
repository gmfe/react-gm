import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import TimeSpan from './timespan.js'
import Popover from '../popover'
import _ from 'lodash'
import classNames from 'classnames'

class TimeSpanPicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = ::this.handleSelect
  }

  handleSelect(date) {
    this.props.onChange(date)
    setTimeout(() => {
      this.refTimeSpanPicker.click()
    }, 0)
  }

  render() {
    const {
      children,
      inputClassName,
      disabled,
      render,
      date,
      disabledSpan
    } = this.props
    const popup = (
      <TimeSpan
        min={this.props.min}
        max={this.props.max}
        span={this.props.span}
        selected={this.props.date}
        onSelect={this.handleSelect}
        disabledSpan={disabledSpan}
      />
    )
    return (
      <div
        ref={ref => (this.refTimeSpanPicker = ref)}
        className='gm-time-span-picker'
      >
        <Popover popup={popup} animName>
          {children || (
            <input
              type='text'
              className={classNames('gm-cursor form-control', inputClassName)}
              disabled={disabled}
              value={render(date)}
              onChange={_.noop}
            />
          )}
        </Popover>
      </div>
    )
  }
}

TimeSpanPicker.propTypes = {
  min: PropTypes.object,
  max: PropTypes.object,
  disabledSpan: PropTypes.func,
  span: PropTypes.number,
  date: PropTypes.object.isRequired,
  render: PropTypes.func,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any
}

TimeSpanPicker.defaultProps = {
  render: value => moment(value).format('HH:mm'),
  disabled: false,
  onChange: _.noop
}

export default TimeSpanPicker
