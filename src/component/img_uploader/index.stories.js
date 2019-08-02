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

  // 假数据
  store.setData([
    'https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png',
    'https://js.guanmai.cn/static_storage/json/common/logo/default/logo.pure.png'
  ])
}

storiesOf('ImgUploader', module).add('default', () => (
  <ImgUploader
    data={store.data}
    onUpload={handleUpload}
    onChange={data => store.setData(data)}
    accept={'image/*'}
    desc='图片尺寸720*720像素，大小小于1M'
    multiple
  />
))
