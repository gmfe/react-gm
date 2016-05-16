import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import TimeSpan from './timespan.js';

var TimeSpanPicker = React.createClass({
    propTypes: {
        min: React.PropTypes.object,
        max: React.PropTypes.object,
        span: React.PropTypes.number,
        date: React.PropTypes.object.isRequired,
        render: React.PropTypes.func,
        onChange: React.PropTypes.func.isRequired,
        inputClassName: React.PropTypes.string,
        target: React.PropTypes.func
    },
    getDefaultProps(){
        return {
            render: value => moment(value).format('HH:mm')
        };
    },
    getInitialState: function () {
        return {
            id: '_gm_timespanpicker_id' + (Math.random() + '').slice(2)
        };
    },
    renderPopover: function () {
        return (
            <Popover id={this.state.id} className="gm-time-span-picker-popover">
                <TimeSpan min={this.props.min} max={this.props.max} span={this.props.span} selected={this.props.date}
                          onSelect={this.handleSelect}></TimeSpan>
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
            <div className="gm-time-span-picker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text" className={this.props.inputClassName} ref="target"
                               value={this.props.render(this.props.date)} onChange={this.handleChange}/>}
                </OverlayTrigger>
            </div>
        );
    }
});

export default TimeSpanPicker;