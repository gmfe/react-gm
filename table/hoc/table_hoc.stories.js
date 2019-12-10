import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Table,
  fixedColumnsTableHOC,
  selectTableV2HOC,
  expandTableHOC,
  subTableHOC,
  TableUtil
} from '../index'
import diyTableHOC from '../hoc/diy_table'
import { observable } from 'mobx/lib/mobx'
import { Observer } from 'mobx-react'
import _ from 'lodash'

const FixedColumnsTable = fixedColumnsTableHOC(Table)
const DiyTable = diyTableHOC(Table)
const SelectTable = selectTableV2HOC(Table)
const ExpandTable = expandTableHOC(Table)

const ExpandSelectTable = selectTableV2HOC(ExpandTable)
const SelectSubTable = selectTableV2HOC(subTableHOC(Table))
const SubTable = subTableHOC(Table)
const DiyFixedSelectTable = selectTableV2HOC(
  fixedColumnsTableHOC(diyTableHOC(Table))
)

const isDisable = ({ total_money }) => total_money === 111 // 不能选的行

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
      address: null,
      subTable: [
        {
          id: '5',
          name: 'a222',
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        },
        {
          id: '6',
          name: 2222,
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        }
      ]
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
      },
      subTable: [
        {
          id: '1',
          name: 'a',
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        },
        {
          id: '2',
          name: 2,
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        }
      ]
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
      },
      subTable: [
        {
          id: '3',
          name: 'a',
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        },
        {
          id: '4',
          name: 2,
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        },
        {
          id: '8',
          name: 2,
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        },
        {
          id: '9',
          name: 2,
          subTable: [{ id: '5', name: 'a222' }, { id: '6', name: 2222 }]
        }
      ]
    }
  ],
  sortTimeType: 'asc',
  isSelectAllPage: false,
  selected: [],
  expanded: ['T5991-JHD-2018-07-25-00026'],
  sortTime() {
    this.data = _.sortBy(this.data, 'submit_time')
    if (this.sortTimeType === 'asc') {
      this.data = this.data.reverse()
      this.sortTimeType = 'desc'
    } else {
      this.sortTimeType = 'asc'
    }
  },
  setExpanded(expanded) {
    this.expanded = expanded
  },
  toggleIsSelectAllPage(bool) {
    this.isSelectAllPage = bool
    if (bool) {
      this.selected = this.data.filter(v => !isDisable(v)).map(v => v.id)
    }
  },
  setSelect(selected) {
    if (this.isSelectAllPage && selected.length !== this.data.length) {
      this.isSelectAllPage = false
    }

    this.selected = selected

    // SelectSubTable才有的逻辑 ⚠️遍历母表改变子表选中项
    this.data.forEach(parent => {
      const isChildSelected = selected.includes(parent.id)
      if (isChildSelected) {
        this.subTableSelected[parent.id] = parent.subTable.map(({ id }) => id)
      } else {
        this.subTableSelected[parent.id] = []
      }
    })
  },
  toggleSelectAll(isSelectedAll) {
    if (isSelectedAll) {
      this.selected = this.data.filter(v => !isDisable(v)).map(v => v.id)
    } else {
      this.selected.clear()

      // SelectSubTable才有的逻辑 ⚠️去掉所有选项
      this.subTableSelected = {}
    }
  },
  // 子表操作
  subTableSelected: {},
  toggleSubAll(index, isSelectedAll) {
    const parent = this.data[index]
    if (isSelectedAll) {
      this.subTableSelected = {
        ...this.subTableSelected,
        [parent.id]: parent.subTable.map(o => o.id)
      }

      this.selected.push(parent.id)
    } else {
      this.subTableSelected = {
        ...this.subTableSelected,
        [parent.id]: []
      }

      this.selected = this.selected.filter(d => d !== parent.id)
    }
  },
  setSubSelect(parentId, selected) {
    this.subTableSelected = {
      ...this.subTableSelected,
      [parentId]: selected
    }

    const parent = this.data.find(d => d.id === parentId)
    if (parent.subTable.length === selected.length) {
      this.selected.push(parentId)
    } else {
      this.selected = this.selected.filter(d => d !== parentId)
    }
  }
})

