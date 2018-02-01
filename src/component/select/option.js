import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends React.Component {
	render() {
		const {children, className, disabled, value, ...rest} = this.props;
		return (
			<div
				{...rest}
				value={value}
				className={classNames("gm-select-option",className, {
					'disabled': disabled
				})}
			>
				{children}
			</div>
		);
		
	}
}

Option.displayName = 'Option';

Option.propTypes = {
    value: PropTypes.any.isRequired,
	disabled: PropTypes.bool
};

export default Option;