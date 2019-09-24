import React from 'react'
import { storiesOf } from '@storybook/react'
import Uploader from './'
import { observable } from 'mobx'

const { DefaultImage } = Uploader

const store = observable({
  data: null,
  setData() {
    this.data =
      'https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png'
  }
})

storiesOf('Uploader', module)
  .add('default', () => (
    <Uploader onUpload={(files, e) => console.log(files, e)} accept='image/*' />
  ))
  .add('自定义', () => (
    <Uploader onUpload={(files, e) => console.log(files, e)} accept='.xlsx'>
      <button className='btn btn-default'>自定义</button>
    </Uploader>
  ))
  .add('+图片', () => (
    <Uploader onUpload={(files, e) => console.log(files, e)} accept='image/*'>
      <DefaultImage />
    </Uploader>
  ))
  .add('+图片替换上传位置', () => (
    <Uploader onUpload={() => store.setData()} accept='image/*'>
      <DefaultImage>
        {store.data && (
          <img
            src={store.data}
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        )}
      </DefaultImage>
    </Uploader>
  ))
