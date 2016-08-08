import React, {PropTypes} from 'react';
import moment from 'moment';
import Calendar from './calendar.js';
import classNames from 'classnames';
import Trigger from './trigger';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.datepicker = null;
        this.handleSelect = ::this.handleSelect;
    }

    handleSelect(date) {
        this.props.onChange(date);
        setTimeout(() => {
            this.datepicker.click();
        }, 0);
    }

    render() {
        const popup = <Calendar selected={this.props.date} onSelect={this.handleSelect}/>;
        return (
            <div ref={ref => {
                this.datepicker = ref;
            }}
                 className={classNames("gm-datepicker", this.props.className)}
            >
                <Trigger component={<div/>} popup={popup}>
                    {this.props.children ? this.props.children : (
                        <input
                            type="text"
                            className={this.props.inputClassName}
                            placeholder={this.props.placeholder}
                            disabled={this.props.disabled}
                            value={this.props.date ? moment(this.props.date).format('YYYY-MM-DD') : ''}
                        />
                    )}
                </Trigger>
            </div>
        );
    }
}

DatePicker.propTypes = {

    date: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    inputClassName: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default DatePicker;