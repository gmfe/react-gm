import React from 'react';
import _ from 'underscore';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {SplitButton, MenuItem} from 'react-bootstrap';
import {
    Util,
    Grid,
    Sheet,
    Pagination,
    PaginationText,
    Droper,
    Validate,
    ValidateMixin,
    Storage,
    Calendar,
    DatePicker,
    DateRangePicker,
    Tip,
    NProgress,
    Dialog,
    Navigation,
    Flex,
    TimeSpan,
    TimeSpanPicker,
    DropSelect,
    AdvanceSelect,
    Switch
} from '../src/index';
import ImportLeadWrap from './import.lead.js';
import moment from 'moment';
import pinYin from 'pinyin';

import 'bootstrap/dist/css/bootstrap.css';
import './index.less';

const {SheetColumn, SheetAction, SheetSelect, SheetBatchAction} = Sheet;

const LayoutWrap = React.createClass({
    render(){
        return (
            <div>
                <h1>Flex</h1>
                <FlexWrap></FlexWrap>
            </div>
        );
    }
});

const DataWrap = React.createClass({
    render(){
        return (
            <div>
                <h1>Sheet</h1>
                <SheetWrap></SheetWrap>
                <h1>Grid(Deprecated)</h1>
                <GridWrap></GridWrap>
                <h1>ImportLead</h1>
                <ImportLeadWrap></ImportLeadWrap>
            </div>
        );
    }
});

const UploadWrap = React.createClass({
    render(){
        return (
            <div>
                <h1>Droper</h1>
                <DroperWrap></DroperWrap>
            </div>
        );
    }
});

