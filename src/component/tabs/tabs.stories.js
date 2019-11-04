import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabs from './tabs'
import { observable } from 'mobx'
import Button from '../button'

const store = observable({
  active: 0,
  changeActive(index) {
    this.active = index
  }
})
const tabs = ['第一个', '第二个', '第三个']
storiesOf('Tabs', module)
  .add('Control', () => (
    <Tabs
      tabs={tabs}
      active={store.active}
      onChange={index => store.changeActive(index)}
    >
      <Buttons />
      <Buttons />
      <Buttons />
    </Tabs>
  ))
  .add('UnControl', () => (
    <Tabs tabs={tabs} defaultActive={2}>
      <Buttons />
      <Buttons />
      <Buttons />
    </Tabs>
  ))
  .add('Lazy', () => (
    <Tabs tabs={tabs} lazy>
      <Buttons />
      <Buttons />
      <Buttons />
    </Tabs>
  ))

const Buttons = () => {
  const [state, changeState] = React.useState(0)

  const handleClick = () => {
    changeState(state + 1)
  }
  return <Button onClick={handleClick}>{state}</Button>
}
