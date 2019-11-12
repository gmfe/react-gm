import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, CheckboxGroup } from './'
import { observable } from 'mobx'

const store = observable({
  value: [1],
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
    }
  ],
  setValue(value) {
    console.log(value)
    this.value = value
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
