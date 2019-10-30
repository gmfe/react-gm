import React from 'react'
import { storiesOf } from '@storybook/react'
import { Sheet, SheetColumn, SheetAction, SheetSelect } from './index'
import { observable } from 'mobx'
import _ from 'lodash'
import Pagination from '../pagination/pagination'

const list = [
  {
    id: 3,
    name: '小明',
    age: '10'
  },
  {
    id: 4,
    name: '小红',
    age: '15',
    _gm_select: true
  },
  {
    id: 5,
    name: '小蓝',
    age: '20'
  }
]

const store = observable({
  data: list,
  setData(data) {
    this.data = data
  }
})

storiesOf('Sheet', module)
  .add('default', () => (
    <Sheet list={list}>
      <SheetColumn field='id' name='id' />
      <SheetColumn field='name' name='名字' />
      <SheetColumn field='name' name='名字'>
        {(name, index, record) => {
          return `我的名字叫${name}, 我的id是${record.id}`
        }}
      </SheetColumn>
      <SheetColumn field='age' name='年龄' />
      <SheetColumn
        field='age'
        name={<div style={{ background: 'red' }}>自定义head</div>}
      />
    </Sheet>
  ))
  .add('loading', () => (
    <Sheet list={list} loading>
      <SheetColumn field='id' name='id' />
      <SheetColumn field='name' name='名字' />
      <SheetColumn field='age' name='年龄' />
    </Sheet>
  ))
  .add('enableEmptyTip', () => (
    <Sheet list={[]} enableEmptyTip>
      <SheetColumn field='id' name='id' />
      <SheetColumn field='name' name='名字' />
      <SheetColumn field='age' name='年龄' />
    </Sheet>
  ))
  .add('getTrProps', () => (
    <Sheet
      list={list}
      getTrProps={index =>
        index === 1
          ? {
              className: 'warning'
            }
          : {}
      }
    >
      <SheetColumn field='id' name='id' />
      <SheetColumn field='name' name='名字' />
      <SheetColumn field='age' name='年龄' />
    </Sheet>
  ))
  .add('scrollX', () => (
    <div style={{ width: '300px' }}>
      <Sheet list={list} scrollX>
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
      </Sheet>
    </div>
  ))
  .add('expand', () => (
    <Sheet
      list={store.data}
      expandedRowRender={() => (
        <Sheet list={store.data}>
          <SheetColumn name='id' field='id' />
          <SheetColumn name='name' field='name' />
        </Sheet>
      )}
      onExpand={index => {
        const nD = store.data.slice()
        nD[index].__gm_expanded = !nD[index].__gm_expanded
        store.setData(nD)
      }}
      onExpandAll={() => {
        const isHasContract = _.find(store.data, d => !d.__gm_expanded)
        const nD = _.map(store.data, v => ({
          ...v,
          __gm_expanded: isHasContract
        }))
        store.setData(nD)
      }}
    >
      <SheetColumn name='id' field='id' />
      <SheetColumn name='name' field='name' />
      <SheetColumn name='name' field='name' />
    </Sheet>
  ))
  .add(
    'with pagination',
    () => (
      <Sheet list={list} loading>
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <Pagination
          data={{
            count: 70,
            offset: 0,
            limit: 10
          }}
          toPage={page => {
            console.log(page)
          }}
        />
      </Sheet>
    ),
    {
      info: {
        text: `Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。`
      }
    }
  )
  .add('SheetAction', () => (
    <Sheet list={list}>
      <SheetColumn field='id' name='id' />
      <SheetColumn field='name' name='名字' />
      <SheetColumn field='age' name='年龄' />
      <SheetAction>
        {(eList, i) => (
          <div>
            <button
              className='btn btn-xs btn-default gm-marginRight5'
              onClick={() => window.alert('dosomething')}
            >
              删除
            </button>
          </div>
        )}
      </SheetAction>
    </Sheet>
  ))
  .add(
    'SheetSelect',
    () => (
      <Sheet list={store.data}>
        <SheetColumn field='id' name='id' />
        <SheetColumn field='name' name='名字' />
        <SheetColumn field='age' name='年龄' />
        <SheetSelect
          onSelect={(checked, index) => {
            const nD = store.data.slice()
            nD[index]._gm_select = checked
            store.setData(nD)
          }}
          onSelectAll={checked => {
            const nD = _.map(store.data, v => ({
              ...v,
              _gm_select: checked
            }))
            store.setData(nD)
          }}
          hasSelectTip
          selectAllTip={
            <div>
              全选是否勾上,可能代表
              <span className='gm-text-red'>当前可见列表</span>勾上，也可能代表
              <span className='gm-text-red'>所有页面数据</span>
              勾上，具体由调用方确定。
            </div>
          }
        />
      </Sheet>
    ),
    {
      info: {
        text: `一但用到\`SheetSelect\`，就约定了数据eList中的\`_gm_select\`字段，\`_gm_select\`为bool是选中。`
      }
    }
  )
