import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

class Collapse extends React.Component {
    render() {
        const {children, 'in': isIn, ...rest} = this.props;

        return (
            <div
                {...rest}
                className={className(
                    'gm-collapse',
                    this.props.className,
                    {'in': isIn }
                )}
            >{children}</div>
        );
    }
}

Collapse.propTypes = {
    in: PropTypes.bool.isRequired
};

export default Collapse;