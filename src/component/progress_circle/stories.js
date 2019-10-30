import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressCircle from './index'

storiesOf('Progress', module).add('default', () => (
  <div>
    <ProgressCircle percentage={this.state.percentage} showText={false} />

    <ProgressCircle
      percentage={this.state.percentage}
      status='exception'
      showText={false}
    />

    <ProgressCircle percentage={this.state.percentage} textPosition='right' />

    <ProgressCircle
      percentage={this.state.percentage}
      textPosition='left'
      text={this.state.percentage + '/100'}
    />

    <ProgressCircle percentage={this.state.percentage} size='100' />

    <ProgressCircle
      percentage={this.state.percentage}
      size='100'
      lineWidth={20}
    />

    <ProgressCircle
      percentage={this.state.percentage}
      size='100'
      lineWidth={20}
      progressColor='orange'
    />

    <ProgressCircle
      percentage={this.state.percentage}
      size='100'
      lineWidth={20}
      progressColor='orange'
      bgColor='gray'
    />
  </div>
))
