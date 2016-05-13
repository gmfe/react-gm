import React from 'react';
import moment from 'moment';
import _ from 'underscore';
import classnames from 'classnames';

const TimeSpan = React.createClass({
    propTypes: {
        min: React.PropTypes.object,
        max: React.PropTypes.object,
        span: React.PropTypes.number,
        selected: React.PropTypes.object.isRequired,
        render: React.PropTypes.func,
        onSelect: React.PropTypes.func.isRequired
    },
    getDefaultProps(){
        return {
            min: moment().startOf('day').toDate(),
            max: moment().endOf('day').toDate(),
            span: 30 * 60 * 1000,
            render: value => moment(value).format('HH:mm'),
            onSelect: () => {
            }
        };
    },
    getCells(){
        const min = this.props.min ? moment(this.props.min) : moment().startOf('day'), max = this.props.max ? moment(this.props.max) : moment().endOf('day');
        let d = moment(min);
        let cells = [];
        while (d < max) {
            cells.push(d);
            d = moment(d + this.props.span);
        }
        return cells;
    },
    handleSelect(value){
        this.props.onSelect(value.toDate());
    },
    render(){
        const cells = this.getCells();

        return (
            <div className="gm-time-span">
                {_.map(cells, (value, i) => <div key={i} className={classnames("gm-time-span-cell", {
                    active: +value === +this.props.selected
                })} onClick={this.handleSelect.bind(this, value)}>{this.props.render(value.toDate())}</div>)}
            </div>
        );
    }
});

export default TimeSpan;