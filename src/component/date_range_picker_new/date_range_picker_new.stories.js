import React from 'react'
import { storiesOf } from '@storybook/react'
import DateRangePickerNew from './index'
import { observable } from 'mobx'

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
const canClearStore = observable(store)

storiesOf('DateRangePickerNew', module)
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
