import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.component.js';

var DateRangePicker = React.createClass({
    propTypes: {
        begin: React.PropTypes.object.isRequired,
        end: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        inputClassName: React.PropTypes.string,
        target: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            id: '_gm_datepicker_id' + (Math.random() + '').slice(2)
        };
    },
    renderPopover: function () {
        return (
            <Popover id={this.state.id} className="gm-datepicker-popover gm-daterangepicker-popover">
                <div className="gm-daterangepicker-cell">
                    <Calendar selected={this.props.begin} onSelect={this.handleSelect.bind(this, 'begin')}></Calendar>
                </div>
                <div className="gm-daterangepicker-cell">
                    <Calendar selected={this.props.end} onSelect={this.handleSelect.bind(this, 'end')}></Calendar>
                </div>
            </Popover>
        );
    },
    handleSelect: function (type, date) {
        if (type === 'end') {
            if (this.refs.target) {
                this.refs.target.click();
            } else {
                this.props.target().click();
            }
        }

        if (type === 'begin') {
            this.props.onChange(date, this.props.end);
        } else {
            this.props.onChange(this.props.begin, date);
        }
    },
    handleChange: function () {
        // empty
    },
    render: function () {
        var value = moment(this.props.begin).format('YYYY-MM-DD') + ' ~ ' + moment(this.props.end).format('YYYY-MM-DD');

        return (
            <div className="gm-datepicker gm-daterangepicker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text" className={this.props.inputClassName} ref="target"
                               value={value} onChange={this.handleChange}/>}
                </OverlayTrigger>
            </div>
        );
    }
});

export default DateRangePicker;