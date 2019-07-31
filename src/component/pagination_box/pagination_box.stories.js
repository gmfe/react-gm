import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import PaginationBox from './'

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
            peek: 55,
            more: true,
            count
          }
        }
        resolve(json)
      }, 500)
    })
  }

  return (
    <PaginationBox
      ref={pagination}
      id={'demo_pagination_box'}
      onRequest={requestSomething}
    >
      {({ loading }) => <div>Some content {loading && '加载中...'}</div>}
    </PaginationBox>
  )
}

Wrap.propTypes = {
  count: PropTypes.number
}

storiesOf('PaginationBox', module)
  .add('default without count', () => <Wrap />)
  .add('with count', () => <Wrap count={177} />)
