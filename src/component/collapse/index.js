import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Collapse extends React.Component {
    render() {
        const {children, className, 'in': isIn, ...rest} = this.props;

        return (
            <div
                {...rest}
                className={classNames(
                    'gm-collapse',
                    className,
                    {'in': isIn},
                )}
            >{children}</div>
        );
    }
}

Collapse.propTypes = {
    in: PropTypes.bool.isRequired
};

export default Collapse;