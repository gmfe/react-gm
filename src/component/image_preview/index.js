import React from 'react'
import PreviewModal from './preview_modal'
import CleanModal from '../modal/clean_modal'

const ImagePreview = props => {
  CleanModal.render({
    children: <PreviewModal {...props} onHide={CleanModal.hide}/>,
    show: true,
    onHide: CleanModal.hide,
    disableMaskClose: true,
    style: {
      background: 'rgba(0, 0, 0, 1)',
      margin: '0',
      width: '100%',
      height: '100%'
    }
  })
}

export default ImagePreview
