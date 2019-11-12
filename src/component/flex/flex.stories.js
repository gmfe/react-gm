import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from './index'

storiesOf('Flex', module).add('default', () => <Flex />, {
  info: {
    text: `
语法见 [Flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

本组件只是个简单的封装，只提供兼容的属性
`
  }
})
