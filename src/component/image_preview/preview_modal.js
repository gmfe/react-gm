import React from 'react';
import Modal from '../modal';
import Flex from '../flex';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

const {clientHeight, clientWidth} = window.document.documentElement;
const containerWidth = clientWidth - 220;    // 缩略图容器宽度

class Preview_modal extends React.Component {
    static defaultProps = {
        thumbnailImgWidth: 60   // 缩略图大小,包括magin
    }

    constructor(props) {
        super(props);
        this.state = {
            curLeft: 0
        };
    }

    /**
     * 计算图片列表left值
     * @param {string} type  两个可能值: scrollLeft 或者 scrollRight
     * @return {number} 移动距离,负数为向左移动,正数向右 
     */
    calcLeft = (type) => {
        const num = type === 'scrollLeft' ? -1 : 1;

        const {images, thumbnailImgWidth} = this.props;
        const {curLeft} = this.state;
        const ulWidth = images.length * thumbnailImgWidth;     // ul总长度 
        const scrollLeft = curLeft + (num * containerWidth);   // 向左移动的距离
        
        let left = 0;

        // 边界:   -(ulWidth - containerWidth) < scrollLeft < 0
        if (scrollLeft < containerWidth - ulWidth) {
            left = containerWidth - ulWidth;
        } else if (scrollLeft > 0) {
            left = 0;
        } else {
            left = scrollLeft;
        }
        return left;
    }

    handlePrevious = () => {
        const {handlePreview, previewImgIndex} = this.props;
        previewImgIndex !== 0 && handlePreview(previewImgIndex - 1);
    }

    handleNext = () => {
        const {handlePreview, previewImgIndex, images} = this.props;
        previewImgIndex !== images.length - 1 && handlePreview(previewImgIndex + 1);
    }

    handleSrollLeft = () => {
        this.setState({
            curLeft: this.calcLeft('scrollLeft')
        });
    }

    handleSrollRight = () => {
        this.setState({
            curLeft: this.calcLeft('scrollRight')
        });
    }

    handleKeydown = (event) => {
        if (event.keyCode === 37) {
            this.handlePrevious();
        } else if (event.keyCode === 39) {
            this.handleNext();
        }
    }

    componentDidMount() {
        window.document.body.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.body.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        const {modalProps, thumbnails, images, previewImgIndex, handlePreview, thumbnailImgWidth} = this.props;
        const {onHide} = modalProps;

        return (
            <Modal {...modalProps} style={{
                width: 'auto',
                background: 'black',
                margin: '50px',
                height: clientHeight - 100 + 'px'
            }}>

                <span className="gm-preview-modal-btn-close" onClick={onHide} >×</span>

                {previewImgIndex !== 0 &&
                    <i className="glyphicon glyphicon-menu-left gm-preview-modal-btn-left gm-preview-modal-btn" onClick={this.handlePrevious}></i>
                }
                {previewImgIndex !== images.length - 1 &&
                    <i className="glyphicon glyphicon-menu-right gm-preview-modal-btn-right gm-preview-modal-btn" onClick={this.handleNext} ></i>
                }

                <div className="gm-preview-modal-content">

                    <Flex alignCenter justifyCenter column style={{
                        width: 'auto',
                        height: clientHeight - 180 + 'px',
                        overflow: 'hidden'
                    }} >
                        <img src={images[previewImgIndex]} alt="" style={{
                            maxWidth: clientWidth - 180 + 'px',
                            maxHeight: clientHeight - 160 + 'px'
                        }} />
                    </Flex>
                    
                    {/* 缩略图列表高度: 60px, 最大跨度: containerWidth  */}
                    {thumbnails && thumbnails.length !== 0 && <Flex justifyCenter className="gm-preview-modal-footer">

                        <div className="gm-preview-modal-thumbnails-container" style={{maxWidth: containerWidth + 'px'}}>
                            {thumbnails.length * thumbnailImgWidth > containerWidth &&
                                <i className="glyphicon glyphicon-chevron-left gm-thumbnails-btn-left gm-thumbnails-btn" onClick={this.handleSrollLeft}></i>}
                            {thumbnails.length * thumbnailImgWidth > containerWidth &&
                                <i className="glyphicon glyphicon-chevron-right gm-thumbnails-btn-right gm-thumbnails-btn" onClick={this.handleSrollRight}></i>}

                            <div className="gm-preview-modal-thumbnails">
                                <ul className="gm-preview-modal-list"
                                    style={{
                                        left: this.state.curLeft + 'px'
                                    }}
                                >
                                    {_.map(thumbnails, (img, index) => (
                                        <li key={index}
                                            className={classNames("gm-preview-modal-img", {"gm-preview-modal-focus": index === previewImgIndex})}
                                            style={{backgroundImage: `url(${img})`}}
                                            onClick={() => handlePreview(index)}
                                        >
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Flex>
                    }
                </div>
            </Modal>
        );
    }
}

Preview_modal.propTypes = {
    images: PropTypes.array.isRequired,
    thumbnails: PropTypes.array,
    modalProps: PropTypes.object.isRequired,
    previewImgIndex: PropTypes.number.isRequired,
    handlePreview: PropTypes.func.isRequired
};

export default Preview_modal;

