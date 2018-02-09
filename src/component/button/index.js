import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import {is} from 'gm-util';

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
            this.setState({
                isLoading: false
            });
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
            className,
            disabled,
            ...rest
        } = this.props;

        const {isLoading} = this.state;

        return (
            <button
                {...rest}
                className={classNames('gm-button', className)}
                disabled={isLoading || disabled}
                onClick={this.handleClick}
            >
                {isLoading && <i className='ifont ifont-loading gm-button-loading'></i>}
                <span className='gm-button-content'>{children}</span>
            </button>
        );
    }
}

// 只封装了 loading
Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: _.noop
};

export default Button;