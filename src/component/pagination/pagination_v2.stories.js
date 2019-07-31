import React from 'react'
import { storiesOf } from '@storybook/react'
import PaginationV2 from './pagination_v2'
import { withKnobs } from '@storybook/addon-knobs'
import { observable } from 'mobx'

const initWithCount = {
  count: 173,
  peek: 66,
  more: true
}
const initWithoutCount = {
  peek: 66,
  more: true
}
const store = observable({
  withCountPagination: { ...initWithCount },
  withoutCountPagination: { ...initWithoutCount },
  withoutCountPaginationDis: { ...initWithoutCount },
  withCountPaginationDis: { ...initWithCount },
  withCountCurrentIndex: 0,
  withoutCountCurrentIndex: 0,
  limitWithCount: 20,
  limitWithoutCount: 10,
  setPaginationWithCount(currentPage, pageSize) {
    this.limitWithCount = pageSize
    this.withCountPagination = {
      count: 173,
      peek: 66,
      more: true
    }
  },
  setPaginationWithoutCount(currentPage, pageSize) {
    this.withoutCountPagination = {
      peek: 66,
      more: true
    }
  },
  setCurrentIndexWithCount(index) {
    this.withCountCurrentIndex = index
  },
  setCurrentIndexWithoutCount(index) {
    this.withoutCountCurrentIndex = index
  }
})

storiesOf('PaginationV2', module)
  .addDecorator(withKnobs)
  .add('default(without count)', () => (
    <div>
      <PaginationV2
        onCurrentIndexChange={currentIndex => {
          store.setCurrentIndexWithoutCount(currentIndex)
        }}
        currentIndex={store.withoutCountCurrentIndex}
        paginationData={store.withoutCountPagination}
        onChange={(currentPage, pageSize) =>
          store.setPaginationWithoutCount(currentPage, pageSize)
        }
      />
    </div>
  ))
  .add('with count', () => {
    return (
      <div>
        <PaginationV2
          onCurrentIndexChange={currentIndex => {
            store.setCurrentIndexWithCount(currentIndex)
          }}
          currentIndex={store.withCountCurrentIndex}
          paginationData={store.withCountPagination}
          onChange={(currentPage, pageSize) =>
            store.setPaginationWithCount(currentPage, pageSize)
          }
        />
      </div>
    )
  })
