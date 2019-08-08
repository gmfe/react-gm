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
  const { dates, onChange, type, showDates } = props
  const month = moment(dates).month()
  const year = moment(dates).year()

  // type: 1 left  2 right  3 all --- 月 / 年 切换展示
  const _type = type || 3
  const isNearMonth =
    moment(showDates[1]).month() - moment(showDates[0]).month() === 1
  const isSameYear = moment(showDates[1]).year() === moment(showDates[0]).year()
  const showLeft =
    type === 1 ? true : !isSameYear || (!isNearMonth && isSameYear)
  const showRight =
    type === 2 ? true : !isSameYear || (!isNearMonth && isSameYear)

  const handleChange = (type, date) => {
    onChange(type, date)
  }

  return (
    <React.Fragment>
      <Flex alignCenter className='gm-calendarV2-head clearfix'>
        {(showLeft || type === 3) && (
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
        {(showRight || type === 3) && (
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
  type: PropTypes.number,
  showDates: PropTypes.array
}

/** 新 calendar */
const CalendarV2 = props => {
  const {
    showDates,
    disabledDate,
    type,
    className,
    selectDates,
    changeYearOrMonth,
    onSelect,
    dateRangeSelect,
    ...rest
  } = props

  let dates = null
  type === 1 ? (dates = showDates[0]) : (dates = showDates[1])

  const handleSelectDay = m => {
    onSelect(type, m.toDate())
  }

  const handleChangeYearOrMonth = (changeType, date) => {
    changeYearOrMonth(type, changeType, date)
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
        dates={dates}
        onChange={handleChangeYearOrMonth}
        type={type}
        showDates={showDates}
      />
      <Week />
      <Content
        will={dates}
        selected={dates}
        onSelectDay={handleSelectDay}
        getDisabled={e => getDisabled(e)}
        selectDates={selectDates}
        dateRangeSelect={dateRangeSelect}
      />
    </div>
  )
}

CalendarV2.propTypes = {
  showDates: PropTypes.array,
  disabledDate: PropTypes.func,
  type: PropTypes.number,
  className: PropTypes.string,
  selectDates: PropTypes.array,
  changeYearOrMonth: PropTypes.func,
  onSelect: PropTypes.func,
  dateRangeSelect: PropTypes.array
}

CalendarV2.defaultProps = {
  onSelect: _.noop
}

export default CalendarV2
