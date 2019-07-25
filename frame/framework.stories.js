import React from 'react'
import { storiesOf } from '@storybook/react'
import Info from './info'

storiesOf('框架|FrameWork', module).add('default', () => (
  <div>
    <Info
      more={[
        {
          text: 'adfasf',
          onClick: () => {
            console.log('123')
          }
        }
      ]}
    />
  </div>
))
