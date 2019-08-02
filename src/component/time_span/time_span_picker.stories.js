import React from 'react'
import { storiesOf } from '@storybook/react'
import TimeSpanPicker from './time_span_picker'
import moment from 'moment'
import { observable } from 'mobx'

const store = observable({
  date: moment()
    .startOf('day')
    .toDate(),
  setDate(date) {
    console.log(date)
    this.date = date
  }
})

storiesOf('TimeSpanPicker', module)
  .add('default', () => (
    <TimeSpanPicker date={store.date} onChange={date => store.setDate(date)} />
  ))
  .add('disabled', () => (
    <TimeSpanPicker
      disabled
      date={store.date}
      onChange={date => store.setDate(date)}
    />
  ))
  .add('disabledSpan', () => (
    <TimeSpanPicker
      date={store.date}
      onChange={date => store.setDate(date)}
      disabledSpan={spanMoment =>
        spanMoment.isSameOrAfter(moment('11:00', 'HH:mm')) &&
        spanMoment.isSameOrBefore(moment('18:30', 'HH:mm'))
      }
    />
  ))
  .add('自定义时间跨度为 1h', () => (
    <TimeSpanPicker
      date={store.date}
      max={moment()
        .hour(23)
        .minute(0)}
      span={60 * 60 * 1000}
      onChange={date => store.setDate(date)}
    />
  ))
  .add('自定义 children', () => (
    <TimeSpanPicker date={store.date} onChange={date => store.setDate(date)}>
      <span>
        {store.date ? moment(store.date).format('HH:mm') : '请点击选择'}
      </span>
    </TimeSpanPicker>
  ))
