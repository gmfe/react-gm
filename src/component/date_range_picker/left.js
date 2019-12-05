import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import moment from 'moment'

import { getLocale } from '../../locales'
import { setTimes } from './util'

/** 左侧选择参数列表 */
const quickList = [
  { range: [[0, 'day'], [0, 'day']], text: getLocale('今天') },
  { range: [[-1, 'day'], [-1, 'day']], text: getLocale('昨天') },
  { range: [[-6, 'day'], [0, 'day']], text: getLocale('近7天') },
  { range: [[-29, 'day'], [0, 'day']], text: getLocale('近30天') }
]

const Left = props => {
  const { onSelect, begin, end, enabledTimeSelect, defaultTimes } = props

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

    // 判断是否需要处理时间
    if (enabledTimeSelect) {
      const _begin = setTimes(begin, defaultTimes.begin)
      const _end = setTimes(end, defaultTimes.end)

      onSelect(_begin, _end)
      return
    }

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
  end: PropTypes.object,
  enabledTimeSelect: PropTypes.bool,
  /** 开始与结束默认时间, { begin, end } */
  defaultTimes: PropTypes.object
}

export default Left
