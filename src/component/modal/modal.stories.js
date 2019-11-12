import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from './index'
import CleanModal from './clean_modal'
import RightSideModal from './right_side_modal'

storiesOf('Modal', module)
  .add('default', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        Modal.render({
          children: '我是内容',
          title: '我是标题',
          onHide: Modal.hide
        })
      }}
    >
      modal
    </button>
  ))
  .add('size', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        Modal.render({
          size: 'lg',
          children: '我是内容',
          title: '我是标题',
          onHide: Modal.hide
        })
      }}
    >
      size
    </button>
  ))
  .add('noContentPadding', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        Modal.render({
          noContentPadding: true,
          size: 'lg',
          children: '我是内容',
          title: '我是标题',
          onHide: Modal.hide
        })
      }}
    >
      noContentPadding
    </button>
  ))
  .add('opacityMask', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        Modal.render({
          opacityMask: true,
          size: 'lg',
          children: '我是内容',
          title: '我是标题',
          onHide: Modal.hide
        })
      }}
    >
      opacityMask
    </button>
  ))
  .add('CleanModal', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        CleanModal.render({
          children: <div className='gm-text-white'>啦啦啦</div>,
          onHide: Modal.hide
        })
      }}
    >
      CleanModal
    </button>
  ))
  .add('RightSideModal', () => (
    <button
      className='btn btn-primary'
      onClick={() => {
        RightSideModal.render({
          title: 'asdf',
          children: <div className='gm-text-white'>啦啦啦</div>,
          onHide: Modal.hide
        })
      }}
    >
      RightSideModal
    </button>
  ))
