import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import {is} from 'gm-util';
import Loading from '../loading';
import Flex from '../flex';

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
            className,
            children,
            size,
            color,
            ...rest
        } = this.props;

        const {loading} = this.state;


        return (
            <button
                {...rest}
                className={classNames(className)}
                onClick={this.handleClick}
            >
                <Flex justifyCenter alignCenter>
                    {hasLoading && loading && <Loading size={size} style={{marginRight: '4px'}} color={color}/>}
                    {children}
                </Flex>
            </button>
        );
    }
}

// 只封装了 loading
Button.propTypes = {
    hasLoading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.number,  // 转圈圈的大小，默认20
    color: PropTypes.string  // 转圈圈的颜色
};

Button.defaultProps = {
    hasLoading: false,
    onClick: _.noop,
    size: 20
};

export default Button;