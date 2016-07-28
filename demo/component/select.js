import React from 'react';
import {
    DropSelect,
    AdvanceSelect,
    SearchSelect,
    Cascader,
    CascaderSelect,
    Flex
} from '../../src/index';
import PinYin from 'gm-pinyin';
import _ from 'underscore';

// TODO siqi添加文档
const DropSelectWrap = React.createClass({
    getInitialState(){
        return {
            show: false,
            coolData: {
                list: [],
                actions: [{
                    className: "btn btn-sm btn-info",
                    text: <i className="glyphicon glyphicon-ok"></i>,
                    getDisabled: (value, i) => {
                        return i % 2;
                    },
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }, {
                    className: "btn btn-sm btn-danger",
                    text: '删除',
                    onClick: function (col) {
                        console.log(col, 'onclick');
                    }
                }],
                columns: [{
                    field: 'id',
                    name: '序号',
                    render: function (value) {
                        return 'D00' + value;
                    }
                }, {
                    field: 'name',
                    name: '商品名'
                }, {
                    field: 'price',
                    name: '成本价'
                }],
                loading: true
            }
        };
    },
    componentDidMount(){
        const me = this;
        setTimeout(() => {
            me.setState({
                coolData: Object.assign(this.state.coolData, {
                    loading: false,
                    list: [{
                        id: '0001',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [0]
                    }, {
                        id: '0002',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '0003',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [0, 1]
                    }, {
                        id: '0004',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [1, 0]
                    }, {
                        id: '0005',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00015',
                        name: '大白菜',
                        price: 22.12
                    }, {
                        id: '00013',
                        name: '大白菜',
                        price: 22.12,
                        actionStatus: [1, 1]
                    }, {
                        id: '000143',
                        name: '大白菜',
                        price: 22.12
                    }]
                })
            });
        }, 2000);
    },
    onFocus(){
        this.setState({
            show: true
        });
    },
    onHide(){
        this.setState({
            show: false
        });
    },

    render(){
        return (
            <div style={{width: '400px'}}>
                <DropSelect show={this.state.show}
                            data={this.state.coolData}
                            onHide={this.onHide}>
                    <input className="form-control" onFocus={this.onFocus}/>
                </DropSelect>
            </div>
        );
    }
});

// TODO 何勇add文档
var AdvanceSelectComponent = React.createClass({
    getInitialState(){
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
        return {
            list: selectList,
            value: 10
        };
    },
    render(){

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
    },
    onValueChange(id, value){
        console.log(id, value);
    },
    onFilterData(filterData){
        let needle = filterData.trim().toLowerCase(),
            items = this.state.list;
        let newItems = items.filter(function (data) {
            let dataName = data.name.toString().trim().toLowerCase();
            return dataName.indexOf(needle) !== -1
                || this.matchingPinYin(dataName, {style: PinYin.STYLE_NORMAL}).indexOf(needle) !== -1
                || this.matchingPinYin(dataName, {style: PinYin.STYLE_FIRST_LETTER}).indexOf(needle) !== -1;
        }.bind(this));
        return newItems;
    },
    matchingPinYin(name, style = {style: PinYin.STYLE_NORMAL}){
        let pinyin = "", reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
        for (let i = 0; i < name.length; i++) {
            let val = name.substr(i, 1);
            if (!reg.test(val)) {
                pinyin += val;
            } else {
                pinyin += PinYin(val, style)[0];
            }
        }
        return pinyin;
    },
    changeList(){
        let changeList = [];
        for (var i = 5; i < 50; i++) {
            changeList.push({value: i, name: i});
        }
        this.setState({
            list: changeList
        });
    },
    changeValue(){
        this.setState({value: 20});
    }
});

var searchSelectData = [
    {value: 0, name: '我们'},
    {value: 1, name: '1'},
    {value: 2, name: '2我们'},
    {value: 3, name: '3我们'},
    {value: 4, name: '4我们'},
    {value: 5, name: '5我们'},
    {value: 6, name: '6我们'},
    {value: 7, name: '7我们'},
    {value: 8, name: '8我们'},
    {value: 9, name: '9你们'},
    {value: 10, name: '10哦'},
    {value: 11, name: 'no'}
];

class SearchSelectWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: searchSelectData[2],
            list: searchSelectData,

            multipleSelected: [searchSelectData[1]]
        };
        this.handleSelect = ::this.handleSelect;
        this.handleMultipleSelect = ::this.handleMultipleSelect;
        this.handleSearch = ::this.handleSearch;
    }

    render() {
        return (
            <div>
                <h3>单选版本</h3>
                list(必须)搜索待选数据，传什么就是什么

                selected选中了什么，可为空
                onSearch(必须)，搜索触发函数，以便过滤重新得出list数据。 可以引入pinyin库来做拼音搜索
                onSelect(必须)，选中后触发，提供和selected一样的数据结构，一般直接设置selected即可

                delay搜索过程中延迟多少ms才出触发onSearch， 默认500
                listMaxHeight搜索待选数据的高度，默认250px
                multiple是否多选，默认false
                placeholder不用介绍了吧，默认空字符串
                <div style={{width: '300px'}}>
                    <SearchSelect
                        list={this.state.list}
                        selected={this.state.selected}
                        onSearch={this.handleSearch}
                        onSelect={this.handleSelect}
                        placeholder="搜索"/>
                </div>
                <h3>多选版本</h3>
                <div style={{width: '300px'}}>
                    <SearchSelect
                        list={this.state.list}
                        selected={this.state.multipleSelected}
                        onSearch={this.handleSearch}
                        onSelect={this.handleMultipleSelect}
                        multiple
                        placeholder="搜索"/>
                </div>
            </div>
        );
    }

    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }

    handleMultipleSelect(multipleSelected) {
        console.log(multipleSelected);
        this.setState({
            multipleSelected
        });
    }

    handleSearch(value) {
        // 字符串匹配过滤
        // this.setState({
        //     list: _.filter(searchSelectData, v => v.name.indexOf(value) > -1)
        // });

        // pinyin 首字母 过滤
        this.setState({
            list: _.filter(searchSelectData, v => {
                return _.map(PinYin(v.name, {
                        style: PinYin.STYLE_FIRST_LETTER
                    }), value => value[0]).join('').indexOf(value) > -1;
            })
        });

    }
}

