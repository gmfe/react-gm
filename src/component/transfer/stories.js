import React from 'react'
import { storiesOf } from '@storybook/react'
import Transfer from './transfer'
import TransferGroup from './transfer_group'
import { observable } from 'mobx'

const store = observable({
  list: [
    {
      value: 1,
      name: '水果'
    },
    {
      value: 2,
      name: '蔬菜'
    },
    {
      value: 3,
      name: '肉类'
    },
    {
      value: 4,
      name: '干果'
    },
    {
      value: 5,
      name: '什么乱七八糟'
    },
    {
      value: 6,
      name: '电子科技'
    }
  ],
  groupList: [
    {
      value: 1,
      name: '蔬菜',
      children: [
        {
          value: 11,
          name: '叶菜',
          children: [
            {
              value: 111,
              name: '皇帝菜'
            },
            {
              value: 112,
              name: '金不换'
            }
          ]
        },
        {
          value: 12,
          name: '甘蓝',
          children: [
            {
              value: 121,
              name: '甘蓝1'
            },
            {
              value: 122,
              name: '甘蓝2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      name: '冻品',
      children: [
        {
          value: 21,
          name: '冻猪肉',
          children: [
            {
              value: 211,
              name: '五花肉'
            },
            {
              value: 212,
              name: '猪脚'
            }
          ]
        }
      ]
    }
  ],
  selectedValues: [],
  setSelectedValues(values) {
    this.selectedValues = values
  }
})

storiesOf('Transfer', module)
  .add('default', () => (
    <Transfer
      list={store.list}
      selectedValues={store.selectedValues}
      onSelect={values => store.setSelectedValues(values)}
    />
  ))
  .add('disabled', () => (
    <Transfer
      disabled
      list={store.list}
      selectedValues={store.selectedValues}
      onSelect={values => store.setSelectedValues(values)}
    />
  ))
  .add('group', () => (
    <TransferGroup
      list={store.groupList}
      selectedValues={store.selectedValues}
      onSelect={values => store.setSelectedValues(values)}
    />
  ))
