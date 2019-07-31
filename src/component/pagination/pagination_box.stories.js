import React, { useEffect, useState, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// import { observable } from 'mobx'
import PaginationBox from './pagination_box'

const PaginationBoxWithCountDemo = props => {
  // const [list, setList] = useState({})
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
        // setList(json.data)
        resolve(json)
      }, 1000)
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
  const [list, setList] = useState({})
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
        setList(json.data)
        resolve(json)
      }, 1000)
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
          <a href='https://doc.guanmai.cn/%E6%A8%A1%E5%9D%97%E6%96%87%E6%A1%A3/%E5%88%86%E9%A1%B5/'>
            此分页规范详情
          </a>
        </h2>

        <PaginationBoxWithCountDemo />
      </div>
    )
  })
  .add('default(with number)', () => {
    return (
      <div>
        <div style={{ display: 'none' }}>
          <span>仅作为展示prototype</span>
          <PaginationBox />
        </div>
        <h2>
          <a href='https://doc.guanmai.cn/%E6%A8%A1%E5%9D%97%E6%96%87%E6%A1%A3/%E5%88%86%E9%A1%B5/'>
            此分页规范详情
          </a>
        </h2>
        <PaginationBoxWithoutCountDemo />
      </div>
    )
  })
