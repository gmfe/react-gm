import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';
import Flex from '../flex';
import {getLocale} from "../../locales";

const nowMountStart = +moment().startOf('day');

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
    }

    handleClick() {
        const {disabled, onClick, value} = this.props;

        if (disabled) {
            return;
        }
        onClick(value);
    }

    render() {
        const {willSelect, value, selected, disabled} = this.props;

        const cn = classNames('gm-calendar-day', {
            'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
            'gm-calendar-day-old': willSelect.month() > value.month(),
            'gm-calendar-day-new': willSelect.month() < value.month(),
            'gm-calendar-day-disabled': disabled,
            'gm-calendar-active': +selected.startOf('day') === +value.startOf('day')
        });

        return <span className={cn} onClick={this.handleClick}>{value.date()}</span>;
    }
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        const {selected} = props;
        this.state = {
            selected: selected ? selected : null, // 调用方的时间
            moment: selected ? moment(selected) : moment(), // 日历内的时间
            isSelectMonth: false,
            weekDays: getLocale('calendar', 'weekDays')
        };
        this.handleSelectMonth = ::this.handleSelectMonth;
        this.handleSelectDay = ::this.handleSelectDay;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    }

    handleChangeMonth(month, event) {
        event.preventDefault();
        this.setState({
            moment: this.state.moment.month(month),
            isSelectMonth: false
        });
    }

    handleSelectMonth() {
        this.setState({
            isSelectMonth: !this.state.isSelectMonth
        });
    }

    handleSelectDay(m) {
        this.props.onSelect(m.toDate());
    }

    renderHead() {
        const m = moment(this.state.moment);
        const month = m.month();

        return (
            <Flex alignCenter className="gm-calendar-head text-center clearfix">
                <a
                    className="gm-calendar-head-pre"
                    onClick={this.handleChangeMonth.bind(this, month - 1)}
                >
                    <i className="xfont xfont-left-small"/>
                </a>
                <Flex flex justifyCenter className="gm-calendar-head-title text-center">
                    <span
                        className="gm-calendar-head-month"
                        onClick={this.handleSelectMonth}
                    >{getLocale('calendar', 'months')[month]}</span>
                    <span>&nbsp;&nbsp;{m.year()}</span>
                </Flex>
                <a
                    className="gm-calendar-head-next"
                    onClick={this.handleChangeMonth.bind(this, month + 1)}
                >
                    <i className="xfont xfont-right-small"/>
                </a>
            </Flex>
        );
    }

    renderWeek() {
        return (
            <div className="gm-calendar-week">
                {_.map(this.state.weekDays, (v, i) => (
                    <span key={i} className="gm-calendar-day-name">{v}</span>
                ))}
            </div>
        );
    }

    renderMonth() {
        const month = this.state.moment.month();
        let months = [];
        for (let i = 0; i < 12; i++) {
            const cn = classNames('gm-calendar-month', {
                'gm-calendar-active': i === month
            });
            months.push(
                <span
                    key={i}
                    className={cn}
                    onClick={this.handleChangeMonth.bind(this, i)}
                >{getLocale('calendar', 'months')[i]}</span>
            );
        }
        return (
            <div className="gm-calendar-months">
                {months}
            </div>
        );
    }

    getDisabled(m) {
        let {min, max, disabledDate} = this.props;
        min = min ? moment(min).startOf('day') : null;
        max = max ? moment(max).startOf('day') : null;

        let disabled = false;

        if (disabledDate) {
            disabled = disabledDate(m.toDate());
        } else {
            if (min && m < min) {
                disabled = true;
            }
            if (max && m > max) {
                disabled = true;
            }
        }
        return disabled;
    }

    renderContent() {
        const m = moment(this.state.moment).startOf('month').day(0).add(-1, 'day');

        return (
            <div className="gm-calendar-content">
                {_.map(_.groupBy(_.range(42), v => parseInt(v / 7)), (v, i) => (
                    <div key={i} className="gm-calendar-content-div">
                        {_.map(v, (value, index) => {
                            const mm = moment(m.add(1, 'day'));
                            return (
                                <Day
                                    key={index}
                                    selected={moment(this.state.selected)}
                                    willSelect={this.state.moment}
                                    value={mm}
                                    onClick={this.handleSelectDay}
                                    disabled={this.getDisabled(mm)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    }

    render() {
        const {
            selected, onSelect, min, max, disabledDate, // eslint-disable-line
            className,
            ...rest
        } = this.props;

        return (
            <div {...rest} className={classNames("gm-calendar", className)}>
                {this.renderHead()}
                {this.renderWeek()}
                {this.renderContent()}
                {this.state.isSelectMonth ? this.renderMonth() : null}
            </div>
        );
    }
}

Calendar.propTypes = {
    selected: PropTypes.object,
    onSelect: PropTypes.func,
    min: PropTypes.object,
    max: PropTypes.object,
    disabledDate: PropTypes.func
};

Calendar.defaultProps = {
    onSelect: _.noop
};

export default Calendar;