import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { selectTableV2HOC, Table, TableUtil } from './index'
import { observable } from 'mobx'
import { Observer } from 'mobx-react'
import _ from 'lodash'
import { PopupContentConfirm } from '../src/component/popup'
const SelectTable = selectTableV2HOC(Table)

const {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  SortHeader,
  referOfWidth,
  EditTableOperation,
  EditButton
} = TableUtil

// eslint-disable-next-line
const EditContentDemo = ({ closePopup, initialVal, saveData }) => {
  const [val, setVal] = useState(initialVal)

  const handleSave = () => {
    saveData(val)
    closePopup()
  }

  const handleCancel = () => {
    closePopup()
  }

  return (
    <PopupContentConfirm
      type='save'
      title='修改字段'
      onSave={handleSave}
      onCancel={handleCancel}
    >
      <input type='text' value={val} onChange={e => setVal(e.target.value)} />
    </PopupContentConfirm>
  )
}

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
      id: 'T5991-JHD-2018-07-25-00030',
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
  },
  addItem() {
    this.data = [...this.data, { id: Math.random() }]
  },
  setItemByIndex(index, key, value) {
    const list = this.data.slice()
    list[index][key] = value

    this.data = list
  },
  itemToEdit(index, isEditing) {
    const list = this.data.slice()
    if (isEditing) {
      // 复制一份数据到编辑对象中
      list[index].__editObj = {
        id: list[index].id
      }
      list[index].__isEditing = true

      this.data = list
    } else {
      list[index].__isEditing = false
      this.data = list
    }
  },
  setEditObjByIndex(index, key, value) {
    const list = this.data.slice()
    list[index].__editObj[key] = value

    this.data = list
  },
  saveItem(index) {
    const list = this.data.slice()
    list[index].__isEditing = false
    list[index].id = list[index].__editObj.id

    this.data = list
  },
  selected: [],
  isSelectAllPage: false,
  setSelect(selected) {
    this.selected = selected
  },
  toggleSelectAll(isSelectedAll) {
    if (isSelectedAll) {
      this.selected = this.data.map(v => v.id)
    } else {
      this.selected.clear()
    }
  },
  toggleIsSelectAllPage(bool) {
    this.isSelectAllPage = bool
    if (bool) {
      this.selected = this.data.map(v => v.id)
    }
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
            <OperationCell>
              <OperationDetail
                onClick={() => window.alert(cellProps.original.id)} // 绑定事件
              />
              <OperationDetail href='https://www.guanmai.cn' open />
              <OperationDelete
                title='确认删除'
                onClick={() => store.deleteItemByID(cellProps.original.id)}
              >
                删除这个很危险! 确定?
              </OperationDelete>
            </OperationCell>
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
  .add('EditButton', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1
        },
        {
          Header: 'settle_supplier_id',
          id: 'settle_supplier_id',
          Cell: d => (
            <div>
              <span className='gm-padding-right-5'>
                {d.original.settle_supplier_id}
              </span>
              <EditButton
                popupRender={closePopup => {
                  console.log(d)
                  return (
                    <EditContentDemo
                      closePopup={closePopup}
                      initialVal={d.original.settle_supplier_id}
                      saveData={value =>
                        store.setItemByIndex(
                          d.index,
                          'settle_supplier_id',
                          value
                        )
                      }
                    />
                  )
                }}
              />
            </div>
          )
        },
        {
          Header: 'sku_money',
          id: 'sku_money',
          Cell: d => (
            <div>
              <span className='gm-padding-right-5'>{d.original.sku_money}</span>
              <EditButton
                popupRender={closePopup => {
                  return (
                    <EditContentDemo
                      closePopup={closePopup}
                      initialVal={d.original.sku_money}
                      saveData={value =>
                        store.setItemByIndex(d.index, 'sku_money', value)
                      }
                    />
                  )
                }}
              />
            </div>
          )
        }
      ]}
    />
  ))
  .add('OperationRowEdit', () => (
    <Table
      data={store.data}
      columns={[
        {
          Header: '序号',
          Cell: cellProps => cellProps.index + 1
        },
        {
          Header: 'ID',
          id: 'id',
          Cell: cellProps => (
            <Observer>
              {() => {
                const { __isEditing, id, __editObj } = cellProps.original
                return __isEditing ? (
                  <input
                    type='text'
                    value={__editObj.id}
                    onChange={e =>
                      store.setEditObjByIndex(
                        cellProps.index,
                        'id',
                        e.target.value
                      )
                    }
                  />
                ) : (
                  id
                )
              }}
            </Observer>
          )
        },
        {
          Header: OperationHeader,
          width: referOfWidth.operationCell,
          headerClassName: 'gm-border-left',
          className: 'gm-border-left',
          Cell: cellProps => (
            <OperationRowEdit
              isEditing={cellProps.original.__isEditing}
              onClick={() => store.itemToEdit(cellProps.index, true)}
              onSave={() => store.saveItem(cellProps.index)}
              onCancel={() => store.itemToEdit(cellProps.index, false)}
            >
              <OperationDelete
                title='确认删除'
                onClick={() => store.deleteItemByID(cellProps.original.id)}
              >
                删除这个很危险! 确定?
              </OperationDelete>
            </OperationRowEdit>
          )
        }
      ]}
    />
  ))
  .add('BatchActionBar', () => (
    <div>
      <h3>当前页批量操作</h3>
      <SelectTable
        style={{ marginTop: '50px' }}
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
        onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
        batchActionBar={
          store.selected.length && (
            <TableUtil.BatchActionBar
              pure
              onClose={() => store.toggleSelectAll(false)}
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
              count={store.selected.length}
            />
          )
        }
      />
      <h3>当前页和所有页批量操作</h3>
      <SelectTable
        style={{ marginTop: '50px' }}
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
        onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
        batchActionBar={
          store.selected.length && (
            <TableUtil.BatchActionBar
              count={store.isSelectAllPage ? null : store.selected.length}
              isSelectAll={store.isSelectAllPage}
              toggleSelectAll={bool => store.toggleIsSelectAllPage(bool)}
              onClose={() => store.toggleSelectAll(false)}
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
            />
          )
        }
      />
    </div>
  ))
