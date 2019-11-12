import React from 'react'
import { storiesOf } from '@storybook/react'
import Progress from './index'

storiesOf('Progress', module).add('default', () => (
  <div style={{ width: '400px' }}>
    <Progress percentage={10} />
    <Progress percentage={10} showText={false} />

    <Progress percentage={0} textInside strokeWidth={18} />

    <Progress percentage={30} />
    <Progress percentage={70} textInside strokeWidth={18} />
    <Progress
      percentage={0}
      textInside
      textInsideFix='center'
      strokeWidth={18}
    />
    <Progress
      percentage={0}
      textInside
      textInsideFix='center'
      strokeWidth={18}
      textColor='gray'
    />
    <Progress
      percentage={70}
      textInside
      textInsideFix='center'
      strokeWidth={18}
      textColor='black'
      strokeColor='orange'
      bgColor='lightgray'
    />
    <Progress
      percentage={70}
      textInside
      textInsideFix='center'
      strokeWidth={18}
    />
    <Progress
      percentage={70}
      textInside
      textInsideFix='left'
      strokeWidth={18}
    />
    <Progress
      percentage={70}
      textInside
      textInsideFix='right'
      strokeWidth={18}
    />
    <Progress percentage={20} text='20斤/100斤' strokeWidth={18} />

    <Progress percentage={100} />
    <Progress percentage={100} status='success' />
    <Progress percentage={50} status='exception' />
  </div>
))
