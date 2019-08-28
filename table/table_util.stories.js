import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, TableUtil } from './index'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  SortHeader,
  referOfWidth,
  EditTableOperation
} = TableUtil

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
    },
    {
      total_money: 279,
      id: 'T5991-JHD-2018-07-25-00025',
      sku_money: '279.02',
      supplier_customer_id: 'sc215',
      submit_time: '2018-07-28',
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
  },
  deleteItemByID(id) {
    const index = this.data.findIndex(o => o.id === id)
    const list = this.data.slice()
    list.splice(index, 1)
    this.data = list

    // ❗️❗️一定要return promise,否则,弹窗不会关闭
    return Promise.resolve(true)
  },
  addItem() {
    this.data = [...this.data, { id: Math.random() }]
  }
})

storiesOf('表格|TableUtil', module)
  .addParameters({
    info: {
      text: `
这里介绍\`TableUtil\`的使用
`
    }
  })
  .add('SortHeader', () => (
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
        }
      ]}
    />
  ))
  .add('OperationHeader & OperationCell', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1,
          sortable: true
        },
        {
          Header: OperationHeader,
          Cell: cellProps => (
            <OperationCell>
              <button className='btn btn-primary'>删除</button>
              {cellProps.original.id}
            </OperationCell>
          )
        }
      ]}
    />
  ))
  .add('OperationDelete & OperationDetail', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1
        },
        {
          Header: 'ID',
          accessor: 'id'
        },
        {
          Header: OperationHeader,
          width: referOfWidth.operationCell,
          Cell: cellProps => (
            <>
              <OperationDetail
                onClick={() => window.alert(cellProps.original.id)}
              />
              <OperationDelete
                title='确认删除'
                onClick={() => store.deleteItemByID(cellProps.original.id)}
              >
                删除这个很危险! 确定?
              </OperationDelete>
            </>
          )
        }
      ]}
    />
  ))
  .add('EditTableOperation', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1
        },
        {
          Header: 'ID',
          accessor: 'id'
        },
        {
          Header: OperationHeader,
          width: referOfWidth.operationCell,
          Cell: cellProps => (
            <EditTableOperation
              onAddRow={() => store.addItem()}
              onDeleteRow={() => store.deleteItemByID(cellProps.original.id)}
            />
          )
        }
      ]}
    />
  ))
  .add('BatchActionBar', () => <div>见SelectTable的使用</div>)
