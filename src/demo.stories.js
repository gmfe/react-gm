import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import _ from 'lodash'

const store = observable({
  data: []
})

setInterval(() => {
  store.data.push(1)
}, 3000)

const CellInner = () => {
  console.log('cell inner')
  return <div>1</div>
}

const Cell = () => {
  console.log('cell')
  return <CellInner />
}

storiesOf('内部|demo', module).add('default', () => {
  return (
    <div>
      {_.map(store.data, (v, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
})
