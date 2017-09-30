import React from 'react';
import PreviewModal from './preview_modal';
import Modal from '../modal';

const ImagePreview = (props) => {

  Modal.render({
    children: <PreviewModal {...props} onHide={Modal.hide} />,
    clean: true,
    show: true,
    disableMaskClose: true,
    style: {
      width: 'auto',
      background: 'black',
      margin: '50px',
      height: 'calc(100% - 100px)'
    }
  });

};


export default ImagePreview;
