import React from 'react'
import { storiesOf } from '@storybook/react'
import FlipNumber from './index'
import { observable } from 'mobx'

const store = observable({
  from: 0,
  to: 0
})

setTimeout(() => {
  store.from = 234.2343
  store.to = 709394
})

storiesOf('FlipNumber', module).add('default', () => (
  <FlipNumber
    useGroup
    delay={1000}
    decimal={2}
    from={store.from}
    to={store.to}
    className='gm-text-20'
  />
))
