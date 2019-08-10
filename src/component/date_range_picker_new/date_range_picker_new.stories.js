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
  .add('一般形式', () => (
    <DateRangePickerNew
      begin={commonStore.begin}
      end={commonStore.end}
      onChange={(begin, end) => commonStore.changeDate(begin, end)}
    />
  ))

  .add('设置初始值为 null', () => (
    <DateRangePickerNew
      begin={store1.begin}
      end={store1.end}
      onChange={(begin, end) => store1.changeDate(begin, end)}
    />
  ))

  .add('自定义某段日期不可选', () => (
    <DateRangePickerNew
      begin={disabledStore.begin}
      end={disabledStore.end}
      onChange={(begin, end) => disabledStore.changeDate(begin, end)}
      disabledDate={m => {
        return moment(m).get('day') === 5
      }}
    />
  ))

  .add('自定义日期展示格式', () => (
    <DateRangePickerNew
      begin={customsStore.begin}
      end={customsStore.end}
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
        begin={canClearStore.begin}
        end={canClearStore.end}
        onChange={(begin, end) => canClearStore.changeDate(begin, end)}
        canClear
      />
      <div className='gm-text-20 gm-margin-top-15'>Tip: 后续需更改</div>
    </div>
  ))

  .add('当展示内容多时，需要自定义宽度', () => (
    <DateRangePickerNew
      begin={customsStore.begin}
      end={customsStore.end}
      onChange={(begin, end) => customsStore.changeDate(begin, end)}
      renderInputValue={m => {
        return (
          moment(m).format('MM-DD') +
          ' 13:00收获 ～ ' +
          moment(m).format('MM-DD') +
          ' 14:00收货'
        )
      }}
      totalWidth='550px'
      canClear
    />
  ))
