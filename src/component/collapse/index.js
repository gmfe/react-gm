import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Collapse extends React.Component {
    render() {
        const {children, className, 'in': isIn, style, ...rest} = this.props;
        return (
            <div
                {...rest}
                className={classNames(
                    'gm-collapse',
                    className
                )}
                style={Object.assign({
                    transition: isIn ? '0.5s ease all' : 'inherit',
                    height: isIn ? 'inherit' : '0',
                    opacity: isIn ? 1 : 0,
                    overflow: isIn ? 'inherit' : 'hidden'
                }, style)}
            >
                {children}
            </div>
        );
    }
}

Collapse.propTypes = {
    in: PropTypes.bool.isRequired
};

export default Collapse;