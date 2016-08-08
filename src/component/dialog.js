import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap';

const noop = () => {
};

// 搞的复杂了，后续要补充文档

let dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
let dialogContainer = document.getElementById(dialogContainerId);
if (!dialogContainer) {
    dialogContainer = document.createElement('div');
    dialogContainer.className = 'gm-container-dialog';
    dialogContainer.id = dialogContainerId;
    document.body.appendChild(dialogContainer);
}
let DialogStatics = {};
DialogStatics = {
    alert(options){
        options.type = 'alert';
        return DialogStatics.dialog(options);
    },
    confirm(options){
        options.type = 'confirm';
        return DialogStatics.dialog(options);
    },
    prompt(options){
        options.type = 'prompt';
        return DialogStatics.dialog(options);
    },
    dialog(options){
        options = Object.assign({}, options, {bsSize: 'sm'});
        return new Promise((resolve, reject) => {
            let div = document.createElement('div');
            dialogContainer.appendChild(div);
            const _OK = options.onOK;
            options.onOK = value => {
                resolve(value);
                return _OK && _OK(value);
            };
            options.onCancel = () => reject();
            ReactDOM.render(<Dialog show={true} {...options} />, div);
        });
    }
};

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        };
        this.handleCancel = ::this.handleCancel;
        this.handleOk = ::this.handleOk;
        this.handleEnter = ::this.handleEnter;
    }

    componentWillReceiveProps(nextProps) {
        if ('show' in nextProps) {
            this.setState({
                show: nextProps.show
            });
        }
    }

    handleCancel() {
        this.props.onCancel();
        this.setState({
            show: false
        });
    }

    handleOk() {
        const result = this.props.onOK(this.props.type === 'prompt' ? this.refs.input.value : undefined);
        if (result === false) {
            return;
        }
        Promise.resolve(result).then(() => {
            this.setState({
                show: false
            });
        });
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            this.handleOk();
        }
    }

    render() {
        const {bsSize, title, children, type, promptDefaultValue, noCancel, noOK} = this.props;
        let modalProps = {
            show: this.state.show,
            onHide: this.handleCancel
        };
        if (bsSize !== 'md') {
            modalProps.bsSize = bsSize;
        }
        return (
            <Modal {...modalProps}>
                <Modal.Header closeButton>
                    {title}
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {children}
                        {type === 'prompt' && (
                            <input autoFocus defaultValue={promptDefaultValue} ref="input" type="text"
                                   style={{display: 'block', width: '100%'}}
                                   onKeyDown={this.handleEnter}/>
                        )}
                    </div>
                    <div className="gm-gap10"></div>
                    <div className="text-right">
                        {(type !== 'alert' && !noCancel) && (
                            <button className="btn btn-default" onClick={this.handleCancel}>取消</button>
                        )}
                        <div className="gm-gap10"></div>
                        {!noOK && (
                            <button className="btn btn-primary" onClick={this.handleOk}>确定</button>
                        )}
                    </div>
                </Modal.Body>
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
    bsSize: PropTypes.string,
    noCancel: PropTypes.bool,
    noOK: PropTypes.bool,
    promptDefaultValue: PropTypes.string
};
Dialog.defaultProps = {
    show: false,
    title: '提示',
    type: 'confirm',
    onCancel: noop,
    onOK: noop,
    bsSize: 'md',
    noCancel: false, // 由于涉及原因只能这样搞了，传true 来屏蔽按钮
    noOK: false
};

export default Dialog;