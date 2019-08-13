import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Table,
  fixedColumnsTableHOC,
  diyTableHOC,
  selectTableHOC,
  expandTableHOC
} from '../index'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const FixedColumnsTable = fixedColumnsTableHOC(Table)
const DiyTable = diyTableHOC(Table)
const SelectTable = selectTableHOC(Table)
const ExpandTable = expandTableHOC(Table)

const store = observable({
  data: [
    {
      total_money: 111,
      id: 'T5991-JHD-2018-07-25-00027',
      sku_money: '2390.00',
      supplier_customer_id: 'LDP20180117',
      submit_time: '2018-07-25',
      status: 2,
      supplier_name: '222xxx',
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
  selectAll: false,
  selected: [],
  sortTime() {
    this.data = _.sortBy(this.data, 'submit_time')
    if (this.sortTimeType === 'asc') {
      this.data = this.data.reverse()
      this.sortTimeType = 'desc'
    } else {
      this.sortTimeType = 'asc'
    }
  },
  setSelect(selected) {
    if (this.selectAll && selected.length !== this.data.length) {
      this.selectAll = false
    }

    this.selected = selected
  },
  toggleSelectAll() {
    if (this.selectAll) {
      this.selected = []
      this.selectAll = false
    } else {
      this.selected = _.map(this.data, v => v.id)
      this.selectAll = true
    }
  }
})

storiesOf('表格|Table HOC', module)
  .add('优先级', () => null, {
    info: {
      text: `
HOC 可以相互组合使用，但是请注意使用顺序
- fixed columns。可能会改变 columns 的顺序。
- diy。会改变原有 columns 的 show 熟悉，影响在 页面上的展现。一般最后才 hoc。
- expand。会在最前面增加一个 column 用户 expand.
`
    }
  })
  .add(
    'fixed columns',
    () => (
      <FixedColumnsTable
        data={store.data}
        columns={[
          {
            Header: '建单时间',
            accessor: 'submit_time',
            // 提供 fixed and width
            fixed: 'left',
            width: 100
          },
          {
            Header: '入库单号',
            accessor: 'id',
            fixed: 'left',
            // 其他任意，一般都提供 width or minWidth，否则没法滚动。 没意义
            width: 120
          },
          {
            Header: '供应商信息',
            accessor: 'supplier_name',
            minWidth: 200
          },
          {
            Header: '入库金额',
            accessor: 'total_money',
            minWidth: 200
          },
          {
            Header: '单据状态',
            accessor: 'status',
            minWidth: 200
          },
          {
            Header: 'sku_money',
            accessor: 'sku_money',
            minWidth: 200
          },
          {
            Header: 'supplier_customer_id',
            accessor: 'supplier_customer_id',
            minWidth: 200
          },
          {
            Header: 'date_time',
            accessor: 'date_time',
            width: 120,
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

在需要 fixed 的 column 提供 fixed 和 width，其中 fixed 两个值 
\`left\` \`right\`

其他 column 最好提供 width or minWidth，否则会出现很诡异的被压缩问题或者没法滚动问题

具体用法请查看 story 源码
`
      }
    }
  )
  .add('diy', () => {
    return (
      <div>
        <DiyTable
          id='diy-table'
          data={store.data}
          columns={[
            {
              Header: '入库单号',
              accessor: 'id',
              diyEnable: false,
              diyGroupName: '基础'
            },
            {
              Header: '价格',
              accessor: 'sku_money',
              diyEnable: false,
              diyGroupName: '基础'
            },
            {
              Header: '删除时间',
              accessor: 'date_time',
              diyEnable: true,
              show: false,
              diyGroupName: '时间'
            },
            {
              Header: '建单时间',
              accessor: 'settle_supplier_id',
              diyEnable: true,
              diyGroupName: '时间'
            },
            {
              Header: '状态',
              accessor: 'status',
              // diyEnable 不写也可以,默认true,
              diyGroupName: '其他'
            },
            {
              Header: '供应商户ID',
              accessor: 'supplier_customer_id',
              diyGroupName: '商户'
            },
            {
              Header: '供应商信息',
              accessor: 'supplier_name',
              diyGroupName: '商户'
            }
          ]}
        />
      </div>
    )
  })
  .add('select', () => (
    <SelectTable
      data={store.data}
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
        }
      ]}
      keyField='id'
      selectAll={store.selectAll}
      onSelectAll={() => store.toggleSelectAll()}
      selectAllTip={
        <div>
          全选是否勾上,可能代表<span className='gm-text-red'>当前可见列表</span>
          勾上，也可能代表<span className='gm-text-red'>所有页面数据</span>
          勾上，具体由调用方确定。
        </div>
      }
      selected={store.selected}
      onSelect={selected => store.setSelect(selected)}
    />
  ))
  .add('expand', () => (
    <ExpandTable
      data={store.data}
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
        }
      ]}
      SubComponent={() => <div>SubComponent</div>}
    />
  ))
