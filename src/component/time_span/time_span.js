import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import classNames from 'classnames'

import { Flex } from '../../index'

/**
 * TimeSpan -- 时间选择
 *
 * 主要功能：时间点选择
 * */

const TimeSpan = props => {
  const { selected, renderItem, disabledSpan, onSelect, min, max, span } = props
  // 一天起始时间点
  const beginTime = moment().startOf('day')
  const endTime = moment().endOf('day')

  const getTimeCells = () => {
    let time = beginTime
    const cells = []

    while (time <= endTime) {
      cells.push(time)
      time = moment(time + span)
    }

    // 三部分展示
    let len = Math.ceil(cells.length / 3)
    // 处理时间段数不均等展示
    if (len % 2) {
      len++
    }
    const firstCells = cells.slice(0, len)
    const middleCells = cells.slice(len, 2 * len)
    const finalCells = cells.slice(2 * len)

    return [firstCells, middleCells, finalCells]
  }

  const isDisable = time => {
    // 无需限制
    if (!max && !min && !disabledSpan) {
      return false
    }

    const dMax = max ? moment(max) : endTime
    const dMin = min ? moment(min) : beginTime
    const dTime = moment(time)
    return (
      !(dTime <= dMax && dTime >= dMin) || (disabledSpan && disabledSpan(time))
    )
  }

  const isActive = v => {
    const value = moment(v)
    const select = moment(selected)

    // 判断时 / 分 是否相同
    return value.hour() === select.hour() && value.minute() === select.minute()
  }

  const handleSelectTime = value => {
    onSelect(value.toDate())
  }

  const renderTimesList = cells => {
    let width = '50px'
    if (span >= 60 * 60 * 1000) {
      width = '100px'
    }

    return (
      <Flex wrap row className='gm-time-span-list'>
        {_.map(cells, value => {
          const disabled = isDisable(value)

          return (
            <span
              key={value.format('HH:mm')}
              className={classNames('gm-time-span-list-cell', {
                active: isActive(value),
                disabled
              })}
              style={{ width }}
              onClick={disabled ? _.noop : () => handleSelectTime(value)}
            >
              {renderItem(value.toDate())}
            </span>
          )
        })}
      </Flex>
    )
  }

  const cells = getTimeCells()

  return (
    <Flex row className='gm-time-span'>
      {_.map(cells, (cell, index) => {
        return (
          <Flex
            className={classNames({
              'gm-border-right': index !== cells.length - 1
            })}
            alignStart
            key={index}
          >
            {renderTimesList(cell)}
          </Flex>
        )
      })}
    </Flex>
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
  renderItem: PropTypes.func,
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
  renderItem: value => moment(value).format('HH:mm'),
  onSelect: _.noop
}

export default TimeSpan
