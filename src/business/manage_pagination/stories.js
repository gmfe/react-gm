import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import ManagePaginationV2 from './v2'
import ManagePagination from './'

const Wrap = ({ count }) => {
  const pagination = useRef(null)

  useEffect(() => {
    pagination.current.apiDoFirstRequest()
  }, [])

  const requestSomething = pagination => {
    console.log(pagination)
    return new Promise(resolve => {
      setTimeout(() => {
        const json = {
          data: ['111', '222'],
          pagination: {
            offset: 10,
            limit: 10,
            count
          }
        }
        resolve(json)
      }, 1000)
    })
  }

  return (
    <ManagePagination
      id='ManagePagination'
      ref={pagination}
      onRequest={requestSomething}
    >
      {({ loading }) => <div>Some content {loading && '加载中...'}</div>}
    </ManagePagination>
  )
}

Wrap.propTypes = {
  count: PropTypes.number
}

const Wrap2 = ({ count }) => {
  const pagination = useRef(null)

  useEffect(() => {
    pagination.current.apiDoFirstRequest()
  }, [])

  const requestSomething = pagination => {
    console.log(pagination)
    return new Promise(resolve => {
      setTimeout(() => {
        const json = {
          data: ['111', '222'],
          pagination: {
            page_obj: 'xxx',
            peek: 40,
            more: true,
            count
          }
        }
        resolve(json)
      }, 1000)
    })
  }

  return (
    <ManagePaginationV2
      ref={pagination}
      id={'demo_manage_pagination'}
      onRequest={requestSomething}
    >
      {({ loading }) => <div>Some content {loading && '加载中...'}</div>}
    </ManagePaginationV2>
  )
}

Wrap2.propTypes = {
  count: PropTypes.number
}

storiesOf('业务组件|ManagePagination', module)
  .add('default without count', () => <Wrap />)
  .add('with count', () => <Wrap count={100} />)

storiesOf('业务组件|ManagePaginationV2', module)
  .addParameters({
    info: {
      text: `
因为页码的管理逻辑复杂，估抽象一个组件，让调用方无需关心 页码相关逻辑。
调用方关心
- 响应请求动作 onRequest，用提供的参数去请求
- 请求数据 this.ref.current.doFirstRequest。顾名思义，想要重新请求数据也应该调用这个方法。比如搜索按钮点击。
- 如果想刷新当前页，this.ref.current.doCurrentRequest。
`
    }
  })
  .add('default without count', () => <Wrap2 />)
  .add('with count', () => <Wrap2 count={177} />)
