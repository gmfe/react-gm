import React from 'react';
import {FilterSelect, MultipleFilterSelect} from '../../src/index';
import _ from 'lodash';

const searchSelectData = [
    {name: '华侨城'},
    {name: '世界之窗'},
    {name: '南山'},
    {name: '梧桐山'},
    {name: '欢乐海岸'},
    {name: '东部华侨城'},
    {name: '深圳湾'},
    {name: '华中科技大学'}
];

const searchSelectGroupData = [{
    label: '一组',
    children: [
        {name: '华侨城'},
        {name: '世界之窗'},
        {name: '南山'},

        {name: '欢乐海岸'}
    ]
}, {
    label: '二组',
    children: [
        {name: '东部华侨城'},
        {name: '深圳湾'},
        {name: '梧桐山'},
        {name: '华中科技大学'}
    ]
}];

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: searchSelectData[2],
            list: searchSelectData
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
    }

    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }

    handleSearch(value) {
        if (this.state.selected && value === this.state.selected.name) {
            this.setState({
                list: searchSelectData
            });
        } else {
            this.setState({
                list: _.filter(searchSelectData, v => {
                    return v.name.indexOf(value) > -1;
                })
            });
        }
    }

    handleWithFilter(list, query) {
        return _.filter(list, v => {
            return v.name.indexOf(query) > -1;
        });
    }

    render() {
        return (
            <div style={{width: '300px'}}>
                <FilterSelect
                    id="lalala"
                    isScrollToSelected
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <FilterSelect
                    id="aaa"
                    disabled
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />

                <FilterSelect
                    id="aaab"
                    list={this.state.list}
                    selected={this.state.selected}
                    withFilter={this.handleWithFilter}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}

class ComponentGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            list: [...searchSelectGroupData]
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSearch = ::this.handleSearch;
    }

    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }

    handleSearch(value) {
        if (this.state.selected && this.state.selected.name === value) {
            this.setState({
                list: [...searchSelectGroupData]
            });
        } else {
            this.setState({
                list: _.filter(searchSelectGroupData, v => {
                    v.children = _.filter(v.children, item => {
                        console.log('item', item.name.indexOf(value) > -1);
                        return item.name.indexOf(value) > -1;
                    });

                    return v.children.length;
                })
            });
        }
    }

    render() {
        return (
            <div style={{width: '300px'}}>
                <div>group</div>
                <MultipleFilterSelect
                    id="aaaa"
                    isGroupList
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
                <MultipleFilterSelect
                    id="aaaa"
                    disabled
                    isGroupList
                    list={this.state.list}
                    selected={this.state.selected}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSelect}
                    placeholder="搜索"
                />
            </div>
        );
    }
}

export default () => <div><Component/><ComponentGroup/></div>;
