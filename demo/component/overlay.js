import React from 'react';
import {
    Tip,
    NProgress,
    Dialog
} from '../../src/index';

class TipWrap extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
    }

    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>showTip</button>
                </div>
                <Tip type="success">啊啊啊</Tip>
                <Tip type="info">啊啊啊</Tip>
                <Tip type="warning">啊啊啊</Tip>
                <Tip type="danger">啊啊啊</Tip>
                <Tip type="success" title="错误">啊啊啊</Tip>
            </div>
        );
    }

    handleClick() {
        Tip.success({
            children: '需要用户自行关闭的',
            time: 0,
            onClose: () => console.log('tip closed by user')
        });
        Tip.info({
            children: '提示啦,提示啦',
            onClose: () => console.log('tip closed')
        });
        Tip.info('提示啦，提示啦');
    }
}


// nprogress
class NProgressWrap extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleStart}>start</button>
                <button className="btn btn-primary" onClick={this.handleEnd}>end</button>

            </div>
        );
    }

    handleStart() {
        NProgress.start();
    }

    handleEnd() {
        NProgress.done();
    }
}

class DialogWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false,
            bsSize: 'sm'
        };
        this.handleAlert = ::this.handleAlert;
        this.handleConfirm = ::this.handleConfirm;
        this.handlePrompt = ::this.handlePrompt;
        this.handleComponent = ::this.handleComponent;
        this.handleComponentSize = ::this.handleComponentSize;
    }

    handleAlert() {
        Dialog.alert({
            children: 'adsf'
        }).then(() => {
            console.log('resolve');
        }, () => {
            console.log('reject');
        });
    }

    handleConfirm() {
        // Dialog.confirm({
        //     children: 'asdf',
        //     title: 'title'
        // }).then(() => {
        //     console.log('resolve');
        // }, () => {
        //     console.log('reject');
        // });

        Dialog.dialog({
            title: 'title',
            bsSize: 'md',
            children: <div>something</div>,
            onOK: () => {
                console.log('onOK');
                return Promise.resolve('a'); // return false
            }
        }).then(() => {
            console.log('promise resolve');
        });
    }

    handlePrompt() {
        Dialog.prompt({
            children: 'sssss',
            title: 'title',
            promptDefaultValue: 123,
            onOK: () => {
                console.log('ok');
                return false; // return Promise.reject();
            }
        }).then(value => {
            console.log('resolve', value);
        }, () => {
            console.log('reject');
        });
    }

    handleComponent() {
        this.setState({
            show: !this.state.show
        });
    }

    handleComponentSize(bsSize) {
        console.log(bsSize);
        this.setState({
            show2: !this.state.show2,
            bsSize
        });
    }

    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-default" onClick={this.handleAlert}>alert</button>
                    <button className="btn btn-default" onClick={this.handleConfirm}>confirm</button>
                    <button className="btn btn-default" onClick={this.handlePrompt}>prompt</button>
                </div>
                <div>
                    <button className="btn btn-default" onClick={this.handleComponent}>toggle Component</button>
                </div>
                <div>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'lg')}>toggle
                        Component
                        size lg
                    </button>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'md')}>toggle
                        Component
                        size md
                    </button>
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'sm')}>toggle
                        Component
                        size sm(default)
                    </button>
                </div>
                <Dialog show={this.state.show} onCancel={this.handleComponent}>asdfa</Dialog>
                <Dialog show={this.state.show2} bsSize={this.state.bsSize}
                        onCancel={this.handleComponentSize.bind(this, this.state.bsSize)}>bsSize {this.state.bsSize}</Dialog>
            </div>
        );
    }
}


class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="overlay">浮层</h1>
                <h2 id="Tip">Tip</h2>
                <TipWrap/>
                <hr/>
                <h2 id="Dialog">Dialog</h2>
                <DialogWrap/>
                <hr/>
                <h2 id="NProgress">NProgress</h2>
                <NProgressWrap/>
            </div>
        );
    }
}

export default Component;