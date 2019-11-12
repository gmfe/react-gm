import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import ColorPicker from './'

const store = observable({
  color: '',
  setColor(color) {
    this.color = color
  }
})

storiesOf('ColorPicker', module).add('default', () => (
  <ColorPicker color={store.color} onChange={value => store.setColor(value)}>
    <button>color picker</button>
  </ColorPicker>
))
