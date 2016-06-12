import React from 'react';
import {
    ValidateMixin,
    DropSelect,
    AdvanceSelect,
    SearchSelect,
    Cascader,
    CascaderSelect,
    Flex
} from '../../src/index';
import pinYin from 'pinyin';
import _ from 'underscore';

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
                || this.matchingPinYin(dataName, {style: pinYin.STYLE_NORMAL}).indexOf(needle) !== -1
                || this.matchingPinYin(dataName, {style: pinYin.STYLE_FIRST_LETTER}).indexOf(needle) !== -1;
        }.bind(this));
        return newItems;
    },
    matchingPinYin(name, style = {style: pinYin.STYLE_NORMAL}){
        let pinyin = "", reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
        for (let i = 0; i < name.length; i++) {
            let val = name.substr(i, 1);
            if (!reg.test(val)) {
                pinyin += val;
            } else {
                pinyin += pinYin(val, style)[0];
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

var SearchSelectWrap = React.createClass({
    getInitialState(){
        return {
            selected: null,
            value: '',
            list: []
        };
    },
    render(){
        return (
            <div>
                <SearchSelect
                    multiple
                    selected={this.state.selected}
                    onSelect={this.handleSelect}
                    list={this.state.list}
                    onSearch={this.handleSearch}
                    placeholder="搜索"
                ></SearchSelect>
            </div>
        );
    },
    handleSelect(selected){
        this.setState({
            selected
        });
    },
    handleSearch(value){
        this.setState({
            list: _.filter(searchSelectData, v => v.name.indexOf(value) > -1)
        });
    }
});

const cascaderData = [{
    value: '0',
    name: '广东',
    children: [{
        value: '01',
        name: '深圳深圳'
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
            value: ['0'],
            data: cascaderData
        };
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
                    <Cascader data={this.state.data} value={this.state.value} onChange={::this.handleChange}
                              inputProps={{className: 'input-sm'}}>
                    </Cascader>
                </div>

                <h3>不提供value</h3>
                <div style={{width: '200px'}}>
                    <Cascader data={this.state.data} onChange={::this.handleChange}>
                    </Cascader>
                </div>

                <h3>自定义children用法</h3>
                <Flex>
                    <Cascader data={this.state.data} onChange={::this.handleChange}>
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
            data: cascaderData
        };
    }

    render() {
        return (
            <div>
                <h3>多选</h3>
                <CascaderSelect
                    multiple
                    selectedRender={this.selectedRender}
                    data={this.state.data}
                    selected={this.state.selected}
                    onSelect={::this.handleSelect}>
                </CascaderSelect>
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
}

var FormerDom = React.createClass({
    mixins: [ValidateMixin()],
    onChange: function () {
        console.log(arguments);
    },
    render: function () {
        return (
            <div style={{width: 300}}>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type="text" className="form-control" name="email" onChange={this.validate('e')}/>

                        <div className="text-danger">{this.validateTip('email')}</div>
                    </div>

                    <div className="form-group">
                        <label>三到5位任意字符</label>
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>

                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </form>

                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(this.validateAll(this.refs.myForm));
    }
});

const FormWrap = React.createClass({
    getInitialState(){
        return {
            checked: false
        };
    },
    render(){
        return (
            <div>
                <h1>Cascader</h1>
                <CascaderWrap></CascaderWrap>
                <h1>CascaderSelect</h1>
                <CascaderSelectWrap></CascaderSelectWrap>
                <h1>AdvanceSelect</h1>
                <AdvanceSelectComponent />
                <hr/>
                <h1>DropSelect</h1>
                <DropSelectWrap></DropSelectWrap>
                <hr/>
                <h1>SearchSelect</h1>
                <SearchSelectWrap></SearchSelectWrap>
                <h1>Former</h1>
                <FormerDom></FormerDom>
            </div>
        );
    },
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    }
});

export default FormWrap;