import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../calendar';
import classNames from 'classnames';
import Popover from '../popover';
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

    handleClear() {
        this.props.onChange();
    }

    render() {
        const {
            date, min, max, disabledDate,
            className, children, inputClassName, placeholder, disabled, inputValueRender, canClear
        } = this.props;

        const popup = (
            <Calendar
                className="gm-border-0"
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
                className={classNames("gm-datepicker gm-border gm-bg gm-inline-block gm-position-relative", className)}
            >
                <Popover popup={popup}>
                    {children ? children : (
                        <input
                            type="text"
                            className={classNames('gm-border-0 gm-cursor', inputClassName, {"gm-clear-input": canClear})}
                            placeholder={placeholder}
                            disabled={disabled}
                            value={date ? (inputValueRender ? inputValueRender(date) : moment(date).format('YYYY-MM-DD')) : ''}
                            onChange={_.noop}
                        />
                    )}
                </Popover>
                {canClear && date && (
                    <button
                        type="button"
                        className="gm-datepicker-clear-btn close"
                        onClick={this.handleClear}
                        style={{padding: '6px 20px 6px 12px'}}
                    >&times;</button>
                )}
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