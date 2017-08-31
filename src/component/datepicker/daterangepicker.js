import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../calendar';
import classNames from 'classnames';
import Trigger from '../trigger';
import _ from 'lodash';

class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.refDateRangePicker = null;
        this.refEndTarget = null;
        this.handleSelectBegin = ::this.handleSelectBegin;
        this.handleSelectEnd = ::this.handleSelectEnd;
    }

    handleSelectBegin(date) {
        const {end, onChange} = this.props;
        onChange(date, date <= end ? end : date);

        setTimeout(() => {
            this.refEndTarget.click();
        }, 0);
    }

    handleSelectEnd(date) {
        const {begin, onChange} = this.props;
        onChange(begin <= date ? begin : date, date);

        setTimeout(() => {
            this.refDateRangePicker.click();
        }, 0);
    }

    render() {
        const {
            begin, end,
            beginLabel, endLabel,
            beginProps, endProps,
            inputClassName,
            disabled,
            beginRenderInputValue, endRenderInputValue
        } = this.props;

        return (
            <div
                ref={ref => this.refDateRangePicker = ref}
                className={classNames("gm-datepicker gm-daterangepicker", this.props.className)}
            >
                {beginLabel && <span className="gm-padding-right-5">{beginLabel}</span>}
                <Trigger
                    component={<div className="gm-inline-block"/>}
                    popup={(
                        <Calendar
                            selected={begin}
                            onSelect={this.handleSelectBegin}
                            {...beginProps}
                        />
                    )}
                >
                    <input
                        type="text"
                        className={inputClassName}
                        disabled={disabled}
                        value={begin ? (beginRenderInputValue ? beginRenderInputValue(begin) : moment(begin).format('YYYY-MM-DD')) : ''}
                        onChange={_.noop}
                    />
                </Trigger>
                {!endLabel && <span> ~ </span>}
                {endLabel && <span className="gm-padding-lr-5">{endLabel}</span>}
                <Trigger
                    component={<div className="gm-inline-block"/>}
                    popup={(
                        <Calendar
                            selected={end}
                            onSelect={this.handleSelectEnd}
                            {...Object.assign({
                                min: begin
                            }, endProps)}
                        />
                    )}
                >
                    <input
                        ref={ref => this.refEndTarget = ref}
                        type="text"
                        className={inputClassName}
                        disabled={disabled}
                        value={end ? (endRenderInputValue ? endRenderInputValue(end) : moment(end).format('YYYY-MM-DD')) : ''}
                        onChange={_.noop}
                    />
                </Trigger>
            </div>
        );
    }
}

DateRangePicker.displayName = 'DateRangePicker';

DateRangePicker.propTypes = {
    begin: PropTypes.object,
    end: PropTypes.object,
    beginLabel: PropTypes.string,
    endLabel: PropTypes.string,
    onChange: PropTypes.func,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,

    beginProps: PropTypes.shape({
        min: PropTypes.object,
        max: PropTypes.object,
        disabledDate: PropTypes.func
    }),
    beginRenderInputValue: PropTypes.func,
    endProps: PropTypes.shape({
        min: PropTypes.object,
        max: PropTypes.object,
        disabledDate: PropTypes.func
    }),
    endRenderInputValue: PropTypes.func
};

DateRangePicker.defaultProps = {
    onChange: _.noop
};

export default DateRangePicker;