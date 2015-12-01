import React from 'react';
import ReactDOM from 'react-dom';

var MessageBoxIcon = {
    Success: 'Success',
    Info: 'Info',
    Error: 'Error',
    Warning: 'Warning',
    Question: 'Question',
    None: 'None',
}

var MessageBoxType = {
    OKCancel: 'OKCancel',
    YesNo: 'YesNo',
    OK: 'OK',
}

var MessageBox = React.createClass({
    getDefaultProps() {
        return {
            icon: MessageBoxIcon.None,
            text: 'Hello, world!',
            title: '',
            type: MessageBoxType.OK
        }
    },
    render() {

        var thisProps = this.props;
        var buttonArea = null;
        var iconArea = null;
        var title;

        switch (thisProps.type) {
            case MessageBoxType.OKCancel:
                buttonArea = (
                    <div className="modal-actions">
                        <button className="btn-link modal-action" onClick={this.handleClickBtn.bind(this, false)}>取消</button>
                        <button className="btn-link modal-action" onClick={this.handleClickBtn.bind(this, true)}>确定</button>
                    </div>
                )
                break;
            case MessageBoxType.YesNo:
                buttonArea = (
                    <div className="modal-actions">
                        <button className="btn-link modal-action" onClick={this.handleClickBtn.bind(this, false)}>否</button>
                        <button className="btn-link modal-action" onClick={this.handleClickBtn.bind(this, true)}>是</button>
                    </div>
                )
                break;
            default:
                buttonArea = (
                    <div className="modal-actions">
                        <button
                            className="button btn-link modal-action-single"
                            onClick={this.handleClickBtn.bind(this, true)}
                        >
                            确定
                        </button>
                    </div>
                )
                break;
        }

        if (!thisProps.title) {
            switch (thisProps.icon) {
                case MessageBoxIcon.Success:  title = '成功'; break;
                case MessageBoxIcon.Info:     title = '提示'; break;
                case MessageBoxIcon.Error:    title = '错误'; break;
                case MessageBoxIcon.Warning:  title = '警告'; break;
                case MessageBoxIcon.Question: title = '问题'; break;
                case MessageBoxIcon.None:     title = '消息'; break;

                default: title = thisProps.title; break;
            }
        }

        switch (thisProps.icon) {
            case MessageBoxIcon.Success:
                iconArea = <span className='icon ico-check-circle text-success' />
                break;
            case MessageBoxIcon.Info:
                iconArea = <span className='icon ico-info-circle text-info' />
                break;
            case MessageBoxIcon.Error:
                iconArea = <span className='icon ico-times-circle text-danger' />
                break;
            case MessageBoxIcon.Warning:
                iconArea = <span className='icon ico-warning text-warning' />
                break;
            case MessageBoxIcon.Question:
                iconArea = <span className='icon ico-question-circle text-primary' />
                break;

            default:
                iconArea = null;
                break;
        }

        return (
            <div className="modal" style={{display: 'block'}}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-title">{ title }</span>
                        </div>
                        <div className="modal-body">
                            <center>
                                {
                                    iconArea ? (<p style={{fontSize: 40}}>{iconArea}</p>) :null
                                }
                                <p>{ thisProps.text }</p>
                            </center>
                        </div>
                        { buttonArea }
                    </div>
                </div>
            </div>
        )
    },
    handleClickBtn(action) {
        this.props.resolve(action)
    }
})

var showMessageBox = function({ icon, text, title, btnType }) {
    var wrap = document.createElement('div');
    var backDrop = document.createElement('div');
    var promise;

    backDrop.className = 'modal-backdrop fade in';

    promise = new Promise(function(resolve, reject) {
        document.body.appendChild(wrap);
        document.body.appendChild(backDrop);
        ReactDOM.render(
            <MessageBox icon={icon} text={text} title={title} type={btnType} resolve={resolve} />,
            wrap
        )
    });

    return promise.then(function(action) {
        ReactDOM.unmountComponentAtNode(wrap);
        wrap.remove();
        backDrop.remove();
        return action ? Promise.resolve() : Promise.reject();
    });
}

module.exports = {
    showMessageBox,
    MessageBoxIcon,
    MessageBoxType
}