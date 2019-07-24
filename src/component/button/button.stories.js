import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
import { observable } from 'mobx'
import SVGMore from '../../../svg/more.svg'

const store = observable({
  count: 0,
  addCount() {
    this.count++
  }
})

storiesOf('Button', module)
  .add('default', () => (
    <div>
      <SVGMore className='gm-padding-lr-15' />

      <Button
        className='btn btn-default'
        onClick={() =>
          new Promise(resolve => setTimeout(() => resolve(), 2000))
        }
      >
        点击显示 loading
      </Button>
    </div>
  ))
  .add('with mobx', () => (
    <Button onClick={() => store.addCount()}>aaa{store.count}</Button>
  ))
