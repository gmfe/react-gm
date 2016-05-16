import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';

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
            beginId: '_gm_datepicker_id' + (Math.random() + '').slice(2),
            endId: '_gm_datepicker_id' + (Math.random() + '').slice(2)
        };
    },
    handleSelect: function (type, date) {
        if (type === 'begin') {
            this.props.onChange(date, this.props.end);
        } else {
            this.props.onChange(this.props.begin, date);
        }
        this.refs.endTarget.click();
    },
    renderPopoverBegin: function () {
        return (
            <Popover id={this.state.beginId} className="gm-datepicker-popover">
                <Calendar selected={this.props.begin} onSelect={this.handleSelect.bind(this, 'begin')}></Calendar>
            </Popover>
        );
    },
    renderPopoverEnd: function () {
        return (
            <Popover id={this.state.endId} className="gm-datepicker-popover">
                <Calendar selected={this.props.end} onSelect={this.handleSelect.bind(this, 'end')}></Calendar>
            </Popover>
        );
    },
    handleChange: function () {

    },
    render: function () {
        return (
            <div className="gm-datepicker gm-daterangepicker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopoverBegin()}>
                    <div ref="beginTarget">
                        <input type="text" className={this.props.inputClassName}
                               value={moment(this.props.begin).format('YYYY-MM-DD')} onChange={this.handleChange}/>
                    </div>
                </OverlayTrigger>
                <span> ~ </span>
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopoverEnd()}>
                    <div ref="endTarget">
                        <input type="text" className={this.props.inputClassName}
                               value={moment(this.props.end).format('YYYY-MM-DD')} onChange={this.handleChange}/>
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
});

export default DateRangePicker;