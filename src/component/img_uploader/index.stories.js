import React from 'react'
import { storiesOf } from '@storybook/react'
import ImgUploader from './index'

const data = [
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_09b6296.png',
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_09b6296.png',
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
]
const statement =
  '图片尺寸720*720像素，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M，大小小于1M'
const handleRemove = img => {
  console.log('Remove!')
}

const handleUpload = () => {
  console.log('uploader!')
}

storiesOf('ImgUploader', module).add('default', () => (
  <ImgUploader
    data={data}
    onUpload={handleUpload}
    onRemove={handleRemove}
    accept={'image/*'}
    size={100000}
    statement={statement}
    multiple
  />
))
