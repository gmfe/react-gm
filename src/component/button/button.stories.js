import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Button', module).add('default', () => (
  <Button
    className='btn btn-default'
    onClick={() => new Promise(resolve => setTimeout(() => resolve(), 2000))}
  >
    点击显示 loading
  </Button>
))
