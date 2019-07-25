import React from 'react'
import { storiesOf } from '@storybook/react'
import Info from './info'
import _ from 'lodash'

storiesOf('框架|FrameWork', module).add('default', () => (
  <div>
    <Info
      more={[
        {
          text: 'adfasf',
          onClick: _.noop
        }
      ]}
    />
  </div>
))
