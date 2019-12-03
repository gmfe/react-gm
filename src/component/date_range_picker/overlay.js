import React, { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'
import classNames from 'classnames'
import moment from 'moment'
import Flex from '../flex'
import Two from './two'

/** 左侧选择参数列表 */
const quickList = [
  { range: [[0, 'day'], [0, 'day']], text: getLocale('今天') },
  { range: [[-1, 'day'], [-1, 'day']], text: getLocale('昨天') },
  { range: [[-6, 'day'], [0, 'day']], text: getLocale('近7天') },
  { range: [[-29, 'day'], [0, 'day']], text: getLocale('近30天') }
]

const Left = props => {
  const { onSelect, begin, end } = props

  const handleClick = item => {
    const [b, e] = item.range

    const begin = moment()
      .startOf('day')
      .add(b[0], b[1])
      .toDate()
    const end = moment()
      .endOf('day')
      .add(e[0], e[1])
      .toDate()

    onSelect(begin, end)
  }

  const isActive = item => {
    const [b, e] = item.range

    const _begin = moment()
      .startOf('day')
      .add(b[0], b[1])
    const _end = moment()
      .endOf('day')
      .add(e[0], e[1])

    return (
      +moment(begin).startOf('day') === +_begin.startOf('day') &&
      +moment(end).startOf('day') === +_end.startOf('day')
    )
  }

  return (
    <div className='gm-border-right gm-margin-top-10' style={{ width: '70px' }}>
      {_.map(quickList, item => (
        <div
          key={item.text}
          className={classNames(
            'gm-padding-lr-10 gm-cursor gm-date-range-picker-left-item',
            {
              'gm-text-primary': isActive(item)
            }
          )}
          onClick={() => handleClick(item)}
        >
          {item.text}
        </div>
      ))}
    </div>
  )
}

Left.propTypes = {
  onSelect: PropTypes.func.isRequired,
  begin: PropTypes.object,
  end: PropTypes.object
}

const Bottom = props => {
  const { begin, end } = props

  let b = <span className='gm-text-desc'>开始日期</span>
  let e = <span className='gm-text-desc'>结束日期</span>

  if (begin) {
    b = moment(begin).format('YYYY-MM-DD')
  }

  if (end) {
    e = moment(end).format('YYYY-MM-DD')
  }

  return (
    <Flex
      alignCenter
      justifyBetween
      className='gm-border-top'
      style={{
        padding: ' 10px 10px 10px 70px'
      }}
    >
      <span className='gm-text-bold gm-date-range-picker-bottom-text'>
        {b} ~ {e}
      </span>
    </Flex>
  )
}

Bottom.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object
}

/**
 * 日期段选择
 * 形态上不支持全键盘，所以不做相关逻辑
 * */
const Overlay = props => {
  const { begin, end, onOK, min, max, disabledDate } = props

  const [_begin, setBegin] = useState(begin)
  const [_end, setEnd] = useState(end)

  const handleSelect = (begin, end) => {
    setBegin(begin)
    setEnd(end)

    // 已选择 begin && end
    if (begin && end) {
      onOK(begin, end)
    }
  }

  return (
    <div className='gm-date-range-picker-overlay gm-border-0'>
      <Flex>
        <Left begin={_begin} end={_end} onSelect={onOK} />
        <Two
          begin={_begin}
          end={_end}
          onSelect={handleSelect}
          min={min}
          max={max}
          disabledDate={disabledDate}
        />
      </Flex>
      <Bottom begin={_begin} end={_end} />
    </div>
  )
}

Overlay.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func
}

export default Overlay
