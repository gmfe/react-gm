import React from 'react';
import moment from 'moment';

var Day = React.createClass({
    render: function () {
        var now = this.props.nowMoment;
        var m = this.props.moment;
        var selected = this.props.selected;

        var className = ['gm-calendar-day'];
        if (now.month() > m.month()) {
            className.push('gm-calendar-day-old');
        } else if (now.month() < m.month()) {
            className.push('gm-calendar-day-new');
        }

        if (+selected.startOf('day') === +m.startOf('day')) {
            className.push('gm-calendar-active');
        }

        return (<span className={className.join(' ')} onClick={this.handleClick}>{m.date()}</span>);
    },
    handleClick: function () {
        this.props.onClick(this.props.moment);
    }
});

var Calendar = React.createClass({
    propTypes: {
        selected: React.PropTypes.object,
        onSelect: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            onSelect: function () {
            }
        };
    },
    getInitialState: function () {
        // 规避  moment(undefined) 有效  moment(null) 无效的场景，统一成null 处理
        return {
            selected: this.props.selected ? this.props.selected : null, // 调用方的时间
            moment: this.props.selected ? moment(this.props.selected) : moment(), // 日历内的时间
            isSelectMonth: false,
            weekDays: ['日', '一', '二', '三', '四', '五', '六']
        };
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    },
    handleChangeMonth: function (month) {
        this.setState({
            moment: this.state.moment.month(month),
            isSelectMonth: false
        });
    },
    handleSelectMonth: function () {
        this.setState({
            isSelectMonth: !this.state.isSelectMonth
        });
    },
    handleSelectDay: function (m) {
        this.props.onSelect(m.toDate());
    },
    renderHead: function () {
        var m = moment(this.state.moment);
        var month = m.month();
        return (
            <div className="gm-calendar-head text-center clearfix">
                <a href="javascript:;" className="gm-calendar-head-pre pull-left"
                   onClick={this.handleChangeMonth.bind(this, month - 1)}>
                    <i className="glyphicon glyphicon-chevron-left"></i>
                </a>
                    <span className="gm-calendar-head-title">
                        <span className="gm-calendar-head-month"
                              onClick={this.handleSelectMonth}>{month + 1}月</span>
                        <span>&nbsp;&nbsp;{m.year()}</span>
                    </span>
                <a href="javascript:;" className="gm-calendar-head-next pull-right"
                   onClick={this.handleChangeMonth.bind(this, month + 1)}>
                    <i className="glyphicon glyphicon-chevron-right"></i>
                </a>
            </div>
        );
    },
    renderWeek: function () {
        return (
            <div className="gm-calendar-week">
                {this.state.weekDays.map(function (v, i) {
                    return (<span key={i} className="gm-calendar-day-name">{v}</span>);
                })}
            </div>
        );
    },
    renderMonth: function () {
        var month = this.state.moment.month();
        var months = [];
        var className = 'gm-calendar-month';
        for (var i = 0; i < 12; i++) {
            months.push((
                <span key={i} className={i === month ? className + " gm-calendar-active": className}
                      onClick={this.handleChangeMonth.bind(this, i)}>{i + 1}月</span>));
        }
        return (
            <div className="gm-calendar-months">
                {months}
            </div>
        );
    },
    renderContent: function () {
        var m = moment(this.state.moment).startOf('month').day(0).add(-1, 'day');
        var days = [];

        for (var i = 0; i < 42; i++) {
            days.push(<Day key={i} selected={moment(this.state.selected)} nowMoment={this.state.moment}
                           moment={moment(m.add(1, 'day'))} onClick={this.handleSelectDay}></Day>);
        }

        return (
            <div className="gm-calendar-content">
                {days}
            </div>
        );
    },
    render: function () {
        var t = this;
        return (
            <div className="gm-calendar">
                {t.renderHead()}
                {t.renderWeek()}
                {t.renderContent()}
                {t.state.isSelectMonth ? t.renderMonth() : undefined}
            </div>
        );
    }
});

export default Calendar;