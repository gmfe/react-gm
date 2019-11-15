import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import {
  fixedColumnsTableXHOC,
  sortableTableX,
  virtualizedTableX,
  TableX,
  TableXUtil
} from '../index'
import _ from 'lodash'

const initData = [
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
  },
  {
    total_money: 176,
    id: 'T5991-JHD-2018-07-25-00024',
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
  // 获取索引
  {
    Header: '序号',
    accessor: 'index',
    fixed: 'left',
    width: 100,
    Cell: ({ row }) => row.index + 1
  },
  // 常规用法
  {
    Header: '建单时间',
    accessor: 'submit_time',
    fixed: 'left'
  },
  // accessor 有点用法
  {
    Header: '地址',
    accessor: 'address.text',
    width: 200 // 定宽
  },
  // accessor 是 func，需要提供 id
  {
    Header: '供应商信息',
    accessor: data => data.supplier_name,
    id: 'supplier_name'
  },
  // 自定义整个单元格
  {
    Header: '入库金额',
    accessor: 'total_money',
    fixed: 'right',
    Cell: cellProps => {
      const { row } = cellProps
      return <div>{row.original.total_money}</div>
    }
  }
]

const store = observable({
  data: initData.slice(),
  setData(data) {
    this.data = data
  },
  selected: [],
  setSelected(selected) {
    console.log(selected)
    this.selected = selected
  },
  selectAll: false,
  setSelectAll(checked) {
    this.selectAll = checked
  }
})

const FixedColumnTableX = fixedColumnsTableXHOC(TableX)
const SortableTableX = sortableTableX(TableX)
const VirtualizedTableX = virtualizedTableX(TableX)

// storybook 有问题，所以提出来这里
const VirtualWrap = () => {
  const virtualizedData = React.useMemo(() =>
    _.times(100000, index => ({
      id: index,
      name: 'lalalla'
    }))
  )

  const virtualizedColumn = [
    {
      Header: '序号',
      accessor: 'id'
    },
    {
      Header: 'name',
      accessor: 'name'
    }
  ]

  return (
    <VirtualizedTableX
      data={virtualizedData}
      columns={virtualizedColumn}
      virtualizedHeight={300}
      virtualizedItemSize={TableXUtil.TABLEX_TR_HEIGHT}
    />
  )
}

storiesOf('TableX|HOC', module)
  .add('fixed column', () => (
    <FixedColumnTableX data={store.data} columns={columns} />
  ))
  .add('sortable', () => (
    <SortableTableX
      data={store.data}
      columns={columns}
      keyField='id'
      onSortChange={newData => {
        console.log(newData)
        store.setData(newData)
      }}
    />
  ))
  .add('virtualized', () => <VirtualWrap />)
