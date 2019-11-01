import React from 'react'
import { storiesOf } from '@storybook/react'
import InputNumberV2 from './number'
import { observable } from 'mobx'

const store = observable({
  value: null,
  setValue(value) {
    this.value = value
  }
})

storiesOf('InputNumberV2', module).add('default', () => (
  <InputNumberV2
    value={store.value}
    onChange={value => {
      console.log('onChange', value)
      store.setValue(value)
    }}
  />
))
