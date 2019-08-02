import React from 'react'
import { storiesOf } from '@storybook/react'
import DateRangePicker from './index'
import { observable } from 'mobx'
import moment from 'moment'

const store = observable({
  begin: new Date(),
  end: new Date(),
  changeDate(begin, end) {
    console.log(begin, end)
    this.begin = begin
    this.end = end
  }
})

const storeNull = observable({
  begin: null,
  end: null,
  changeDate(begin, end) {
    console.log(begin, end)
    this.begin = begin
    this.end = end
  }
})

storiesOf('DateRangePicker', module)
  .add('default', () => (
    <DateRangePicker
      begin={storeNull.begin}
      end={storeNull.end}
      onChange={(begin, end) => storeNull.changeDate(begin, end)}
    />
  ))
  .add('begin end', () => (
    <DateRangePicker
      begin={store.begin}
      end={store.end}
      onChange={(begin, end) => store.changeDate(begin, end)}
    />
  ))
  .add('disabledDate', () => (
    <DateRangePicker
      begin={store.begin}
      end={store.end}
      onChange={(begin, end) => store.changeDate(begin, end)}
      min={moment().toDate()}
      max={moment()
        .add(10, 'day')
        .toDate()}
    />
  ))
  .add('disabled', () => <DateRangePicker disabled />)
  .add('canClear', () => (
    <DateRangePicker
      begin={store.begin}
      end={store.end}
      onChange={(begin, end) => store.changeDate(begin, end)}
      canClear
    />
  ))
  .add('children 自定义', () => (
    <DateRangePicker
      begin={storeNull.begin}
      end={storeNull.end}
      onChange={(begin, end) => storeNull.changeDate(begin, end)}
    >
      <div>
        开始
        {storeNull.begin ? moment(storeNull.begin).format('YYYY-MM-DD') : ''}
        结束{storeNull.end ? moment(storeNull.end).format('YYYY-MM-DD') : ''}
      </div>
    </DateRangePicker>
  ))
