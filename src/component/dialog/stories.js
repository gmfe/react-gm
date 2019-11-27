import React from 'react'
import { storiesOf } from '@storybook/react'
import Dialog from './index'

storiesOf('Dialog', module)
  .add('default', () => (
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
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve('a')
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
  .add('dialog to dialog', () => {
    const openSyncDialog1 = () => {
      Dialog.confirm({
        title: 'dialog1',
        children: 'dialog1'
      }).then(() => {
        openDialog2()
      })
    }

    const openAsyncDialog1 = () => {
      Dialog.confirm({
        title: 'dialog1',
        children: 'dialog1',
        onOK() {
          return new Promise(resolve => {
            setTimeout(() => resolve(), 2000)
          }).then(() => {
            setTimeout(() => {
              // 必须加setTimeout
              openDialog2()
            })
          })
        }
      })
    }

    const openDialog2 = () => {
      Dialog.confirm({
        title: 'dialog2',
        children: 'dialog2'
      })
    }
    return (
      <>
        <button onClick={openSyncDialog1} className='btn btn-default'>
          sync
        </button>
        <button onClick={openAsyncDialog1} className='btn btn-default'>
          async
        </button>
      </>
    )
  })
