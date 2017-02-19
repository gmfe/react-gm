import React, {PropTypes} from 'react';
import moment from 'moment';
import TimeSpan from './timespan.js';
import Trigger from '../trigger';
import _ from 'underscore';

class TimeSpanPicker extends React.Component {
    constructor(props) {
        super(props);
        this.timeSpanPicker = null;
        this.handleSelect = ::this.handleSelect;
    }

    handleSelect(date) {
        this.props.onChange(date);
        setTimeout(() => {
            this.timeSpanPicker.click();
        }, 0);
    }

    render() {
        const {children, inputClassName, disabled, render, date} = this.props;
        const popup = (
            <TimeSpan
                min={this.props.min}
                max={this.props.max}
                span={this.props.span}
                selected={this.props.date}
                onSelect={this.handleSelect}
            />
        );
        return (
            <div
                ref={ref => {
                    this.timeSpanPicker = ref;
                }}
                className="gm-time-span-picker"
            >
                <Trigger component={<div />} popup={popup}>
                    {children ? children : (
                        <input
                            type="text"
                            className={inputClassName}
                            ref="target"
                            disabled={disabled}
                            value={render(date)}
                            onChange={_.noop}
                        />
                    )}
                </Trigger>
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
    disabled: PropTypes.bool
};

TimeSpanPicker.defaultProps = {
    render: value => moment(value).format('HH:mm'),
    disabled: false,
    onChange: _.noop
};

export default TimeSpanPicker;