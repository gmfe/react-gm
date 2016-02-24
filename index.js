import React from 'react';
import _ from 'underscore';
import ReactDOM from 'react-dom';
import Grid from './lib/grid.component.js';
import Droper from './lib/droper.component.js';
import Former from './lib/former.component.js';
import ValidateMixin from './lib/validate.mixin.js';
import Validate from './lib/validate.js';
import Util from './lib/util.js';
import Storage from './lib/storage.component.js';
import {Popover} from 'react-bootstrap';
import Calendar from './lib/calendar.component.js';
import DatePicker from './lib/datepicker.component.js';
import DateRangePicker from './lib/daterangepicker.component.js';
import Tip from './lib/tip.component';
import NProgress from './lib/nprogress.component';
import Dialog from './lib/dialog.component';
import Navigation from './lib/navigation.component';
import Layout from './lib/layout';
import Flex from './lib/flex';
import ImportLeadWrap from './import.lead';
import './lib/css/react-gm.less';


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
            text: '需要用户自行关闭的',
            time: 0
        });
        Tip.info({
            text: '提示啦,提示啦'
        });
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

// grid
var onClick = function () {
    console.log(arguments);
};

var isShow = function () {
    //console.log(arguments);
    return false;
};

var renderId = function (value, elist) {
    //console.log(arguments);
    return 2;
};


var GridWrap = React.createClass({
    getInitialState: function () {
        return {
            enableSelect: true,
            enablePagination: true,
            enablePaginationText: true,
            loading: true,
            columns: [
                {field: 'id', name: 'id', render: renderId},
                {field: 'name', name: '名字', style: {width: 100}},
                {field: 'age', name: '年龄'}
            ],
            actions: [{
                text: '删除1',
                className: 'btn-primary',
                click: onClick,
                isShow: isShow
            }, {
                text: '删除2',
                click: onClick
            }],
            // 依赖 enableSelect:true
            batchs: [{
                text: '批量操作',
                className: 'btn-primary',
                click: onClick
            }, {
                text: 'adsf',
                click: onClick
            }],
            list: [{
                id: 1,
                name: '偶们啊啊发骚发所发生的',
                age: '10'
            }, {
                id: 1,
                name: 'haha',
                age: '15'
            }],
            pagination: {
                count: 80,
                offset: 10,
                limit: 10
            },
            select: this.onSelect,
            selectAll: this.onSelectAll,
            toPage: function (page) {
                console.log(arguments);
            }
        };
    },
    onSelect: function (index) {
        this.state.list[index]._gm_select = !this.state.list[index]._gm_select;
        this.setState(this.state);
    },
    onSelectAll: function (bool) {
        _.each(this.state.list, function (value) {
            value._gm_select = bool;
        });
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <Grid data={this.state}/>
            </div>
        );
    },
    componentDidMount: function () {
        var t = this;
        setTimeout(function () {
            t.setState(t.state);
        }, 3000);
    }
});

var DroperWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Droper onDrop={this.handleDrop} accept="image/*"/>
                <Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
                    <button className="btn btn-default">upload</button>
                </Droper>
            </div>
        );
    },
    handleDrop: function () {
        console.log(arguments);
    }
});

var onSubmit = function (event) {
    console.log('app onsubmit');
    debugger;
};

