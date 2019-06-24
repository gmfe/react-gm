import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, TableUtil } from '../index'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const { SortHeader } = TableUtil

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
  sortTimeType: null,
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
    accessor: 'address.text',
    width: 200 // 定宽
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

storiesOf('表格|Table', module)
  .addParameters({
    info: {
      text: `
react-table 文档见 https://github.com/tannerlinsley/react-table/tree/v6

用法见 story 源码
`
    }
  })
  .add('default', () => <Table data={store.data} columns={columns} />)
  .add('loading & nodata', () => (
    <div>
      <Table loading data={store.data} columns={columns} />
      <Table data={[]} columns={columns} />
    </div>
  ))
  .add('limit height width & scroll', () => (
    <Table
      style={{
        height: '200px',
        width: '300px'
      }}
      data={store.data}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time',
          width: 400
        },
        {
          Header: '地址',
          accessor: 'address.text',
          width: 200
        }
      ]}
    />
  ))
  .add('group', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: 'Group1',
          columns: [
            {
              Header: '序号',
              Cell: cellProps => cellProps.index + 1
            },
            {
              Header: '建单时间',
              accessor: 'submit_time'
            },
            {
              Header: '地址',
              accessor: 'address.text',
              width: 200
            }
          ]
        },
        {
          Header: 'Group2',
          columns: [
            {
              Header: '供应商信息',
              id: 'supplier_name',
              accessor: data => data.supplier_name
            },
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
        }
      ]}
    />
  ))
  .add('sort', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1,
          sortable: true
        },
        {
          Header: (
            <SortHeader
              onClick={() => store.sortTime()}
              type={store.sortTimeType}
            >
              建单时间
            </SortHeader>
          ),
          accessor: 'submit_time'
        },
        {
          Header: '地址',
          accessor: 'address.text',
          width: 200
        }
      ]}
    />
  ))
