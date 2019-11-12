import React from 'react'
import { storiesOf } from '@storybook/react'
import NProgress from './index'

storiesOf('NProgress', module).add('default', () => (
  <div>
    <button
      onClick={() => {
        NProgress.start()
      }}
    >
      start
    </button>
    <button
      onClick={() => {
        NProgress.done()
      }}
    >
      end
    </button>
  </div>
))
