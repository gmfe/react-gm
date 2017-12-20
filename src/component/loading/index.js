import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            style,
            size,
            text,
            className,
            ...rest
        } = this.props;

        const s = Object.assign({}, style, {
            'width': size + 'px',
            'height': size + 'px'
        });

        return (
            <div className={classNames('gm-loading', className)} {...rest}>
                <svg className="gm-loading-circular" style={s} viewBox="0 0 50 50">
                    <circle className="gm-loading-path" cx="25" cy="25" r="20" fill="none"/>
                </svg>
                {
                    text && <p className="gm-loading-text">{text}</p>
                }
            </div>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    size: PropTypes.number
};

Loading.defaultProps = {
    size: 50
};

export default Loading;