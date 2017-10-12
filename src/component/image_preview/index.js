import React from 'react';
import PropTypes from 'prop-types';
import PreviewModal from './preview_modal';
import classNames from 'classnames';
import _ from 'lodash';


class ImagePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      previewImgIndex: 0  //正在预览图片的index
    };
  }

  handleHide = () => {
    this.setState({modalShow: false});
  }

  handleShow = (index) => {
    this.setState({
      modalShow: true,
      previewImgIndex: index
    });
  }

  handlePreview = (previewImgIndex) => {
    this.setState({previewImgIndex});
  }

  render() {
    const {images, thumbnails, className, ...rest} = this.props;

    const modalProps = {
      show: this.state.modalShow,
      onHide: this.handleHide,
      disableMaskClose: true,
      clean: true
    };

    const cn = classNames("gm-image-preview", className);

    // 图片列表: 有缩略图就用缩略图,没有缩略图就用原图
    const imgList = thumbnails || images;

    return (
      <div className={cn} {...rest}>
        <ul className="gm-image-preview-list" >
          {_.map(imgList, (img, index) => (
            <li key={index}
              className="gm-image-preview-img"
              style={{backgroundImage: `url(${img})`}}
              onClick={() => this.handleShow(index)}
            >
            </li>
          ))}
        </ul>

        {/* 预览浮层 */}
        <PreviewModal modalProps={modalProps}
          previewImgIndex={this.state.previewImgIndex}
          handlePreview={this.handlePreview}
          images={images}
          thumbnails={thumbnails}
        />
      </div>
    );
  }
}


ImagePreview.propTypes = {
  images: PropTypes.array.isRequired,
  thumbnails: PropTypes.array
};

export default ImagePreview;
