import React from 'react'
import { storiesOf } from '@storybook/react'
import EditableText from './'
import Popover from '../popover'
import { observable } from 'mobx'

const store = observable({
  content: 'hello',
  setContent(value) {
    this.content = value
  }
})

storiesOf('EditableText', module).add('default', () => (
  <div>
    <EditableText
      onOk={value => store.setContent(value)}
      content={store.content}
      disabled
    />
    <EditableText
      onOk={value => store.setContent(value)}
      content={store.content}
    >
      <Popover
        showArrow
        top
        component={<div />}
        type='hover'
        popup={
          <div
            className='gm-border gm-padding-5 gm-bg gm-text-12'
            style={{ width: '130px' }}
          >
            来源：{store.content}
          </div>
        }
      >
        <div className='gm-inline-block'>{store.content}</div>
      </Popover>
    </EditableText>
    <EditableText
      onOk={value => store.setContent(value)}
      content={store.content}
    />
  </div>
))
