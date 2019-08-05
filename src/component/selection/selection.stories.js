import React from 'react'
import { storiesOf } from '@storybook/react'
import Selection from './'

storiesOf('内部工具|Selection', module)
  .add('default', () => (
    <Selection
      onSelect={selected => console.log(selected)}
      placeholder='请选择'
    />
  ))
  .add('自定义选中项', () => (
    <Selection
      selected={{ value: 0, text: '已选中' }}
      onSelect={selected => console.log(selected)}
      renderSelected={item => item.text + 'lalala'}
    />
  ))
