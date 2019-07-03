import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import classNames from 'classnames'

/**
 * TimeSpan -- 时间选择
 *
 * 主要功能：时间点选择
 * */

const TimeSpan = props => {
  const { selected, render, disabledSpan, onSelect, min, max, span } = props

  // 获取时间临界值内的所有间隔时间段
  const getCells = () => {
    const dMax = max ? moment(max) : moment().endOf('day')
    let d = min ? moment(min) : moment().startOf('day')
    let cells = []
    while (d <= dMax) {
      cells.push(d)
      d = moment(d + span)
    }
    return cells
  }

  const handleSelectTime = value => {
    onSelect(value.toDate())
  }

  const cells = getCells()

  return (
    <div className='gm-time-span'>
      {_.map(cells, (value, i) => {
        const disabled = disabledSpan && disabledSpan(value)
        return (
          <div
            key={i}
            className={classNames('gm-time-span-cell', {
              active: +value === +selected,
              disabled
            })}
            onClick={disabled ? _.noop : () => handleSelectTime(value)}
          >
            {render(value.toDate())}
          </div>
        )
      })}
    </div>
  )
}

TimeSpan.propTypes = {
  /** Date对象，默认一天的开始时间 */
  min: PropTypes.object,
  /** Date对象，默认一天的结束时间 */
  max: PropTypes.object,
  /** 禁用时间段函数，传入参数为Date对象，返回时间段 */
  disabledSpan: PropTypes.func,
  /** 定义时间跨度，默认为30分钟 */
  span: PropTypes.number,
  /** Date对象，表示选中的时间 */
  selected: PropTypes.object,
  /** 渲染时间文本展示格式，默认为HH:mm */
  render: PropTypes.func,
  /** 点击选择回调，传入参数为Date对象 */
  onSelect: PropTypes.func
}
TimeSpan.defaultProps = {
  min: moment()
    .startOf('day')
    .toDate(),
  max: moment()
    .endOf('day')
    .toDate(),
  span: 30 * 60 * 1000,
  render: value => moment(value).format('HH:mm'),
  onSelect: _.noop
}

export default TimeSpan
