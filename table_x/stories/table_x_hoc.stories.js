import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
  fixedColumnsTableXHOC,
  sortableTableXHOC,
  virtualizedTableXHOC,
  editTableXHOC,
  diyTableXHOC,
  TableX,
  TableXUtil
} from '../index'
import _ from 'lodash'
import { InputNumberV2, MoreSelect } from '../../src'

const { TABLE_X, OperationHeader, EditOperation } = TableXUtil

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

const fixedColumns = [
  {
    Header: '序号',
    accessor: 'index',
    fixed: 'left',
    width: 150,
    Cell: ({ row }) => row.index + 1
  },
  {
    Header: 'id',
    accessor: 'id',
    width: 100,
    fixed: 'left'
  },
  {
    Header: '地址',
    accessor: 'address.text',
    fixed: 'left',
    width: 100 // 定宽
  },
  {
    Header: 'sku_money',
    width: 200,
    accessor: 'sku_money'
  },
  {
    Header: 'supplier_customer_id',
    width: 200,
    accessor: 'supplier_customer_id'
  },
  {
    Header: 'submit_time',
    minWidth: 100,
    accessor: 'submit_time'
  },
  {
    Header: 'delta_money',
    width: 100,
    accessor: 'delta_money'
  },
  {
    Header: '供应商信息',
    width: 100,
    fixed: 'right',
    accessor: data => data.supplier_name,
    id: 'supplier_name'
  },
  {
    Header: '入库金额',
    accessor: 'total_money',
    width: 100,
    fixed: 'right',
    Cell: cellProps => {
      const { row } = cellProps
      return <div>{row.original.total_money}</div>
    }
  }
]

const columns = [
  // 获取索引
  {
    Header: '序号',
    accessor: 'index',
    fixed: 'left',
    width: TABLE_X.WIDTH_NO,
    Cell: ({ row }) => row.index + 1
  },
  // 常规用法
  {
    Header: 'id',
    accessor: 'id',
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

const editColumns = [
  {
    id: 'no',
    Header: '序号',
    fixed: 'left',
    width: TABLE_X.WIDTH_NO,
    maxWidth: TABLE_X.WIDTH_NO,
    Cell: ({ row }) => row.index + 1
  },
  {
    id: 'operation',
    Header: () => <OperationHeader />,
    fixed: 'left',
    width: TABLE_X.WIDTH_OPERATION,
    maxWidth: TABLE_X.WIDTH_OPERATION,
    Cell: (
      { row: { index } } // eslint-disable-line
    ) => (
      <EditOperation
        onAddRow={
          index !== 2 ? () => console.log('增加一行', index) : undefined
        }
        onDeleteRow={
          index !== 1 ? () => console.log('删除一行', index) : undefined
        }
      />
    )
  },
  {
    Header: '地址',
    width: TABLE_X.WIDTH_SEARCH,
    minWidth: TABLE_X.WIDTH_SEARCH,
    Cell: ({ row: { index, original } }) => (
      <MoreSelect
        data={selectData}
        selected={original.address}
        onSelect={selected => console.log(selected, index)}
      />
    )
  },
  {
    Header: '入库金额',
    width: TABLE_X.WIDTH_NUMBER,
    minWidth: TABLE_X.WIDTH_NUMBER,
    Cell: ({ row: { index, original } }) => (
      <InputNumberV2
        value={original.total_money}
        onChange={value => console.log(value, index)}
      />
    )
  },
  {
    Header: 'sku_money',
    width: TABLE_X.WIDTH_NUMBER,
    minWidth: TABLE_X.WIDTH_NUMBER,
    Cell: ({ row: { index, original } }) => (
      <input
        className='gm-input'
        value={original.sku_money}
        onChange={value => console.log(value, index)}
      />
    )
  }
]

const diyColumns = [
  // 常规用法，column默认diy开启
  {
    Header: '序号',
    accessor: 'index',
    diyGroupName: '基础',
    Cell: ({ row }) => row.index + 1
  },
  // 常规用法
  {
    Header: 'id',
    accessor: 'id',
    diyEnable: true,
    diyGroupName: '基础'
  },
  // 该column不允许diy
  {
    Header: '地址',
    accessor: 'address.text',
    diyEnable: false,
    diyGroupName: '基础'
  },
  // 其他diyGroup
  {
    Header: '供应商信息',
    accessor: data => data.supplier_name,
    id: 'supplier_name',
    diyGroupName: '其他'
  },
  // 初始花的时候不显示该column
  {
    show: false,
    diyGroupName: '其他',
    diyEnable: true,
    Header: '入库金额',
    accessor: 'total_money',
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
const SortableTableX = sortableTableXHOC(TableX)
const VirtualizedTableX = virtualizedTableXHOC(TableX)
const EditTableX = editTableXHOC(TableX)
const DiyTableX = diyTableXHOC(TableX)

const virtualizedStore = observable({
  data: _.times(100, index => ({
    id: index,
    name: 'lalalla'
  })),
  addData() {
    this.data.push({
      id: this.data.length,
      name: 'lalala'
    })
  }
})

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
// storybook 有问题，所以提出来这里
const VirtualWrap = observer(() => {
  const limit = 5
  const height = TABLE_X.HEIGHT_HEAD_TR + limit * TABLE_X.HEIGHT_TR

  return (
    <div>
      <div>
        <button onClick={() => virtualizedStore.addData()}>+1 data</button>
      </div>
      <VirtualizedTableX
        data={virtualizedStore.data.slice()}
        columns={virtualizedColumn}
        virtualizedDisabled={virtualizedStore.data.length < limit}
        virtualizedHeight={height}
        virtualizedItemSize={TableXUtil.TABLE_X.HEIGHT_TR}
      />
    </div>
  )
})

storiesOf('TableX|HOC', module)
  .add('fixed column', () => (
    <FixedColumnTableX data={store.data} columns={fixedColumns} />
  ))
  .add('sortable', () => (
    <SortableTableX
      data={store.data.slice()}
      columns={columns}
      keyField='id'
      onSortChange={newData => {
        console.log(newData.map(v => v.id))
        store.setData(newData)
      }}
    />
  ))
  .add('virtualized', () => <VirtualWrap />)
  .add('edit', () => <EditTableX data={store.data} columns={editColumns} />)
  .add('diy', () => (
    <DiyTableX
      className='gm-margin-top-20'
      id='diy_must_have_id'
      diyGroupSorting={['基础', '其他']}
      data={store.data}
      columns={diyColumns}
    />
  ))
