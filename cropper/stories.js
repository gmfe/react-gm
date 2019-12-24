import React from 'react'
import Cropper from './cropper'
import { Uploader } from '../src'

export const readme = () => {
  return (
    <div>
      {`
TODO
    `}
    </div>
  )
}

export const Default = () => {
  return (
    <Uploader
      accept='image/*'
      onUpload={files => {
        console.log(files[0])
        console.log('size before', files[0].size / 1024)
        Cropper.render({
          file: files[0]
        }).then(data => {
          console.log(data)
          console.log('size after', data.size / 1024)

          window.open(window.URL.createObjectURL(data))
        })
      }}
    />
  )
}

export const size = () => {
  return (
    <Uploader
      accept='image/*'
      onUpload={files => {
        console.log(files[0])
        console.log('size before', files[0].size / 1024, 'kb')
        Cropper.render({
          file: files[0],
          croppedOptions: {
            ...Cropper.SIZE.SKU
          }
        }).then(data => {
          console.log(data)
          console.log('size after', data.size / 1024, 'kb')

          window.open(window.URL.createObjectURL(data))
        })
      }}
    />
  )
}

export const aspectRatio = () => {
  return (
    <Uploader
      accept='image/*'
      onUpload={files => {
        console.log(files[0])
        console.log('size before', files[0].size / 1024, 'kb')
        Cropper.render({
          file: files[0],
          options: {
            aspectRatio: 2
          },
          croppedOptions: {
            width: 720,
            height: 360
          }
        }).then(data => {
          console.log(data)
          console.log('size after', data.size / 1024, 'kb')

          window.open(window.URL.createObjectURL(data))
        })
      }}
    />
  )
}

export default {
  title: 'Cropper|Cropper'
}
