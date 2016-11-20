import 'gm-bootstrap/dist/css/bootstrap.css';
import './index.less';
import 'highlight.js/styles/default.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Flex as GMFlex} from '../src/index';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import NavConfig from './nav.config.md';
import _ from 'underscore';

// import Form from './component/form';
// import Select from './component/select';
// import Date from './component/date';
// import Overlay from './component/overlay';
// import Data from './component/data';
// import Upload from './component/upload';
// import Layout from './component/layout';
// import Load from './component/load';

import About from './doc/About.md';
import Flex from './doc/Flex.md';
import Loading from './doc/Loading.md';
import NProgress from './doc/NProgress.md';
import Cascader from './doc/Cascader.md';
import CascaderSelect from './doc/CascaderSelect.md';
import AdvanceSelect from './doc/AdvanceSelect.md';
import DropSelect from './doc/DropSelect.md';
import SearchSelect from './doc/SearchSelect.md';
import FilterSearchSelect from './doc/FilterSearchSelect.md';
import Sheet from './doc/Sheet.md';
import ImportLead from './doc/ImportLead.md';
import Storage from './doc/Storage.md';
import Calendar from './doc/Calendar.md';
import DatePicker from './doc/DatePicker.md';
import DateRangePicker from './doc/DateRangePicker.md';
import TimeSpan from './doc/TimeSpan.md';
import Tip from './doc/Tip.md';
import Dialog from './doc/Dialog.md';
import Trigger from './doc/Trigger.md';
import Droper from './doc/Droper.md';
import Switcher from './doc/Switcher.md';

const docMap = {
    About,
    Flex,
    Loading,
    NProgress,
    Cascader,
    CascaderSelect,
    AdvanceSelect,
    DropSelect,
    SearchSelect,
    FilterSearchSelect,
    Sheet,
    ImportLead,
    Storage,
    Calendar,
    DatePicker,
    TimeSpan,
    DateRangePicker,
    Tip,
    Dialog,
    Trigger,
    Droper,
    Switcher
};


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

// Util.Request('/test/').data({name: 'haha'}).get().then(function (data) {
//     console.log(data);
// }, function (reason) {
//     console.log(reason);
// });
// console.log(Util.format('hello {name}', {name: 'liyatang'}));
// console.log(Util.param({
//     a: 1, b: 2, c: 3
// }));

const setNavCurrent = () => {
    _.each(document.querySelectorAll('.demo-left a'), element => element.className = '');
    document.querySelector('.demo-left a[href="' + location.hash + '"]').className = 'active';
};

class App extends React.Component {
    render() {
        // 暴力
        setTimeout(() => {
            setNavCurrent();
        }, 10);
        return (
            <div className="demo">
                <div className="demo-header">
                    <GMFlex className="container">
                        <GMFlex alignCenter className="gm-header-logo">
                            <img src={location.pathname + "demo/images/logo.png"} alt=""/>
                            <span>ReactGM </span>
                            <small>&nbsp;&nbsp;by gmfe</small>
                        </GMFlex>
                        <GMFlex flex justifyEnd alignCenter className="gm-header-nav">
                            <a href="#/standard">UI规范TODO</a>
                            <a href="#/doc">组件</a>
                        </GMFlex>
                    </GMFlex>
                </div>
                <GMFlex className="demo-center container">
                    <div className="demo-left">
                        <NavConfig/>
                    </div>
                    <GMFlex flex column className="demo-content">
                        {this.props.children}
                    </GMFlex>
                </GMFlex>
            </div>
        );
    }
}

class Doc extends React.Component {
    render() {
        const {doc} = this.props.params;
        return React.createElement(docMap[doc || 'About']);
    }
}

class Standard extends React.Component {
    render() {
        return (
            <div>TODO</div>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to='/doc'/>
            <Route path="/standard" component={Standard}/>
            <Route path="/doc(/:doc)" component={Doc}/>
        </Route>
    </Router>
), document.getElementById('appContainer'));