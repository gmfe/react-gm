import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../calendar/calendar'
import classNames from 'classnames'
import Popover from '../popover'
import _ from 'lodash'
import SVGCalendar from '../../../svg/calendar.svg'
import Selection from '../selection'

/**
 * DatePicker -- 日期选择
 *
 * 主要功能：日期选择
 * */

class DatePicker extends React.Component {
  state = {
    willActiveSelected: null
  }

  refPopup = React.createRef()

  selectionRef = React.createRef()

  apiDoFocus = () => {
    this.selectionRef.current.apiDoFocus()
  }

  apiDoSelectWillActive = () => {
    const { willActiveSelected } = this.state

    if (willActiveSelected) {
      this.props.onChange(this.state.willActiveSelected)
    } else {
      this.props.onChange(this.props.date || new Date())
    }
  }

  handleSelectDate = date => {
    this.refPopup.current.apiDoSetActive(false)
    this.props.onChange(date)
  }

  handleKeyDown = event => {
    if (
      !(
        event.key === 'ArrowUp' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft'
      )
    ) {
      this.props.onKeyDown(event)
      return
    }

    const { date } = this.props
    const { willActiveSelected } = this.state
    let will = willActiveSelected
    if (will === null) {
      will = willActiveSelected
        ? moment(willActiveSelected)
        : date
        ? moment(date)
        : moment()
    }

    if (event.key === 'ArrowUp') {
      will = moment(will).add(-1, 'days')
    } else if (event.key === 'ArrowDown') {
      will = moment(will).add(1, 'days')
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      // 左右不做处理
      this.props.onKeyDown(event)
      return
    }

    this.setState({
      willActiveSelected: will.toDate()
    })
  }

  render() {
    const {
      date,
      onChange,
      placeholder,
      disabled,
      min,
      max,
      disabledDate,
      className,
      renderDate,
      popoverType,
      onKeyDown,
      children,
      ...rest
    } = this.props
    const { willActiveSelected } = this.state

    const popup = (
      <Calendar
        className='gm-border-0'
        selected={date}
        onSelect={this.handleSelectDate}
        willActiveSelected={willActiveSelected}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
    )

    return (
      <Popover
        ref={this.refPopup}
        popup={popup}
        animName
        disabled={disabled || false}
        type={popoverType}
        style={{ minWidth: '200px' }}
      >
        {children !== undefined ? (
          children
        ) : (
          <Selection
            ref={this.selectionRef}
            {...rest}
            selected={date}
            onSelect={onChange}
            disabled={disabled}
            renderSelected={renderDate}
            className={classNames('gm-datepicker', className)}
            placeholder={placeholder}
            funIcon={<SVGCalendar />}
            onKeyDown={this.handleKeyDown}
          />
        )}
      </Popover>
    )
  }
}

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  /** Date对象，表示选择的日期 */
  date: PropTypes.object,
  /** 选择日期回调，传入参数为Date对象 */
  onChange: PropTypes.func.isRequired,
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
  renderDate: PropTypes.func,

  popoverType: PropTypes.oneOf(['focus', 'realFocus']),

  className: PropTypes.string,
  style: PropTypes.object,
  onKeyDown: PropTypes.func
}

DatePicker.defaultProps = {
  renderDate: date => (date ? moment(date).format('YYYY-MM-DD') : ''),
  onKeyDown: _.noop
}

export default DatePicker
