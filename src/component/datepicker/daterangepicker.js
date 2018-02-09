import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../calendar';
import classNames from 'classnames';
import Popover from '../popover';
import _ from 'lodash';

class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.refDateRangePicker = null;
        this.refEndTarget = null;
        this.handleSelectBegin = ::this.handleSelectBegin;
        this.handleSelectEnd = ::this.handleSelectEnd;
        this.handleClearEnd = ::this.handleClearEnd;
        this.handleClearBegin = ::this.handleClearBegin;
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

    handleClearEnd() {
        const {begin, onChange} = this.props;
        onChange(begin, null);
    }

    handleClearBegin() {
        const {end, onChange} = this.props;
        onChange(null, end);
    }

    render() {
        const {
            begin, end,
            beginLabel, endLabel,
            beginProps, endProps,
            inputClassName,
            disabled, canClear,
            beginRenderInputValue, endRenderInputValue
        } = this.props;

        return (
            <div
                ref={ref => this.refDateRangePicker = ref}
                className={classNames("gm-daterangepicker gm-inline-block", this.props.className)}
            >
                {beginLabel && <span className="gm-padding-right-5">{beginLabel}</span>}
                <div className="gm-daterangepicker-item gm-border gm-bg gm-inline-block gm-position-relative">
                    <Popover
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
                            className={classNames('gm-border-0 gm-cursor', inputClassName, {"gm-clear-input": canClear})}
                            disabled={disabled}
                            value={begin ? (beginRenderInputValue ? beginRenderInputValue(begin) : moment(begin).format('YYYY-MM-DD')) : ''}
                            onChange={_.noop}
                        />
                    </Popover>
                    {canClear && begin && (
                        <button
                            type="button"
                            className="gm-daterangepicker-clear-btn close"
                            onClick={this.handleClearBegin}
                        >&times;</button>
                    )}
                </div>
                {!endLabel && <span> ~ </span>}
                {endLabel && <span className="gm-padding-lr-5">{endLabel}</span>}
                <div className="gm-daterangepicker-item gm-border gm-bg gm-inline-block gm-position-relative">
                    <Popover
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
                            className={classNames('gm-border-0 gm-cursor form-control', inputClassName, {"gm-clear-input": canClear})}
                            disabled={disabled}
                            value={end ? (endRenderInputValue ? endRenderInputValue(end) : moment(end).format('YYYY-MM-DD')) : ''}
                            onChange={_.noop}
                        />
                    </Popover>
                    {canClear && end && (
                        <button
                            type="button"
                            className="gm-daterangepicker-clear-btn close"
                            onClick={this.handleClearEnd}
                        >&times;</button>
                    )}
                </div>
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
    canClear: PropTypes.bool,
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