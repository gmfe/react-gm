import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  EditTable,
  TableUtil,
  fixedColumnsTableHOC,
  diyTableHOC
} from '../index'
import { InputNumberV2, MoreSelect } from '../../src'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const { OperationHeader, EditTableOperation } = TableUtil

const FixColumnsEditTable = fixedColumnsTableHOC(EditTable)
const DiyEditTable = diyTableHOC(EditTable)

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
  }
]

storiesOf('表格|EditTable', module)
  .add(
    'default',
    () => {
      return (
        <FixColumnsEditTable
          data={store.data}
          columns={[
            {
              Header: '序号',
              fixed: 'left',
              minWidth: 50,
              Cell: ({ index }) => index + 1
            },
            {
              Header: OperationHeader,
              fixed: 'left',
              minWidth: 100,
              Cell: (
                { index } // eslint-disable-line
              ) => (
                <EditTableOperation
                  onAddRow={
                    index === 2
                      ? () => console.log('增加一行', index)
                      : undefined
                  }
                  onDeleteRow={
                    index === 1
                      ? () => console.log('删除一行', index)
                      : undefined
                  }
                />
              )
            },
            {
              Header: '地址',
              minWidth: 160,
              Cell: (
                { index, original } // eslint-disable-line
              ) => (
                <MoreSelect
                  data={selectData}
                  selected={original.address}
                  onSelect={selected => console.log(selected, index)}
                />
              )
            },
            {
              Header: '入库金额',
              minWidth: 160,
              Cell: (
                { index, original } // eslint-disable-line
              ) => (
                <InputNumberV2
                  value={original.total_money}
                  onChange={value => console.log(value, index)}
                />
              )
            },
            {
              Header: 'sku_money',
              minWidth: 120,
              Cell: (
                { index, original } // eslint-disable-line
              ) => (
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
    },
    {
      info: {
        text: `
TODO 补充 文本显示不完整 案例
`
      }
    }
  )
  .add('with diy', () => {
    const ref = React.createRef()
    return (
      <div>
        <button
          className='btn  btn-primary'
          onClick={() => ref.current.apiToggleDiySelector()}
        >
          列表自定义
        </button>

        <DiyEditTable
          id={'diy-edit-table'}
          ref={ref}
          data={store.data}
          columns={[
            {
              Header: '序号',
              accessor: 'no',
              Cell: ({ index }) => index + 1
            },
            {
              Header: OperationHeader,
              diyItemText: '操作',
              accessor: 'operation',
              Cell: (
                { index } // eslint-disable-line
              ) => (
                <EditTableOperation
                  onAddRow={() => console.log('增加一行', index)}
                  onDeleteRow={() => console.log('删除一行', index)}
                />
              )
            },
            {
              Header: 'sku_money',
              Cell: (
                { index, original } // eslint-disable-line
              ) => (
                <input
                  value={original.sku_money}
                  onChange={value => console.log(value, index)}
                />
              )
            }
          ]}
        />
      </div>
    )
  })
