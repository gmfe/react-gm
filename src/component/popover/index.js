import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {createChainedFunction, contains, getScrollTop, getScrollLeft} from 'gm-util';
import LayoutRoot from '../layout_root';
import Popup from './popup';
import _ from 'lodash';
import classNames from 'classnames';
import Emitter from "../../emitter";

function getElementPositionWithScrollTop(element) {
    let top = element.offsetTop;
    let left = element.offsetLeft;
    let current = element.offsetParent;

    if (!current && window.getComputedStyle(element, null).position === 'fixed') {
        top += getScrollTop() - element.scrollTop;
        left += getScrollLeft() - element.scrollLeft;
    }

    while (current !== null) {
        top += current.offsetTop;
        left += current.offsetLeft;

        // 特殊逻辑，如果是 position: fixed
        if (window.getComputedStyle(current, null).position === 'fixed') {
            top += getScrollTop() - current.scrollTop;
            left += getScrollLeft() - current.scrollLeft;
        }

        current = current.offsetParent;
    }

    return {
        top,
        left
    };
}

class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = ::this.handleClick;
        this.handleMouseEnter = ::this.handleMouseEnter;
        this.handleMouseLeave = ::this.handleMouseLeave;

        this.handleBodyClick = ::this.handleBodyClick;
        this.setActive = ::this.setActive;
        this.getDisabled = ::this.getDisabled;
        this.handleModalScroll = ::this.handleModalScroll;
        this.handleBrowserScroll = ::this.handleBrowserScroll;

        this.debounceHandleModalScroll = _.debounce(this.handleModalScroll, 200);
        this.debounceHandleBrowserScroll = _.debounce(this.handleBrowserScroll, 200);

        this.timer = null;

        // 延迟的，可能不存在。使用的时候判断下
        this.refPopup = null;

        this.id = +new Date() + '' + Math.random();
    }

    componentDidMount() {
        if (this.props.type === 'click' || this.props.type === 'focus') {
            window.document.body.addEventListener('click', this.handleBodyClick);
        }

        // 用 debounce
        Emitter.on(Emitter.TYPE.MODAL_SCROLL, this.debounceHandleModalScroll);
        Emitter.on(Emitter.TYPE.BROWSER_SCROLL, this.debounceHandleBrowserScroll);
    }

    componentWillUnmount() {
        if (this.props.type === 'click' || this.props.type === 'focus') {
            window.document.body.removeEventListener('click', this.handleBodyClick);
        }
        LayoutRoot._removeComponentPopup(this.id);

        Emitter.off(Emitter.TYPE.MODAL_SCROLL, this.debounceHandleModalScroll);
        Emitter.off(Emitter.TYPE.BROWSER_SCROLL, this.debounceHandleBrowserScroll);
    }

    handleModalScroll() {
        this.setActive(this.state.active);
    }

    handleBrowserScroll() {
        this.setActive(this.state.active);
    }

    componentDidUpdate() {
        this.doRenderPopup(this.state.active);
    }

    doRenderPopup(active) {
        const {
            style, className,
            popup, type,
            top, right, center, offset,
            showArrow, arrowLeft,
            animName
        } = this.props;

        const disabled = this.getDisabled();

        let animate = animName;

        if (animName === true) {
            if (top) {
                if (right) {
                    animate = 'fade-in-left';
                } else if (center) {
                    animate = 'fade-in-top';
                } else {
                    animate = 'fade-in-right';
                }
            } else {
                if (right) {
                    animate = 'fade-in-left';
                } else if (center) {
                    animate = 'fade-in-bottom';
                } else {
                    animate = 'fade-in-right';
                }
            }
        }

        if (active) {
            LayoutRoot._setComponentPopup(this.id, (
                <Popup
                    key="popup"
                    style={style}
                    ref={ref => this.refPopup = ref}
                    onMouseEnter={!disabled && type === 'hover' ? this.handleMouseEnter : _.noop}
                    onMouseLeave={!disabled && type === 'hover' ? this.handleMouseLeave : _.noop}
                    rect={this.rect}
                    top={top}
                    right={right}
                    center={center}
                    offset={offset}
                    showArrow={showArrow}
                    arrowLeft={arrowLeft}
                    className={classNames({
                        'gm-animated': !!animate,
                        ['gm-animated-' + animate]: animate
                    }, className)}
                >{popup}</Popup>
            ));
        } else {
            LayoutRoot._removeComponentPopup(this.id);
        }
    }

    setActive(active) {
        this.setState({
            active
        });

        if (active) {
            const dom = findDOMNode(this);
            const pos = getElementPositionWithScrollTop(dom);
            const rect = {
                left: pos.left,
                top: pos.top,
                height: dom.offsetHeight,
                width: dom.offsetWidth
            };
            this.rect = rect;
        }

        this.doRenderPopup(active);
    }

    handleBodyClick(event) {
        const target = event.target;
        const {active} = this.state;

        // 没激活就没有必要判断了
        if (!active) {
            return;
        }

        if (contains(findDOMNode(this), target)) {
            return;
        }

        if (this.refPopup && contains(findDOMNode(this.refPopup), target)) {
            return;
        }

        this.setActive(false);
    }

    handleClick() {
        // focus 也会进来
        const {type} = this.props;

        if (type === 'click') {
            this.setActive(!this.state.active);
        } else {
            this.setActive(true);
        }
    }

    handleMouseEnter() {
        clearTimeout(this.timer);
        this.setActive(true);
    }

    handleMouseLeave() {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.setActive(false);
        }, 500);
    }

    getDisabled() {
        const {disabled, children} = this.props;
        return disabled || children.props.disabled;
    }

    render() {
        const {
            children,
            type
        } = this.props;

        const {active} = this.state;

        const child = React.Children.only(children);

        const p = {};
        if (!this.getDisabled()) {
            if (type === 'focus' || type === 'click') {
                p.onClick = createChainedFunction(child.props.onClick, this.handleClick);
            } else if (type === 'hover') {
                p.onMouseEnter = createChainedFunction(child.props.onMouseEnter, this.handleMouseEnter);
                p.onMouseLeave = createChainedFunction(child.props.onMouseLeave, this.handleMouseLeave);
            }
        }

        return React.cloneElement(child, {
            ...child.props,
            ...p,
            className: classNames(child.props.className, {
                'gm-popover-active': active
            })
        });
    }
}

// 注意 Popover 的 popup 不会随 render 更新
Popover.propTypes = {
    type: PropTypes.oneOf(['focus', 'click', 'hover']),
    popup: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool, // 也可以用children props disable

    style: PropTypes.object,
    className: PropTypes.string,

    right: PropTypes.bool,
    top: PropTypes.bool,
    center: PropTypes.bool,
    offset: PropTypes.number,   // 偏移量

    showArrow: PropTypes.bool, // 是否显示三角标
    arrowLeft: PropTypes.string,

    animName: PropTypes.oneOf([false, true, 'fade-in-right', 'fade-in-left', 'fade-in-top', 'fade-in-bottom'])
};

Popover.defaultProps = {
    type: 'focus',
    showArrow: false,
    animName: true
};

export default Popover;