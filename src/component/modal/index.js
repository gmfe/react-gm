import React from 'react';
import PropTypes from 'prop-types';
import LayoutRoot from '../layout_root';
import className from 'classnames';
import _ from 'lodash';
import Flex from '../flex';

const iconClassName = {
    confirm: 'ifont ifont-14052218',
    success: 'ifont ifont-success',
    info: 'ifont ifont-info-circle',
    warning: 'ifont ifont-warning'
};

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleMask = ::this.handleMask;
        this.handleClose = ::this.handleClose;
        this.handleKeyDown = ::this.handleKeyDown;
        this.handleOk = ::this.handleOk;
        this.handleCancel = ::this.handleCancel;
    }

    componentDidMount() {
        window.document.body.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnMount() {
        window.document.body.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (this.props.show) {
            if (event.keyCode === 27) {
                this.props.onHide();
            }
        }
    }

    handleMask(e) {
        if (!this.props.disableMaskClose && e.target.className === 'gm-modal') {
            this.props.onHide();
        }
    }

    handleClose() {
        this.props.onHide();
    }

    handleCancel() {
        Modal.hide();
        this.props.onCancel();
    }

    handleOk() {
        Modal.hide();
        this.props.onOk();
    }

    renderTypeModal() {
        const {show, title, children, type, okBtnClassName} = this.props;

        return (
            <div>
                <div className="gm-modal-mask"/>
                <div
                    className="gm-modal"
                    tabIndex="-1"
                    onClick={this.handleMask}
                >
                    <div className={className("gm-modal-dialog", "gm-modal-type", {
                        in: show
                    })}>
                        <Flex justifyCenter alignCenter className="gm-modal-type-title">
                            <i className={iconClassName[type]}/>{title}
                        </Flex>
                        <div className="gm-modal-type-content gm-text-desc">
                            {children}
                        </div>

                        <Flex justifyEnd className="gm-modal-dialog-btns">
                            {(type === 'confirm') && (
                                <button className="btn btn-default" onClick={this.handleCancel}>取消</button>
                            )}
                            <div className="gm-gap-10"/>
                            <button
                                className={className("btn btn-primary", okBtnClassName)}
                                onClick={this.handleOk}>
                                确认
                            </button>
                        </Flex>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {show, title, size, children, type} = this.props;
        if (!show) {
            return null;
        }

        if (type)
            return this.renderTypeModal();

        return (
            <div>
                <div className="gm-modal-mask"/>
                <div
                    className="gm-modal"
                    tabIndex="-1"
                    onClick={this.handleMask}
                >
                    <div className={className("gm-modal-dialog", "gm-modal-" + size, {
                        in: show
                    })}>
                        <button
                            type="button"
                            className="close"
                            onClick={this.handleClose}
                        >
                            <span>×</span>
                        </button>
                        {title ? (
                            <div className="gm-modal-title">
                                {title}
                            </div>
                        ) : null}
                        <div className="gm-modal-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.render = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} {...props}/>
    ));
};

Modal.confirm = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} disableMaskClose {...props} type="confirm"/>
    ));
};

Modal.info = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} disableMaskClose {...props} type="info"/>
    ));
};

Modal.success = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} disableMaskClose {...props} type="success"/>
    ));
};

Modal.warning = (props) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, (
        <Modal show={true} disableMaskClose {...props} type="warning"/>
    ));
};

Modal.hide = () => LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, null);

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func,
    disableMaskClose: PropTypes.bool,
    size: PropTypes.string, // lg md sm
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    okBtnClassName: PropTypes.string // Modal confirm okbtn的className
};

Modal.defaultProps = {
    onHide: _.noop,
    size: 'md',
    disableMaskClose: false
};

export default Modal;