var FormerDom = React.createClass({
    mixins: [ValidateMixin()],
    onChange: function () {
        console.log(arguments);
    },
    render: function () {
        return (
            <div style={{width: 300}}>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type="text" className="form-control" name="email" onChange={this.validate('e')}/>

                        <div className="text-danger">{this.validateTip('email')}</div>
                    </div>

                    <div className="form-group">
                        <label>三到5位任意字符</label>
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>

                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </form>

                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(this.validateAll(this.refs.myForm));
    }
});

console.log(Validate('*', 'a', true));
console.log(Validate('*3', 'aaaa', true));
console.log(Validate('*3-', 'aa', true));
console.log(Validate('*3-5', 'a', true));


var interceptorId = Util.RequestInterceptor.add({
    request: function (config) {
        NProgress.start();
        console.log('request Interceptor', config);

        // 修改相关的信息
        config.url = 'asdf';
        config.data.name = '111';

        return config;
    },
    response: function (json) {
        NProgress.done();
        console.log('response Interceptor');
    },
    responseError: function (reason) {
        NProgress.done();
        console.log('responseError Interceptor', reason);
    }
});

Util.Request('xxxxx').data({name: 'haha'}).get().then(function (data) {
    console.log(data);
}, function (reason) {
    console.log(reason);
});
console.log(Util.format('hello {name}', {name: 'liyatang'}));
console.log(Util.param({
    a: 1, b: 2, c: 3
}));

window.Storage = Storage;


var CalendarWrap = React.createClass({
    getInitialState: function () {
        return {
            selected: new Date()
        };
    },
    render: function () {
        return (
            <div>
                <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
            </div>
        );
    },
    handleSelect: function (date) {
        this.setState({
            selected: date
        });
        console.log(arguments);
    }
});

var DatePickerWrap = React.createClass({
    getInitialState: function () {
        return {
            date: new Date()
        };
    },
    render: function () {
        return (
            <div>
                <DatePicker date={this.state.date} onChange={this.handleChange} inputClassName=""
                            target={() => this.refs.target}/>
                <span>inline-block</span>
            </div>
        );
        //return (
        //    <div>
        //        <DatePicker date={this.state.date} onChange={this.handleChange} inputClassName="" target={() => this.refs.target}>
        //            <span ref="target">{this.state.date + ''}</span>
        //        </DatePicker>
        //    </div>
        //);
    },
    handleChange: function (date) {
        this.setState({
            date: date
        });
    }
});


var DaterangepickerWrap = React.createClass({
    getInitialState: function () {
        return {
            begin: new Date(),
            end: new Date()
        };
    },
    render: function () {
        return (
            <div>
                <DateRangePicker begin={this.state.begin} end={this.state.end} onChange={this.handleChange}
                                 inputClassName="form-control input-sm"/>
            </div>
        );
    },
    handleChange: function (begin, end) {
        this.setState({
            begin: begin,
            end: end
        });
    }
});

var DialogWrap = React.createClass({
    getInitialState(){
        return {
            show: true
        };
    },
    handleAlert(){
        Dialog.alert({
            children: 'adsf'
        }).then(() => {
            console.log('resolve');
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
    render: function () {
        return (
            <div>
                <button className="btn btn-default" onClick={this.handleAlert}>alert</button>
                <button className="btn btn-default" onClick={this.handleConfirm}>confirm</button>
                <button className="btn btn-default" onClick={this.handlePrompt}>prompt</button>
            </div>
        );
    }
});

var navData = [{
    key: 1,
    title: '导航一',
    open: false, // option
    sub: [{
        key: 11,
        title: '选项1-1'
    }]
}, {
    key: 2,
    title: '导航二'
}, {
    key: 3,
    title: '导航三',
    sub: [{
        key: 31,
        title: '选项3-1'
    }, {
        key: 32,
        title: '选项3-2'
    }, {
        key: 33,
        title: '选项3-2'
    }, {
        key: 34,
        title: '选项3-2'
    }, {
        key: 35,
        title: '选项3-2'
    }, {
        key: 36,
        title: '选项3-2'
    }, {
        key: 37,
        title: '选项3-2'
    }, {
        key: 38,
        title: '选项3-2'
    }, {
        key: 39,
        title: '选项3-2'
    }]
}, {
    key: 4,
    title: '导航四'
}];

var NavigationWrap = React.createClass({
    getInitialState(){
        return {
            select: 11
        };
    },
    render(){
        return (
            <Navigation className="gm-whiteframe1" data={navData} select={this.state.select}>asdf</Navigation>
        );
    },
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                select: 32
            });
        }, 3000);
        setTimeout(() => {
            this.setState({
                select: 4
            });
        }, 5000);
    }
});

var FlexWrap = React.createClass({
    render(){
        return (
            <Layout wrap>
                <Flex style={{width: 200}}>1</Flex>
                <Flex flex>1</Flex>
                <Flex flex>1</Flex>
                <Flex flex>1</Flex>
                <Flex flex>1</Flex>
                <Flex flex>1</Flex>
                <Flex flex>1</Flex>
            </Layout>
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
            <Layout column className="gm-app">
                <Flex className="gm-app-top gm-whiteframe1">
                    <div className="gm-app-top-navigation-btn" onClick={this.handleToggleLeft}>
                        <button className="btn btn-link"><span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                    </div>
                    <div className="pull-right">React-GM</div>
                </Flex>
                <Flex flex className="gm-app-center">
                    <Layout row alignStretch className="gm-app">
                        <Flex className={"gm-app-left " + (this.state.left && 'current')}>
                            <NavigationWrap></NavigationWrap>
                        </Flex>
                        <Flex flex className="gm-app-content gm-padding10">
                            <h1>Flex</h1>
                            <FlexWrap></FlexWrap>
                            <hr/>
                            <h1>Tip</h1>
                            <TipWrap></TipWrap>
                            <hr/>
                            <h1>Dialog</h1>
                            <DialogWrap></DialogWrap>
                            <hr/>
                            <h1>NProgress</h1>
                            <NProgressWrap></NProgressWrap>
                            <hr/>
                            <h1>Grid</h1>
                            <GridWrap></GridWrap>
                            <hr/>
                            <h1>Droper</h1>
                            <DroperWrap></DroperWrap>
                            <hr/>
                            <h1>Former</h1>
                            <FormerDom></FormerDom>
                            <hr/>
                            <h1>Calendar</h1>
                            <CalendarWrap></CalendarWrap>
                            <hr/>
                            <h1>DatePicker</h1>
                            <DatePickerWrap></DatePickerWrap>
                            <h1>Daterangepicker</h1>
                            <DaterangepickerWrap></DaterangepickerWrap>
                            <hr/>
                            <h1>Dialog</h1>
                            <DialogWrap></DialogWrap>
                            <hr/>
                            <h1>ImportLead</h1>
                            <ImportLeadWrap></ImportLeadWrap>
                            <div className="gm-padding10">
                                <p className="text-muted">React-GM组件库</p>
                            </div>
                        </Flex>
                    </Layout>
                </Flex>
            </Layout>
        );
    },
    handleToggleLeft(){
        this.setState({
            left: !this.state.left
        });
    }
});

ReactDOM.render(
    <App></App>
    , document.getElementById('appContainer'));