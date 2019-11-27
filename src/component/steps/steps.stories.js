import React from 'react'
import { storiesOf } from '@storybook/react'
import Steps from './index'

storiesOf('Steps', module).add('default', () => (
  <Steps
    data={[
      { title: '第一步' },
      { title: '第二步', description: '这是第二步' },
      { title: '第三步', description: '这是第三步' },
      { title: '第四步', description: '这是第四步这是第四步这是第四步' }
    ]}
    style={{ width: '300px' }}
  />
))
