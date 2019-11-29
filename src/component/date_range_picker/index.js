import React from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'
import Overlay from './overlay'
import _ from 'lodash'
import classNames from 'classnames'
import SVGCalendar from '../../../svg/calendar.svg'
import Selection from '../selection'
import moment from 'moment'

/**
 * DateRangePicker -- 日期段选择
 * 主要功能：提供日期段选择
 *
 * 额外增加时间选择功能
 * */

class DateRangePicker extends React.Component {
  refPopover = React.createRef()

  selectionRef = React.createRef()

  apiDoFocus = () => {
    this.selectionRef.current.apiDoFocus()
  }

  handleOK = (begin, end) => {
    this.refPopover.current.apiDoSetActive(false)
    this.props.onChange(begin, end)
  }

  handleCancel = () => {
    this.refPopover.current.apiDoSetActive(false)
  }

  // 只会 null
  handleSelect = selected => {
    if (selected === null) {
      this.props.onChange(null, null)
    }
  }

  render() {
    const {
      begin,
      end,
      onChange,
      disabled,
      min,
      max,
      disabledDate,
      canClear,
      className,
      children,
      renderDate,
      enabledTimeSelect,
      beginTimeSelect,
      endTimeSelect,
      renderTime,
      timeSpan,
      ...rest
    } = this.props

    const popup = (
      <Overlay
        begin={begin}
        end={end}
        min={min}
        max={max}
        onOK={this.handleOK}
        onCancel={this.handleCancel}
        disabledDate={disabledDate}
        enabledTimeSelect={enabledTimeSelect}
        beginTimeSelect={beginTimeSelect}
        endTimeSelect={endTimeSelect}
        renderTime={renderTime}
        timeSpan={timeSpan}
      />
    )

    const renderSelected = item => {
      if (renderDate && item.begin && item.end) {
        return <>{renderDate(item.begin, item.end)}</>
      }

      let b = <span className='gm-text-desc'>开始日期</span>
      let e = <span className='gm-text-desc'>结束日期</span>

      if (item.begin) {
        const _begin = moment(item.begin)
        b = _begin.format('YYYY-MM-DD')

        if (enabledTimeSelect) {
          b += _begin.format(' HH:mm')
        }
      }

      if (item.end) {
        const _end = moment(item.end)
        e = _end.format('YYYY-MM-DD')

        if (enabledTimeSelect) {
          e += _end.format(' HH:mm')
        }
      }

      return (
        <>
          {b}&nbsp;~&nbsp;{e}
        </>
      )
    }

    return (
      <Popover
        ref={this.refPopover}
        animName
        disabled={disabled}
        popup={popup}
        style={{ minWidth: '500px' }}
      >
        {children !== undefined ? (
          children
        ) : (
          <Selection
            ref={this.selectionRef}
            {...rest}
            selected={{ begin, end }}
            onSelect={this.handleSelect}
            disabled={disabled}
            renderSelected={renderSelected}
            placeholder=''
            disabledClose={!canClear}
            className={classNames('gm-range-range-picker', className)}
            funIcon={<SVGCalendar />}
            isForSelect
          />
        )}
      </Popover>
    )
  }
}

DateRangePicker.displayName = 'DateRangePicker'

DateRangePicker.propTypes = {
  /** 开始日期, Date 对象 */
  begin: PropTypes.object,
  /** 结束日期, Date 对象 */
  end: PropTypes.object,
  /** 参数 begin, end */
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  /** Date 对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date 对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,
  /** 自定义日期展示格式。传入 开始 && 结束 两个Date对象, 返回日期展示格式 */
  renderDate: PropTypes.func,
  /** 清除日期 */
  canClear: PropTypes.bool,
  className: PropTypes.string,

  /** 时间选择 */
  enabledTimeSelect: PropTypes.bool,
  /** 默认格式为 HH:mm */
  renderTime: PropTypes.func,
  /** 默认30分钟 */
  timeSpan: PropTypes.number,

  /** 时间点选择限制 - 默认值, 最大值，最小值，禁用时间段 */
  beginTimeSelect: PropTypes.shape({
    /** 默认开始时间, HH:mm 格式, 没有默认展示为第一个可选时间点 */
    defaultTime: PropTypes.object,
    max: PropTypes.object,
    min: PropTypes.object,
    /** 禁用时间段函数，传入参数为Date对象，返回时间段 */
    disabledSpan: PropTypes.func
  }),
  endTimeSelect: PropTypes.shape({
    /** 默认结束时间 */
    defaultTime: PropTypes.object,
    max: PropTypes.object,
    min: PropTypes.object,
    disabledSpan: PropTypes.func
  })
}

DateRangePicker.defaultProps = {
  onChange: _.noop,
  enabledTimeSelect: false,
  renderTime: value => moment(value).format('HH:mm'),
  timeSpan: 30 * 60 * 1000
}

export default DateRangePicker
