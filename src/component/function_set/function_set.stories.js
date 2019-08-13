import { storiesOf } from '@storybook/react'
import React from 'react'
import FunctionSet from './index'

const data = [
  {
    text: '功能1',
    onClick: () => {
      window.alert('功能1')
    }
  },
  {
    text: '功能2',
    onClick: () => {
      window.alert('功能2')
    }
  },
  {
    text: '新建',
    children: [
      {
        text: '商品新建',
        children: [
          {
            text: '商品新建1',
            onClick: () => {
              window.alert('商品新建1')
            }
          },
          {
            text: '商品新建2',
            onClick: () => {
              window.alert('商品新建2')
            }
          }
        ]
      }
    ]
  }
]

storiesOf('FunctionSet', module)
  .add('default', () => (
    <div style={{ padding: '50px' }}>
      <FunctionSet data={data} />
    </div>
  ))
  .add('自定义', () => (
    <div style={{ padding: '50px' }}>
      <FunctionSet data={data}>自定义</FunctionSet>
    </div>
  ))
  .add('disabled', () => (
    <div style={{ padding: '50px' }}>
      <FunctionSet data={data} disabled />
    </div>
  ))
  .add('right', () => (
    <div style={{ padding: '50px 0 50px 300px' }}>
      <FunctionSet data={data} right />
    </div>
  ))
