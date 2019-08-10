import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import Week from './calendar_week'
import Content from './calendar_content'

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
  const { dates, onChange, toggleYearAndMonth } = props
  const month = moment(dates).month()
  const year = moment(dates).year()

  // 获取切换 年 / 月 按钮的展示位置： left , right , all
  const _toggleYearAndMonth = toggleYearAndMonth.split('_')[0]

  const handleChange = (changType, date) => {
    onChange(changType, date)
  }

  return (
    <React.Fragment>
      <Flex alignCenter className='gm-calendarV2-head clearfix'>
        {_toggleYearAndMonth !== 'right' && (
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
            'gm-flex-justify-start': _toggleYearAndMonth === 'left',
            'gm-flex-justify-end': _toggleYearAndMonth === 'right',
            'gm-text-left': _toggleYearAndMonth !== 'right',
            'gm-text-right': _toggleYearAndMonth === 'right'
          })}
        >
          <span>
            {year}
            {getLocale('年')}
          </span>
          <span className='gm-calendar-head-month'>{months[month]}</span>
        </Flex>
        {_toggleYearAndMonth !== 'left' && (
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
  /** 当前选择日期, Date()对象 */
  dates: PropTypes.object,
  /** 年 / 月 切换回调, 传入参数为 切换的类型 && 日期 */
  onChange: PropTypes.func,
  /** 展示切换年 / 月 按钮位置 */
  toggleYearAndMonth: PropTypes.string
}

/** 新 calendar */
const MulCalendar = props => {
  const {
    select,
    selectedBegin,
    selectedEnd,
    onSelect,
    disabledDate,
    className,
    toggleYearAndMonth,
    onYearAndMonthChange,
    ...rest
  } = props

  // 获取当前日历位置
  const calendarPosition = toggleYearAndMonth.split('_')[1]

  const handleSelectDay = m => {
    onSelect(calendarPosition, m.toDate())
  }

  const handleChangeYearOrMonth = (changeType, date) => {
    onYearAndMonthChange(calendarPosition, changeType, date)
  }

  const getDisabled = m => {
    let disabled = false

    if (disabledDate) {
      disabled = disabledDate(m.toDate())
    }
    return disabled
  }

  return (
    <div {...rest} className={classNames('gm-calendar', className)}>
      <HeadNew
        dates={select}
        onChange={handleChangeYearOrMonth}
        toggleYearAndMonth={toggleYearAndMonth}
      />
      <Week />
      <Content
        will={select}
        selected={select}
        onSelectDay={handleSelectDay}
        getDisabled={e => getDisabled(e)}
        selectedBegin={selectedBegin}
        selectedEnd={selectedEnd}
      />
    </div>
  )
}

MulCalendar.propTypes = {
  /** 当前选中的日期，Date()对象 */
  select: PropTypes.object,
  /** 开始日期，Date()对象 */
  selectedBegin: PropTypes.object,
  /** 结束日期, Date()对象 */
  selectedEnd: PropTypes.object,
  /** 自定义不可选日期回调函数 */
  disabledDate: PropTypes.func,
  /** 日期选中回调函数 */
  onSelect: PropTypes.func,
  /** 是否展示 年 / 月 切换按钮，只应用于日历组合 */
  toggleYearAndMonth: PropTypes.string,
  /** 年 / 月 切换回调函数，传入参数为：string(年 / 月)，日期值 */
  onYearAndMonthChange: PropTypes.func,
  className: PropTypes.string
}

MulCalendar.defaultProps = {
  onSelect: _.noop,
  toggleYearAndMonth: 'all',
  onYearAndMonthChange: _.noop
}

export default MulCalendar
