import React from 'react'
import { storiesOf } from '@storybook/react'
import Cascader from './cascader'
import { observable } from 'mobx'

const store = observable({
  address: [
    {
      value: '110000',
      name: '北京市',
      children: [
        {
          value: '150600000000',
          name: '东城区',
          children: [
            {
              id: '150600800000',
              name: '东单',
              value: '150600800000'
            },
            {
              id: '150600900000',
              name: '东四',
              value: '150600900000'
            },
            {
              id: '150602200000',
              name: '体育馆路',
              value: '150602200000'
            },
            {
              id: '150601100000',
              name: '光明楼',
              value: '150601100000'
            },
            {
              id: '150603900000',
              name: '其他地区',
              value: '150603900000'
            },
            {
              id: '150602100000',
              name: '前门',
              value: '150602100000'
            },
            {
              id: '150600200000',
              name: '北京站',
              value: '150600200000'
            },
            {
              id: '150600300000',
              name: '北新桥',
              value: '150600300000'
            },
            {
              id: '150602000000',
              name: '千山区',
              value: '150602000000'
            },
            {
              id: '150601300000',
              name: '和平里',
              value: '150601300000'
            },
            {
              id: '150600700000',
              name: '地安门',
              value: '150600700000'
            },
            {
              id: '150603500000',
              name: '天坛',
              value: '150603500000'
            },
            {
              id: '150602300000',
              name: '天安门',
              value: '150602300000'
            },
            {
              id: '150602400000',
              name: '天桥',
              value: '150602400000'
            },
            {
              id: '150600100000',
              name: '安定门',
              value: '150600100000'
            },
            {
              id: '150603400000',
              name: '山东省',
              value: '150603400000'
            },
            {
              id: '150600400000',
              name: '崇文门',
              value: '150600400000'
            },
            {
              id: '150603100000',
              name: '左安门',
              value: '150603100000'
            },
            {
              id: '150601200000',
              name: '广渠门',
              value: '150601200000'
            },
            {
              id: '150603700000',
              name: '扎赉特旗',
              value: '150603700000'
            },
            {
              id: '150603600000',
              name: '新世界',
              value: '150603600000'
            },
            {
              id: '150601600000',
              name: '景山',
              value: '150601600000'
            },
            {
              id: '150602700000',
              name: '永定门',
              value: '150602700000'
            },
            {
              id: '150603300000',
              name: '沙子口',
              value: '150603300000'
            },
            {
              id: '150601000000',
              name: '法华寺',
              value: '150601000000'
            },
            {
              id: '150601500000',
              name: '济齐路',
              value: '150601500000'
            },
            {
              id: '150600600000',
              name: '灯市口',
              value: '150600600000'
            },
            {
              id: '150602500000',
              name: '王府井',
              value: '150602500000'
            },
            {
              id: '150603000000',
              name: '珠市口',
              value: '150603000000'
            },
            {
              id: '150600500000',
              name: '磁器口',
              value: '150600500000'
            },
            {
              id: '150601700000',
              name: '立山区',
              value: '150601700000'
            },
            {
              id: '150602800000',
              name: '站前区',
              value: '150602800000'
            },
            {
              id: '150601900000',
              name: '美术馆',
              value: '150601900000'
            },
            {
              id: '150601400000',
              name: '花市',
              value: '150601400000'
            },
            {
              id: '150602600000',
              name: '雍和宫',
              value: '150602600000'
            },
            {
              id: '150602900000',
              name: '青年湖',
              value: '150602900000'
            },
            {
              id: '150601800000',
              name: '龙潭湖',
              value: '150601800000'
            }
          ]
        }
      ]
    },
    {
      value: '22',
      name: '南京',
      children: [
        {
          value: '22-1',
          name: '南京东',
          children: [
            {
              value: '22-1-1',
              name: '南京东街'
            },
            {
              value: '22-1-2',
              name: '南京东街'
            }
          ]
        }
      ]
    }
  ],
  selected: [],
  handleSelected(ids) {
    this.selected = ids
  }
})

storiesOf('Cascader', module).add('default', () => (
  <Cascader
    filtrable
    name='area_id'
    data={store.address}
    value={store.selected}
    onChange={ids => store.handleSelected(ids)}
  />
))
