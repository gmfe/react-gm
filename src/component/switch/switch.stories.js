import React from 'react'
import { storiesOf } from '@storybook/react'
import Switch from './index'

storiesOf('Switch', module)
  .add('default', () => <Switch />)
  .add('有文字', () => <Switch on='上架' off='下架' />)
