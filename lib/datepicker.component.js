import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.component.js';

var DatePicker = React.createClass({
    propTypes: {
        date: React.PropTypes.object.isRequired,
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
            <Popover id={this.state.id} className="gm-datepicker-popover">
                <Calendar selected={this.props.date} onSelect={this.handleSelect}></Calendar>
            </Popover>
        );
    },
    handleSelect: function (date) {
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
        this.props.onChange(date);
    },
    handleChange: function () {
        // empty
    },
    render: function () {
        return (
            <div className="gm-datepicker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text" className={this.props.inputClassName} ref="target"
                               value={moment(this.props.date).format('YYYY-MM-DD')} onChange={this.handleChange}/>}
                </OverlayTrigger>
            </div>
        );
    }
});

module.exports = DatePicker;