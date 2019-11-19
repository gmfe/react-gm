import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import moment from 'moment'
import { getLocale } from '../../../locales'
import SVGCalendarYear from '../../../svg/calendar-year.svg'
import SVGCalendarMonth from '../../../svg/calendar-month.svg'
import classNames from 'classnames'

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

const Head = props => {
  const { value, onChange, disabledYearAndMonth } = props

  const handleChange = (diff, type) => {
    onChange(moment(value).add(diff, type))
  }

  return (
    <>
      <Flex alignCenter className='gm-calendar-head gm-border-bottom clearfix'>
        <div>
          <span
            className={classNames('gm-calendar-head-icon', {
              'gm-hidden': disabledYearAndMonth === 'left'
            })}
            onClick={() => handleChange(-1, 'year')}
          >
            <SVGCalendarYear className='gm-calendar-head-year-icon' />
          </span>
          <span
            className={classNames('gm-calendar-head-icon', {
              'gm-hidden': disabledYearAndMonth === 'left'
            })}
            onClick={() => handleChange(-1, 'month')}
          >
            <SVGCalendarMonth className='gm-calendar-head-year-icon' />
          </span>
        </div>
        <Flex flex column className='gm-calendar-head-text'>
          {value.year()}
          {getLocale('年')}
          &nbsp;
          {months[value.month()]}
        </Flex>
        <div>
          {disabledYearAndMonth !== 'right' && (
            <span
              className={classNames('gm-calendar-head-icon', {
                'gm-hidden': disabledYearAndMonth === 'right'
              })}
              onClick={() => handleChange(1, 'month')}
            >
              <SVGCalendarMonth
                className='gm-calendar-head-year-icon'
                style={{ transform: 'rotate(180deg)' }}
              />
            </span>
          )}
          <span
            className={classNames('gm-calendar-head-icon', {
              'gm-hidden': disabledYearAndMonth === 'right'
            })}
            onClick={() => handleChange(1, 'year')}
          >
            <SVGCalendarYear
              className='gm-calendar-head-year-icon'
              style={{ transform: 'rotate(180deg)' }}
            />
          </span>
        </div>
      </Flex>
    </>
  )
}

Head.propTypes = {
  /** 当前日期 */
  value: PropTypes.object,
  onChange: PropTypes.func,
  /** 禁用 年 / 月 切换按钮。 */
  disabledYearAndMonth: PropTypes.oneOf(['left', 'right'])
}

export default Head