import React, {PropTypes} from 'react';
import moment from 'moment';
import Calendar from './calendar.js';
import classNames from 'classnames';
import Trigger from './trigger';

const noop = () => {
};

class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.dateRangePicker = null;
        this.endTarget = null;
        this.handleSelectBegin = ::this.handleSelectBegin;
        this.handleSelectEnd = ::this.handleSelectEnd;
    }

    handleSelectBegin(date) {
        this.props.onChange(date, this.props.end);
        setTimeout(() => {
            this.endTarget.click();
        }, 0);
    }

    handleSelectEnd(date) {
        this.props.onChange(this.props.begin, date);
        setTimeout(() => {
            this.dateRangePicker.click();
        }, 0);
    }

    render() {
        const beginPopup = <Calendar selected={this.props.begin} onSelect={this.handleSelectBegin}/>,
            endPopup = <Calendar selected={this.props.end} onSelect={this.handleSelectEnd}/>;
        return (
            <div ref={ref => {
                this.dateRangePicker = ref;
            }} className={classNames("gm-datepicker gm-daterangepicker", this.props.className)}>
                <Trigger component={<div className="gm-inline-block"/>} popup={beginPopup}>
                    <input
                        type="text"
                        className={this.props.inputClassName}
                        disabled={this.props.disabled}
                        value={moment(this.props.begin).format('YYYY-MM-DD')}
                        onChange={noop}
                    />
                </Trigger>
                <span> ~ </span>
                <Trigger component={<div className="gm-inline-block"/>} popup={endPopup}>
                    <input
                        ref={ref => {
                            this.endTarget = ref;
                        }}
                        type="text"
                        className={this.props.inputClassName}
                        disabled={this.props.disabled}
                        value={moment(this.props.end).format('YYYY-MM-DD')}
                        onChange={noop}
                    />
                </Trigger>
            </div>
        );
    }
}

DateRangePicker.propTypes = {
    begin: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default DateRangePicker;