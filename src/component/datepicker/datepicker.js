import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../calendar';
import classNames from 'classnames';
import Trigger from '../trigger';
import _ from 'lodash';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepicker = null;
        this.handleSelect = ::this.handleSelect;
        this.handleClear = ::this.handleClear;
    }

    handleSelect(date) {
        this.props.onChange(date);
        setTimeout(() => {
            this.datepicker.click();
        }, 0);
    }

    handleClear(){
        this.props.onChange();
    }

    render() {
        const {
            date, min, max, disabledDate,
            className, children, inputClassName, placeholder, disabled, inputValueRender, canClear
        } = this.props;

        const popup = (
            <Calendar
                selected={date}
                onSelect={this.handleSelect}
                min={min}
                max={max}
                disabledDate={disabledDate}
            />
        );

        return (
            <div
                ref={ref => this.datepicker = ref}
                className={classNames("gm-datepicker", className)}
            >
                <Trigger component={<div/>} popup={popup}>
                    {children ? children : (
                        <input
                            type="text"
                            className={inputClassName}
                            placeholder={placeholder}
                            disabled={disabled}
                            value={date ? (inputValueRender ? inputValueRender(date) : moment(date).format('YYYY-MM-DD')) : ''}
                            onChange={_.noop}
                        />
                    )}
                </Trigger>
                {
                    canClear && date &&
                        <button
                            type="button"
                            className="gm-datepicker-clear close"
                            onClick={this.handleClear}>
                            &times;
                        </button>
                }
            </div>
        );
    }
}

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
    date: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    canClear: PropTypes.bool,
    inputClassName: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,

    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func,
    inputValueRender: PropTypes.func
};

export default DatePicker;