import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import moment from 'moment'
import { getLocale } from '../../../locales'
import SVGCalendarYear from '../../../svg/calendar-year.svg'
import SVGCalendarMonth from '../../../svg/calendar-month.svg'
import classNames from 'classnames'
import _ from 'lodash'

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
  // 以十年为一个年份选择周期, year 为所在周期最后一个可选年份
  const year = moment().year()

  // 月份选择 -- 'month' / 年份选择 -- 'year'
  const [selectType, setSelectType] = useState(null)
  // 用于记录当前展示最后一个可选年份与 year 的偏移值, 默认为0
  const [yearEndOffset, setYearEndOffset] = useState(0)

  const handleChange = (diff, type) => {
    onChange(moment(value).add(diff, type))

    // 年月选择需关闭展示
    if (selectType) {
      setSelectType(null)
    }
  }

  const handleSelectTypeChange = type => {
    if (type === 'year') {
      // 判断当前展示的年份在哪一段范围内
      const diff = value.year() - year
      let index = Math.abs(diff) / 10
      let range = null

      if (diff > 0) {
        // 往后
        index = Math.ceil(index)
        range = 10
      } else {
        // 往前
        index = Math.floor(index)
        range = -10
      }
      const e = index * range
      setYearEndOffset(e)
    }
    setSelectType(type)
  }

  const handleYearChange = (index, diff) => {
    // 非年月选择 正常处理
    if (!selectType) {
      handleChange(diff, 'year')
      return
    }

    // 月份选择时改变年份，不关闭展示面板
    if (selectType === 'month') {
      onChange(moment(value).add(diff, 'year'))
      return
    }

    // 年份点击切换 以及 展示的年份第一个和最后一个点击交互为--展示前 or 后一轮的年份展示, 不直接改变日期
    if (index === 0 || index === 11) {
      const range = index === 0 ? -10 : 10
      const e = yearEndOffset + range
      setYearEndOffset(e)
      return
    }

    handleChange(diff, 'year')
  }

  const renderYearSelection = () => {
    // 拿到展示选择的年份范围
    let b = yearEndOffset - 10
    const years = []
    while (b <= yearEndOffset + 1) {
      years.push(year + b)
      b++
    }

    return (
      <div className='gm-calendar-yaers-or-months'>
        {_.map(years, (year, index) => (
          <span
            key={index}
            className={classNames('gm-calendar-year-or-month', {
              active: year === value.year() && index !== 0 && index !== 11,
              'gm-calendar-year-or-month-change': index === 0 || index === 11
            })}
            onClick={() => handleYearChange(index, year - value.year())}
          >
            {year}
          </span>
        ))}
      </div>
    )
  }

  const renderMonthSelection = () => {
    return (
      <div className='gm-calendar-yaers-or-months'>
        {_.map(_.range(12), i => (
          <span
            key={i}
            className={classNames('gm-calendar-year-or-month', {
              active: i === value.month()
            })}
            onClick={() => handleChange(i - value.month(), 'month')}
          >
            {months[i]}
          </span>
        ))}
      </div>
    )
  }

  const renderYear = () => {
    // 处于年份选择，展示年份选择范围
    if (selectType === 'year') {
      const b = year + yearEndOffset - 9
      const e = year + yearEndOffset
      return (
        <span className='gm-calendar-head-text'>
          {b} ~ {e}
        </span>
      )
    }

    // 正常展示年份
    return (
      <span
        className='gm-calendar-head-text'
        onClick={() => handleSelectTypeChange('year')}
      >
        {value.year()}
        {getLocale('年')}
      </span>
    )
  }

  const renderMonth = () => {
    // 年月选择不需要展示月份
    return (
      !selectType && (
        <span
          className='gm-calendar-head-text'
          onClick={() => handleSelectTypeChange('month')}
        >
          {months[value.month()]}
        </span>
      )
    )
  }

  return (
    <>
      <Flex alignCenter className='gm-calendar-head gm-border-bottom clearfix'>
        <div>
          <span
            className={classNames('gm-calendar-head-icon', {
              'gm-hidden':
                disabledYearAndMonth === 'left' && selectType !== 'year'
            })}
            onClick={() => handleYearChange(0, -1)}
          >
            <SVGCalendarYear className='gm-calendar-head-year-icon' />
          </span>
          <span
            className={classNames('gm-calendar-head-icon', {
              'gm-hidden': disabledYearAndMonth === 'left' || selectType
            })}
            onClick={() => handleChange(-1, 'month')}
          >
            <SVGCalendarMonth className='gm-calendar-head-year-icon' />
          </span>
        </div>
        <Flex flex row justifyCenter>
          {renderYear()}
          &nbsp;
          {renderMonth()}
        </Flex>
        <div>
          {disabledYearAndMonth !== 'right' && (
            <span
              className={classNames('gm-calendar-head-icon', {
                'gm-hidden': disabledYearAndMonth === 'right' || selectType
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
              'gm-hidden':
                disabledYearAndMonth === 'right' && selectType !== 'year'
            })}
            onClick={() => handleYearChange(11, 1)}
          >
            <SVGCalendarYear
              className='gm-calendar-head-year-icon'
              style={{ transform: 'rotate(180deg)' }}
            />
          </span>
        </div>
      </Flex>
      {selectType === 'month' && renderMonthSelection()}
      {selectType === 'year' && renderYearSelection()}
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
