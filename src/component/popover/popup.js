import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popupRect: {}
        };
    }

    componentDidMount() {
        this.setState({
            popupRect: findDOMNode(this.refPopup).getBoundingClientRect()
        });
    }

    renderTriggerArrow() {
        const {
            top, right, center
        } = this.props;

        return (
            <div
                className={classNames('gm-popover-popup-arrow', {
                    'gm-popover-popup-arrow-top': top,
                    'gm-popover-popup-arrow-bottom': !top,
                    'gm-popover-popup-arrow-right': !center && right,
                    'gm-popover-popup-arrow-left': !center && !right,
                    'gm-popover-popup-arrow-center': center
                })}
            />
        );
    }

    render() {
        const {
            top, right, center,
            showArrow,
            children,
            rect,
            style,
            ...rest
        } = this.props;

        const {popupRect} = this.state;

        const sStyle = {
            top: rect.bottom + 5,
            left: rect.left
        };

        if (center) {
            sStyle.left = rect.left + (rect.right - rect.left) / 2 - (popupRect.right - popupRect.left) / 2;
        } else if (right) {
            sStyle.left = rect.right - (popupRect.right - popupRect.left);
        }

        if (top) {
            sStyle.top = rect.top - (popupRect.bottom - popupRect.top) - 5;
        }

        return (
            <div
                ref={ref => this.refPopup = ref}
                {...rest}
                style={Object.assign(sStyle, style)}
                className={classNames('gm-popup  gm-box-shadow-bottom')}
            >
                {showArrow && this.renderTriggerArrow()}
                {children}
            </div>
        );
    }
}

Popup.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
    rect: PropTypes.object.isRequired,
    center: PropTypes.bool,
    top: PropTypes.bool,
    right: PropTypes.bool,
    showArrow: PropTypes.bool // 是否显示三角标
};

Popup.defaultProps = {
    top: false,
    right: false,
    showArrow: false
};

export default Popup;