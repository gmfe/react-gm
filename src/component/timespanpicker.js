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
        return (
            <div className="gm-time-span-picker">
                <OverlayTrigger trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text"
                               className={this.props.inputClassName}
                               ref="target"
                               value={this.props.render(this.props.date)}
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
    target: PropTypes.func
};

TimeSpanPicker.defaultProps = {
    render: value => moment(value).format('HH:mm'),
    onChange: noop
};

export default TimeSpanPicker;