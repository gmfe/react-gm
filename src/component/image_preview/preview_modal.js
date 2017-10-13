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
            showScrollBtn: true,
            timer: null
        };
    }

    handlePreview = (previewImgIndex) => {
        this.setState({previewImgIndex});
    };

    handlePrevious = () => {
        const {thumbnails} = this.props;
        const {previewImgIndex} = this.state;

        if (previewImgIndex !== 0) {
            this.setState({previewImgIndex: previewImgIndex - 1});

            if (thumbnails) {
                window.document.querySelector('.gm-image-preview-focus').scrollIntoViewIfNeeded();
            }
        }
    };

    handleNext = () => {
        const {images, thumbnails} = this.props;
        const {previewImgIndex} = this.state;

        if (previewImgIndex !== images.length - 1) {
            this.setState({previewImgIndex: previewImgIndex + 1});

            if (thumbnails) {
                window.document.querySelector('.gm-image-preview-focus').scrollIntoViewIfNeeded();
            }
        }
    };

    handleScroll = (direction) => {
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
    };

    handleScrollLeft = () => {
        this.handleScroll('left');
    };

    handleScrollRight = () => {
        this.handleScroll('right');
    };

    handleKeyDown = (event) => {
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

        window.document.body.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.document.body.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const {thumbnails, images, onHide} = this.props;
        const {previewImgIndex, showScrollBtn} = this.state;

        return (
            <div className="gm-image-preview-wrap">
                <span className="gm-image-preview-btn-close" onClick={onHide} >×</span>

                {previewImgIndex !== 0 &&
                    <i className="glyphicon glyphicon-menu-left gm-image-preview-btn-left gm-image-preview-btn" onClick={this.handlePrevious}></i>
                }
                {previewImgIndex !== images.length - 1 &&
                    <i className="glyphicon glyphicon-menu-right gm-image-preview-btn-right gm-image-preview-btn" onClick={this.handleNext} ></i>
                }

                <div className="gm-image-preview-content">
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

export default Preview_modal;
