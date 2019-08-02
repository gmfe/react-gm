import React from 'react'
import { storiesOf } from '@storybook/react'
import DatePicker from './index'
import moment from 'moment'
import { observable } from 'mobx'

const datepickerStatus = {
  date: null,
  setDate(date) {
    this.date = date
  }
}

const commonStore = observable(datepickerStatus)
const inputValueRenderStore = observable(datepickerStatus)
const disabledStore1 = observable(datepickerStatus)
const disabledStore2 = observable(datepickerStatus)
const disabledStore3 = observable(datepickerStatus)
const withNoInputStatus = observable(datepickerStatus)

storiesOf('DatePicker', module)
  .add('一般形式', () => (
    <DatePicker
      date={commonStore.date}
      placeholder='请选择日期'
      onChange={date => commonStore.setDate(date)}
    />
  ))

  .add('自定义数据展现形式', () => (
    <DatePicker
      date={inputValueRenderStore.date}
      placeholder='请选择日期'
      onChange={date => inputValueRenderStore.setDate(date)}
      renderDate={begin => `${begin.getMonth() + 1}月-${begin.getDate()}日`}
    />
  ))

  .add('禁用日期选择', () => (
    <DatePicker
      date={disabledStore1.date}
      placeholder='请选择日期'
      disabled
      onChange={date => disabledStore1.setDate(date)}
    />
  ))

  .add('自定义禁止选择的日期段', () => (
    <div>
      <div className='gm-text-20 gm-margin-10'>只能选择非周五的日期</div>
      <DatePicker
        date={disabledStore2.date}
        placeholder='非周五'
        disabledDate={m => {
          return moment(m).get('day') === 5
        }}
        onChange={date => disabledStore2.setDate(date)}
      />
      <div className='gm-text-20 gm-margin-10'>只能选择今天之后的日期</div>
      <DatePicker
        date={disabledStore3.date}
        placeholder='选今天之后的'
        min={new Date()}
        onChange={date => disabledStore3.setDate(date)}
      />
    </div>
  ))

  .add('自定义 children', () => (
    <DatePicker
      date={withNoInputStatus.date}
      onChange={date => withNoInputStatus.setDate(date)}
    >
      <span>
        {withNoInputStatus.date
          ? moment(withNoInputStatus.date).format('YYYY-MM-DD')
          : '请点击选择'}
      </span>
    </DatePicker>
  ))
