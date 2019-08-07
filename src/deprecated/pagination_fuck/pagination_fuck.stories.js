import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import PaginationFuck from './pagination_fuck'

const initWithCountPagination = {
  page_obj: null,
  peek: 10
}
const initWithoutCountPagination = {
  page_obj: null,
  more: true
}

const initCount = 0 // 只有演示demo作用

const store = observable({
  paginationWithNum: { ...initWithCountPagination },
  paginationWithoutNum: { ...initWithoutCountPagination },
  count: initCount,
  setDefaultPagination() {
    setTimeout(() => {
      this.paginationWithNum = {
        page_obj: `page_obj 0`,
        peek: 100,
        more: true
      }
    }, 1000)
  },
  setPaginationWithNum(params) {
    console.log(params) // 此数据用来请求后台

    setTimeout(() => {
      // 组件当前pagination实际应以后台返回的pagination为主，这里是假数据
      this.paginationWithNum = {
        page_obj: `page_obj ${this.count}`,
        peek: params.peek,
        more: params.peek / params.limit > 1
      }
      this.count++
    }, 1000)
  },
  setPaginationWithoutNum(params) {
    console.log(params) // params用来向后台请求数据

    if (this.count < 5) {
      setTimeout(() => {
        this.paginationWithoutNum = {
          page_obj: `page_obj ${this.count}`,
          more: this.count < 4
        } // 此处赋值应以后台返回的为主
        this.count++
      }, 200)
    }
  }
})

storiesOf('PaginationFuck', module)
  .add('default(with number)', () => {
    return (
      <div>
        <h4>
          组件反馈的参数作为当前请求的参数，组件需要的pagination值以后台返回的为主
        </h4>
        <PaginationFuck
          pagination={store.paginationWithNum}
          onChange={params => store.setPaginationWithNum(params)}
        />
        <button onClick={() => store.setDefaultPagination()}>
          模拟首次获取后台数据(请只点一次)
        </button>
      </div>
    )
  })
  .add('without number', () => {
    return (
      <div>
        <h4>
          组件反馈的参数作为当前请求的参数，组件需要的pagination值以后台返回的为主
        </h4>
        <PaginationFuck
          pagination={store.paginationWithoutNum}
          onChange={params => store.setPaginationWithoutNum(params)}
          showCount={false}
        />
      </div>
    )
  })
