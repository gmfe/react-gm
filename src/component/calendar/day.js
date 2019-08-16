import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import moment from 'moment'

const Day = props => {
  const { disabled, onClick, value, will, begin, end } = props

  const handleClick = () => {
    if (disabled) {
      return
    }
    onClick(value)
  }

  const nowStart = +moment().startOf('day')
  const valueStart = +value.startOf('day')
  const beginStart = begin ? +begin.startOf('day') : null
  const endStart = end ? +end.startOf('day') : null
  const willStart = +will.startOf('day')

  const isActive = () => {
    if (begin && end) {
      return beginStart <= valueStart && valueStart <= endStart
    } else if (begin) {
      return beginStart === valueStart
    } else if (end) {
      return endStart === valueStart
    }
  }

  const cn = classNames('gm-calendar-day', {
    // 无状态
    'gm-calendar-day-old': will.month() > value.month(),
    'gm-calendar-day-new': will.month() < value.month(),
    'gm-calendar-day-now': nowStart === valueStart,
    // 键盘
    'gm-calendar-day-will': willStart === valueStart,
    // 选中态
    active: isActive(),
    'gm-calendar-day-begin': beginStart === valueStart,
    'gm-calendar-day-end': endStart === valueStart,
    // 不可用
    'gm-calendar-day-disabled': disabled
  })

  return (
    <span className={cn} onClick={handleClick}>
      {value.date()}
    </span>
  )
}

Day.propTypes = {
  /** 日期值 */
  value: PropTypes.object.isRequired,
  /** 开始日期 */
  begin: PropTypes.object,
  /** 结束日期 */
  end: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  /** 键盘用 */
  will: PropTypes.object.isRequired
}

export default Day