const OverlayWrap = React.createClass({
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

const DateWrap = React.createClass({
    render(){
        return (
            <div>
                <h1>Calendar</h1>
                <CalendarWrap></CalendarWrap>
                <hr/>
                <h1>DropSelect</h1>
                <DropSelectWrap></DropSelectWrap>
                <h1>DatePicker</h1>
                <DatePickerWrap></DatePickerWrap>
                <h1>Daterangepicker</h1>
                <DaterangepickerWrap></DaterangepickerWrap>
                <hr/>
                <h1>TimeSpanPicker</h1>
                <TimeSpanPickerWrap></TimeSpanPickerWrap>
                <div style={{height: 500}}></div>
            </div>
        );
    }
});

const FormWrap = React.createClass({
    getInitialState(){
        return {
            checked: false
        };
    },
    render(){
        return (
            <div>
                <h1>AdvanceSelect</h1>
                <AdvanceSelectComponent />
                <hr/>
                <h1>Former</h1>
                <FormerDom></FormerDom>
                <h1>Switch</h1>
                <div>
                    <Switch
                        defaultChecked={true}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                    ></Switch>
                    <Switch
                        checked={this.state.checked}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                        onChange={this.handleChange}
                    ></Switch>
                    <Switch
                        disabled
                        checkedChildren={"yes"}
                        unCheckedChildren={"no"}
                    ></Switch>
                </div>
            </div>
        );
    },
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    }
});

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

// grid
var onClick = function () {
    console.log(arguments);
};

var isShow = function (value, index) {
    console.log(value, index);
    return value.id === 1;
};

var renderId = function () {
    //console.log(arguments);
    return 2;
};


var GridWrap = React.createClass({
    getInitialState: function () {
        return {
            enableSelect: true,
            enablePagination: true,
            enablePaginationText: true,
            loading: false,
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
            }, {
                render: function () {
                    return (
                        <SplitButton bsSize="xsmall" title={'asdf'} id="adf">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </SplitButton>
                    );
                }
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
                id: 2,
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
            toPage: function () {
                console.log(arguments);
            }
        };
    },
    onSelect: function (index) {
        const list = this.state.list;
        list[index]._gm_select = !this.state.list[index]._gm_select;
        this.setState({
            list
        });
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

var SheetWrap = React.createClass({
    getInitialState(){
        return {
            list: [{
                id: 3,
                name: '偶们啊啊发骚发所发生的',
                age: '10'
            }, {
                id: 4,
                name: 'haha',
                age: '15',
                _gm_select: true
            }],
            pagination: {
                count: 80,
                offset: 10,
                limit: 10
            },
            loading: true
        };
    },
    render(){
        return (
            <Sheet list={this.state.list} loading={this.state.loading}>
                <SheetColumn field="id" name="id">
                    {(value, i) => (value + i)}
                </SheetColumn>
                <SheetColumn field="name" name="name" style={{width: '150px'}}></SheetColumn>
                <Pagination data={this.state.pagination} toPage={this.handlePage}></Pagination>
                <PaginationText data={this.state.pagination}></PaginationText>
                <SheetAction>
                    {(value, i) => (
                        <div>
                            <button className="btn btn-xs btn-default gm-marginRight5"
                                    onClick={this.handleAction.bind(this, value, i)}>删除
                            </button>
                            < SplitButton bsSize="xsmall" title={'下拉框'} id="asdfas">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                            </SplitButton>
                        </div>
                    )}
                </SheetAction>
                <SheetSelect onSelect={this.handleSelect} onSelectAll={this.handleSelectAll}></SheetSelect>
                <SheetBatchAction>
                    <button className="btn btn-primary btn-sm gm-marginRight5" onClick={this.handleBatchAction}>批量操作
                    </button>
                    <button className="btn btn-default btn-sm" onClick={this.handleBatchAction}>批量操作2</button>
                </SheetBatchAction>
            </Sheet>
        );
    },
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    },
    handlePage(){
        console.log(arguments);
    },
    handleAction(value, i){
        console.log(value, i);
    },
    handleBatchAction(){
        console.log(_.filter(this.state.list, value => value._gm_select));
    },
    handleSelect(checked, i){
        const list = this.state.list;
        list[i]._gm_select = checked;
        this.setState({
            list
        });
    },
    handleSelectAll(checked){
        this.setState({
            list: _.map(this.state.list, value => {
                value._gm_select = checked;
                return value;
            })
        });
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

// var interceptorId = Util.RequestInterceptor.add({
//     request: function (config) {
//         NProgress.start();
//         console.log('request Interceptor', config);
//
//         // 修改相关的信息
//         config.url = '/station/';
//         config.data.name = '111';
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

Util.Request('/station/').data({name: 'haha'}).get().then(function (data) {
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
            selected: null
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
    },
    componentDidMount(){
        //setTimeout(() => {
        //    this.setState({
        //        selected: undefined
        //    });
        //}, 5000);
    }
});

var DatePickerWrap = React.createClass({
    getInitialState: function () {
        return {
            //date: new Date()
            date: null
        };
    },
    render: function () {
        return (
            <div>
                <DatePicker date={this.state.date} placeholder="adfasdf" onChange={this.handleChange} inputClassName=""
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
        console.log(date);
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

var FlexWrap = React.createClass({
    render(){
        return (
            <Flex column height="200px">
                <Flex>top</Flex>
                <Flex flex>
                    <Flex>
                        <Flex style={{background: 'red'}}>
                            <div style={{background: 'yellow'}}>left1</div>
                        </Flex>
                    </Flex>
                    <Flex flex>content</Flex>
                </Flex>
            </Flex>
        );
    }
});

var TimeSpanPickerWrap = React.createClass({
    handleChange(date){
        console.log(date);
    },
    render(){
        return (
            <div>
                <div>
                    <TimeSpan min={null} max={moment().endOf('day').toDate()}
                              selected={moment().startOf('day').toDate()} onChange={this.handleChange}
                              onSelect={this.handleChange}></TimeSpan>
                </div>
                <div>
                    <TimeSpanPicker min={moment().startOf('day').toDate()} max={moment().endOf('day').toDate()}
                                    date={moment().startOf('day').toDate()}
                                    onChange={this.handleChange}></TimeSpanPicker>
                </div>
            </div>
        );
    }
});

const DropSelectWrap = React.createClass({
    getInitialState(){
        return {
            show: false,
            coolData: {
                list: [],
                actions: [{
                    className: "btn btn-sm btn-info",
                    text: <i className="glyphicon glyphicon-ok"></i>,
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }, {
                    className: "btn btn-sm btn-danger",
                    text: '删除',
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }],
                columns: [{
                    field: 'id',
                    name: '序号',
                    render: function (value) {
                        return 'D00' + value;
                    }
                }, {
                    field: 'name',
                    name: '商品名'
                }, {
                    field: 'price',
                    name: '成本价'
                }],
                loading: true
            }
        };
    },
    componentDidMount(){
        const me = this;
        setTimeout(function () {
            me.setState({
                coolData: {
                    list: [{
                        id: '0001',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0002',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0003',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0004',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0005',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00015',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00013',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '000143',
                        name: '大白菜',
                        price: 22.12
                    }],
                    columns: [{
                        field: 'id',
                        name: '序号',
                        render: function (value) {
                            return 'D00' + value;
                        }
                    }, {
                        field: 'name',
                        name: '商品名'
                    }, {
                        field: 'price',
                        name: '成本价'
                    }],
                    actions: [{
                        className: "btn btn-sm btn-info",
                        text: <i className="glyphicon glyphicon-ok"></i>,
                        onClick: function (col) {
                            console.log(col, 'onclick');
                        }
                    }, {
                        className: "btn btn-sm btn-danger",
                        text: '删除',
                        onClick: function (col) {
                            console.log(col, 'onclick');
                        }
                    }],
                    loading: false
                }
            });
        }, 2000);
    },
    onFocus(){
        this.setState({
            show: true
        });
    },
    onHide(){
        this.setState({
            show: false
        });
    },

    render(){
        return (
            <div style={{width: '400px'}}>
                <DropSelect show={this.state.show}
                            data={this.state.coolData}
                            onHide={this.onHide}>
                    <input className="form-control" onFocus={this.onFocus}/>
                </DropSelect>
            </div>
        );
    }
});

var AdvanceSelectComponent = React.createClass({
    getInitialState(){
        let selectList = [
            {value: 0, name: 'FE'},
            {value: 1, name: '测试'},
            {value: 2, name: '美丽-2'},
            {value: 3, name: '美丽-3'},
            {value: 4, name: '漂亮——1'},
            {value: 5, name: '阿姐说饭卡卢萨卡是否快乐阿三开发饭卡是'},
            {value: 6, name: 'sz-罗湖'},
            {value: 7, name: 'gd-广州'},
            {value: 8, name: 'test'},
            {value: 9, name: '110'},
            {value: 10, name: '美丽-119'},
            {value: 11, name: '美丽-wqeqw'},
            {value: 12, name: '美丽_adsdasd'},
            {value: 13, name: '美丽 asdasd'}
        ];
        return {
            list: selectList,
            value: 10
        };
    },
    render(){

        return (
            <div>
                <button className="btn btn-default btn-primary btn-sm" onClick={this.changeList}>改变list</button>
                &nbsp;&nbsp;
                <button className="btn btn-default btn-primary btn-sm" onClick={this.changeValue}>改变value</button>
                &nbsp;&nbsp;
                <AdvanceSelect list={this.state.list} value={this.state.value} title="这是测试" inputClassName="input-sm"
                               inputStyleName={{}}
                               onValueChange={this.onValueChange} onFilterData={this.onFilterData}/>
            </div>
        );
    },
    onValueChange(id, value){
        console.log(id, value);
    },
    onFilterData(filterData){
        let needle = filterData.trim().toLowerCase(),
            items = this.state.list;
        let newItems = items.filter(function (data) {
            let dataName = data.name.toString().trim().toLowerCase();
            return dataName.indexOf(needle) !== -1
                || this.matchingPinYin(dataName, {style: pinYin.STYLE_NORMAL}).indexOf(needle) !== -1
                || this.matchingPinYin(dataName, {style: pinYin.STYLE_FIRST_LETTER}).indexOf(needle) !== -1;
        }.bind(this));
        return newItems;
    },
    matchingPinYin(name, style = {style: pinYin.STYLE_NORMAL}){
        let pinyin = "", reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
        for (let i = 0; i < name.length; i++) {
            let val = name.substr(i, 1);
            if (!reg.test(val)) {
                pinyin += val;
            } else {
                pinyin += pinYin(val, style)[0];
            }
        }
        return pinyin;
    },
    changeList(){
        let changeList = [];
        for (var i = 5; i < 50; i++) {
            changeList.push({value: i, name: i});
        }
        this.setState({
            list: changeList
        });
    },
    changeValue(){
        this.setState({value: 20});
    }
});

const Home = React.createClass({
    render(){
        return (
            <div className="b-home">
                <div>
                    <img src="./logo.png" alt=""/>
                    <span className="gm-text-desc">+</span>
                    <img src="./react.svg" alt=""/>
                    <span className="gm-text-desc">+</span>
                    <img src="./chrome.jpeg" alt=""/>
                </div>
                <div>致力于快速搭建项目，像搭积木一样</div>
                <hr/>
                <div>
                    <h4>Link</h4>
                    <a href="http://v3.bootcss.com/" target="_blank">bootstrap</a>
                    <br/>
                    <a href="http://react-bootstrap.github.io/" target="_blank">react-bootstrap</a>
                </div>
            </div>
        );
    }
});

var navData = [{
    key: 'shouye',
    title: <Link to="/">首页</Link>
}, {
    key: 'zujian',
    title: '组件',
    open: true,
    sub: [{
        key: 'overlay',
        title: <Link to="/overlay">浮层</Link>
    }, {
        key: 'date',
        title: <Link to="/date">时间</Link>
    }, {
        key: 'layout',
        title: <Link to="/layout">布局</Link>
    }, {
        key: 'data',
        title: <Link to="/data">数据</Link>
    }, {
        key: 'form',
        title: <Link to="/form">表单</Link>
    }]
}];

var NavigationWrap = React.createClass({
    getInitialState(){
        return {
            select: 11
        };
    },
    render(){
        return (
            <Navigation className="gm-whiteframe1" data={navData} select={this.state.select}/>
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
                        <NavigationWrap></NavigationWrap>
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
                    <Route path="form" component={FormWrap}></Route>
                    <Route path="date" component={DateWrap}></Route>
                    <Route path="overlay" component={OverlayWrap}></Route>
                    <Route path="upload" component={UploadWrap}></Route>
                    <Route path="layout" component={LayoutWrap}></Route>
                    <Route path="data" component={DataWrap}></Route>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(<Root></Root>, document.getElementById('appContainer'));