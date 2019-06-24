import React from 'react'
import { storiesOf } from '@storybook/react'
import DateRangePicker from './index'
import { observable } from 'mobx'

const dateRangePickerStatus1 = {
  begin: new Date(),
  end: new Date(),
  changeDate(_begin, _end) {
    this.begin = _begin
    this.end = _end
  }
}

const dateRangePickerStatus2 = observable({
  begin: null,
  end: null,
  changeDate(_begin, _end) {
    this.begin = _begin
    this.end = _end
  }
})

const store1 = observable(dateRangePickerStatus1)
const store2 = observable(dateRangePickerStatus1)
const store3 = observable(dateRangePickerStatus1)
const store4 = observable(dateRangePickerStatus1)
const store5 = observable(dateRangePickerStatus1)

storiesOf('DateRangePicker', module)
  .add('一般形式', () => (
    <DateRangePicker
      begin={store1.begin}
      end={store1.end}
      onChange={(begin, end) => store1.changeDate(begin, end)}
      inputClassName='input-sm'
      endProps={{
        min: store1.begin
      }}
    />
  ))

  .add('自定义数据展现形式', () => (
    <DateRangePicker
      begin={store3.begin}
      end={store3.end}
      onChange={(begin, end) => store3.changeDate(begin, end)}
      inputClassName='input-sm'
      beginRenderInputValue={begin => begin.getFullYear() + '年'}
    />
  ))

  .add('禁用日期选择', () => (
    <DateRangePicker
      begin={store2.begin}
      end={store2.end}
      onChange={(begin, end) => store2.changeDate(begin, end)}
      disabled
      inputClassName='input-sm'
    />
  ))

  .add('设置日期 begin && end 初始值为null', () => (
    <DateRangePicker
      begin={dateRangePickerStatus2.begin}
      end={dateRangePickerStatus2.end}
      onChange={(begin, end) => dateRangePickerStatus2.changeDate(begin, end)}
      inputClassName='input-sm'
    />
  ))

  .add('带有beginLabel && endLabel', () => (
    <DateRangePicker
      begin={store4.begin}
      end={store4.end}
      beginLabel='开始周期'
      endLabel='截止周期'
      onChange={(begin, end) => store4.changeDate(begin, end)}
      inputClassName='input-sm'
    />
  ))

  .add('可清除选择的日期', () => (
    <DateRangePicker
      begin={store5.begin}
      end={store5.end}
      onChange={(begin, end) => store5.changeDate(begin, end)}
      inputClassName='input-sm'
      endProps={{
        min: store5.begin
      }}
      canClear
    />
  ))
