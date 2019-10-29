import React from 'react'
import { storiesOf } from '@storybook/react'
import LevelSelect from './index'
import { observable } from 'mobx'

const data = [
  {
    value: 'A',
    text: '广州',
    children: [
      { value: 1, text: '越秀' },
      { value: 2, text: '荔湾' },
      { value: 3, text: '天河' },
      { value: 4, text: '海珠' },
      { value: 5, text: '白云' },
      { value: 6, text: '黄埔' },
      { value: 7, text: '番禺' },
      { value: 8, text: '南沙' },
      { value: 9, text: '花都' },
      { value: 10, text: '增城' },
      { value: 11, text: '从化' }
    ]
  },
  {
    value: 'B',
    text: '深圳',
    children: [
      { value: 1, text: '福田' },
      { value: 2, text: '罗湖' },
      { value: 3, text: '南山' },
      { value: 4, text: '盐田' },
      { value: 5, text: '宝安' },
      { value: 6, text: '龙岗' },
      { value: 7, text: '龙华' },
      { value: 8, text: '坪山' },
      { value: 9, text: '光明' },
      { value: 10, text: '大鹏' }
    ]
  }
]

const store = observable({
  selected: [],
  changeSelect(value) {
    this.selected = value
  }
})

storiesOf('LevelSelect', module).add('common', () => (
  <LevelSelect
    selected={store.selected}
    data={data}
    onSelect={value => store.changeSelect(value)}
  />
))
