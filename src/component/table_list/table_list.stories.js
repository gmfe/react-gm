import React from 'react'
import { storiesOf } from '@storybook/react'
import TableList from './index'
import { observable } from 'mobx'

const data = [
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
]

const columns = [
  {
    Header: '序号',
    Cell: cellProps => cellProps.index + 1
  },
  // 常规用法
  {
    Header: '建单时间',
    accessor: 'submit_time'
  },
  // accessor 有点用法
  {
    Header: '地址',
    accessor: 'address.text'
  },
  // accessor 是 func，需要提供 id
  {
    Header: '供应商信息',
    id: 'supplier_name',
    accessor: data => data.supplier_name
  },
  // 自定义整个单元格
  {
    Header: '入库金额',
    accessor: 'total_money',
    Cell: cellProps => (
      <div>
        {cellProps.value} 或者 {cellProps.original.total_money}
      </div>
    )
  }
]

const store = observable({
  selected: data[0].id,
  setSelect(selected) {
    this.selected = selected
  }
})

storiesOf('TableList', module).add('default', () => (
  <TableList
    data={data}
    columns={columns}
    selected={store.selected}
    onSelect={selected => store.setSelect(selected)}
    keyField={'id'}
  />
))
