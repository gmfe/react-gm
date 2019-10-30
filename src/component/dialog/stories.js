import React from 'react'
import { storiesOf } from '@storybook/react'
import Dialog from './index'

storiesOf('Dialog', module).add('default', () => (
  <div>
    <button
      className='btn btn-default'
      onClick={() => {
        Dialog.alert({
          children: 'alert'
        }).then(
          () => {
            console.log('resolve')
          },
          () => {
            console.log('reject')
          }
        )
      }}
    >
      alert
    </button>
    <button
      className='btn btn-default'
      onClick={() => {
        Dialog.confirm({
          children: 'confirm',
          title: 'title'
        }).then(
          () => {
            console.log('resolve')
          },
          () => {
            console.log('reject')
          }
        )
      }}
    >
      confirm
    </button>
    <button
      className='btn btn-default'
      onClick={() => {
        Dialog.confirm({
          title: 'title',
          size: 'md',
          children: <div>something</div>,
          onOK: () => {
            return new Promise(resove => {
              setTimeout(() => {
                resove('a')
              }, 1000)
            })
          }
        }).then(() => {
          console.log('promise resolve')
        })
      }}
    >
      confirm with loading state
    </button>
    <button
      className='btn btn-default'
      onClick={() => {
        Dialog.prompt({
          children: 'sssss',
          title: 'title',
          promptDefaultValue: '123',
          onOK: value => {
            console.log('ok', value)
            return false // return Promise.reject();
          }
        }).then(
          value => {
            console.log('resolve', value)
          },
          () => {
            console.log('reject')
          }
        )
      }}
    >
      prompt
    </button>
  </div>
))
