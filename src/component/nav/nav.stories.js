import React from 'react'
import { storiesOf } from '@storybook/react'
import Nav from './index'
import { observable } from 'mobx'

const data = [
  {
    link: 'merchandise',
    name: '商品',
    sub: [
      {
        name: '商品管理',
        sub: [
          {
            link: 'merchandise/manage/sale',
            name: '报价单管理'
          },
          {
            link: 'merchandise/manage/list',
            name: '商品库'
          },
          {
            link: 'merchandise/manage/spu_remark',
            name: '商品备注'
          }
        ],
        link: 'merchandise/manage'
      },
      {
        name: '营销',
        sub: [
          {
            link: 'merchandise/marketing_tool/price_rule',
            name: '限时锁价'
          }
        ],
        link: 'merchandise/marketing_tool'
      }
    ]
  },
  {
    link: 'supply_chain',
    name: '供应链',
    sub: [
      {
        name: '订单',
        sub: [
          {
            link: 'supply_chain/order/list',
            name: '订单列表'
          }
        ],
        link: 'supply_chain/order'
      },
      {
        name: '分拣',
        sub: [
          {
            link: 'supply_chain/sorting/schedule',
            name: '分拣进度'
          },
          {
            link: 'supply_chain/sorting/detail',
            name: '分拣明细'
          },
          {
            link: 'supply_chain/sorting/method',
            name: '分拣方式'
          }
        ],
        link: 'supply_chain/sorting'
      }
    ]
  }
]

const store = observable({
  selected: 'supply_chain/order/list',
  setSelect(selected) {
    this.selected = selected
  }
})

storiesOf('Nav', module).add('default', () => (
  <Nav
    logo={
      <img
        src='https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png'
        style={{
          maxHeight: '35px',
          maxWidth: '80px'
        }}
      />
    }
    data={data}
    selected={store.selected}
    onSelect={store.setSelect}
  >
    点击显示 loading
  </Nav>
))
