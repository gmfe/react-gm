import React from 'react'
import { storiesOf } from '@storybook/react'
import Nav from './index'
import { observable } from 'mobx'

const data = [
  {
    link: '/merchandise',
    name: 'nav__商品',
    sub: [
      {
        name: 'nav__商品管理',
        sub: [
          {
            link: '#/merchandise/manage/sale',
            name: 'nav__报价单管理'
          },
          {
            link: '#/merchandise/manage/list',
            name: 'nav__商品库',
            show: false
          },
          {
            link: '#/merchandise/manage/spu_remark',
            name: 'nav__商品备注'
          }
        ],
        link: '#/merchandise/manage'
      },
      {
        name: 'nav__营销',
        sub: [
          {
            link: '#/merchandise/marketing_tool/price_rule',
            name: 'nav__限时锁价'
          }
        ],
        link: '#/merchandise/marketing_tool'
      }
    ]
  },
  {
    link: '#/supply_chain',
    name: 'nav__供应链',
    sub: [
      {
        name: 'nav__订单',
        sub: [
          {
            link: '#/supply_chain/order/list',
            name: 'nav__订单列表'
          }
        ],
        link: '#/supply_chain/order'
      },
      {
        name: 'nav__分拣',
        sub: [
          {
            link: '#/supply_chain/sorting/schedule',
            name: 'nav__分拣进度'
          },
          {
            link: '#/supply_chain/sorting/detail',
            name: 'nav__分拣明细'
          },
          {
            link: '#/supply_chain/sorting/method',
            name: 'nav__分拣方式'
          }
        ],
        link: '#/supply_chain/sorting'
      }
    ]
  }
]

const store = observable({
  selected: '',
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
