import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './select'
import Option from './option'
import { observable } from 'mobx'
import _ from 'lodash'

const list = [
  {
    value: 0,
    text: '南山'
  },
  {
    value: 1,
    text: '福田'
  },
  {
    value: 2,
    text: '宝安'
  },
  {
    value: 3,
    text: '宝安不可用',
    disabled: true
  },
  {
    value: 3,
    text: '罗湖'
  }
]

const store = observable({
  value: 0,
  setValue(value) {
    this.value = value
  }
})

storiesOf('Select', module)
  .add('default', () => (
    <Select
      data={list}
      value={store.value}
      onChange={value => store.setValue(value)}
    />
  ))
  .add('disabled', () => (
    <Select
      data={list}
      value={store.value}
      onChange={value => store.setValue(value)}
      disabled
    />
  ))
  .add('clean 模式', () => (
    <Select
      clean
      data={list}
      value={store.value}
      onChange={value => store.setValue(value)}
    />
  ))
  .add('兼容老用法', () => (
    <Select value={store.value} onChange={value => store.setValue(value)}>
      {_.map(list, v => (
        <Option key={v.value} value={v.value} disabled={v.disabled}>
          {v.text}
        </Option>
      ))}
    </Select>
  ))
