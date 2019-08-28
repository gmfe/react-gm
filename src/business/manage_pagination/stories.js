import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import ManagePagination from './'

const Wrap = ({ count }) => {
  const pagination = useRef(null)

  useEffect(() => {
    pagination.current.doFirstRequest()
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
    <ManagePagination
      ref={pagination}
      id={'demo_manage_pagination'}
      onRequest={requestSomething}
    >
      {({ loading }) => <div>Some content {loading && '加载中...'}</div>}
    </ManagePagination>
  )
}

Wrap.propTypes = {
  count: PropTypes.number
}

storiesOf('业务组件|ManagePagination', module)
  .add('default without count', () => <Wrap />)
  .add('with count', () => <Wrap count={177} />)
