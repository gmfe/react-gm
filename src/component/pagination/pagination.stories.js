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
  withCountpagination: { ...initWithCount },
  withoutCountpagination: { ...initWithoutCount },
  withoutCountpaginationDis: { ...initWithoutCount },
  withCountpaginationDis: { ...initWithCount },
  setPaginationWithCount(pagination, isDisableType = false) {
    const currentPage = {
      count: 31,
      ...pagination
    }

    if (!isDisableType) {
      this.withCountpagination = { ...currentPage }
    } else {
      this.withCountpaginationDis = { ...currentPage }
    }
  },
  setPaginationWithoutCount(pagination, isDisableType = false) {
    const currentPage = {
      ...pagination
    }

    if (!isDisableType) {
      this.withoutCountpagination = { ...currentPage }
    } else {
      this.withoutCountpaginationDis = { ...currentPage }
    }
  }
})

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('default(without count)', () => (
    <div>
      <h1>
        <a href='https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83'>
          分页规范详情
        </a>
      </h1>
      <Pagination
        data={store.withoutCountpagination}
        toPage={pagination => store.setPaginationWithoutCount(pagination)}
      />
    </div>
  ))
  .add('with count', () => {
    return (
      <div>
        <h1>
          <a href='https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83'>
            分页规范详情
          </a>
        </h1>
        <Pagination
          data={store.withCountpagination}
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
          <a href='https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83'>
            分页规范详情
          </a>
        </h1>
        <h2>无count</h2>
        <Pagination
          data={store.withoutCountpaginationDis}
          toPage={pagination =>
            store.setPaginationWithoutCount(pagination, true)
          }
          nextDisabled={disable}
        />
        <h2>有count（组件本身判断）</h2>
        <Pagination
          data={store.withCountpaginationDis}
          toPage={pagination => store.setPaginationWithCount(pagination, true)}
        />
      </div>
    )
  })
