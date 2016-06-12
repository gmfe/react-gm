import React from 'react';
import {
    Calendar,
    DatePicker,
    DateRangePicker,
    TimeSpan,
    TimeSpanPicker
} from '../../src/index';
import moment from 'moment';

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

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Calendar</h1>
                <CalendarWrap></CalendarWrap>
                <hr/>
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

export default Component;