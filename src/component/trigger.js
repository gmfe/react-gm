import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import {createChainedFunction, contains} from 'gm-util';

class Trigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = ::this.handleClick;
        this.handleBodyClick = ::this.handleBodyClick;
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleBodyClick);
    }

    handleBodyClick(event) {
        const target = event.target;
        const root = findDOMNode(this);
        if (!contains(root, target)) {
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

    render() {
        const {component, children, popup} = this.props;
        const child = React.Children.only(children);
        const {active} = this.state;

        const componentProps = Object.assign({}, component.props, {
            onClick: createChainedFunction(component.props.onClick, this.handleClick)
        });

        return React.cloneElement(component, Object.assign({}, componentProps, {
            className: classNames(component.props.className, 'gm-trigger', {
                'gm-trigger-active': active
            }),
            children: [child, React.createElement('div', {
                key: 'popup',
                className: 'gm-trigger-popup'
            }, popup)]
        }));
    }
}

Trigger.propTypes = {
    popup: PropTypes.node,
    component: PropTypes.node,
    children: PropTypes.node,
    disabled: PropTypes.bool
};

export default Trigger;