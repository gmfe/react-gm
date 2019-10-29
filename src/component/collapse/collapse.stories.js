import React from 'react'
import { storiesOf } from '@storybook/react'
import Collapse from './index'
import { observable } from 'mobx'

const store = observable({
  isIn: true,
  setIsIn() {
    this.isIn = !this.isIn
  }
})

storiesOf('Collapse', module).add('default', () => (
  <div>
    <button onClick={() => store.setIsIn()}>toggle</button>
    <Collapse in={store.isIn}>啦啦啦啦</Collapse>
  </div>
))
