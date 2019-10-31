import React from 'react'
import { storiesOf } from '@storybook/react'
import _ from 'lodash'
import Price from './index'

const list = [
  0,
  10839,
  2345454545,
  1000,
  12310,
  10000000,
  -10,
  -226,
  -1000,
  -1000002323
]

storiesOf('Price', module).add('default', () => (
  <div>
    {_.map(list, v => (
      <div key={v}>
        <Price value={v} />
      </div>
    ))}
    <Price isFenUnit value={1234} style={{ fontSize: '28px', color: 'red' }} />{' '}
    <br />
    <Price
      value={40002288}
      currencyScale={0.8}
      style={{ fontSize: '28px', color: 'red' }}
    />
  </div>
))
