import React, {PropTypes} from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import TimeSpan from './timespan.js';

const noop = ()=> {
};

class TimeSpanPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '_gm_timespanpicker_id' + (Math.random() + '').slice(2)
        };
        this.handleSelect = ::this.handleSelect;
    }

    renderPopover() {
        return (
            <Popover id={this.state.id}
                     className="gm-time-span-picker-popover">
                <TimeSpan min={this.props.min}
                          max={this.props.max}
                          span={this.props.span}
                          selected={this.props.date}
                          onSelect={this.handleSelect}/>
            </Popover>
        );
    }

    handleSelect(date) {
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
        this.props.onChange(date);
    }

    render() {
        const {children, inputClassName, disabled, render, date} = this.props;
        return (
            <div className="gm-time-span-picker">
                <OverlayTrigger trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={this.renderPopover()}>
                    {children ? children :
                        <input type="text"
                               className={inputClassName}
                               ref="target"
                               disabled={disabled}
                               value={render(date)}
                               onChange={noop}/>}
                </OverlayTrigger>
            </div>
        );
    }
}

TimeSpanPicker.propTypes = {
    min: PropTypes.object,
    max: PropTypes.object,
    span: PropTypes.number,
    date: PropTypes.object.isRequired,
    render: PropTypes.func,
    onChange: PropTypes.func,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    target: PropTypes.func
};

TimeSpanPicker.defaultProps = {
    render: value => moment(value).format('HH:mm'),
    disabled: false,
    onChange: noop
};

export default TimeSpanPicker;