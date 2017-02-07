import React from 'react';
import {Transfer} from '../../src/index';
import _ from 'underscore';

class Component extends React.Component {
    constructor(props) {
        super(props);
        const list = _.map(_.range(5), v => ({
            value: v,
            name: 'item' + v
        }));
        this.state = {
            list,
            selectedValues: [0, 2]
        };
        this.handleSelect = ::this.handleSelect;
    }

    handleSelect(selectedValues) {
        console.log(selectedValues);
        this.setState({
            selectedValues
        });
    }

    handleFilter(list, query) {
        return _.filter(list, v => v.name.indexOf(query) > -1);
    }

    render() {
        const {list, selectedValues} = this.state;
        return (
            <div>
                demo
                <Transfer
                    list={list}
                    selectedValues={selectedValues}
                    onSelect={this.handleSelect}
                    withFilter={this.handleFilter}
                />
            </div>
        );
    }
}

export default Component;