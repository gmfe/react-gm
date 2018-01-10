import React from 'react';
import Flex from '../flex';
import {Checkbox, CheckboxGroup} from '../checkbox';
import {pinYinFilter} from "gm-util";
import {getLeaf} from './util';
import _ from 'lodash';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            groupSelected: []
        };
    }

    handleChange = (selectedValues) => {
        const {onSelect} = this.props;
        onSelect(selectedValues);
    };

    handleSelectAll = (checked) => {
        const {list, onSelect} = this.props;
        onSelect(checked.length === 0 ? [] : _.map(getLeaf(list), v => v.value));
    };

    handleQuery = (e) => {
        this.setState({
            query: e.target.value
        });
    };

    handleGroup = (value) => {
        const {groupSelected} = this.state;
        if (_.includes(groupSelected, value)) {
            this.setState({
                groupSelected: _.without(groupSelected, value)
            });
        } else {
            this.setState({
                groupSelected: groupSelected.concat(value)
            });
        }
    };

    renderList(list) {
        const {selectedValues} = this.props;
        const {groupSelected} = this.state;

        const listValues = _.map(list, v => v.value);

        if (list.length === 0) {
            return null;
        }


        const isGroupData = !!list[0].children;

        if (isGroupData) {
            return (
                <div className="gm-transfer-group">
                    {_.map(list, group => {
                        const isOpen = _.includes(groupSelected, group.value);

                        return (
                            <div key={group.value}>
                                <div
                                    className="gm-transfer-group-name gm-cursor"
                                    onClick={() => this.handleGroup(group.value)}
                                >
                                    <span style={{
                                        width: '1em',
                                        display: 'inline-block'
                                    }}>{isOpen ? '-' : '+'}</span> {group.name}
                                </div>
                                {isOpen && (
                                    <div className="gm-transfer-group-list">
                                        {this.renderList(group.children)}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        }

        return (
            <CheckboxGroup
                className="gm-margin-0"
                name={"transferBox" + Math.random()}
                value={_.filter(selectedValues, vv => _.includes(listValues, vv))}
                onChange={this.handleChange}
            >
                {_.map(list, v => (
                    <Checkbox key={v.value} value={v.value} className="gm-cursor">{v.name}</Checkbox>
                ))}
            </CheckboxGroup>
        );
    }

    render() {
        let {
            list, allLength,
            selectedValues,

            style,

            title,
            placeholder,
            withFilter
        } = this.props;

        const {
            query
        } = this.state;

        if (withFilter === true) {
            list = pinYinFilter(list, query, e => e.name);
        } else if (withFilter) {
            list = withFilter(list, query);
        }

        return (
            <Flex column className="gm-transfer-box gm-border gm-bg" style={style}>
                <div
                    className="gm-transfer-box-title gm-padding-5 gm-back-bg text-center gm-border-bottom">{title}</div>

                {withFilter ? (
                    <div className="gm-transfer-box-filter">
                        <input
                            type="text"
                            className="form-control"
                            value={query}
                            onChange={this.handleQuery}
                            placeholder={placeholder}
                        />
                        <i className="glyphicon glyphicon-search gm-text-desc"/>
                    </div>
                ) : null}
                <Flex flex column className="gm-bg gm-transfer-box-list gm-overflow-y">
                    {this.renderList(list)}
                </Flex>

                <Flex justifyBetween alignCenter className="gm-border-top">
                    <CheckboxGroup
                        name="transferBoxBottom"
                        className="gm-margin-0 gm-padding-5"
                        value={[list.length !== 0 && list.length === selectedValues.length]}
                        onChange={this.handleSelectAll}
                    >
                        <Checkbox value={true}>全选</Checkbox>
                    </CheckboxGroup>
                    <div className="gm-padding-lr-5 gm-text-desc">{selectedValues.length}/{allLength}</div>
                </Flex>
            </Flex>
        );
    }
}

export default Box;