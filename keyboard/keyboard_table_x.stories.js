import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import { Observer, observer } from 'mobx-react'
import { keyboardTableXHOC, KCInput, KCMoreSelect } from './'
import {
  TableXVirtualized,
  editTableXHOC,
  fixedColumnsTableXHOC,
  TableXUtil
} from '../table_x'
import _ from 'lodash'

const { OperationHeader, EditOperation, TABLE_X } = TableXUtil
const KeyboardTable = keyboardTableXHOC(
  fixedColumnsTableXHOC(editTableXHOC(TableXVirtualized))
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
  },
  {
    value: 5,
    text: '宝安'
  },
  {
    value: 6,
    text: '宝安'
  },
  {
    value: 7,
    text: '宝安'
  },
  {
    value: 8,
    text: '宝安'
  },
  {
    value: 9,
    text: '宝安'
  },
  {
    value: 10,
    text: '宝安'
  }
]

const store = observable({
  data: _.times(10, () => ({
    position: null,
    name: '',
    age: null,
    area: [],
    sku: null,
    date: null,
    gender: ''
  })),
  addList() {
    this.data.push({
      position: null,
      name: '',
      age: null,
      sku: null,
      date: null,
      gender: ''
    })
  },
  setPosition(index, position) {
    this.data[index].position = position
  },
  setName(index, name) {
    this.data[index].name = name
  },
  setAge(index, age) {
    this.data[index].age = age
  },
  setArea(index, area) {
    this.data[index].area = area
  },
  setSku(index, sku) {
    this.data[index].sku = sku
  },
  setDate(index, date) {
    this.data[index].date = date
  },
  setGender(index, gender) {
    this.data[index].gender = gender
  }
})

const CellEditOperation = React.memo(({ index }) => {
  return (
    <EditOperation
      onAddRow={() => store.addList()}
      onDeleteRow={() => console.log('删除一行', index)}
    />
  )
})

CellEditOperation.propTypes = {
  index: PropTypes.number.isRequired
}

// 有必要用 React.memo 提供更友好的渲染性能
// 且 props 尽量简单不变，比如 index
const CellName = React.memo(({ index }) => {
  const item = store.data[index]
  return (
    <Observer>
      {() => {
        return (
          <KCInput
            type='text'
            value={item.name}
            onChange={e => store.setName(index, e.target.value)}
          />
        )
      }}
    </Observer>
  )
})

CellName.propTypes = {
  index: PropTypes.number.isRequired
}

const CellPosition = React.memo(({ index }) => {
  console.log('CellPosition', index)
  const item = store.data[index]
  return (
    <Observer>
      {() => {
        console.log('CellPosition observer', index)
        return (
          <KCMoreSelect
            style={{ width: TABLE_X.WIDTH_SEARCH }}
            data={data}
            selected={item.position} // 不能用 row.value，因为并不是 store 的数据
            onSelect={selected => store.setPosition(index, selected)}
          />
        )
      }}
    </Observer>
  )
})

CellPosition.propTypes = {
  index: PropTypes.number.isRequired
}

const Wrap = observer(() => {
  // useMemo 提高性能
  const columns = React.useMemo(() => {
    console.log('Wrap useMemo')
    return [
      {
        id: 'no',
        Header: '序号',
        fixed: 'left',
        width: TABLE_X.WIDTH_NO,
        Cell: ({ row }) => <div>{row.index + 1}</div>
      },
      {
        id: 'operation',
        Header: OperationHeader,
        fixed: 'left',
        width: TABLE_X.WIDTH_OPERATION,
        Cell: ({ row }) => <CellEditOperation index={row.index} />
      },
      {
        Header: '位置',
        accessor: 'position',
        width: TABLE_X.WIDTH_SEARCH + 16,
        isKeyboard: true,
        Cell: ({ row }) => <CellPosition index={row.index} />
      },
      // {
      //   Header: '位置',
      //   accessor: 'position1',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      // {
      //   Header: '位置',
      //   accessor: 'position2',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      // {
      //   Header: '位置',
      //   accessor: 'position3',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      // {
      //   Header: '位置',
      //   accessor: 'position4',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      // {
      //   Header: '位置',
      //   accessor: 'position5',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      // {
      //   Header: '位置',
      //   accessor: 'position6',
      //   width: TABLE_X.WIDTH_SEARCH + 16,
      //   isKeyboard: true,
      //   Cell: ({ row }) => <CellPosition index={row.index} />
      // },
      {
        Header: '名字',
        accessor: 'name',
        minWidth: 250,
        isKeyboard: true,
        Cell: ({ row }) => <CellName index={row.index} />
      }
    ]
  }, [])

  return (
    <div>
      <div>{store.data.slice().length}</div>
      <KeyboardTable
        id='test_tablex'
        onAddRow={() => store.addList()}
        virtualizedHeight={300}
        virtualizedItemSize={TableXUtil.TABLE_X.HEIGHT_TR}
        data={store.data.slice()} // 记得 slice 下，否则增加数据不会 刷新
        columns={columns}
      />
    </div>
  )
})

storiesOf('快速录入|Keyboard TableX', module)
  .add('说明', () => <div />, {
    info: {
      text: `
各单元格宽度 具体见 TableUtil.TABLE_X

上述都是建议宽度，具体根据实际业务场景各自调整。 具体用法看代码。
      `
    }
  })
  .add('hoc', () => <Wrap />)
