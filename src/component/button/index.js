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
            isLoading: false
        };
    }

    handleClick(event) {
        event.preventDefault();
        const {onClick} = this.props;
        const result = onClick(event);

        if(!is.promise(result)){
            return;
        }

        this.setState({isLoading: true});

        Promise.resolve(result).then(() => {
            if (!this.______isMounted) {
                this.setState({
                    isLoading: false
                });
            }
        }).catch(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    render() {
        const {
            onClick, // eslint-disable-line
            children,
            iconSize,
            iconColor,
            className,
            ...rest
        } = this.props;

        const {isLoading} = this.state;

        return (
            <button
                {...rest}
                className={classNames('gm-button', className)}
                disabled={isLoading}
                onClick={this.handleClick}
            >
                {isLoading && <Loading size={iconSize} color={iconColor} className='gm-button-loading'/>}
                <span className='gm-button-content'>{children}</span>
            </button>
        );
    }
}

// 只封装了 loading
Button.propTypes = {
    onClick: PropTypes.func,
    iconSize: PropTypes.number,  // 转圈圈的大小，默认20
    iconColor: PropTypes.string  // 转圈圈的颜色
};

Button.defaultProps = {
    onClick: _.noop,
    iconSize: 20
};

export default Button;