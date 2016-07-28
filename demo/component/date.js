import React from 'react';
import {
    Calendar,
    DatePicker,
    DateRangePicker,
    TimeSpan,
    TimeSpanPicker
} from '../../src/index';
import moment from 'moment';

class CalendarWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }

    render() {
        return (
            <div>
                <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
            </div>
        );
    }

    handleSelect(date) {
        this.setState({
            selected: date
        });
        console.log(arguments);
    }
}

class DatePickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <div>
                <DatePicker date={this.state.date}
                            placeholder="adfasdf"
                            onChange={this.handleChange}
                            inputClassName="form-control input-sm"/>
                <span>inline-block</span>
                <div className="gm-padding10"></div>
                <DatePicker date={this.state.date}
                            onChange={this.handleChange}
                            target={() => this.refs.target}>
                    <span ref="target">{this.state.date ? moment(this.state.date).format('YYYY-MM-DD') : '请点击选择'}</span>
                </DatePicker>
            </div>
        );
    }

    handleChange(date) {
        console.log(date);
        this.setState({
            date: date
        });
    }
}


class DaterangepickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: new Date(),
            end: new Date()
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <div>
                <DateRangePicker begin={this.state.begin}
                                 end={this.state.end}
                                 onChange={this.handleChange}
                                 inputClassName="form-control input-sm"/>
            </div>
        );
    }

    handleChange(begin, end) {
        this.setState({
            begin: begin,
            end: end
        });
    }
}

class TimeSpanPickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;

    }

    handleChange(date) {
        console.log(date);
    }

    render() {
        return (
            <div>
                <div>
                    <TimeSpan min={null}
                              max={moment().endOf('day').toDate()}
                              selected={moment().startOf('day').toDate()}
                              onChange={this.handleChange}
                              onSelect={this.handleChange}/>
                </div>
                <div>
                    <TimeSpanPicker min={moment().startOf('day').toDate()}
                                    max={moment().endOf('day').toDate()}
                                    date={moment().startOf('day').toDate()}
                                    onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="date">日期</h1>
                <h2 id="Calendar">Calendar</h2>
                <CalendarWrap/>
                <h2 id="DatePicker">DatePicker</h2>
                <DatePickerWrap/>
                <h2 id="DaterangePicker">DaterangePicker</h2>
                <DaterangepickerWrap/>
                <h2 id="TimeSpanPicker">TimeSpanPicker</h2>
                <TimeSpanPickerWrap/>
            </div>
        );
    }
}

export default Component;