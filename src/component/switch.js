const React = require('react');
const classNames = require('classnames');

function noop() {
}

const Switch = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        checked: React.PropTypes.bool,
        defaultChecked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        checkedChildren: React.PropTypes.any,
        unCheckedChildren: React.PropTypes.any,
        onChange: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            checkedChildren: null,
            unCheckedChildren: null,
            defaultChecked: false,
            onChange: noop
        };
    },
    getInitialState() {
        const props = this.props;
        let checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }
        return {
            checked
        };
    },
    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    },
    setChecked(checked) {
        if (!('checked' in this.props)) {
            this.setState({
                checked
            });
        }
        this.props.onChange(checked);
    },
    handleToggle() {
        if (this.props.disabled) {
            return;
        }
        const checked = !this.state.checked;
        this.setChecked(checked);
    },
    handleMouseUp() {
        if (this.refs.node) {
            this.refs.node.blur();
        }
    },
    render() {
        const {
            disabled,
            checkedChildren, unCheckedChildren, ...restProps
        } = this.props;
        const checked = this.state.checked;
        const cn = classNames('gm-switch', this.props.className, {
            'gm-switch-checked': checked,
            'gm-switch-disabled': disabled
        });
        return (
            <span {...restProps}
                className={cn}
                tabIndex="0"
                ref="node"
                onClick={this.handleToggle}
                onMouseUp={this.handleMouseUp}>
                <span className="gm-switch-inner">{checked ? checkedChildren : unCheckedChildren}</span>
            </span>
        );
    }
});

module.exports = Switch;
