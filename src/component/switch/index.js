import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 1,
            checked: props.checked
        };

        this.refOn = null;

        this.handleChange = ::this.handleChange;
    }

    componentDidMount() {
        // 初始化后开始计算on的宽度，方便做开关切换动画
        this.setState({
            left: this.refOn.offsetWidth + 4 + 24 - 17
        });
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    setChecked(checked) {
        if (!('checked' in this.props)) {
            this.setState({
                checked
            });
        }
        this.props.onChange(checked);
    }

    handleChange(e) {
        if (this.props.disabled) {
            return;
        }
        this.setChecked(e.target.checked);
    }

    render() {
        const {
            className,
            checked, onChange, // eslint-disable-line
            type, disabled, on, off,
            ...rest
        } = this.props;

        const handleStyle = {};
        if (this.state.checked) {
            handleStyle.left = this.state.left;
        }

        return (
            <label
                {...rest}
                className={classNames('gm-switch gm-switch-' + type, className, {
                    'gm-switch-disabled': disabled
                })}
            >
                <input
                    disabled={disabled}
                    type="checkbox"
                    className="gm-switch-input"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <div className="gm-switch-label">
                    <span>{this.state.checked ? on : off}</span>
                    {/*只需算on的宽度*/}
                    <span className="gm-switch-label-on" ref={ref => this.refOn = ref}>{on}</span>
                </div>
                <div className="gm-switch-handle" style={handleStyle}/>
            </label>
        );
    }
}

Switch.displayName = 'Switch';

Switch.propTypes = {
    type: PropTypes.string, // default primary success info warning danger
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    on: PropTypes.any, // 请保证 on off 的宽度一样
    off: PropTypes.any,
    onChange: PropTypes.func
};
Switch.defaultProps = {
    type: 'default',
    on: 'ON',
    off: 'OFF',
    onChange: _.noop
};

export default Switch;