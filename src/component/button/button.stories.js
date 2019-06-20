import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
import { observable } from 'mobx'

const store = observable({
  name: '123',
  setName() {
    this.name = '222'
  }
})

storiesOf('Button', module)
  .add('default', () => (
    <Button
      className='btn btn-default'
      onClick={() => new Promise(resolve => setTimeout(() => resolve(), 2000))}
    >
      点击显示 loading
    </Button>
  ))
  .add('with mobx', () => (
    <Button onClick={() => store.setName()}>aaa{store.name}</Button>
  ))
