import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import {is} from 'gm-util';
import Loading from '../loading';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
        this.state = {
            loading: false
        };
    }

    handleClick(event) {
        event.preventDefault();
        const {hasLoading, onClick} = this.props;
        const {loading} = this.state;

        if (loading) {
            return;
        }

        const result = onClick(event);

        if (hasLoading && is.promise(result)) {
            this.setState({loading: true});
            Promise.resolve(result).then(() => this.setState({
                loading: false
            }), () => this.setState({
                loading: false
            }));
        }
    }

    render() {
        const {
            onClick, // eslint-disable-line
            hasLoading,
            children,
            iconSize,
            iconColor,
            className,
            ...rest
        } = this.props;

        const {loading} = this.state;

        return (
            <button
                {...rest}
                className={classNames('gm-button', className)}
                onClick={this.handleClick}
            >
                {hasLoading && loading && <Loading size={iconSize} color={iconColor} className='gm-button-loading'/>}
                <span className='gm-button-content'>{children}</span>
            </button>
        );
    }
}

// 只封装了 loading
Button.propTypes = {
    hasLoading: PropTypes.bool,
    onClick: PropTypes.func,
    iconSize: PropTypes.number,  // 转圈圈的大小，默认20
    iconColor: PropTypes.string  // 转圈圈的颜色
};

Button.defaultProps = {
    hasLoading: false,
    onClick: _.noop,
    iconSize: 20
};

export default Button;