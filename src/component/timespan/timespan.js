import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import classNames from 'classnames';

class TimeSpan extends React.Component {
    getCells() {
        const {min, max, span} = this.props;
        const dMax = max ? moment(max) : moment().endOf('day');
        let d = min ? moment(min) : moment().startOf('day'), cells = [];
        while (d <= dMax) {
            cells.push(d);
            d = moment(d + span);
        }
        return cells;
    }

    handleSelect(value) {
        this.props.onSelect(value.toDate());
    }

    render() {
        const cells = this.getCells(), {selected, render} = this.props;

        return (
            <div className="gm-time-span">
                {_.map(cells, (value, i) => <div key={i} className={classNames("gm-time-span-cell", {
                    active: +value === +selected
                })} onClick={this.handleSelect.bind(this, value)}>{render(value.toDate())}</div>)}
            </div>
        );
    }
}

TimeSpan.propTypes = {
    min: React.PropTypes.object,
    max: React.PropTypes.object,
    span: React.PropTypes.number,
    selected: React.PropTypes.object,
    render: React.PropTypes.func,
    onSelect: React.PropTypes.func
};
TimeSpan.defaultProps = {
    min: moment().startOf('day').toDate(),
    max: moment().endOf('day').toDate(),
    span: 30 * 60 * 1000,
    render: value => moment(value).format('HH:mm'),
    onSelect: () => {
    }
};

export default TimeSpan;