import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './pagination'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { observable } from 'mobx'

const initWithCount = {
  count: 31,
  offset: 0,
  limit: 10
}
const initWithoutCount = {
  offset: 0,
  limit: 10
}
const store = observable({
  withCountPagination: { ...initWithCount },
  withoutCountPagination: { ...initWithoutCount },
  withoutCountPaginationDis: { ...initWithoutCount },
  withCountPaginationDis: { ...initWithCount },
  setPaginationWithCount(pagination, isDisableType = false) {
    const currentPage = {
      count: 31,
      ...pagination
    }

    if (!isDisableType) {
      this.withCountPagination = { ...currentPage }
    } else {
      this.withCountPaginationDis = { ...currentPage }
    }
  },
  setPaginationWithoutCount(pagination, isDisableType = false) {
    const currentPage = {
      ...pagination
    }

    if (!isDisableType) {
      this.withoutCountPagination = { ...currentPage }
    } else {
      this.withoutCountPaginationDis = { ...currentPage }
    }
  }
})

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('default(without count)', () => (
    <div>
      <h1>
        <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>此分页规范详情</a>
      </h1>
      <Pagination
        data={store.withoutCountPagination}
        toPage={pagination => store.setPaginationWithoutCount(pagination)}
      />
    </div>
  ))
  .add('with count', () => {
    return (
      <div>
        <h1>
          <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>
            此分页规范详情
          </a>
        </h1>
        <Pagination
          data={store.withCountPagination}
          toPage={pagination => store.setPaginationWithCount(pagination)}
        />
      </div>
    )
  })
  .add('nextDisabled', () => {
    const disable = boolean('nextDisabled', true)
    return (
      <div>
        <h1>
          <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>
            此分页规范详情
          </a>
        </h1>
        <h2>无count</h2>
        <Pagination
          data={store.withoutCountPaginationDis}
          toPage={pagination =>
            store.setPaginationWithoutCount(pagination, true)
          }
          nextDisabled={disable}
        />
        <h2>有count（组件本身判断）</h2>
        <Pagination
          data={store.withCountPaginationDis}
          toPage={pagination => store.setPaginationWithCount(pagination, true)}
        />
      </div>
    )
  })
