import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

class Checkbox extends React.Component {
    render() {
        const {
            value,
            checked,
            onChange,
            children,
            name,
            inline,
            disabled
        } = this.props;

        if (!inline) {
            return (
                <div>
                    <label className={classNames({
                        disabled
                    })}>
                        <input
                            type="checkbox"
                            name={name}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                            disabled={disabled}
                        />
                        {children}
                    </label>
                </div>
            );
        } else {
            return (
                <label className={classNames("checkbox-inline", {
                    disabled
                })}>
                    <input
                        type="checkbox"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    {children}
                </label>
            );
        }
    }
}

Checkbox.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,

    // 由CheckboxGroup 传下来
    name: PropTypes.string,
    checked: PropTypes.bool,
    inline: PropTypes.bool,

    disabled: PropTypes.bool
};

Checkbox.defaultProps = {
    checked: false,
    onChange: _.noop
};

export default Checkbox;