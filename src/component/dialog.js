import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap';

let dialogContainerId = '_gm_dialog_container' + (Math.random() + '').slice(2);
let dialogContainer = document.getElementById(dialogContainerId);
if (!dialogContainer) {
    dialogContainer = document.createElement('div');
    dialogContainer.className = 'gm-container-dialog';
    dialogContainer.id = dialogContainerId;
    document.body.appendChild(dialogContainer);
}

const D = React.createClass({
    getDefaultProps(){
        return {
            title: '提示',
            onCancle: () => {
            },
            onOK: () => {
            }
        };
    },
    getInitialState(){
        return {
            show: true
        };
    },
    handleCancle(){
        this.setState({
            show: false
        });
        this.props.onCancle();
    },
    handleOk(){
        this.setState({
            show: false
        });
        if (this.props.type === 'prompt') {
            this.props.onOK(this.refs.input.value);
        } else {
            this.props.onOK();
        }
    },
    handleEnter(event){
        if (event.keyCode === 13) {
            this.handleOk();
        }
    },
    render(){
        return (
            <Modal show={this.state.show} onHide={this.handleCancle} bsSize="sm">
                <Modal.Header closeButton>
                    {this.props.title}
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {this.props.children}
                        {this.props.type === 'prompt' && (
                            <input autoFocus ref="input" type="text" style={{display: 'block', width: '100%'}}
                                   onKeyDown={this.handleEnter}/>
                        )}
                    </div>
                    <div className="gm-gap10"></div>
                    <div className="text-right">
                        {this.props.type !== 'alert' && (
                            <button className="btn btn-default" onClick={this.handleCancle}>取消</button>
                        )}
                        <div className="gm-gap10"></div>
                        <button className="btn btn-primary" onClick={this.handleOk}>确定</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
});

let Dialog = {
    alert(options){
        options.type = 'alert';
        return Dialog.dialog(options);
    },
    confirm(options){
        options.type = 'confirm';
        return Dialog.dialog(options);
    },
    prompt(options){
        options.type = 'prompt';
        return Dialog.dialog(options);
    },
    dialog(options){
        return new Promise((resolve, reject) => {
            let div = document.createElement('div');
            dialogContainer.appendChild(div);
            options.onOK = value => resolve(value);
            options.onCancle = () => reject();
            ReactDOM.render(<D {...options} />, div);
        });
    }
};

export default Dialog;
