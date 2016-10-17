import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Flex from './flex';

function noop() {
}

class Switcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };

        this.handleChange = ::this.handleChange;
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

    handleChange() {
        if (this.props.disabled) {
            return;
        }
        const checked = !this.state.checked;
        this.setChecked(checked);
    }

    render() {
        const {
            checked, onChange, // eslint-disable-line
            type, disabled, on, off,
            ...rest
        } = this.props;

        const cn = classNames('gm-switcher gm-switcher-' + type, this.props.className, {
            'gm-switcher-on': this.state.checked,
            'gm-switcher-off': !this.state.checked,
            'gm-switcher-disabled': disabled
        });

        return this.state.checked ? (
            <div
                {...rest}
                className={cn}
                onClick={this.handleChange}
            >
                <Flex className="gm-switcher-inner">
                    <Flex flex className="gm-paddingLR5">{on}</Flex>
                    <Flex className="gm-switcher-dot">&nbsp;</Flex>
                </Flex>
            </div>
        ) : (
            <div
                {...rest}
                className={cn}
                onClick={this.handleChange}
            >
                <Flex className="gm-switcher-inner">
                    <Flex className="gm-switcher-dot">&nbsp;</Flex>
                    <Flex flex className="gm-paddingLR5">{off}</Flex>
                </Flex>
            </div>
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
    on: <span>ON&nbsp;</span>,
    off: <span>OFF</span>,
    onChange: noop
};

export default Switcher;
