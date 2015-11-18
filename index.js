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
                <Grid data={this.state}></Grid>
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
        <GridWrap></GridWrap>
    </div>
), document.getElementById('grid-container'));


var DroperWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Droper onDrop={this.handleDrop} accept="image/*"></Droper>
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
        <DroperWrap></DroperWrap>
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

ReactDOM.render(<FormerDom></FormerDom>, document.getElementById('form-container'));

console.log(Validate('*', 'a', true));
console.log(Validate('*3', 'aaaa', true));
console.log(Validate('*3-', 'aa', true));
console.log(Validate('*3-5', 'a', true));


Util.Request('xxxxx').data({}).get().then(function (data) {
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
                <Calendar selected={this.state.selected} onSelect={this.handleSelect}>
                </Calendar>
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

ReactDOM.render(<CalendarWrap></CalendarWrap>, document.getElementById('calendar-container'));
var DatePickerWrap = React.createClass({
    getInitialState: function () {
        return {
            date: new Date()
        };
    },
    render: function () {
        return (
            <div>
                <DatePicker date={this.state.date} onChange={this.handleChange} inputClassName="" target={() => this.refs.target}>
                </DatePicker>
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

ReactDOM.render(<DatePickerWrap></DatePickerWrap>, document.getElementById('datepicker-container'));


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
                <DateRangePicker begin={this.state.begin} end={this.state.end} onChange={this.handleChange}></DateRangePicker>
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

ReactDOM.render(<DaterangepickerWrap></DaterangepickerWrap>, document.getElementById('daterangepicker-container'));