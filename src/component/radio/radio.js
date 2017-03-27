import React, {PropTypes} from 'react';
import _ from 'lodash';

class Radio extends React.Component {
    render() {
        const {
            value,
            checked,
            onChange,
            children,
            inline,
            name
        } = this.props;

        if (!inline) {
            return (
                <div>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                        />
                        {children}
                    </label>
                </div>
            );
        } else {
            return (
                <label className="radio-inline">
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                    />
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
    inline: PropTypes.bool
};

Radio.defaultProps = {
    checked: false,
    onChange: _.noop
};

export default Radio;