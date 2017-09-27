import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

class Radio extends React.Component {
    render() {
        const {
            value,
            checked,
            onChange,
            children,
            inline,
            name,
            disabled
        } = this.props;
        if (!inline) {
            return (
                <div>
                    <label className={classNames({
                        disabled
                    })}>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                            disabled={disabled}
                        />
                        <span/>
                        {children}
                    </label>
                </div>
            );
        } else {
            return (
                <label className={classNames("radio-inline", {
                    disabled
                })}>
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    <span/>
                    {children}
                </label>
            );
        }
    }
}

Radio.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,

    // 由RadioGroup 传下来
    checked: PropTypes.bool,
    name: PropTypes.string,
    inline: PropTypes.bool,

    disabled: PropTypes.bool
};

Radio.defaultProps = {
    checked: false,
    onChange: _.noop
};

export default Radio;