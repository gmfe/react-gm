import React from 'react'
import { storiesOf } from '@storybook/react'
import LevelList from './'
import { observable } from 'mobx'

const areaData = [
  {
    value: '0',
    text: '宝安',
    children: [
      {
        value: '01',
        text: '西乡'
      },
      {
        value: '02',
        text: '固戍'
      }
    ]
  },
  {
    value: '1',
    text: '南山',
    children: [
      {
        value: '11',
        text: '科技园',
        children: [
          {
            value: '111',
            text: '东区'
          },
          {
            value: '112',
            text: '西区'
          }
        ]
      }
    ]
  }
]

const store = observable({
  selected: ['1'],
  willActiveSelected: ['1'],
  setSelected(selected) {
    this.selected = selected
  },
  setWillActiveSelected(willActiveSelected) {
    this.willActiveSelected = willActiveSelected
  }
})

storiesOf('LevelList', module).add('default', () => (
  <div className='gm-inline-block'>
    <LevelList
      data={areaData}
      selected={store.selected}
      onSelect={selected => store.setSelected(selected)}
      willActiveSelected={store.willActiveSelected}
      onWillActiveSelect={willActiveSelected => {
        console.log(willActiveSelected)
        store.setWillActiveSelected(willActiveSelected)
      }}
    />
  </div>
))
