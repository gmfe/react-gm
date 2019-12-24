import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CropperJS from 'cropperjs'
import { Flex, Modal } from '../src'

const defaultOptions = {
  aspectRatio: 1,
  viewMode: 1
}

// 简单判断
function getType(url) {
  if (url.includes('.png')) {
    return 'image/png'
  } else if (url.includes('.jpg') || url.includes('.jpeg')) {
    return 'image/jpeg'
  } else if (url.includes('png')) {
    return 'image/png'
  }
}

const Cropper = ({ file, url, options, croppedOptions, onCancel, onOK }) => {
  const imgRef = useRef(null)
  const imgPreviewRef = useRef(null)
  const cropperRef = useRef(null)

  useEffect(() => {
    const dom = ReactDOM.findDOMNode(imgRef.current)
    const domPreview = ReactDOM.findDOMNode(imgPreviewRef.current)
    cropperRef.current = new CropperJS(dom, {
      ...defaultOptions,
      ...options,
      preview: domPreview
    })
  }, [])

  const handleOK = () => {
    cropperRef.current.getCroppedCanvas(croppedOptions).toBlob(
      blob => {
        onOK(blob)
      },
      url ? getType(url) || 'image/jpeg' : file.type
    )
  }

  return (
    <div className='gm-cropper'>
      <Flex justifyBetween>
        <div>
          <img
            className='gm-cropper-img'
            ref={imgRef}
            src={url || file.preview}
          />
        </div>
        <div>
          <div ref={imgPreviewRef} className='gm-cropper-preview' />
          <div className='gm-text-desc text-center gm-margin-top-10'>预览</div>
        </div>
      </Flex>
      <div className='text-right gm-margin-top-10'>
        <button className='btn btn-default' onClick={onCancel}>
          取消
        </button>
        <div className='gm-gap-10' />
        <button className='btn btn-primary' onClick={handleOK}>
          确定
        </button>
      </div>
    </div>
  )
}

Cropper.propTypes = {
  file: PropTypes.object,
  url: PropTypes.string,
  options: PropTypes.object,
  croppedOptions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  onCancel: PropTypes.func.isRequired,
  onOK: PropTypes.func.isRequired
}

Cropper.SIZE = {
  SKU: { width: 720, height: 720 },
  LOGO: { width: 720, height: 720 }
}

// file url options
// return promise blob
Cropper.render = props => {
  return new Promise((resolve, reject) => {
    const handleCancel = () => {
      Modal.hide()
      reject(new Error('cancel'))
    }

    const handleOK = data => {
      Modal.hide()
      resolve(data)
    }

    Modal.render({
      title: '编辑头像',
      children: <Cropper {...props} onCancel={handleCancel} onOK={handleOK} />,
      style: {
        width: '520px'
      },
      onHide: handleCancel
    })
  })
}

Cropper.hide = Modal.hide

export default Cropper
