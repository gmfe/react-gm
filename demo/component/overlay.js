import React from 'react';
import {
    Tip,
    NProgress,
    Dialog
} from '../../src/index';

// tip
var TipWrap = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
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
    },
    handleClick: function () {
        Tip.success({
            children: '需要用户自行关闭的',
            time: 0
        });
        Tip.info({
            children: '提示啦,提示啦'
        });
        Tip.info('提示啦，提示啦');
    }
});


// nprogress
var NProgressWrap = React.createClass({
    render: function () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleStart}>start</button>
                <button className="btn btn-primary" onClick={this.handleEnd}>end</button>

            </div>
        );
    },
    handleStart: function () {
        NProgress.start();
    },
    handleEnd: function () {
        NProgress.done();
    }
});

var DialogWrap = React.createClass({
    getInitialState(){
        return {
            show: false,
            show2: false,
            bsSize: 'sm'
        };
    },
    handleAlert(){
        Dialog.alert({
            children: 'adsf'
        }).then(() => {
            console.log('resolve');
        }, () => {
            console.log('reject');
        });
    },
    handleConfirm(){
        Dialog.confirm({
            children: 'asdf',
            title: 'title'
        }).then(() => {
            console.log('resolve');
        }, () => {
            console.log('reject');
        });
    },
    handlePrompt(){
        Dialog.prompt({
            children: 'sssss',
            title: 'title',
            value: 123
        }).then(value => {
            console.log('resolve', value);
        }, () => {
            console.log('reject');
        });
    },
    handleComponent(){
        this.setState({
            show: !this.state.show
        });
    },
    handleComponentSize(bsSize){
        console.log(bsSize);
        this.setState({
            show2: !this.state.show2,
            bsSize
        });
    },
    render: function () {
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
                    <button className="btn btn-default" onClick={this.handleComponentSize.bind(this, 'xs')}>toggle
                        Component
                        size xs
                    </button>
                </div>
                <Dialog show={this.state.show} onCancel={this.handleComponent}>asdfa</Dialog>
                <Dialog show={this.state.show2} bsSize={this.state.bsSize}
                        onCancel={this.handleComponentSize.bind(this, this.state.bsSize)}>bsSize {this.state.bsSize}</Dialog>
            </div>
        );
    }
});

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Tip</h1>
                <TipWrap></TipWrap>
                <hr/>
                <h1>Dialog</h1>
                <DialogWrap></DialogWrap>
                <hr/>
                <h1>NProgress</h1>
                <NProgressWrap></NProgressWrap>
            </div>
        );
    }
});

export default Component;