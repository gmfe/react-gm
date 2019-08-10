import React from 'react'
import { storiesOf } from '@storybook/react'
import DateRangePickerNew from './index'
import { observable } from 'mobx'
import moment from 'moment'

const store = {
  begin: new Date(),
  end: new Date(),
  changeDate(_begin, _end) {
    this.begin = _begin
    this.end = _end
  }
}

const store1 = observable({
  begin: null,
  end: null,
  changeDate(_begin, _end) {
    this.begin = _begin
    this.end = _end
  }
})

const commonStore = observable(store)
const disabledStore = observable(store)
const canClearStore = observable(store)
const customsStore = observable(store)

storiesOf('DateRangePickerNew', module)
  .add('说明', () => null, {
    info: {
      text: `
        DateRangePickerNew -- 日期段选择
        
        主要功能：提供日期段选择
        
        - 区别于之前的组件，将两个日期揉合一起选择，一个日历可以同时选择 开始日期 && 结束日期
        - 以点击的日期进行判断，作为选择的 开始日期 && 结束日期
        - 提供日期快速选择近一个月内的日期
      `
    }
  })
  .add('一般形式', () => (
    <DateRangePickerNew
      dateStart={commonStore.begin}
      dateEnd={commonStore.end}
      onChange={(begin, end) => commonStore.changeDate(begin, end)}
    />
  ))

  .add('设置初始值为 null', () => (
    <DateRangePickerNew
      dateStart={store1.begin}
      dateEnd={store1.end}
      onChange={(begin, end) => store1.changeDate(begin, end)}
    />
  ))

  .add('自定义某段日期不可选', () => (
    <DateRangePickerNew
      dateStart={disabledStore.begin}
      dateEnd={disabledStore.end}
      onChange={(begin, end) => disabledStore.changeDate(begin, end)}
      disabledDate={m => {
        return moment(m).get('day') === 5
      }}
    />
  ))

  .add('自定义日期展示格式', () => (
    <DateRangePickerNew
      dateStart={customsStore.begin}
      dateEnd={customsStore.end}
      onChange={(begin, end) => customsStore.changeDate(begin, end)}
      renderInputValue={m => {
        return moment(m).format('MM-DD')
      }}
    />
  ))

  .add('禁用日期选择', () => <DateRangePickerNew disabled />)

  .add('可清除选择的日期', () => (
    <div>
      <DateRangePickerNew
        dateStart={canClearStore.begin}
        dateEnd={canClearStore.end}
        onChange={(begin, end) => canClearStore.changeDate(begin, end)}
        canClear
      />
      <div className='gm-text-20 gm-margin-top-15'>
        Tip: 具体清除按钮交互未确定
      </div>
    </div>
  ))
