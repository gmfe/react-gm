import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { useTable } from 'react-table'
import { observable } from 'mobx'
import { Observer, observer } from 'mobx-react'
import _ from 'lodash'
import TableX from '../table_x/base'

const store = observable({
  data: _.times(1, () => ({
    position: null,
    name: '',
    age: null,
    area: [],
    sku: null,
    date: null,
    gender: ''
  })),
  setName(index, name) {
    console.log(index, name)
    this.data[index] = {
      ...this.data[index],
      name
    }
    // this.data[index].name = name
  }
})

const CellName = ({ row: { index } }) => {
  return (
    <Observer>
      {() => {
        const item = store.data[index]
        return (
          <input
            value={item.name}
            onChange={e => store.setName(index, e.target.value)}
          />
        )
      }}
    </Observer>
  )
}

const Table = ({ columns, data }) => {
  const { rows, prepareRow } = useTable({
    columns,
    data
  })

  return (
    <div>
      {_.map(rows, row => {
        prepareRow(row)
        return (
          <div key={row.index}>
            {row.cells.map((cell, cellIndex) => {
              return <div key={cellIndex}>{cell.render('Cell')}</div>
            })}
          </div>
        )
      })}
    </div>
  )
}

const Wrap = observer(() => {
  const columns = React.useMemo(() => {
    return [
      {
        Header: '名字',
        accessor: 'name',
        Cell: CellName
      },
      {
        Header: '名字',
        accessor: 'name',
        Cell: props => {
          return <CellName {...props} />
        }
      }
    ]
  }, [])

  const arr = [
    {
      Cell: () => (
        <input
          type='text'
          value={store.data[0].name}
          onChange={e => store.setName(0, e.target.value)}
        />
      )
    }
  ]

  return (
    <div>
      {_.map(arr, v => v.Cell())}
      <div>tablex</div>
      <TableX columns={columns} data={store.data.slice()} />
      <div>table</div>
      <Table columns={columns} data={store.data.slice()} />
    </div>
  )
})

const Test = () => {
  const [text, setText] = useState('')

  const Input = () => {
    return (
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
    )
  }

  return (
    <div>
      <Input />
    </div>
  )
}

storiesOf('内部|demo', module)
  .add('default', () => {
    return <Wrap />
  })
  .add('test', () => {
    return <Test />
  })
