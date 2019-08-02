import React from 'react'
import { storiesOf } from '@storybook/react'
import ImgUploader from './index'
import { observable } from 'mobx'

const store = observable({
  data: [
    'https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png'
  ],
  setData(newData) {
    this.data = newData
  }
})

const handleUpload = files => {
  console.log(files)
  // 调用方做突破尺寸和文件大小判断

  return Promise.resolve([
    'https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png'
  ])
}

storiesOf('ImgUploader', module)
  .add('default', () => (
    <div>
      <div style={{ height: '100px' }} />
      <ImgUploader
        data={store.data}
        onUpload={handleUpload}
        onChange={data => store.setData(data)}
        accept='image/*'
        desc='图片尺寸720*720像素，大小小于1M'
        multiple
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <div style={{ height: '100px' }} />
      <ImgUploader
        disabled
        data={store.data}
        onUpload={handleUpload}
        onChange={data => store.setData(data)}
        accept='image/*'
        desc='图片尺寸720*720像素，大小小于1M'
        multiple
      />
    </div>
  ))
