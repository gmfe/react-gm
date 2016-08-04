import React, {PropTypes} from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '_gm_datepicker_id' + (Math.random() + '').slice(2)
        };
        this.handleSelect = ::this.handleSelect;
        this.handleChange = ::this.handleChange;
    }

    renderPopover() {
        return (
            <Popover id={this.state.id} className="gm-datepicker-popover">
                <Calendar selected={this.props.date} onSelect={this.handleSelect}/>
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

    handleChange(event) {
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.props.onChange(null);
        }
    }

    render() {
        return (
            <div className="gm-datepicker">
                <OverlayTrigger trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children : (
                        <input type="text"
                               className={this.props.inputClassName}
                               placeholder={this.props.placeholder}
                               ref="target"
                               disabled={this.props.disabled}
                               value={this.props.date ? moment(this.props.date).format('YYYY-MM-DD') : ''}
                               onChange={this.handleChange}/>
                    )}
                </OverlayTrigger>
            </div>
        );
    }
}

DatePicker.propTypes = {
    date: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    inputClassName: PropTypes.string,
    target: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

export default DatePicker;