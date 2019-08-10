import { getLocale } from '../../locales'
import React from 'react'
import _ from 'lodash'

const weekDays = [
  getLocale('week__日'),
  getLocale('week__一'),
  getLocale('week__二'),
  getLocale('week__三'),
  getLocale('week__四'),
  getLocale('week__五'),
  getLocale('week__六')
]
const Week = () => {
  return (
    <div className='gm-calendar-week'>
      {_.map(weekDays, (v, i) => (
        <span key={i} className='gm-calendar-day-name'>
          {v}
        </span>
      ))}
    </div>
  )
}

export default Week
