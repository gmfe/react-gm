import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import { Week, Content } from '../calendar/index'

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
  dates: PropTypes.object,
  onChange: PropTypes.func,
  toggleYearAndMonth: PropTypes.string
}

/** 新 calendar */
const MulCalendar = props => {
  const {
    selected,
    selectedBegin,
    selectedEnd,
    onSelect,
    disabledDate,
    className,
    toggleYearAndMonth,
    onYearAndMonthChange,
    ...rest
  } = props

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
        dates={selected}
        onChange={handleChangeYearOrMonth}
        toggleYearAndMonth={toggleYearAndMonth}
      />
      <Week />
      <Content
        will={selected}
        selected={selected}
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
  selected: PropTypes.object,
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
