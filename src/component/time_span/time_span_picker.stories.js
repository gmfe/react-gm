import React from 'react'
import { storiesOf } from '@storybook/react'
import TimeSpanPicker from './time_span_picker'
import moment from 'moment'
import { observable } from 'mobx'

const timeSpanPickerStatus = {
  date: moment()
    .startOf('day')
    .toDate(),
  setDate(date) {
    this.date = date
  }
}

const store1 = observable(timeSpanPickerStatus)
const store2 = observable(timeSpanPickerStatus)
const store3 = observable(timeSpanPickerStatus)
const store4 = observable(timeSpanPickerStatus)

storiesOf('TimeSpanPicker', module)
  .add('禁用某个时间段', () => (
    <TimeSpanPicker
      date={store1.date}
      onChange={date => store1.setDate(date)}
      disabledSpan={spanMoment =>
        spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) &&
        spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))
      }
    />
  ))

  .add('禁用时间选择', () => (
    <TimeSpanPicker
      disabled
      date={store2.date}
      onChange={date => store2.setDate(date)}
    />
  ))

  .add('自定义时间跨度为 1 小时（默认为 30 分钟）', () => (
    <TimeSpanPicker
      date={store3.date}
      max={moment()
        .hour(23)
        .minute(0)}
      span={60 * 60 * 1000}
      onChange={date => store3.setDate(date)}
    />
  ))

  .add('自定义 children', () => (
    <TimeSpanPicker date={store4.date} onChange={date => store4.setDate(date)}>
      <span>
        {store4.date ? moment(store4.date).format('HH:mm') : '请点击选择'}
      </span>
    </TimeSpanPicker>
  ))
