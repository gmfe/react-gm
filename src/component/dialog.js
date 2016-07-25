import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap';

// 搞的复杂了，后续要补充文档

let dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
let dialogContainer = document.getElementById(dialogContainerId);
if (!dialogContainer) {
    dialogContainer = document.createElement('div');
    dialogContainer.className = 'gm-container-dialog';
    dialogContainer.id = dialogContainerId;
    document.body.appendChild(dialogContainer);
}

const DialogStatics = {
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

const Dialog = React.createClass({
    statics: DialogStatics,
    getDefaultProps(){
        return {
            show: false,
            title: '提示',
            onCancel: () => {
            },
            onOK: () => {
            },
            bsSize: 'sm',
            noCancel: false, // 由于涉及原因只能这样搞了，传true 来屏蔽按钮
            noOK: false
        };
    },
    getInitialState(){
        return {
            show: this.props.show
        };
    },
    componentWillReceiveProps(nextProps){
        if ('show' in nextProps) {
            this.setState({
                show: nextProps.show
            });
        }
    },
    handleCancel(){
        this.setState({
            show: false
        });
        this.props.onCancel();
    },
    handleOk(){
        const result = this.props.onOK(this.props.type === 'prompt' ? this.refs.input.value : undefined);
        if (result === false) {
            return;
        }
        Promise.resolve(result).then(() => {
            this.setState({
                show: false
            });
        });
    },
    handleEnter(event){
        if (event.keyCode === 13) {
            this.handleOk();
        }
    },
    render(){
        return (
            <Modal show={this.state.show} onHide={this.handleCancel} bsSize={this.props.bsSize}>
                <Modal.Header closeButton>
                    {this.props.title}
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {this.props.children}
                        {this.props.type === 'prompt' && (
                            <input autoFocus defaultValue={this.props.promptDefaultValue} ref="input" type="text"
                                   style={{display: 'block', width: '100%'}}
                                   onKeyDown={this.handleEnter}/>
                        )}
                    </div>
                    <div className="gm-gap10"></div>
                    <div className="text-right">
                        {(this.props.type !== 'alert' && !this.props.noCancel) && (
                            <button className="btn btn-default" onClick={this.handleCancel}>取消</button>
                        )}
                        <div className="gm-gap10"></div>
                        {!this.props.noOK && (
                            <button className="btn btn-primary" onClick={this.handleOk}>确定</button>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
});


export default Dialog;
