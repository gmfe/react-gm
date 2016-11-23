import React from 'react';
import {
    AdvanceSelect
} from '../../src/index';

class AdvanceSelectComponent extends React.Component {
    constructor(props) {
        super(props);

        let selectList = [
            {value: 0, name: 'FE'},
            {value: 1, name: '测试'},
            {value: 2, name: '美丽-2'},
            {value: 3, name: '美丽-3'},
            {value: 4, name: '漂亮——1'},
            {value: 5, name: '阿姐说饭卡卢萨卡是否快乐阿三开发饭卡是'},
            {value: 6, name: 'sz-罗湖'},
            {value: 7, name: 'gd-广州'},
            {value: 8, name: 'test'},
            {value: 9, name: '110'},
            {value: 10, name: '美丽-119'},
            {value: 11, name: '美丽-wqeqw'},
            {value: 12, name: '美丽_adsdasd'},
            {value: 13, name: '美丽 asdasd'}
        ];
        this.state = {
            list: selectList,
            value: 10
        };
        this.onFilterData = ::this.onFilterData;
        this.changeList = ::this.changeList;
        this.changeValue = ::this.changeValue;
    }

    render() {

        return (
            <div>
                <button className="btn btn-default btn-primary btn-sm" onClick={this.changeList}>改变list</button>
                &nbsp;&nbsp;
                <button className="btn btn-default btn-primary btn-sm" onClick={this.changeValue}>改变value</button>
                &nbsp;&nbsp;
                <AdvanceSelect list={this.state.list} value={this.state.value} title="这是测试" inputClassName="input-sm"
                               inputStyleName={{}}
                               onValueChange={this.onValueChange} onFilterData={this.onFilterData}/>
            </div>
        );
    }

    onValueChange(id, value) {
        console.log(id, value);
    }

    onFilterData(filterData) {
        let needle = filterData.trim().toLowerCase(),
            items = this.state.list;
        let newItems = items.filter(function (data) {
            let dataName = data.name.toString().trim().toLowerCase();
            return dataName.indexOf(needle) !== -1;
        }.bind(this));
        return newItems;
    }

    changeList() {
        let changeList = [];
        for (var i = 5; i < 50; i++) {
            changeList.push({value: i, name: i});
        }
        this.setState({
            list: changeList
        });
    }

    changeValue() {
        this.setState({value: 20});
    }
}

class SelectWrap extends React.Component {
    render() {
        return (
            <div>
                <h1 id="select">选择</h1>
                <h2 id="AdvanceSelect">AdvanceSelect</h2>
                <AdvanceSelectComponent />
            </div>
        );
    }
}

export default SelectWrap;