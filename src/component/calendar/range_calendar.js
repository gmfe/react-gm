import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Week from './week'
import Content from './content'
import Head from './head'

const RangeCalendar = props => {
  const {
    begin,
    end,
    onSelect,
    willActiveSelected,
    onWillActiveSelected,

    min,
    max,
    disabledDate,

    disabledYearAndMonth,

    className,
    ...rest
  } = props

  // 如果 willActiveSelected 就取 begin，否则当前
  const _will = willActiveSelected
    ? moment(willActiveSelected)
    : begin
    ? moment(begin)
    : moment()

  // 需要有状态，因为 willActiveSelected 非必传
  const [will, setWill] = useState(_will)
  // 响应 willActiveSelected 的变化，重新设置 will
  useEffect(() => {
    setWill(_will)
  }, [willActiveSelected])

  const handleSelectDay = m => {
    // 如果都有，则当做选 begin
    if (begin && end) {
      onSelect(m.toDate(), null)
    } else if (begin) {
      // 如果相等，啥也不做
      if (+begin === +m) {
        return
      }

      // 根据大小调整 begin end
      if (+begin < +m) {
        onSelect(begin, m.toDate())
      } else {
        onSelect(m.toDate(), begin)
      }
    } else if (end) {
      // 如果相等，啥也不做
      if (+end === +m) {
        return
      }

      // 根据大小调整 begin end
      if (+end < +m) {
        onSelect(end, m.toDate())
      } else {
        onSelect(m.toDate(), end)
      }
    }
    // 如果都没有，则当做选 begin
    else {
      onSelect(m.toDate(), null)
    }
  }

  const handleChangeHead = m => {
    setWill(m)

    onWillActiveSelected(m.toDate())
  }

  return (
    <div {...rest} className={classNames('gm-calendar', className)}>
      <Head
        value={will}
        onChange={handleChangeHead}
        disabledYearAndMonth={disabledYearAndMonth}
      />
      <Week />
      <Content
        begin={begin && moment(begin)}
        end={end && moment(end)}
        onSelect={handleSelectDay}
        will={will}
        min={min}
        max={max}
        disabledDate={disabledDate}
      />
    </div>
  )
}

RangeCalendar.propTypes = {
  /** 开始日期，Date 对象 */
  begin: PropTypes.object,
  /** 结束日期, Date 对象 */
  end: PropTypes.object,
  /** 日期选中回调函数，参数 begin, end */
  onSelect: PropTypes.func,
  /** 键盘 和 日历显示的月份 */
  willActiveSelected: PropTypes.object,
  /** 参数 date */
  onWillActiveSelected: PropTypes.func,

  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,

  /** 禁用 年 / 月 切换按钮。 可以通过 onWillActiveSelected 变更来设置此  */
  disabledYearAndMonth: PropTypes.oneOf(['left', 'right']),

  className: PropTypes.string,
  style: PropTypes.object,

  /** 目前全键盘用 */
  onKeyDown: PropTypes.func
}

RangeCalendar.defaultProps = {
  onSelect: _.noop,
  onWillActiveSelected: _.noop,
  onKeyDown: _.noop
}

export default RangeCalendar
