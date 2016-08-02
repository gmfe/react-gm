import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

const noop = () => {
};

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = ::this.handleClick;
    }

    render() {
        const now = this.props.nowMoment,
            m = this.props.moment,
            selected = this.props.selected;

        const cn = classNames('gm-calendar-day', {
            'gm-calendar-day-old': now.month() > m.month(),
            'gm-calendar-day-new': now.month() < m.month(),
            'gm-calendar-active': +selected.startOf('day') === +m.startOf('day')
        });

        return <span className={cn} onClick={this.handleClick}>{m.date()}</span>;
    }

    handleClick() {
        this.props.onClick(this.props.moment);
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
                <a className="gm-calendar-head-pre pull-left"
                   onClick={this.handleChangeMonth.bind(this, month - 1)}>
                    <i className="glyphicon glyphicon-chevron-left"/>
                </a>
                <span className="gm-calendar-head-title">
                        <span className="gm-calendar-head-month"
                              onClick={this.handleSelectMonth}>{month + 1}月</span>
                        <span>&nbsp;&nbsp;{m.year()}</span>
                    </span>
                <a className="gm-calendar-head-next pull-right"
                   onClick={this.handleChangeMonth.bind(this, month + 1)}>
                    <i className="glyphicon glyphicon-chevron-right"/>
                </a>
            </div>
        );
    }

    renderWeek() {
        return (
            <div className="gm-calendar-week">
                {this.state.weekDays.map(function (v, i) {
                    return (<span key={i} className="gm-calendar-day-name">{v}</span>);
                })}
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
                <span key={i}
                      className={cn}
                      onClick={this.handleChangeMonth.bind(this, i)}>
                    {i + 1}月
                </span>
            );
        }
        return (
            <div className="gm-calendar-months">
                {months}
            </div>
        );
    }

    renderContent() {
        const m = moment(this.state.moment).startOf('month').day(0).add(-1, 'day');
        let days = [];

        for (let i = 0; i < 42; i++) {
            days.push(
                <Day key={i}
                     selected={moment(this.state.selected)}
                     nowMoment={this.state.moment}
                     moment={moment(m.add(1, 'day'))}
                     onClick={this.handleSelectDay}/>
            );
        }

        return (
            <div className="gm-calendar-content">
                {days}
            </div>
        );
    }

    render() {
        return (
            <div className="gm-calendar">
                {this.renderHead()}
                {this.renderWeek()}
                {this.renderContent()}
                {this.state.isSelectMonth ? this.renderMonth() : undefined}
            </div>
        );
    }
}

Calendar.propTypes = {
    selected: React.PropTypes.object,
    onSelect: React.PropTypes.func
};
Calendar.defaultProps = {
    onSelect: noop
};

export default Calendar;