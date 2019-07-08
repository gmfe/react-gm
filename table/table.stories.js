import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './table'
import FixedColumnsTableHOC from './fixed_columns_table'
import EditTable from './edit_table'
import { OperationHeader, EditTableOperation } from './util'

import { DatePicker, InputNumberV2, MoreSelect } from '../src/index'

const FixedColumnsTable = FixedColumnsTableHOC(Table)

const selectData = [
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
    text: '西乡'
  },
  {
    value: 8,
    text: '西乡8'
  },
  {
    value: 9,
    text: '西乡9西乡9西乡9西乡9西乡9西乡9西乡9西乡9'
  },
  {
    value: 10,
    text: '西乡10'
  },
  {
    value: 11,
    text: '西乡11'
  }
]

const data = [
  {
    total_money: 2390239023902390239023902390,
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
    submit_time: '2018-07-25',
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
    submit_time: '2018-07-25',
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
    total_money: 714.7,
    id: 'T5991-JHD-2018-07-25-00024',
    sku_money: '714.70',
    supplier_customer_id: 'DZP001',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '黑市桥豆制品批发1号摊位',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T9651',
    address: {
      value: 4,
      text: '宝安'
    }
  },
  {
    total_money: 2390,
    id: 'T5991-JHD-2018-07-25-00023',
    sku_money: '2390.00',
    supplier_customer_id: 'LDP20180117',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T10953',
    address: {
      value: 6,
      text: '坪洲'
    }
  },
  {
    total_money: 176,
    id: 'T5991-JHD-2018-07-25-00022',
    sku_money: '176.00',
    supplier_customer_id: 'A2926',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '段虎',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T14319',
    address: {
      value: 10,
      text: '西乡10'
    }
  },
  {
    total_money: 279,
    id: 'T5991-JHD-2018-07-25-00021',
    sku_money: '279.02',
    supplier_customer_id: 'sc215',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '黑市桥蔬菜批发',
    date_time: '2018-07-25',
    delta_money: -2.0,
    settle_supplier_id: 'T13324',
    address: {
      value: 9,
      text: '西乡9西乡9西乡9西乡9西乡9西乡9西乡9西乡9'
    }
  },
  {
    total_money: 2390,
    id: 'T5991-JHD-2018-07-25-00020',
    sku_money: '2390.00',
    supplier_customer_id: 'LDP20180117',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T10953',
    address: {
      value: 10,
      text: '西乡10'
    }
  },
  {
    total_money: 176,
    id: 'T5991-JHD-2018-07-25-00019',
    sku_money: '176.00',
    supplier_customer_id: 'A2926',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '段虎',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T14319',
    address: {
      value: 6,
      text: '坪洲'
    }
  },
  {
    total_money: 279,
    id: 'T5991-JHD-2018-07-25-00018',
    sku_money: '279.02',
    supplier_customer_id: 'sc215',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '黑市桥蔬菜批发',
    date_time: '2018-07-25',
    delta_money: -2.0,
    settle_supplier_id: 'T13324',
    address: {
      value: 6,
      text: '坪洲'
    }
  },
  {
    total_money: 2390,
    id: 'T5991-JHD-2018-07-25-00017',
    sku_money: '2390.00',
    supplier_customer_id: 'LDP20180117',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T10953',
    address: {
      value: 6,
      text: '坪洲'
    }
  },
  {
    total_money: 176,
    id: 'T5991-JHD-2018-07-25-00016',
    sku_money: '176.00',
    supplier_customer_id: 'A2926',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '段虎',
    date_time: '2018-07-25',
    delta_money: 0,
    settle_supplier_id: 'T14319',
    address: {
      value: 6,
      text: '坪洲'
    }
  },
  {
    total_money: 279,
    id: 'T5991-JHD-2018-07-25-00015',
    sku_money: '279.02',
    supplier_customer_id: 'sc215',
    submit_time: '2018-07-25',
    status: 2,
    supplier_name: '黑市桥蔬菜批发',
    date_time: '2018-07-25',
    delta_money: -2.0,
    settle_supplier_id: 'T13324',
    address: {
      value: 6,
      text: '坪洲'
    }
  }
]

storiesOf('Table', module)
  .add('common Table', () => (
    <Table
      data={data}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time'
        },
        {
          Header: '入库单号',
          accessor: 'id'
        },
        {
          Header: '供应商信息',
          accessor: 'supplier_name'
        },
        {
          Header: '入库金额',
          accessor: 'total_money'
        },
        {
          Header: '单据状态',
          accessor: 'status'
        }
      ]}
    />
  ))
  .add('fixed columns Table', () => (
    <FixedColumnsTable
      data={data}
      style={{ maxHeight: '400px' }}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time',
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
  ))
  .add('edit Table', () => {
    return (
      <EditTable
        data={data}
        style={{ maxHeight: '400px' }}
        columns={[
          {
            Header: '序号',
            id: 'number',
            fixed: 'left',
            minWidth: 50,
            Cell: ({ index }) => index + 1
          },
          {
            Header: OperationHeader,
            id: 'action',
            fixed: 'left',
            minWidth: 100,
            Cell: ({ index }) => (
              <EditTableOperation
                onAddRow={() => console.log('增加一行', index)}
                onDeleteRow={() => console.log('删除一行', index)}
              />
            )
          },
          {
            Header: '建单时间',
            id: 'submit_time',
            minWidth: 140,
            Cell: ({ index, original }) => (
              <DatePicker
                date={original.submit_time}
                placeholder='请选择日期'
                onChange={date => console.log(date, index)}
              />
            )
          },
          {
            Header: '入库单号',
            id: 'id',
            minWidth: 180,
            Cell: ({ index, original }) => (
              <input
                value={original.id}
                onChange={value => console.log(value, index)}
              />
            )
          },
          {
            Header: '地址',
            id: 'address',
            minWidth: 160,
            Cell: ({ index, original }) => (
              <MoreSelect
                data={selectData}
                selected={original.address}
                onSelect={selected => console.log(selected, index)}
              />
            )
          },
          {
            Header: '供应商信息',
            accessor: 'supplier_name',
            minWidth: 120
          },
          {
            Header: '入库金额',
            id: 'total_money',
            minWidth: 160,
            Cell: ({ index, original }) => (
              <InputNumberV2
                value={original.total_money}
                onChange={value => console.log(value, index)}
              />
            )
          },
          {
            Header: '单据状态',
            accessor: 'status',
            minWidth: 120
          },
          {
            Header: 'sku_money',
            id: 'sku_money',
            minWidth: 120,
            Cell: ({ index, original }) => (
              <input
                value={original.sku_money}
                onChange={value => console.log(value, index)}
              />
            )
          },
          {
            Header: 'supplier_customer_id',
            accessor: 'supplier_customer_id',
            minWidth: 120
          },
          {
            Header: 'date_time',
            accessor: 'date_time',
            fixed: 'right',
            minWidth: 120
          }
        ]}
      />
    )
  })
