import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from './index';

class LoadingChunk extends React.Component {
    render() {
        let {
            loading,
            style,
            size,
            text,
            className,
            ...rest} = this.props;

        const s = Object.assign({}, style, {
            'width': size + 'px',
            'height': size + 'px'
        });

        return (
            <div {...rest} className={classNames(className, {
                'gm-loading-chunk': loading
            })}>
                {this.props.children || <div style={{height: (this.props.size || 50) + 'px'}}/>}
                {
                    loading && <div className='gm-loading-mask'>
                         <Loading style={s} text={text} size={size} className='gm-loading-spinner'/>
                    </div>
                }
            </div>
        );
    }
}

LoadingChunk.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string,
    size: PropTypes.number
};

LoadingChunk.defaultProps = {
    size: 50,
    loading: false
};

export default LoadingChunk;