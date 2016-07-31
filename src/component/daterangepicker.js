import React, {PropTypes} from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';

const noop = () => {
};

class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beginId: '_gm_datepicker_id' + (Math.random() + '').slice(2),
            endId: '_gm_datepicker_id' + (Math.random() + '').slice(2)
        };

        this.handleSelect = ::this.handleSelect;

    }

    handleSelect(type, date) {
        if (type === 'begin') {
            this.props.onChange(date, this.props.end);
        } else {
            this.props.onChange(this.props.begin, date);
        }
        this.refs.endTarget.click();
    }

    renderPopoverBegin() {
        return (
            <Popover id={this.state.beginId} className="gm-datepicker-popover">
                <Calendar selected={this.props.begin} onSelect={this.handleSelect.bind(this, 'begin')}/>
            </Popover>
        );
    }

    renderPopoverEnd() {
        return (
            <Popover id={this.state.endId} className="gm-datepicker-popover">
                <Calendar selected={this.props.end} onSelect={this.handleSelect.bind(this, 'end')}/>
            </Popover>
        );
    }

    render() {
        return (
            <div className="gm-datepicker gm-daterangepicker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopoverBegin()}>
                    <div ref="beginTarget">
                        <input type="text" className={this.props.inputClassName}
                               value={moment(this.props.begin).format('YYYY-MM-DD')} onChange={noop}/>
                    </div>
                </OverlayTrigger>
                <span> ~ </span>
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopoverEnd()}>
                    <div ref="endTarget">
                        <input type="text" className={this.props.inputClassName}
                               value={moment(this.props.end).format('YYYY-MM-DD')} onChange={noop}/>
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
}

DateRangePicker.propTypes = {
    begin: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    inputClassName: PropTypes.string,
    target: PropTypes.func
};

export default DateRangePicker;