const cascaderData = [{
    value: '0',
    name: '广东',
    children: [{
        value: '01',
        name: '深圳'
    }, {
        value: '02',
        name: '广州'
    }, {
        value: '03',
        name: '珠海'
    }]
}, {
    value: '1',
    name: '上海',
    children: [{
        value: '11',
        name: '上海1'
    }, {
        value: '12',
        name: '上海2',
        children: [{
            value: '121',
            name: 'adfadf'
        }]
    }, {
        value: '13',
        name: '上海3'
    }]
}];

class CascaderWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascaderData
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        let value = [];
        if (this.state.value.length > 0) {
            _.each(this.state.value, (v, i) => {
                const match = _.find(i === 0 ? this.state.data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }

        return (
            <div>
                <h3>普通用法</h3>
                <div style={{width: '200px'}}>
                    {/*data的格式如cascaderData，value 是值，name是值的展现，children是其下一级。*/}
                    {/*value是一个数组或者null，表示选中了那些数据。 ['0']则选择了广东，['0', '01']则选择了广东，深圳*/}
                    {/*onChange会调提供和value一样的数组*/}
                    {/*inputProps是定义里面input的props*/}
                    <Cascader data={this.state.data}
                              value={this.state.value}
                              onChange={this.handleChange}
                              inputProps={{className: 'input-sm'}}/>
                </div>

                <h3>不提供value</h3>
                <div style={{width: '200px'}}>
                    <Cascader data={this.state.data} onChange={this.handleChange}/>
                </div>

                <h3>自定义value的显示</h3>
                <Flex>
                    {/*这非常的灵活，自定义value的显示*/}
                    <Cascader data={this.state.data}
                              valueRender={(value) => (value && value.length > 0 ? value[value.length - 1].name : '')}
                              onChange={this.handleChange}/>
                </Flex>

                <h3>自定义children</h3>
                <Flex>
                    {/*这非常的灵活，自定义ui，点击整个children都会出现选择浮层*/}
                    <Cascader data={this.state.data} onChange={this.handleChange}>
                        <div>
                            {_.map(value, v => v.name).join(',')}
                            <button className="btn btn-primary btn-xs">add +</button>
                        </div>
                    </Cascader>
                </Flex>
            </div>
        );
    }

    handleChange(value) {
        console.log(value);
        this.setState({
            value
        });
    }
}

class CascaderSelectWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            data: cascaderData,

            singleSelected: null
        };
        this.handleSelect = ::this.handleSelect;
        this.handleSingleSelect = ::this.handleSingleSelect;
    }

    render() {
        return (
            <div>
                <h3>多选</h3>
                {/*Cascader的多选版本，传入multiple。*/}
                {/*selectedRender自定义选择后的显示，默认显示和Cascader一样*/}
                {/*selected同Cascader的value*/}
                {/*onSelect同Cascader的onChange*/}
                <CascaderSelect
                    multiple
                    selectedRender={this.selectedRender}
                    data={this.state.data}
                    selected={this.state.selected}
                    onSelect={this.handleSelect}/>

                <h3>单选</h3>
                {/*单选版本，不建议使用(怪怪的)，单选用Cascader就好。*/}
                <CascaderSelect
                    data={this.state.data}
                    selected={this.state.singleSelected}
                    onSelect={this.handleSingleSelect}/>
            </div>
        );
    }

    // 自定义已选择展示
    selectedRender(value) {
        return value[value.length - 1].name;
    }

    handleSelect(selected) {
        this.setState({
            selected
        });
    }

    handleSingleSelect(singleSelected) {
        this.setState({
            singleSelected
        });
    }
}

class SelectWrap extends React.Component {
    render() {
        return (
            <div>
                <h1 id="select">选择</h1>
                <h2 id="Cascader">Cascader</h2>
                <CascaderWrap/>
                <h2 id="CascaderSelect">CascaderSelect</h2>
                <CascaderSelectWrap/>
                <h2 id="AdvanceSelect">AdvanceSelect</h2>
                <AdvanceSelectComponent />
                <h2 id="DropSelect">DropSelect</h2>
                <DropSelectWrap/>
                <h2 id="SearchSelect">SearchSelect</h2>
                <SearchSelectWrap/>
            </div>
        );
    }
}

export default SelectWrap;