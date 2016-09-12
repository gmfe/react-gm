import React, {PropTypes} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import {createChainedFunction, contains, getElementPosition} from 'gm-util';

const parent = document.createElement('div');
parent.className = 'gm-container-trigger';
document.body.appendChild(parent);

class Trigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = ::this.handleClick;
        this.handleBodyClick = ::this.handleBodyClick;

        this.container = document.createElement('div');
        parent.appendChild(this.container);

        this.trigger = null;
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleBodyClick);
        this.renderPopup();
    }

    componentDidUpdate() {
        this.renderPopup();
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleBodyClick);
        // 销毁的时候要清理
        ReactDOM.unmountComponentAtNode(this.container);
    }

    handleBodyClick(event) {
        const target = event.target;
        const root = findDOMNode(this);
        if (!(contains(root, target) || contains(this.container, target))) {
            this.setState({
                active: false
            });
        }
    }

    handleClick() {
        const {disabled, children} = this.props;
        // 优先获取props的disabled
        if (disabled === true) {
            return;
        }
        if (disabled === false) {
            this.setState({
                active: true
            });
        }
        // 如果没有props disabled，判定children是否不可用状态
        if (!children.props.disabled) {
            this.setState({
                active: true
            });
        }
    }

    renderPopup() {
        const {active} = this.state;
        if (active) {
            // 如果传则使用
            const {popup, target, popupProps = {}, widthFull} = this.props;
            const node = findDOMNode((target && target()) || this.trigger);
            const rect = node.getBoundingClientRect();
            const pos = getElementPosition(node);

            ReactDOM.render(React.createElement('div', {
                ...popupProps,
                key: 'popup',
                className: classNames('gm-trigger-popup', popupProps.className),
                style: Object.assign({
                    left: pos.left,
                    top: pos.top + rect.height,
                    width: widthFull ? rect.width : null
                }, popupProps.style)
            }, popup), this.container);
        } else {
            ReactDOM.unmountComponentAtNode(this.container);
        }
    }

    render() {
        const {component, children} = this.props;
        const child = React.Children.only(children);

        const componentProps = Object.assign({}, component.props, {
            onClick: createChainedFunction(component.props.onClick, this.handleClick)
        });

        return React.cloneElement(component, Object.assign({}, componentProps, {
            className: classNames(component.props.className, 'gm-trigger'),
            ref: ref => this.trigger = ref,
            children: child
        }));
    }
}

Trigger.propTypes = {
    popup: PropTypes.node,
    popupProps: PropTypes.object,
    component: PropTypes.node,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    target: PropTypes.func,
    widthFull: PropTypes.bool
};

export default Trigger;