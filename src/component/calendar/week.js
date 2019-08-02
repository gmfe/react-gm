import { getLocale } from '../../locales'
import React from 'react'
import _ from 'lodash'
import Flex from '../flex'

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
    <Flex className='gm-calendar-week'>
      {_.map(weekDays, (v, i) => (
        <Flex key={i} flex alignCenter justifyCenter>
          {v}
        </Flex>
      ))}
    </Flex>
  )
}

export default Week
