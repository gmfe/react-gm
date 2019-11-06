import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio, RadioGroup } from './'
import { observable } from 'mobx'

const store = observable({
  value: 3,
  data: [
    {
      value: 1,
      text: '广州'
    },
    {
      value: 2,
      text: '深圳'
    },
    {
      value: 3,
      text: '成都',
      disabled: true
    }
  ],
  setValue(value) {
    console.log(value)
    this.value = value
  },
  checked: false,
  setChecked(checked) {
    this.checked = checked
  }
})

storiesOf('Radio', module)
  .add('default', () => (
    <RadioGroup
      name='city'
      value={store.value}
      onChange={value => store.setValue(value)}
    >
      {store.data.map(v => (
        <Radio key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Radio>
      ))}
    </RadioGroup>
  ))
  .add('inline', () => (
    <RadioGroup
      name='city'
      inline
      value={store.value}
      onChange={value => store.setValue(value)}
    >
      {store.data.map(v => (
        <Radio key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Radio>
      ))}
    </RadioGroup>
  ))
  .add('col', () => (
    <RadioGroup
      name='city'
      inline
      value={store.value}
      onChange={value => store.setValue(value)}
      col={2}
    >
      {store.data.map(v => (
        <Radio key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Radio>
      ))}
    </RadioGroup>
  ))
  .add('单个', () => (
    <Radio
      checked={store.checked}
      onChange={() => store.setChecked(!store.checked)}
    >
      啦啦啦
    </Radio>
  ))
