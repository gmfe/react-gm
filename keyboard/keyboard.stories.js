import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import { Observer } from 'mobx-react'
import {
  keyboardTableHoc,
  KCInput,
  KCInputNumberV2,
  KCLevelSelect,
  KCMoreSelect
} from './'
import {
  EditTable,
  fixedColumnsTableHOC,
  diyTableHOC,
  TableUtil
} from '../table'

const { OperationHeader, EditTableOperation } = TableUtil
const KeyboardEditTable = diyTableHOC(
  fixedColumnsTableHOC(keyboardTableHoc(EditTable))
)

const data = [
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

const areaData = [
  {
    value: '0',
    text: '宝安',
    children: [
      {
        value: '01',
        text: '西乡'
      },
      {
        value: '02',
        text: '固戍'
      }
    ]
  },
  {
    value: '1',
    text: '南山',
    children: [
      {
        value: '11',
        text: '科技园',
        children: [
          {
            value: '111',
            text: '东区'
          },
          {
            value: '112',
            text: '西区'
          }
        ]
      }
    ]
  }
]

const store = observable({
  data: [
    { position: null, name: '', age: null, area: [] },
    { position: { value: 2, text: '福田' }, name: '', age: null, area: [] },
    { position: null, name: '', age: null, area: [] }
  ],
  addList() {
    this.data.push({ position: null, name: '', age: null })
  },
  setPosition(index, position) {
    this.data[index].position = position
  },
  setName(index, name) {
    this.data[index] = {
      ...this.data[index],
      name
    }
    // this.data[index].name = name
  },
  setAge(index, age) {
    this.data[index].age = age
  },
  setArea(index, area) {
    this.data[index].area = area
  }
})

storiesOf('快速录入|Keyboard', module).add('hoc', () => {
  const ref = React.createRef()
  return (
    <div>
      <button
        className='btn  btn-primary'
        onClick={() => ref.current.apiToggleDiySelector()}
      >
        列表自定义
      </button>

      <KeyboardEditTable
        id='test'
        ref={ref}
        onAddRow={() => store.addList()}
        data={store.data.slice()} // 记得 slice 下，否则增加数据不会 刷新
        columns={[
          {
            Header: '序号',
            Cell: cellProps => cellProps.index + 1,
            fixed: 'left',
            width: 56
          },
          {
            Header: OperationHeader,
            fixed: 'left',
            width: 100,
            Cell: cellProps => (
              <EditTableOperation
                onAddRow={() => console.log('增加一行', cellProps.index)}
                onDeleteRow={() => console.log('删除一行', cellProps.index)}
              />
            )
          },
          {
            Header: '位置',
            accessor: 'position',
            minWidth: 150,
            isKeyboard: true,
            Cell: cellProps => (
              // 使用 Observer 包下，才能响应 store 数据
              <Observer>
                {() => (
                  <KCMoreSelect
                    data={data}
                    selected={cellProps.original.position} // 不能用 row.value，因为并不是 store 的数据
                    onSelect={selected =>
                      store.setPosition(cellProps.index, selected)
                    }
                  />
                )}
              </Observer>
            )
          },
          {
            Header: '名字',
            accessor: 'name',
            minWidth: 150,
            isKeyboard: true,
            Cell: cellProps => (
              <Observer>
                {() => (
                  <KCInput
                    type='text'
                    value={cellProps.original.name}
                    onChange={e =>
                      store.setName(cellProps.index, e.target.value)
                    }
                  />
                )}
              </Observer>
            )
          },
          {
            Header: '区域',
            accessor: 'area',
            minWidth: 150,
            isKeyboard: true,
            Cell: cellProps => (
              <Observer>
                {() => (
                  <KCLevelSelect
                    data={areaData}
                    selected={cellProps.original.area.slice()}
                    onSelect={selected =>
                      store.setArea(cellProps.index, selected)
                    }
                  />
                )}
              </Observer>
            )
          },
          {
            Header: '无用',
            accessor: 'unuse',
            minWidth: 50,
            Cell: cellProps => (
              <Observer>
                {() => `${cellProps.original.name} ${cellProps.original.age}`}
              </Observer>
            )
          },
          {
            Header: '年龄',
            accessor: 'age',
            minWidth: 150,
            isKeyboard: true,
            Cell: cellProps => (
              <Observer>
                {() => (
                  <KCInputNumberV2
                    value={cellProps.original.age}
                    onChange={value => store.setAge(cellProps.index, value)}
                  />
                )}
              </Observer>
            )
          }
        ]}
      />
    </div>
  )
})
