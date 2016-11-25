import React, {PropTypes} from 'react';
import classNames from 'classnames';

function noop() {
}

class Switcher extends React.Component {
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
            left: this.refOn.offsetWidth + 2 + 22 + 1 - 17
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
            checked, onChange, // eslint-disable-line
            type, disabled, on, off,
            ...rest
        } = this.props;

        const cn = classNames('gm-switcher gm-switcher-' + type, this.props.className, {
            'gm-switcher-disabled': disabled
        });

        const handleStyle = {};
        if (this.state.checked) {
            handleStyle.left = this.state.left;
        }

        return (
            <label {...rest} className={cn}>
                <input
                    disabled={disabled}
                    type="checkbox"
                    className="gm-switcher-input"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <div className="gm-switcher-label">
                    <span>{this.state.checked ? on : off}</span>
                    {/*只需算on的宽度*/}
                    <span className="gm-switcher-label-on" ref={ref => this.refOn = ref}>{on}</span>
                </div>
                <div className="gm-switcher-handle" style={handleStyle}/>
            </label>
        );
    }
}

Switcher.propTypes = {
    type: PropTypes.string, // default primary success info warning danger
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    on: PropTypes.any, // 请保证 on off 的宽度一样
    off: PropTypes.any,
    onChange: PropTypes.func
};
Switcher.defaultProps = {
    type: 'default',
    on: 'ON',
    off: 'OFF',
    onChange: noop
};

export default Switcher;