import React from 'react'
import { storiesOf } from '@storybook/react'
import { TableX } from './index'
import { observable } from 'mobx/lib/mobx'
import moment from 'moment'
import { SortHeader } from './util'

const sortDateTime = (a, b) => {
  const mA = moment(a.submit_time)
  const mB = moment(b.submit_time)

  if (mA > mB) {
    return 1
  } else if (mA < mB) {
    return -1
  } else {
    return 0
  }
}

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

const store = observable({
  data: initData.slice(),
  sortTimeType: null,
  setSortTime(type) {
    console.log(type)
    this.sortTimeType = type

    if (!type) {
      this.data = initData.slice()
      return
    }

    let newData = this.data.sort((a, b) => {
      return sortDateTime(a, b)
    })

    if (type === 'desc') {
      newData = newData.reverse()
    }

    this.data = newData
  }
})

const columns = [
  // 获取索引
  {
    Header: '序号',
    accessor: 'index',
    Cell: ({ row }) => row.index + 1
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
    accessor: data => data.supplier_name,
    id: 'supplier_name'
  },
  // 自定义整个单元格
  {
    Header: '入库金额',
    accessor: 'total_money',
    Cell: cellProps => {
      const { row } = cellProps
      return <div>{row.original.total_money}</div>
    }
  }
]

const sortColumns = [
  // 默认有排序，
  {
    Header: '建单时间',
    accessor: 'submit_time',
    // 指定排序方式
    sortType: (rowA, rowB, columnID) => {
      console.log(rowA, rowB, columnID)
      return sortDateTime(rowA.original, rowB.original)
    }
  },
  // 如果不需要 disableSorting true
  {
    Header: '供应商信息',
    accessor: data => data.supplier_name,
    id: 'supplier_name',
    disableSorting: true
  },
  {
    Header: '入库金额',
    accessor: 'total_money',
    Cell: cellProps => {
      const { row } = cellProps
      return <div>{row.original.total_money}</div>
    }
  }
]

const sortColumnsBackEnd = [
  {
    Header: () => (
      <div>
        建单时间
        <SortHeader
          type={store.sortTimeType}
          onChange={type => store.setSortTime(type)}
        />
      </div>
    ),
    accessor: 'submit_time',
    disableSorting: true
  },
  {
    Header: '供应商信息',
    accessor: data => data.supplier_name,
    id: 'supplier_name',
    disableSorting: true
  },
  {
    Header: '入库金额',
    accessor: 'total_money',
    Cell: cellProps => {
      const { row } = cellProps
      return <div>{row.original.total_money}</div>
    },
    disableSorting: true
  }
]

storiesOf('TableX|TableX', module)
  .add('说明', () => <div />, {
    info: {
      text: `
react-table 文档见 https://github.com/tannerlinsley/react-table

用法见 story 源码，不要用 story 之外的，如果有，联系我补充 story。

较 Table 新增
- 支持多列排序
- hoc select 增加 fixedSelect, hoc expand fixedExpand 用来固定

Table 切 TableX 关注点：
- 取消单元格没内容显示 -
- fixedColumn column 不需要提供 width

DONE
- select 字符串问题。=》不存在
- 左右拖动
- 滚动，上下和左右
- 滚动事件
- 换行，对齐，截断
- loading 
- empty
- 固定列

TODO
- BatchActionBar
- 虚拟列表
- 拖拽排序
- Edit
- Keyboard
- diy
- edit row
- hoc sub table
- referOfWidth
- ...

`
    }
  })
  .add('default', () => <TableX data={store.data} columns={columns} />)
  .add('loading & nodata', () => (
    <div>
      <TableX loading data={store.data} columns={columns} />
      <TableX data={[]} columns={columns} />
    </div>
  ))
  .add(
    'sorting',
    () => (
      <TableX disableSorting={false} data={store.data} columns={sortColumns} />
    ),
    {
      info: {
        text: `
排序状态，不启用、升序、降序，点排序在这几个状态切换。

特点：
react-table@v7支持多重排序，通过 shift 来完成。但不方便，所以直接点就可以达到多重排序，如果不需要，就点排序切换到取消排序即可。

`
      }
    }
  )
  .add('后台排序', () => (
    <TableX data={store.data} columns={sortColumnsBackEnd} />
  ))
// .add('limit height width & scroll', () => (
//   <Table
//     style={{
//       height: '200px',
//       width: '300px'
//     }}
//     data={store.data}
//     columns={[
//       {
//         Header: '建单时间',
//         accessor: 'submit_time',
//         width: 400
//       },
//       {
//         Header: '地址',
//         accessor: 'address.text',
//         width: 200
//       }
//     ]}
//   />
// ))
// .add('group', () => (
//   <Table
//     data={store.data}
//     columns={[
//       {
//         Header: 'Group1',
//         columns: [
//           {
//             Header: '序号',
//             Cell: cellProps => cellProps.index + 1
//           },
//           {
//             Header: '建单时间',
//             accessor: 'submit_time'
//           },
//           {
//             Header: '地址',
//             accessor: 'address.text',
//             width: 200
//           }
//         ]
//       },
//       {
//         Header: 'Group2',
//         columns: [
//           {
//             Header: '供应商信息',
//             id: 'supplier_name',
//             accessor: data => data.supplier_name
//           },
//           {
//             Header: '入库金额',
//             accessor: 'total_money',
//             Cell: cellProps => (
//               <div>
//                 {cellProps.value} 或者 {cellProps.original.total_money}
//               </div>
//             )
//           }
//         ]
//       }
//     ]}
//   />
// ))
// .add('sort', () => (
//   <Table
//     data={store.data}
//     columns={[
//       {
//         Header: '序号',
//         Cell: cellProps => cellProps.index + 1,
//         sortable: true
//       },
//       {
//         Header: (
//           <SortHeader
//             onClick={() => store.sortTime()}
//             type={store.sortTimeType}
//           >
//             建单时间
//           </SortHeader>
//         ),
//         accessor: 'submit_time'
//       },
//       {
//         Header: '地址',
//         accessor: 'address.text',
//         width: 200
//       }
//     ]}
//   />
// ))
