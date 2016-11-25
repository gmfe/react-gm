import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'underscore';

// TODO 优化性能

const noop = () => {
};

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
    }

    handleClick() {
        if (this.props.disabled) {
            return;
        }
        this.props.onClick(this.props.moment);
    }

    render() {
        const now = this.props.nowMoment,
            m = this.props.moment,
            selected = this.props.selected,
            disabled = this.props.disabled;

        const cn = classNames('gm-calendar-day', {
            'gm-calendar-day-now': (+now.startOf('day') === +m.startOf('day')),
            'gm-calendar-day-old': now.month() > m.month(),
            'gm-calendar-day-new': now.month() < m.month(),
            'gm-calendar-day-disabled': disabled,
            'gm-calendar-active': +selected.startOf('day') === +m.startOf('day')
        });

        return <span className={cn} onClick={this.handleClick}>{m.date()}</span>;
    }
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected ? this.props.selected : null, // 调用方的时间
            moment: this.props.selected ? moment(this.props.selected) : moment(), // 日历内的时间
            isSelectMonth: false,
            weekDays: ['日', '一', '二', '三', '四', '五', '六']
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
            <div className="gm-calendar-head text-center clearfix">
                <a
                    className="gm-calendar-head-pre pull-left"
                    onClick={this.handleChangeMonth.bind(this, month - 1)}
                >
                    <i className="glyphicon glyphicon-chevron-left"/>
                </a>
                <span className="gm-calendar-head-title">
                    <span
                        className="gm-calendar-head-month"
                        onClick={this.handleSelectMonth}
                    >{month + 1}月</span>
                    <span>&nbsp;&nbsp;{m.year()}</span>
                </span>
                <a
                    className="gm-calendar-head-next pull-right"
                    onClick={this.handleChangeMonth.bind(this, month + 1)}
                >
                    <i className="glyphicon glyphicon-chevron-right"/>
                </a>
            </div>
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
                >{i + 1}月</span>
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
        let days = [];

        for (let i = 0; i < 42; i++) {
            const mm = moment(m.add(1, 'day'));
            days.push(
                <Day
                    key={i}
                    selected={moment(this.state.selected)}
                    nowMoment={this.state.moment}
                    moment={mm}
                    onClick={this.handleSelectDay}
                    disabled={this.getDisabled(mm)}
                />
            );
        }

        days = _.groupBy(days, (v, i) => parseInt(i / 7));

        return (
            <div className="gm-calendar-content">
                {_.map(days, (v, i) => (
                    <div key={i} className="gm-calendar-content-div">{v}</div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="gm-calendar">
                {this.renderHead()}
                {this.renderWeek()}
                {this.renderContent()}
                {this.state.isSelectMonth ? this.renderMonth() : null}
            </div>
        );
    }
}

Calendar.propTypes = {
    selected: React.PropTypes.object,
    onSelect: React.PropTypes.func,
    min: React.PropTypes.object,
    max: React.PropTypes.object,
    disabledDate: React.PropTypes.func
};

Calendar.defaultProps = {
    onSelect: noop
};

export default Calendar;