import React from 'react'
import RangeCalendar from './range_calendar'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Calendar = props => {
  const { selected, onSelect, ...rest } = props

  const handleSelect = begin => {
    onSelect(begin)
  }

  return (
    <RangeCalendar
      {...rest}
      begin={selected}
      end={selected}
      onSelect={handleSelect}
      disabledYearAndMonth={undefined}
    />
  )
}

Calendar.propTypes = {
  /** 日期，Date 对象 */
  selected: PropTypes.object,
  /** 日期选中回调函数，参数 date */
  onSelect: PropTypes.func,
  /** 键盘 */
  willActiveSelected: PropTypes.object,
  /** 参数 date */
  onWillActiveSelected: PropTypes.func,

  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.object,

  /** 目前全键盘用 */
  onKeyDown: PropTypes.func
}

Calendar.defaultProps = {
  onSelect: _.noop
}

export default Calendar
