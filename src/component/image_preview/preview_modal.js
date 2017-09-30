import React from 'react';
import Flex from '../flex';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Preview_modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
            previewImgIndex: this.props.index,
            showScrollBtn: true,
            timer: null
        };
    }

    handlePreview = (previewImgIndex) => {
        this.setState({previewImgIndex});
=======
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
>>>>>>> 4ca0885... 1. 代码优化  2.更换demo素材图片  3.更新文档
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
<<<<<<< HEAD
   
    handleScroll = (direction) => {
        const num = direction === 'left' ? 1 : -1;
        let {thumbnails} = this;
        const initScrollLeft = thumbnails.scrollLeft;
        clearInterval(this.timer);

        function intervalScroll() {
            thumbnails.scrollLeft += (num * 60);
            if (num * (thumbnails.scrollLeft - initScrollLeft) >= 360 || thumbnails.scrollLeft - initScrollLeft === 0) {
                clearInterval(this.timer);
            }
        }

        this.timer = setInterval(intervalScroll.bind(this), 50);
    };
    
    handleScrollLeft = () => {
        this.handleScroll('left');      
=======

    handleScrollLeft = () => {
        this.setState({
            curLeft: this.calcLeft('scrollLeft')
        });
    };

    handleScrollRight = () => {
        this.setState({
            curLeft: this.calcLeft('scrollRight')
        });
>>>>>>> 4ca0885... 1. 代码优化  2.更换demo素材图片  3.更新文档
    };

    handleScrollRight = () => {
        this.handleScroll('right');
    };
    
    handleKeydown = (event) => {
        if (event.keyCode === 37) {
            this.handlePrevious();
        } else if (event.keyCode === 39) {
            this.handleNext();
        }
    };

    componentDidMount() {
        // 如果没有滚动条,不显示左右滚动按钮
        this.thumbnails && this.thumbnails.offsetWidth === this.thumbnails.scrollWidth && 
        this.setState({showScrollBtn: false});

        window.document.body.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.body.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        const {thumbnails, images, onHide} = this.props;
        const {previewImgIndex, showScrollBtn} = this.state;

        return (
<<<<<<< HEAD
            <div className="gm-image-preview-wrap">
=======
            <div>
>>>>>>> 4ca0885... 1. 代码优化  2.更换demo素材图片  3.更新文档
                <span className="gm-image-preview-btn-close" onClick={onHide} >×</span>

                {previewImgIndex !== 0 &&
                    <i className="glyphicon glyphicon-menu-left gm-image-preview-btn-left gm-image-preview-btn" onClick={this.handlePrevious}></i>
                }
                {previewImgIndex !== images.length - 1 &&
                    <i className="glyphicon glyphicon-menu-right gm-image-preview-btn-right gm-image-preview-btn" onClick={this.handleNext} ></i>
                }

                <div className="gm-image-preview-content">
<<<<<<< HEAD
                    <Flex auto alignCenter className="gm-image-preview-img-wrap">
                        <img src={images[previewImgIndex]} alt="" className="gm-image-preview-img" />
                    </Flex>

                    {/* 缩略图列表高度: 60px */}
                    {thumbnails && thumbnails.length > 1 && <Flex justifyCenter className="gm-image-preview-footer">

                        <div className="gm-image-preview-thumbnails-container" >

                            {thumbnails && showScrollBtn && 
                                <i className="glyphicon glyphicon-chevron-left gm-thumbnails-btn-left gm-thumbnails-btn" onClick={this.handleScrollRight}></i>}
                            {thumbnails && showScrollBtn && 
                                <i className="glyphicon glyphicon-chevron-right gm-thumbnails-btn-right gm-thumbnails-btn" onClick={this.handleScrollLeft}></i>}

                            <div className="gm-image-preview-thumbnails" ref={ref => this.thumbnails = ref}>
                                <ul className="gm-image-preview-list">
=======

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
>>>>>>> 4ca0885... 1. 代码优化  2.更换demo素材图片  3.更新文档
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
                    </Flex>}

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
<<<<<<< HEAD
    thumbnailImgWidth: 60   // 缩略图大小,包括magin
=======
        thumbnailImgWidth: 60   // 缩略图大小,包括magin
>>>>>>> 4ca0885... 1. 代码优化  2.更换demo素材图片  3.更新文档
};

export default Preview_modal;

