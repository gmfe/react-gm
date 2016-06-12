import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {
    Util,
    Validate,
    Storage,
    Navigation,
    Flex
} from '../src/index';


import Form from './component/form';
import Select from './component/select';
import Date from './component/date';
import Overlay from './component/overlay';
import Data from './component/data';
import Upload from './component/upload';
import Layout from './component/layout';

import 'gm-bootstrap/dist/css/bootstrap.css';
import './index.less';


console.log(Validate('*', 'a', true));
console.log(Validate('*3', 'aaaa', true));
console.log(Validate('*3-', 'aa', true));
console.log(Validate('*3-5', 'a', true));

// var interceptorId = Util.RequestInterceptor.add({
//     request: function (config) {
//         NProgress.start();
//         console.log('request Interceptor', config);
//
//         // 修改相关的信息
//         // config.url = '/testmodify/';
//         // config.data.name = '111';
//
//         return config;
//     },
//     response: function (json) {
//         NProgress.done();
//         console.log('response Interceptor');
//     },
//     responseError: function (reason) {
//         NProgress.done();
//         console.log('responseError Interceptor', reason);
//     }
// });

Util.Request('/test/').data({name: 'haha'}).get().then(function (data) {
    console.log(data);
}, function (reason) {
    console.log(reason);
});
console.log(Util.format('hello {name}', {name: 'liyatang'}));
console.log(Util.param({
    a: 1, b: 2, c: 3
}));

window.Storage = Storage;


const Home = React.createClass({
    render(){
        return (
            <div className="b-home">
                <div>
                    <img src="./images/logo.png" alt=""/>
                    <span className="gm-text-desc">+</span>
                    <img src="./images/react.svg" alt=""/>
                    <span className="gm-text-desc">+</span>
                    <img src="./images/chrome.jpeg" alt=""/>
                </div>
                <div>致力于快速搭建项目，像搭积木一样</div>
                <hr/>
                <div>
                    <h4>Link</h4>
                    <a href="http://gmfe.github.io/gm-bootstrap/css/" target="_blank">gm-bootstrap</a>
                    <br/>
                    <a href="http://react-bootstrap.github.io/" target="_blank">react-bootstrap</a>
                </div>
            </div>
        );
    }
});

var navData = [{
    key: '/',
    title: <Link to="/">首页</Link>
}, {
    key: 'zujian',
    title: '组件',
    open: true,
    sub: [{
        key: '/overlay',
        title: <Link to="/overlay">浮层</Link>
    }, {
        key: '/date',
        title: <Link to="/date">时间</Link>
    }, {
        key: '/layout',
        title: <Link to="/layout">布局</Link>
    }, {
        key: '/data',
        title: <Link to="/data">数据</Link>
    }, {
        key: '/select',
        title: <Link to="/select">选择</Link>
    }, {
        key: '/form',
        title: <Link to="/form">表单</Link>
    }]
}];

var NavigationWrap = React.createClass({
    render(){
        return (
            <Navigation className="gm-whiteframe1" data={navData} select={this.props.location.pathname}/>
        );
    }
});

const App = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <Flex column height="100%" className="gm-app">
                <Flex className="gm-app-top gm-whiteframe1">
                    <div className="gm-app-top-navigation-btn" onClick={this.handleToggleLeft}>
                        <button className="btn btn-link"><span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                    </div>
                    <Flex flex></Flex>
                    <div>React-GM</div>
                </Flex>
                <Flex flex row>
                    <Flex width="200px" className={"gm-app-left " + (this.state.left && 'current')}>
                        <NavigationWrap {...this.props}></NavigationWrap>
                    </Flex>
                    <Flex column flex className="gm-app-content gm-padding10 gm-block">
                        {this.props.children}
                    </Flex>
                </Flex>
            </Flex>
        );
    },
    handleToggleLeft(){
        this.setState({
            left: !this.state.left
        });
    }
});

const Root = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="select" component={Select}></Route>
                    <Route path="form" component={Form}></Route>
                    <Route path="date" component={Date}></Route>
                    <Route path="overlay" component={Overlay}></Route>
                    <Route path="upload" component={Upload}></Route>
                    <Route path="layout" component={Layout}></Route>
                    <Route path="data" component={Data}></Route>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(<Root></Root>, document.getElementById('appContainer'));