import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressCircle from './index'
import { observable } from 'mobx'

const store = observable({
  percentage: 0,
  setPercentage(percentage) {
    this.percentage = percentage
  }
})

setTimeout(() => {
  store.setPercentage(80)
}, 1000)

storiesOf('ProgressCircle', module).add('default', () => (
  <div>
    <ProgressCircle percentage={store.percentage} showText={false} />

    <ProgressCircle
      percentage={store.percentage}
      status='exception'
      showText={false}
    />

    <ProgressCircle percentage={store.percentage} textPosition='right' />

    <ProgressCircle
      percentage={store.percentage}
      textPosition='left'
      text={store.percentage + '/100'}
    />

    <ProgressCircle percentage={store.percentage} size='100' />

    <ProgressCircle percentage={store.percentage} size='100' lineWidth={20} />

    <ProgressCircle
      percentage={store.percentage}
      size='100'
      lineWidth={20}
      progressColor='orange'
    />

    <ProgressCircle
      percentage={store.percentage}
      size='100'
      lineWidth={20}
      progressColor='orange'
      bgColor='gray'
    />
  </div>
))
