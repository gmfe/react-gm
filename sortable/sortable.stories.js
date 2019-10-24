import React from 'react'
import PropTypes from 'prop-types'
import Sortable from 'react-sortablejs'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import _ from 'lodash'
import classNames from 'classnames'
import { SortTableList } from './index'

const store = observable({
  data: [
    {
      value: '0',
      text: '大白菜'
    },
    {
      value: '1',
      text: '小白菜'
    },
    {
      value: '2',
      text: '牛肉'
    },
    {
      value: '3',
      text: '鸡肉'
    },
    {
      value: '4',
      text: '羊肉'
    },
    {
      value: '5',
      text: '鸭肉'
    },
    {
      value: '6',
      text: '大闸蟹'
    }
  ],
  setData(data) {
    this.data = data
  }
})

const Wrap = React.forwardRef(({ className, ...rest }, ref) => (
  <div
    {...rest}
    ref={ref}
    className={classNames('gm-border gm-padding-10', className)}
  />
))

Wrap.propTypes = {
  className: PropTypes.string
}

storiesOf('Sortable|Sortable', module)
  .add('default', () => (
    <SortTableList data={store.data} onChange={data => store.setData(data)} />
  ))
  .add('renderItem', () => (
    <SortTableList
      data={store.data}
      onChange={data => store.setData(data)}
      renderItem={item => (
        <div className='gm-border gm-padding-10'>{item.text}</div>
      )}
    />
  ))
  .add('限定高', () => (
    <SortTableList
      data={store.data}
      onChange={data => store.setData(data)}
      renderItem={item => (
        <div className='gm-border gm-padding-10'>{item.text}</div>
      )}
      style={{
        height: '200px',
        overflow: 'auto'
      }}
    />
  ))
  .add('指定拖动单元', () => (
    <SortTableList
      data={store.data}
      onChange={data => store.setData(data)}
      options={{
        handle: '.b-sortable-handle'
      }}
      renderItem={item => (
        <div className='gm-border gm-padding-10'>
          <span className='b-sortable-handle gm-cursor-grab'>move</span>
          &nbsp;&nbsp;
          {item.text}
        </div>
      )}
    />
  ))
  .add(
    '原始',
    () => (
      <Sortable
        tag={Wrap}
        options={{
          animation: 150
        }}
        onChange={order => {
          console.log(order)
          const newData = _.sortBy(store.data.slice(), v =>
            order.indexOf(v.value + '')
          )
          store.setData(newData)
        }}
      >
        {_.map(store.data, v => (
          <div
            key={v.value}
            data-id={v.value}
            className='gm-border gm-padding-10'
          >
            {v.text}
          </div>
        ))}
      </Sortable>
    ),
    {
      info: {
        text: `
原始的使用
- 容器 tag 制定，默认是 div，也可以自己传。注意 Wrap 要支持 ref，要么 class 写法，要么 React.forwardRef FP
- ReactSortable 的子元素提供 data-id 唯一标识，注意 onChange 后拿到的是 字符串
- animation 有个动画体验更佳

⤵️ story source 显示不对，不要看
`
      }
    }
  )
