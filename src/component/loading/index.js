import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.getStyle = ::this.getStyle;
        this.documentBody = ::this.documentBody;
        this.documentBody = ::this.documentBody;
        this.disableScroll = ::this.disableScroll;
        this.enableScroll = ::this.enableScroll;
    }
    getStyle() {
        if (this.props.fullscreen) {
            this.disableScroll();
            return {
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 8888
            };
        } else {
            this.enableScroll();

            return {
                position: 'relative'
            };
        }
    }

    documentBody() {
        return window.document.body;
    }

    disableScroll() {
        const documentBody = this.documentBody();
        if (documentBody) {
            documentBody.style.setProperty('overflow', 'hidden');
        }
    }

    enableScroll() {
        const documentBody = this.documentBody();
        if (documentBody) {
            documentBody.style.removeProperty('overflow');
        }
    }

    render() {
        let {
            loading,
            style,
            size,
            fullscreen, // eslint-disable-line
            text,
            ...rest} = this.props;

        style = Object.assign({}, style, {
            'width': size + 'px',
            'height': size + 'px'
        });

        return (

            <div style={this.getStyle()} {...rest}>
                { loading && (
                    <div
                        style={{
                            display: 'block',
                            position: 'absolute',
                            zIndex: 666,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            margin: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }}>
                        <div className='gm-loading-spinner' style={{
                            position: 'absolute',
                            display: 'inline-block',
                            lineHeight: 1
                        }}>
                            <svg className="gm-loading-circular" style={style} viewBox="0 0 50 50">
                                <circle className="gm-loading-path" cx="25" cy="25" r="20" fill="none" />
                            </svg>
                            {
                                text && <p className="gm-loading-text">{text}</p>
                            }
                        </div>
                    </div>
                )}
                {this.props.children}
            </div>
        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool,
    fullscreen: PropTypes.bool,
    text: PropTypes.string,
    size: PropTypes.number
};

Loading.defaultProps = {
    loading: true,
    fullscreen: false
};

export default Loading;