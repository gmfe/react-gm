import React from 'react';
import Flex from '../flex';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Preview_modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previewImgIndex: this.props.index,
            showScrollBtn: true
        };
        this.handlePreview = ::this.handlePreview;
        this.handlePrevious = ::this.handlePrevious;
        this.handleNext = ::this.handleNext;
        this.handleScroll = ::this.handleScroll;
        this.handleScrollLeft = ::this.handleScrollLeft;
        this.handleScrollRight = ::this.handleScrollRight;
        this.handleKeyDown = ::this.handleKeyDown;
    }

    handlePreview(previewImgIndex) {
        this.setState({previewImgIndex});
    }

    handlePrevious() {
        const {thumbnails} = this.props;
        const {previewImgIndex} = this.state;

        if (previewImgIndex !== 0) {
            const index = previewImgIndex - 1;
            this.setState({previewImgIndex: index});

            if (thumbnails) {
                this.thumbnails.childNodes[index].scrollIntoViewIfNeeded();
            }
        }
    }

    handleNext() {
        const {images, thumbnails} = this.props;
        const {previewImgIndex} = this.state;

        if (previewImgIndex !== images.length - 1) {
            const index = previewImgIndex + 1;
            this.setState({previewImgIndex: index});

            if (thumbnails) {
                this.thumbnails.childNodes[index].scrollIntoViewIfNeeded();
            }
        }
    }

    handleScroll(direction) {
        const num = direction === 'left' ? 1 : -1;
        const {thumbnails} = this;
        const initScrollLeft = thumbnails.scrollLeft;
        clearInterval(this.timer);

        function intervalScroll() {
            thumbnails.scrollLeft += (num * 60);
            // 每次移动6张图片
            if (num * (thumbnails.scrollLeft - initScrollLeft) >= 360 || thumbnails.scrollLeft - initScrollLeft === 0) {
                clearInterval(this.timer);
            }
        }

        this.timer = setInterval(intervalScroll.bind(this), 50);
    }

    handleScrollLeft() {
        this.handleScroll('left');
    }

    handleScrollRight() {
        this.handleScroll('right');
    }

    handleKeyDown(event) {
        if (event.keyCode === 37) {
            this.handlePrevious();
        } else if (event.keyCode === 39) {
            this.handleNext();
        }
    }

    componentDidMount() {
        // 如果没有滚动条,不显示左右滚动按钮
        this.thumbnails && this.thumbnails.offsetWidth === this.thumbnails.scrollWidth &&
        this.setState({showScrollBtn: false});

        window.document.body.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.document.body.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const {thumbnails, images, onHide} = this.props;
        const {previewImgIndex, showScrollBtn} = this.state;

        return (
            <Flex className="gm-image-preview-wrap">
                <span className="gm-image-preview-btn-close" onClick={onHide}>×</span>

                <Flex alignCenter className="gm-image-preview-btn-container">
                    <i className={classNames("glyphicon glyphicon-menu-left gm-image-preview-btn", {"hidden": previewImgIndex === 0})}
                       onClick={this.handlePrevious}></i>
                </Flex>


                <Flex column className="gm-image-preview-content">
                    <Flex auto alignCenter className="gm-image-preview-img-wrap">
                        <img src={images[previewImgIndex]} alt="" className="gm-image-preview-img"/>
                    </Flex>

                    {/* 缩略图列表高度: 60px */}
                    {thumbnails && thumbnails.length > 1 && <Flex justifyCenter className="gm-image-preview-footer">
                        <Flex className="gm-image-preview-thumbnails-container">

                            {showScrollBtn &&
                            <i className="glyphicon glyphicon-chevron-left gm-image-preview-thumbnails-btn"
                               onClick={this.handleScrollRight}></i>}

                            <div className="gm-image-preview-thumbnails" ref={ref => this.thumbnails = ref}>
                                {_.map(thumbnails, (img, index) => (
                                    <img key={index}
                                         className={classNames("gm-image-preview-img", {"gm-image-preview-focus": index === previewImgIndex})}
                                         src={img}
                                         onClick={() => this.handlePreview(index)}
                                    >
                                    </img>
                                ))}
                            </div>

                            {showScrollBtn &&
                            <i className="glyphicon glyphicon-chevron-right gm-image-preview-thumbnails-btn"
                               onClick={this.handleScrollLeft}></i>}
                        </Flex>
                    </Flex>}

                </Flex>

                <Flex alignCenter className="gm-image-preview-btn-container">
                    <i className={classNames("glyphicon glyphicon-menu-right gm-image-preview-btn", {"hidden": previewImgIndex === images.length - 1})}
                       onClick={this.handleNext}></i>
                </Flex>

            </Flex>
        );
    }
}

Preview_modal.propTypes = {
    images: PropTypes.array.isRequired,
    thumbnails: PropTypes.array,
    index: PropTypes.number.isRequired
};

export default Preview_modal;
