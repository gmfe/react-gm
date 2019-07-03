import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import TimeSpan from './time_span'
import Popover from '../popover'
import _ from 'lodash'
import classNames from 'classnames'

/**
 * TimeSpanPicker -- 带输入框的时间选择
 *
 * 主要功能：时间点选择
 * */

const TimeSpanPicker = props => {
  const timeSpanPickerRef = useRef(null)
  const {
    children,
    inputClassName,
    disabled,
    render,
    date,
    disabledSpan,
    onChange,
    min,
    max,
    span
  } = props

  const handleSelectTime = date => {
    onChange(date)
    // 选择时间后关闭时间段选择组件
    timeSpanPickerRef.current.click()
  }

  const popup = (
    <TimeSpan
      min={min}
      max={max}
      span={span}
      selected={date}
      onSelect={handleSelectTime}
      disabledSpan={disabledSpan}
    />
  )

  const renderChildren = () => {
    if (children === undefined) {
      return (
        <input
          type='text'
          className={classNames('gm-cursor form-control', inputClassName)}
          disabled={disabled}
          value={render(date)}
          onChange={_.noop}
        />
      )
    } else {
      return children
    }
  }

  return (
    <div ref={timeSpanPickerRef} className='gm-time-span-picker'>
      <Popover popup={popup} animName>
        {renderChildren()}
      </Popover>
    </div>
  )
}

TimeSpanPicker.propTypes = {
  /** Date对象，默认一天的开始时间 */
  min: PropTypes.object,
  /** Date对象，默认一天的结束时间 */
  max: PropTypes.object,
  /** 禁用时间段函数，传入参数为Date对象，返回时间段 */
  disabledSpan: PropTypes.func,
  /** 定义时间跨度，默认为 30 分钟 */
  span: PropTypes.number,
  /** Date对象，表示选择的时间 */
  date: PropTypes.object.isRequired,
  /** 渲染时间文本展示格式，默认为 HH:mm */
  render: PropTypes.func,
  /** 点击选择回调，传入参数为Date对象 */
  onChange: PropTypes.func,
  /** 自定义 input 样式 */
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
