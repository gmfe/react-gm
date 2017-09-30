import React from 'react';
import Flex from '../flex';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

const {clientHeight, clientWidth} = window.document.documentElement;
const containerWidth = clientWidth - 220;    // 缩略图容器宽度

class Preview_modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curLeft: 0,
            previewImgIndex: this.props.index
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
    };

    handlePreview = (previewImgIndex) => {
        this.setState({previewImgIndex});
        // 滚动居中
        window.document.getElementsByClassName("gm-image-preview-focus")[0].scrollIntoViewIfNeeded();
    };

    handlePrevious = () => {
        const {previewImgIndex} = this.state;
        previewImgIndex !== 0 && this.handlePreview(previewImgIndex - 1);
    };

    handleNext = () => {
        const {images} = this.props;
        const {previewImgIndex} = this.state;
        previewImgIndex !== images.length - 1 && this.handlePreview(previewImgIndex + 1);
    };

    handleScrollLeft = () => {
        this.setState({
            curLeft: this.calcLeft('scrollLeft')
        });
    };

    handleScrollRight = () => {
        this.setState({
            curLeft: this.calcLeft('scrollRight')
        });
    };

    handleKeydown = (event) => {
        if (event.keyCode === 37) {
            this.handlePrevious();
        } else if (event.keyCode === 39) {
            this.handleNext();
        }
    };

    componentDidMount() {
        window.document.body.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.body.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        const {thumbnails, images, thumbnailImgWidth, onHide} = this.props;
        const {previewImgIndex} = this.state;
        return (
            <div>
                <span className="gm-image-preview-btn-close" onClick={onHide} >×</span>

                {previewImgIndex !== 0 &&
                    <i className="glyphicon glyphicon-menu-left gm-image-preview-btn-left gm-image-preview-btn" onClick={this.handlePrevious}></i>
                }
                {previewImgIndex !== images.length - 1 &&
                    <i className="glyphicon glyphicon-menu-right gm-image-preview-btn-right gm-image-preview-btn" onClick={this.handleNext} ></i>
                }

                <div className="gm-image-preview-content">

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
                    {thumbnails && thumbnails.length > 1 && <Flex justifyCenter className="gm-image-preview-footer">

                        <div className="gm-image-preview-thumbnails-container" style={{maxWidth: containerWidth + 'px'}}>
                            {thumbnails.length * thumbnailImgWidth > containerWidth &&
                                <i className="glyphicon glyphicon-chevron-left gm-thumbnails-btn-left gm-thumbnails-btn" onClick={this.handleScrollLeft}></i>}
                            {thumbnails.length * thumbnailImgWidth > containerWidth &&
                                <i className="glyphicon glyphicon-chevron-right gm-thumbnails-btn-right gm-thumbnails-btn" onClick={this.handleScrollRight}></i>}

                            <div className="gm-image-preview-thumbnails">
                                <ul className="gm-image-preview-list"
                                    style={{
                                        left: this.state.curLeft + 'px'
                                    }}
                                >
                                    {_.map(thumbnails, (img, index) => (
                                        <li key={index}
                                            className={classNames("gm-image-preview-img", {"gm-image-preview-focus": index === previewImgIndex})}
                                            style={{backgroundImage: `url(${img})`}}
                                            onClick={() => this.handlePreview(index)}
                                        >
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Flex>
                    }
                </div>
            </div>
        );
    }
}

Preview_modal.propTypes = {
    images: PropTypes.array.isRequired,
    thumbnails: PropTypes.array,
    index: PropTypes.number.isRequired
};

Preview_modal.defaultProps = {
        thumbnailImgWidth: 60   // 缩略图大小,包括magin
};

export default Preview_modal;

