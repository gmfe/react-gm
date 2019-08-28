import React from 'react'
import { storiesOf } from '@storybook/react'
import IconDownUp from './'
import { observable } from 'mobx'

const store = observable({
  active: false,
  toggle() {
    this.active = !this.active
  }
})

storiesOf('IconDownUp', module).add('default', () => (
  <div>
    <IconDownUp active={store.active} />
    <button onClick={() => store.toggle()}>click</button>
  </div>
))
