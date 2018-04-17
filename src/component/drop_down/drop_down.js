import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popover from '../popover';

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.refTrigger = null;

        this.handlePopupClick = ::this.handlePopupClick;
    }

    handlePopupClick() {
        setTimeout(() => {
            this.refTrigger.click();
        }, 0);
    }

    renderSplit() {
        const {
            children,
            className,
            popup,
            right, split, // eslint-disable-line
            cartClassName,
            ...rest
        } = this.props;

        return (
            <div
                {...rest}
                className={classNames("gm-dropdown btn-group gm-dropdown-split", className)}
            >
                {children}
                <Popover
                    animName
                    type="click"
                    right
                    popup={<div className="gm-dropdown-split-popup" onClick={this.handlePopupClick}>{popup}</div>}
                >
                    <button
                        type="button"
                        ref={ref => this.refTrigger = ref}
                        className={classNames("btn btn-default dropdown-toggle", cartClassName)}
                    >
                        <span className="caret"/>
                    </button>
                </Popover>
            </div>
        );
    }

    render() {
        const {
            children,
            className,
            popup,
            split,
            right,
            cartClassName, // eslint-disable-line
            ...rest
        } = this.props;

        if (split) {
            return this.renderSplit();
        }

        return (
            <Popover
                animName="fade-in-bottom"
                type="click"
                right={right}
                popup={<div className="gm-dropdown-popup" onClick={this.handlePopupClick}>{popup}</div>}
            >
                <div
                    {...rest}
                    ref={ref => this.refTrigger = ref}
                    className={classNames("gm-dropdown btn-group", className)}
                >
                    {children}
                </div>
            </Popover>
        );
    }
}

DropDown.propTypes = {
    popup: PropTypes.element.isRequired,
    split: PropTypes.bool,
    right: PropTypes.bool, // 非 split 有效
    cartClassName: PropTypes.string // split true时有效
};

DropDown.defaultProps = {
    split: false
};

export default DropDown;