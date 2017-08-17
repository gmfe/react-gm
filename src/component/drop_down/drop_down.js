import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Trigger from '../trigger';

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
            right,
            split, // eslint-disable-line
            cartClassName,
            ...rest
        } = this.props;

        return (
            <div
                {...rest}
                className={classNames("gm-dropdown btn-group gm-dropdown-split", className)}
            >
                {children}
                <Trigger
                    type="click"
                    right={right}
                    component={(
                        <button
                            type="button"
                            ref={ref => this.refTrigger = ref}
                            className={classNames("btn btn-default dropdown-toggle", cartClassName)}
                        />
                    )}
                    popup={<div onClick={this.handlePopupClick}>{popup}</div>}
                >
                    <span className="caret"/>
                </Trigger>
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
            <Trigger
                type="click"
                right={right}
                component={(
                    <div
                        {...rest}
                        ref={ref => this.refTrigger = ref}
                        className={classNames("gm-dropdown btn-group", className)}
                    />
                )}
                popup={<div onClick={this.handlePopupClick}>{popup}</div>}
            >{children}</Trigger>
        );
    }
}

DropDown.propTypes = {
    popup: PropTypes.element.isRequired,
    right: PropTypes.bool,
    split: PropTypes.bool,
    cartClassName: PropTypes.string // split true时有效
};

DropDown.defaultProps = {
    split: false
};

export default DropDown;