storiesOf('Table|Table HOC', module)
  .add(
    '优先级',
    () => (
      <div>
        组合调用例子:
        <code>
          selectTableV2HOC(expandTableHOC(fixedColumnsTableHOC(diyTableHOC(Table))))
        </code>
      </div>
    ),
    {
      info: {
        text: `
HOC 可以相互组合使用，但是请注意使用顺序!
从里到外：diyTableHOC => fixedColumnsTableHOC => expandTableHOC => selectTableV2HOC
- fixed columns。可能会改变 columns 的顺序。
- diy。   会在最前面增加一个【表头设置】column。 会改变原有 columns 的 show 熟悉，影响column的展现。
- expand。会在最前面增加一个【expand】column。
- select。会在最前面添加一个【CheckBox】column。
`
      }
    }
  )
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
          diyGroupSorting={['基础字段', '时间和人员', '操作']} // 组的排序,必须diyGroupName一一对应
          columns={[
            {
              Header: '入库单号',
              accessor: 'id',
              diySortNumber: 100, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              diyEnable: false, // 是否可以自定义,不写的话默认为true
              show: false, // 是否展示当前列,不写的话默认为true
              diyGroupName: '基础字段' // 组名
            },
            {
              Header: '价格',
              accessor: 'sku_money',
              diySortNumber: 600, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              diyEnable: false,
              diyGroupName: '基础字段'
            },
            {
              Header: '状态',
              diySortNumber: 300, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              accessor: 'status',
              diyGroupName: '基础字段'
            },
            {
              Header: '供应商户ID',
              diySortNumber: 400, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              accessor: 'supplier_customer_id',
              diyGroupName: '基础字段'
            },
            {
              Header: '供应商信息',
              diySortNumber: 500, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              accessor: 'supplier_name',
              diyGroupName: '基础字段'
            },
            ..._.map(Array(5), (e, i) => ({
              Header: '示例' + i,
              accessor: 'date_time' + i,
              diyEnable: true,
              show: true,
              diyGroupName: '时间和人员'
            })),
            {
              Header: '建单时间',
              diySortNumber: 200, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              accessor: 'settle_supplier_id',
              diyEnable: true,
              diyGroupName: '时间和人员'
            },
            {
              Header: TableUtil.OperationHeader,
              diySortNumber: 700, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
              diyItemText: '操作', // 操作栏要提供diyItemName
              id: 'action', // id作为唯一标识
              diyGroupName: '操作',
              diyEnable: false,
              Cell: () => (
                <TableUtil.OperationCell>
                  <a href='#'>删除</a>
                </TableUtil.OperationCell>
              )
            }
          ]}
        />
      </div>
    )
  })
  .add('select', () => (
    <SelectTable
      selectType='checkbox' // checkbox: 复选框(默认,可不填) radio: 单选框
      style={{ marginTop: '100px' }}
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
      isSelectorDisable={row => isDisable(row)}
      onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
      batchActionBar={
        store.selected.length ? (
          <TableUtil.BatchActionBar
            onClose={() => store.toggleSelectAll(false)}
            toggleSelectAll={bool => store.toggleIsSelectAllPage(bool)}
            batchActions={[
              {
                name: '批量删除',
                show: false,
                onClick: () =>
                  window.alert('批量删除' + store.selected.join(','))
              },
              {
                name: '批量修改单价',
                onClick: () =>
                  window.alert('批量修改这些' + store.selected.join(','))
              }
            ]}
            count={store.isSelectAllPage ? null : store.selected.length}
            isSelectAll={store.isSelectAllPage}
          />
        ) : null
      }
      selected={store.selected}
      onSelect={selected => store.setSelect(selected)}
    />
  ))
  .add('expand', () => (
    <ExpandTable
      keyField='id'
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
      expanded={store.expanded}
      onExpand={expand => store.setExpanded(expand)}
      SubComponent={item => (
        <SubTable
          data={item.original.subTable}
          columns={[
            { Header: '序号', accessor: 'id' },
            { Header: '名字', accessor: 'name' }
          ]}
          SubComponent={item => (
            <SubTable
              data={item.original.subTable}
              columns={[
                { Header: '序号22', accessor: 'id' },
                { Header: '名字22', accessor: 'name' }
              ]}
            />
          )}
        />
      )}
    />
  ))
  .add('expand_select组合', () => (
    <ExpandSelectTable
      style={{ marginTop: '100px' }}
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
      selected={store.selected}
      onSelect={selected => store.setSelect(selected)}
      isSelectorDisable={row => isDisable(row)}
      onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
      batchActionBar={
        Object.values(store.subTableSelected).some(d => d.length) ? (
          <TableUtil.BatchActionBar
            onClose={() => store.toggleSelectAll(false)}
            toggleSelectAll={bool => store.toggleIsSelectAllPage(bool)}
            batchActions={[
              {
                name: '批量删除',
                onClick: () =>
                  window.alert('批量删除' + store.selected.join(','))
              },
              {
                name: '批量修改单价',
                onClick: () =>
                  window.alert('批量修改这些' + store.selected.join(','))
              }
            ]}
            count={store.isSelectAllPage ? 100 : store.selected.length}
            isSelectAll={store.isSelectAllPage}
          />
        ) : null
      }
      SubComponent={item => (
        <Observer>
          {() => {
            const selected = store.subTableSelected[item.row.id] || []
            return (
              <SelectSubTable
                data={item.original.subTable}
                columns={[
                  { Header: '序号', accessor: 'id' },
                  { Header: '名字', accessor: 'name' }
                ]}
                keyField='id'
                onSelectAll={store.toggleSubAll.bind(store, item.index)}
                selected={selected.slice()}
                onSelect={selected => store.setSubSelect(item.row.id, selected)}
              />
            )
          }}
        </Observer>
      )}
    />
  ))
  .add('diy_fix_select组合', () => (
    <DiyFixedSelectTable
      id='diy_fix_select'
      keyField='id'
      selectType='checkbox' // checkbox: 复选框(默认,可不填) radio: 单选框
      style={{ marginTop: '100px' }}
      data={store.data}
      isSelectorDisable={row => isDisable(row)}
      onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
      batchActionBar={
        store.selected.length ? (
          <TableUtil.BatchActionBar
            onClose={() => store.toggleSelectAll(false)}
            toggleSelectAll={bool => store.toggleIsSelectAllPage(bool)}
            batchActions={[
              {
                name: '批量删除',
                show: false,
                onClick: () =>
                  window.alert('批量删除' + store.selected.join(','))
              },
              {
                name: '批量修改单价',
                onClick: () =>
                  window.alert('批量修改这些' + store.selected.join(','))
              }
            ]}
            count={store.isSelectAllPage ? null : store.selected.length}
            isSelectAll={store.isSelectAllPage}
          />
        ) : null
      }
      selected={store.selected}
      onSelect={selected => store.setSelect(selected)}
      diyGroupSorting={['基础字段', '时间和人员', '操作']} // 组的排序,必须diyGroupName一一对应
      columns={[
        {
          Header: '入库单号',
          accessor: 'id',
          // 提供 fixed and width
          minWidth: 200,
          diySortNumber: 100, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          diyEnable: false, // 是否可以自定义,不写的话默认为true
          show: false, // 是否展示当前列,不写的话默认为true
          diyGroupName: '基础字段' // 组名
        },
        {
          Header: '价格',
          accessor: 'sku_money',
          minWidth: 200,
          diySortNumber: 600, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          diyEnable: false,
          diyGroupName: '基础字段'
        },
        {
          Header: '状态',
          minWidth: 200,
          diySortNumber: 300, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'status',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商户ID',
          minWidth: 200,
          diySortNumber: 400, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_customer_id',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商信息',
          minWidth: 200,
          diySortNumber: 500, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_name',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商户ID',
          minWidth: 200,
          diySortNumber: 400, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_customer_id',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商信息',
          minWidth: 200,
          diySortNumber: 500, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_name',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商户ID',
          minWidth: 200,
          diySortNumber: 400, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_customer_id',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商信息',
          minWidth: 200,
          diySortNumber: 500, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_name',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商户ID',
          minWidth: 200,
          diySortNumber: 400, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_customer_id',
          diyGroupName: '基础字段'
        },
        {
          Header: '供应商信息',
          minWidth: 200,
          diySortNumber: 500, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          accessor: 'supplier_name',
          diyGroupName: '基础字段'
        },
        {
          Header: TableUtil.OperationHeader,
          diySortNumber: 700, // 列表的排序根据sortNumber来排: 100, 200, 300, 如此类推
          diyItemText: '操作', // 操作栏要提供diyItemName
          id: 'action', // id作为唯一标识
          diyGroupName: '操作',
          width: 180,
          fixed: 'right',
          diyEnable: false,
          Cell: () => (
            <TableUtil.OperationCell>
              <a href='#'>删除</a>
            </TableUtil.OperationCell>
          )
        }
      ]}
    />
  ))
