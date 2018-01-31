import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends React.Component {
	render() {
		const {children, className, disabled, ...rest} = this.props;
		const isTextOrNumber = typeof children === 'string' || typeof children === 'number';
		if(isTextOrNumber) {
			return (
                <div
					{...rest}
					className={classNames("gm-select-option",className, {
						'disabled': disabled
					})}
				>
					{children}
                </div>
			);
		} else {
			console.warn(`Option组件内只能包含string或者number!`);
			return null;
		}
	}
}

Option.displayName = 'Option';

Option.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Option;