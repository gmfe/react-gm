import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import _ from 'lodash';
import Emitter from '../../emitter';
import classNames from 'classnames';
import LayoutRoot from '../layout_root';
import {getLocale} from "../../locales";

let DialogStatics = {};
DialogStatics = {
    alert(options) {
        options.type = 'alert';
        options.size = options.size || 'sm';
        return DialogStatics.dialog(options);
    },
    confirm(options) {
        options.type = 'confirm';
        options.size = options.size || 'sm';
        return DialogStatics.dialog(options);
    },
    prompt(options) {
        options.type = 'prompt';
        options.size = options.size || 'sm';
        return DialogStatics.dialog(options);
    },
    dialog(options) {
        options = Object.assign({
            _from: 'DialogStatics',
            size: 'sm'
        }, options);
        return new Promise((resolve, reject) => {
            const _OK = options.onOK;
            options.onOK = value => {
                const result = _OK && _OK(value);

                if (result && result.then) { // 简单判断是否promise
                    return result.then(v => {
                        LayoutRoot.removeComponent(LayoutRoot.TYPE.MODAL);
                        Emitter.emit(Emitter.TYPE.MODAL_HIDE);
                        return v;
                    });
                } else if (result !== false) {
                    resolve(value);
                }

                if (result !== false) {
                    LayoutRoot.removeComponent(LayoutRoot.TYPE.MODAL);
                    Emitter.emit(Emitter.TYPE.MODAL_HIDE);
                }

                return result;
            };
            options.onCancel = () => {
                reject();

                LayoutRoot.removeComponent(LayoutRoot.TYPE.MODAL);
                Emitter.emit(Emitter.TYPE.MODAL_HIDE);
            };

            LayoutRoot.setComponent(LayoutRoot.TYPE.MODAL, <Dialog show={true} {...options} />);
            Emitter.emit(Emitter.TYPE.MODAL_SHOW);
        });
    }
};

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            isLoading: false
        };
        this.handleCancel = ::this.handleCancel;
        this.handleOk = ::this.handleOk;
        this.handleEnter = ::this.handleEnter;
        this.______isMounted = false;
    }

    componentWillReceiveProps(nextProps) {
        if ('show' in nextProps) {
            this.setState({
                show: nextProps.show
            });
        }
    }

    componentDidMount() {
        if (this.props._from !== 'DialogStatics') {
            console.warn('Use Dialog Static instead of Component');
        }
    }

    componentWillUnmount() {
        this.______isMounted = true;
    }

    handleCancel() {
        this.props.onCancel();
        this.setState({
            show: false
        });
    }

    handleOk() {
        const result = this.props.onOK(this.props.type === 'prompt' ? this.refInput.value : undefined);
        if (result === false) {
            return;
        }

        this.setState({
            isLoading: true
        });

        Promise.resolve(result).then(() => {
            if (!this.______isMounted) {
                this.setState({
                    show: false,
                    isLoading: false
                });
            }
        }).catch(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            this.handleOk();
        }
    }

    render() {
        const {isLoading} = this.state;
        const {size, title, children, type, promptDefaultValue, promptPlaceholder, cancelBtn, OKBtn, disableMaskClose} = this.props;
        let modalProps = {
            show: this.state.show,
            onHide: this.handleCancel,
            disableMaskClose
        };
        if (size !== 'md') {
            modalProps.size = size;
        }
        return (
            <Modal {...modalProps} className={classNames('gm-dialog', {
                ['gm-dialog-' + type]: type
            })} size={modalProps.size} title={title}>
                <div>
                    {children}
                    {type === 'prompt' && (
                        <input
                            autoFocus
                            defaultValue={promptDefaultValue}
                            placeholder={promptPlaceholder}
                            ref={ref => this.refInput = ref}
                            type="text"
                            style={{display: 'block', width: '100%'}}
                            onKeyDown={this.handleEnter}
                        />
                    )}
                </div>
                <div className="gm-gap-10"/>
                <div className="text-right">
                    {(type !== 'alert' && cancelBtn && !isLoading) && (
                        <button className="btn btn-default" onClick={this.handleCancel}>{cancelBtn}</button>
                    )}
                    <div className="gm-gap-10"/>
                    {OKBtn && (
                        <button
                            className="btn btn-primary"
                            disabled={isLoading}
                            onClick={!isLoading ? this.handleOk : null}>
                            {isLoading ? <i className="glyphicon glyphicon-refresh glyphicon-spin"/> : OKBtn}
                        </button>
                    )}
                </div>
            </Modal>
        );
    }
}

Object.assign(Dialog, DialogStatics);

Dialog.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    onOK: PropTypes.func,
    size: PropTypes.string,
    promptDefaultValue: PropTypes.string,
    promptPlaceholder: PropTypes.string,
    cancelBtn: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    OKBtn: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    disableMaskClose: PropTypes.bool
};
Dialog.defaultProps = {
    show: false,
    title: getLocale('dialog','title'),
    type: 'confirm',
    onCancel: _.noop,
    onOK: _.noop,
    size: 'md',
    cancelBtn: getLocale('dialog', 'cancelBtn'),
    OKBtn: getLocale('dialog', 'okBtn'),
    disableMaskClose: false
};

export default Dialog;