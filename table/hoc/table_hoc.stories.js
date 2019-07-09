import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, fixedColumnsTableHOC } from '../index'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const FixedColumnsTable = fixedColumnsTableHOC(Table)

const store = observable({
  data: [
    {
      total_money: 111,
      id: 'T5991-JHD-2018-07-25-00027',
      sku_money: '2390.00',
      supplier_customer_id: 'LDP20180117',
      submit_time: '2018-07-25',
      status: 2,
      supplier_name: '',
      date_time: '2018-07-25',
      delta_money: 0,
      settle_supplier_id: 'T10953',
      address: null
    },
    {
      total_money: 176,
      id: 'T5991-JHD-2018-07-25-00026',
      sku_money: '176.00',
      supplier_customer_id: 'A2926',
      submit_time: '2018-07-26',
      status: 2,
      supplier_name: '段虎',
      date_time: '2018-07-25',
      delta_money: 0,
      settle_supplier_id: 'T14319',
      address: {
        value: 9,
        text: '西乡9'
      }
    },
    {
      total_money: 279,
      id: 'T5991-JHD-2018-07-25-00025',
      sku_money: '279.02',
      supplier_customer_id: 'sc215',
      submit_time: '2018-07-27',
      status: 2,
      supplier_name: '黑市桥蔬菜批发',
      date_time: '2018-07-25',
      delta_money: -2.0,
      settle_supplier_id: 'T13324',
      address: {
        value: 4,
        text: '宝安'
      }
    }
  ],
  sortTimeType: 'asc',
  sortTime() {
    this.data = _.sortBy(this.data, 'submit_time')
    if (this.sortTimeType === 'asc') {
      this.data = this.data.reverse()
      this.sortTimeType = 'desc'
    } else {
      this.sortTimeType = 'asc'
    }
  }
})

storiesOf('Table/Table HOC', module).add(
  'fixed columns',
  () => (
    <FixedColumnsTable
      data={store.data}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time',
          // 提供 fixed 和 minWidth or width
          fixed: 'left',
          minWidth: 100
        },
        {
          Header: '入库单号',
          accessor: 'id',
          fixed: 'left',
          minWidth: 100
        },
        {
          Header: '供应商信息',
          accessor: 'supplier_name',
          minWidth: 120
        },
        {
          Header: '入库金额',
          accessor: 'total_money',
          minWidth: 120
        },
        {
          Header: '单据状态',
          accessor: 'status',
          minWidth: 120
        },
        {
          Header: 'sku_money',
          accessor: 'sku_money',
          minWidth: 120
        },
        {
          Header: 'supplier_customer_id',
          accessor: 'supplier_customer_id',
          minWidth: 120
        },
        {
          Header: 'date_time',
          accessor: 'date_time',
          minWidth: 120,
          fixed: 'right'
        }
      ]}
    />
  ),
  {
    info: {
      text: `
使用
\`const FixedColumnsTable = fixedColumnsTableHOC(Table)\`

在需要 fixed 的 column 提供 fixed 和 width or minWidth，其中 fixed 两个值 
\`left\` \`right\`

具体用法请查看 story 源码
`
    }
  }
)
