import React from 'react'
import { storiesOf } from '@storybook/react'
import Affix from './index'

storiesOf('Affix', module).add('default', () => (
  <div>
    <div style={{ height: '1500px' }} />
    <Affix bottom={0} top={0}>
      <div style={{ backgroundColor: 'red' }}>我会被钉住在底部 和 顶部</div>
    </Affix>
    <div style={{ height: '1500px' }} />
  </div>
))
