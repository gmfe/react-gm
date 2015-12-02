import React from 'react';
import _ from 'underscore';
import Addons from 'react/addons';
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
import AnimationIcon from './lib/animationicon.component.js';
import Tip from './lib/tip.component';
import NProgress from './lib/nprogress.component';
import { showMessageBox, MessageBoxIcon, MessageBoxType } from './lib/messagebox.component';
import { Hr, IconInput } from './lib/toolkit.component';

//import './import.lead';

setTimeout(function () {
    require.ensure(['./import.lead'], (require) => {
        var Profile = require('./import.lead');
    });
}, 2000);


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
ReactDOM.render((
    <div>
        <TipWrap />
    </div>
), document.getElementById('tip-container'));


// nprogress
var NProgressWrap = React.createClass({
    render: function () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleStart}>start</button>
                <button className="btn btn-primary" onClick={this.handleEnd}>end</button>

            </div>
        )
    },
    handleStart: function () {
        NProgress.start();
    },
    handleEnd: function () {
        NProgress.done();
    }
});

ReactDOM.render(
    <div>
        <NProgressWrap></NProgressWrap>
    </div>
, document.getElementById('nprogress-container'));

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
        )
    },
    componentDidMount: function () {
        var t = this;
        setTimeout(function () {
            t.setState(t.state);
        }, 3000);
    }
});

ReactDOM.render((
    <div>
        <GridWrap />
    </div>
), document.getElementById('grid-container'));


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

ReactDOM.render((
    <div>
        <DroperWrap />
    </div>
), document.getElementById('uploader-container'));


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

ReactDOM.render(<FormerDom />, document.getElementById('form-container'));

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
    console.log(data)
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

ReactDOM.render(<CalendarWrap />, document.getElementById('calendar-container'));
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

ReactDOM.render(<DatePickerWrap />, document.getElementById('datepicker-container'));


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

ReactDOM.render(<DaterangepickerWrap />, document.getElementById('daterangepicker-container'));

var AnimationIconWrap = React.createClass({
    getInitialState() {
        return {
            animationIcon: 'rolling'
        }
    },
    render() {
        return (
            <div>
                <AnimationIcon state={ this.state.animationIcon === 'rolling' ? 'rolling' : 'success' }/>
                <AnimationIcon state={ this.state.animationIcon === 'rolling' ? 'rolling' : 'error' }/>
                <p />
                <button className='btn btn-default' onClick={this.handleChangeAnimationIconState}>
                    { this.state.animationIcon === 'rolling' ? '停止' : '复原' }
                </button>
            </div>
        )
    },
    handleChangeAnimationIconState() {
        this.setState({
            animationIcon: this.state.animationIcon === 'rolling' ? 'stop' : 'rolling'
        })
    }
});

ReactDOM.render(
    <AnimationIconWrap />,
    document.getElementById('animation-icon')
);

var MsgBoxWrap = React.createClass({
    getInitialState() {
        return {
            icon: MessageBoxIcon.None,
            type: MessageBoxType.OK
        };
    },
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        按钮类型
                        <br/>
                        <select className="form-control" value={this.state.type} ref='btnType' onChange={this.handleChangeState}>
                            <option value={MessageBoxType.OK}>OK</option>
                            <option value={MessageBoxType.OKCancel}>OKCancel</option>
                            <option value={MessageBoxType.YesNo}>YesNo</option>
                        </select>
                        <br/>
                        图标类型
                        <br/>
                        <select className="form-control" value={this.state.icon} ref='btnIcon' onChange={this.handleChangeState}>
                            <option value={MessageBoxIcon.Success}>Success</option>
                            <option value={MessageBoxIcon.Info}>Info</option>
                            <option value={MessageBoxIcon.Error}>Error</option>
                            <option value={MessageBoxIcon.Warning}>Warning</option>
                            <option value={MessageBoxIcon.Question}>Question</option>
                            <option value={MessageBoxIcon.None}>None</option>
                        </select>
                        <br/>
                        <button className='btn btn-default' onClick={this.handleClickBtn}>show msgBox</button>
                    </div>
                </div>
            </div>
        )
    },
    handleChangeState() {
        this.setState({
            type: this.refs.btnType.value,
            icon: this.refs.btnIcon.value
        })
    },
    handleClickBtn() {
        showMessageBox({
            icon: this.state.icon,
            text: '今天下午4点下班',
            btnType: this.state.type
        }).then(function() {
            console.log('ok...');
        }, function() {
            console.log('cancel...');
        })
    }
});

ReactDOM.render(
    <MsgBoxWrap />,
    document.getElementById('msgbox-container')
)

var ToolKitWrap = React.createClass({
    render() {
        return (
            <div>
                IconInput
                <br />
                <IconInput type='text' icon='user' value='asdasd' />
                <p />
                <IconInput type='password' icon='lock' value='asdasd' />
                <p />
                <div className="row">
                    <div className="col-xs-4">
                    Hr with text
                    <Hr>hello</Hr>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <ToolKitWrap />,
    document.getElementById('toolkit-container')
)