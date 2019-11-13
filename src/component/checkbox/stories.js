import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, CheckboxGroup } from './'
import { observable } from 'mobx'

const store = observable({
  value: [1, 4],
  data: [
    {
      value: 1,
      text: '广州'
    },
    {
      value: 2,
      text: '深圳',
      disabled: true
    },
    {
      value: 3,
      text: '成都'
    },
    {
      value: 4,
      text: '东莞',
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

storiesOf('Checkbox', module)
  .add('default', () => (
    <CheckboxGroup
      name='city'
      value={store.value}
      onChange={value => store.setValue(value)}
    >
      {store.data.map(v => (
        <Checkbox key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Checkbox>
      ))}
    </CheckboxGroup>
  ))
  .add('inline', () => (
    <CheckboxGroup
      name='city'
      inline
      value={store.value}
      onChange={value => store.setValue(value)}
    >
      {store.data.map(v => (
        <Checkbox key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Checkbox>
      ))}
    </CheckboxGroup>
  ))
  .add('block', () => (
    <CheckboxGroup
      name='city'
      value={store.value}
      onChange={value => store.setValue(value)}
      block
    >
      {store.data.map(v => (
        <Checkbox key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Checkbox>
      ))}
    </CheckboxGroup>
  ))
  .add('inline and col', () => (
    <CheckboxGroup
      name='city'
      value={store.value}
      onChange={value => store.setValue(value)}
      col={2}
      inline
    >
      {store.data.map(v => (
        <Checkbox key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Checkbox>
      ))}
    </CheckboxGroup>
  ))
  .add('单个', () => (
    <Checkbox
      checked={store.checked}
      onChange={() => store.setChecked(!store.checked)}
    >
      啦啦啦
    </Checkbox>
  ))
