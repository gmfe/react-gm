import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import { Week, Content } from './index'

const months = [
  getLocale('01月'),
  getLocale('02月'),
  getLocale('03月'),
  getLocale('04月'),
  getLocale('05月'),
  getLocale('06月'),
  getLocale('07月'),
  getLocale('08月'),
  getLocale('09月'),
  getLocale('10月'),
  getLocale('11月'),
  getLocale('12月')
]

const HeadNew = props => {
  const { will, onChange, type, showToggle } = props
  const month = will.month()
  const year = will.year()

  // type: 1 left  2 right  3 all --- 月 / 年 切换展示
  const _type = type || 3
  let showLeft = true
  let showRight = true
  showLeft = _type === 1 ? true : showToggle
  showRight = _type === 1 ? showToggle : true

  const handleChange = (type, date) => {
    onChange(type, date)
  }

  return (
    <React.Fragment>
      <Flex alignCenter className='gm-calendarV2-head clearfix'>
        {showLeft && (
          <div>
            <a
              className='gm-calendar-head-pre gm-calendarV2-head-svg'
              onClick={() => handleChange('year', year - 1)}
            >
              <SVGLeftSmall />
            </a>
            <a
              href='javascript:;'
              className='gm-calendar-head-pre gm-calendarV2-head-svg'
              onClick={() => handleChange('month', month - 1)}
            >
              <SVGLeftSmall />
            </a>
          </div>
        )}
        <Flex
          flex
          className={classNames('gm-calendarV2-head-text', {
            'gm-flex-justify-start': _type === 1,
            'gm-flex-justify-end': _type === 2,
            'gm-text-left': _type === 1 || _type === 3,
            'gm-text-right': _type === 2
          })}
        >
          <span>
            {year}
            {getLocale('年')}
          </span>
          <span className='gm-calendar-head-month'>{months[month]}</span>
        </Flex>
        {showRight && (
          <div>
            <a
              href='javascript:;'
              className='gm-calendar-head-pre gm-calendarV2-head-svg'
              onClick={() => handleChange('month', month + 1)}
            >
              <SVGRightSmall />
            </a>
            <a
              className='gm-calendar-head-pre gm-calendarV2-head-svg'
              onClick={() => handleChange('year', year + 1)}
            >
              <SVGRightSmall />
            </a>
          </div>
        )}
      </Flex>
    </React.Fragment>
  )
}

HeadNew.propTypes = {
  will: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.number,
  showToggle: PropTypes.bool
}

/** 新 calendar */
const CalendarV2 = props => {
  const {
    selected, // 选中日期数组
    onSelect,
    min,
    max,
    disabledDate,
    className,
    type,
    selectedList,
    showToggle,
    date,
    ...rest
  } = props

  const will = selected.length ? moment(selected[0]) : date

  const handleSelectDay = m => {
    props.onSelect('day', m.toDate())
  }

  const handleChangeHead = (type, date) => {
    props.onSelect(type, date)
  }

  const getDisabled = m => {
    let { min, max, disabledDate } = props
    min = min ? moment(min).startOf('day') : null
    max = max ? moment(max).startOf('day') : null

    let disabled = false

    if (disabledDate) {
      disabled = disabledDate(m.toDate())
    } else {
      if (min && m < min) {
        disabled = true
      }
      if (max && m > max) {
        disabled = true
      }
    }
    return disabled
  }

  return (
    <div {...rest} className={classNames('gm-calendar', className)}>
      <HeadNew
        will={will}
        onChange={handleChangeHead}
        type={type}
        showToggle={showToggle}
      />
      <Week />
      <Content
        selected={selected}
        will={date}
        onSelectDay={e => handleSelectDay(e)}
        getDisabled={e => getDisabled(e)}
        selectedList={selectedList}
      />
    </div>
  )
}

CalendarV2.propTypes = {
  /** Date对象，表示所选的日期 */
  selected: PropTypes.array,
  /** 点击选择日期回调，传入参数为Date对象 */
  onSelect: PropTypes.func,
  willActiveSelected: PropTypes.object,
  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,
  /** 定义样式 */
  className: PropTypes.string,
  /** 定义样式 */
  style: PropTypes.object,
  type: PropTypes.number,
  selectedList: PropTypes.array,
  showToggle: PropTypes.bool,
  date: PropTypes.object,

  /** 目前全键盘用 */
  onKeyDown: PropTypes.func
}

CalendarV2.defaultProps = {
  onSelect: _.noop,
  onKeyDown: _.noop
}

export default CalendarV2
