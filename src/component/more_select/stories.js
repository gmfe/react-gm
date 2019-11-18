import React from 'react'
import { storiesOf } from '@storybook/react'
import MoreSelect from './index'
import _ from 'lodash'
import { observable } from 'mobx'

const store = observable({
  data: [
    {
      value: 1,
      text: '南山'
    },
    {
      value: 2,
      text: '福田'
    },
    {
      value: 3,
      text: '罗湖'
    },
    {
      value: 4,
      text: '宝安'
    },
    {
      value: 5,
      text: '福永'
    },
    {
      value: 6,
      text: '坪洲'
    },
    {
      value: 7,
      text:
        '西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡'
    },
    {
      value: 8,
      text: '西乡8'
    },
    {
      value: 9,
      text: '西乡9'
    },
    {
      value: 10,
      text: '西乡10'
    },
    {
      value: 11,
      text: '西乡11'
    }
  ],
  dataGroup: [
    {
      label: '南山',
      children: [
        {
          value: 1,
          text: '科技园'
        },
        {
          value: 2,
          text: '大冲'
        },
        {
          value: 3,
          text: '大新'
        }
      ]
    },
    {
      label: '宝安',
      children: [
        {
          value: 21,
          text: '西乡'
        },
        {
          value: 22,
          text: '固戍'
        }
      ]
    }
  ],
  selected: null,
  setSelected(selected) {
    this.selected = selected
  },
  mulSelected: [],
  setMulSelected(selected) {
    this.mulSelected = selected
  }
})

storiesOf('MoreSelect', module)
  .add('default', () => (
    <MoreSelect
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
    />
  ))
  .add('disabled', () => (
    <MoreSelect
      disabled
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
    />
  ))
  .add('内容多的时候', () => (
    <div style={{ width: '200px' }}>
      <MoreSelect
        data={store.data}
        selected={{
          value: 7,
          text:
            '西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡西乡'
        }}
        onSelect={selected => {
          store.setSelected(selected)
        }}
      />
    </div>
  ))
  .add('renderListFilterType', () => (
    <MoreSelect
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
      renderListFilterType='pinyin'
    />
  ))
  .add('placeholder', () => (
    <MoreSelect
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
      placeholder='啊啊啊'
      searchPlaceholder='search 啊啊啊a'
    />
  ))
  .add('scroll to selected', () => (
    <MoreSelect
      data={store.data}
      selected={{ value: 11, text: '西乡11' }}
      onSelect={selected => {
        store.setSelected(selected)
      }}
    />
  ))
  .add('onSearch 同步', () => (
    <MoreSelect
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
      onSearch={searchValue => {
        // 同步直接改变 data
        store.setSelected(
          _.filter(store.data, item => item.text.includes(searchValue))
        )
      }}
    />
  ))
  .add('onSearch 异步', () => (
    <MoreSelect
      data={store.data}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
      onSearch={searchValue => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(
              _.filter(store.data, item => item.text.includes(searchValue))
            )
          }, 1000)
        })
      }}
    />
  ))
  .add('multiple', () => (
    <MoreSelect
      multiple
      data={store.data}
      selected={store.mulSelected}
      onSelect={selected => {
        store.setMulSelected(selected)
      }}
    />
  ))
  .add('group', () => (
    <MoreSelect
      isGroupList
      data={store.dataGroup}
      selected={store.selected}
      onSelect={selected => {
        store.setSelected(selected)
      }}
    />
  ))
  .add('group multiple', () => (
    <MoreSelect
      isGroupList
      multiple
      data={store.dataGroup}
      selected={store.mulSelected}
      onSelect={selected => {
        store.setMulSelected(selected)
      }}
    />
  ))
