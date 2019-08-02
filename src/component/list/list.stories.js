import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './index'
import { observable } from 'mobx'

const data = [
  { value: '南山', text: '南山' },
  { value: '福田', text: '福田', disabled: true },
  { value: '龙岗', text: '龙岗' },
  { value: '罗湖', text: '罗湖' },
  { value: '罗湖1', text: '罗湖1' },
  { value: '罗湖2', text: '罗湖2' },
  { value: '罗湖3', text: '罗湖3' },
  { value: '罗湖4', text: '罗湖4' },
  { value: '罗湖5', text: '罗湖5' }
]

const groupData = [
  {
    label: '分组二',
    children: [{ value: '南山', text: '南山' }, { value: '福田', text: '福田' }]
  },
  {
    label: '分组一',
    children: [{ value: '龙岗', text: '龙岗' }, { value: '罗湖', text: '罗湖' }]
  }
]

const store = observable({
  selected: null,
  setSelected(selected) {
    console.log(selected)
    this.selected = selected
  }
})

storiesOf('List', module)
  .add('default', () => (
    <div className='gm-inline-block'>
      <List
        data={data}
        selected={store.selected}
        onSelect={selected => store.setSelected(selected)}
      />
    </div>
  ))
  .add('disabled', () => (
    <div className='gm-inline-block'>
      <List
        data={data}
        selected={store.selected}
        onSelect={selected => store.setSelected(selected)}
      />
    </div>
  ))
  .add('multiple', () => (
    <div className='gm-inline-block'>
      <List
        multiple
        data={data}
        selected={store.selected}
        onSelect={selected => store.setSelected(selected)}
      />
    </div>
  ))
  .add('group', () => (
    <div className='gm-inline-block'>
      <List
        data={groupData}
        isGroupList
        selected={store.selected}
        onSelect={selected => store.setSelected(selected)}
      />
    </div>
  ))
  .add('自定义 item', () => (
    <div className='gm-inline-block'>
      <List
        data={data}
        selected={store.selected}
        onSelect={selected => store.setSelected(selected)}
        renderItem={(item, index) => item.text + index}
      />
    </div>
  ))
  .add('isScrollTo', () => (
    <div className='gm-inline-block'>
      <List
        data={data}
        selected={'罗湖5'}
        onSelect={selected => store.setSelected(selected)}
        renderItem={(item, index) => item.text + index}
        isScrollTo
        style={{
          maxHeight: '100px'
        }}
      />
    </div>
  ))
