import React, { useEffect, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import PaginationBox from './pagination_box'

const PaginationBoxWithCountDemo = props => {
  const pagination = useRef(null)
  useEffect(() => {
    pagination.current.doFirstRequest()
  }, [])

  const requestSomething = pagination => {
    return new Promise(resolve => {
      setTimeout(() => {
        const json = {
          data: ['111', '222'],
          pagination: {
            page_obj: 'xxx',
            peek: 55,
            more: true,
            count: 177
          }
        }
        resolve(json)
      }, 500)
    })
  }

  const { ...rest } = props

  return (
    <PaginationBox
      onRequest={requestSomething}
      ref={pagination} /* disablePage 不显示页码 */
      {...rest}
    >
      <div>Some content</div>
    </PaginationBox>
  )
}

const PaginationBoxWithoutCountDemo = props => {
  const pagination = useRef(null)
  useEffect(() => {
    pagination.current.doFirstRequest()
  }, [])

  const requestSomething = pagination => {
    return new Promise(resolve => {
      setTimeout(() => {
        const json = {
          data: ['111', '222'],
          pagination: {
            page_obj: 'xxx',
            peek: 55,
            more: true
          }
        }
        resolve(json)
      }, 500)
    })
  }

  const { ...rest } = props

  return (
    <PaginationBox
      onRequest={requestSomething}
      ref={pagination} /* disablePage 不显示页码 */
      {...rest}
    >
      <div>Some content</div>
    </PaginationBox>
  )
}

storiesOf('PaginationBox', module)
  .addDecorator(withKnobs)
  .add('default(with count)', () => {
    return (
      <div>
        <div style={{ display: 'none' }}>
          <span>仅作为展示prototype</span>
          <PaginationBox />
        </div>
        <h2>
          <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>
            此分页规范详情
          </a>
        </h2>

        <PaginationBoxWithCountDemo />
      </div>
    )
  })
  .add('without count', () => {
    return (
      <div>
        <div style={{ display: 'none' }}>
          <span>仅作为展示prototype</span>
          <PaginationBox />
        </div>
        <h2>
          <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>
            此分页规范详情
          </a>
        </h2>
        <PaginationBoxWithoutCountDemo />
      </div>
    )
  })
