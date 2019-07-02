import React from 'react'
import { storiesOf } from '@storybook/react'
import Radio from './radio'
import RadioGroup from './radio_group'
import { observable } from 'mobx'

const status = {
  city: null,
  setCity(_city) {
    this.city = _city
  }
}

const status1 = {
  city: 2,
  setCity(_city) {
    this.city = _city
  }
}

const example1 = observable(status)
const example2 = observable(status)
const example3 = observable(status1)

storiesOf('Radio', module)
  .add('多行排列', () => (
    <RadioGroup
      name='city'
      value={example1.city}
      onChange={v => example1.setCity(v)}
    >
      <Radio value={1} disabled>
        广州（设置disabled属性，不可选）
      </Radio>
      <Radio value={2}>深圳</Radio>
      <Radio value={3}>成都</Radio>
    </RadioGroup>
  ))

  .add('单行排列', () => (
    <RadioGroup
      name='city'
      inline
      value={example2.city}
      onChange={v => example2.setCity(v)}
    >
      <Radio value={1} disabled>
        广州（设置disabled属性，不可选）
      </Radio>
      <Radio value={2}>深圳</Radio>
      <Radio value={3}>成都</Radio>
    </RadioGroup>
  ))

  .add('自定义 RadioGroup value 先指定选中按钮', () => (
    <RadioGroup
      name='city'
      inline
      value={example3.city}
      onChange={v => example3.setCity(v)}
    >
      <Radio value={1} disabled>
        广州（设置disabled属性，不可选）
      </Radio>
      <Radio value={2}>深圳</Radio>
      <Radio value={3}>成都</Radio>
    </RadioGroup>
  ))
