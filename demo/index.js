import 'gm-bootstrap/dist/css/bootstrap.css';
import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Util} from '../src/index';
import _ from 'underscore';

import Form from './component/form';
import Select from './component/select';
import Date from './component/date';
import Overlay from './component/overlay';
import Data from './component/data';
import Upload from './component/upload';
import Layout from './component/layout';

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

function initNav() {
    let div = document.createElement('div');
    div.className = 'doc-nav';

    let html = '';
    _.each(document.getElementsByTagName('h1'), ele => {
        html += '<a class="doc-nav-title" href="#' + ele.id + '">' + ele.innerHTML + '</a>';
        _.each(ele.parentNode.getElementsByTagName('h2'), e => {
            html += '<a href="#' + e.id + '">' + e.innerHTML + '</a>';
        });
    });

    div.innerHTML = html;
    document.body.appendChild(div);
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Layout/>
                <Select/>
                <Data/>
                <Date/>
                <Overlay/>
                <Upload/>
                <Form/>
                <div style={{height: '100px'}}></div>
            </div>
        );
    }

    componentDidMount() {
        initNav();
    }
}

ReactDOM.render(<App/>, document.getElementById('appContainer'));