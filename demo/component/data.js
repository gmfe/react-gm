import React from 'react';
import {
    Grid,
    Sheet,
    Pagination,
    PaginationText
} from '../../src/index';
import _ from 'underscore';
import ImportLeadWrap from './import.lead.js';

import {SplitButton, MenuItem} from 'react-bootstrap';
const {SheetColumn, SheetAction, SheetSelect, SheetBatchAction} = Sheet;

var SheetWrap = React.createClass({
    getInitialState(){
        return {
            list: [{
                id: 3,
                name: '偶们啊啊发骚发所发生的',
                age: '10'
            }, {
                id: 4,
                name: 'haha',
                age: '15',
                _gm_select: true
            }],
            pagination: {
                count: 80,
                offset: 10,
                limit: 10
            },
            loading: true
        };
    },
    render(){
        return (
            <Sheet list={this.state.list} loading={this.state.loading}>
                <SheetColumn field="id" name="id">
                    {(value, i) => (value + i)}
                </SheetColumn>
                <SheetColumn field="name" name="name" style={{width: '150px'}}></SheetColumn>
                <Pagination data={this.state.pagination} toPage={this.handlePage}></Pagination>
                <PaginationText data={this.state.pagination}></PaginationText>
                <SheetAction>
                    {(value, i) => (
                        <div>
                            <button className="btn btn-xs btn-default gm-marginRight5"
                                    onClick={this.handleAction.bind(this, value, i)}>删除
                            </button>
                            < SplitButton bsSize="xsmall" title={'下拉框'} id="asdfas">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                            </SplitButton>
                        </div>
                    )}
                </SheetAction>
                <SheetSelect onSelect={this.handleSelect} onSelectAll={this.handleSelectAll}></SheetSelect>
                <SheetBatchAction>
                    <button className="btn btn-primary btn-sm gm-marginRight5" onClick={this.handleBatchAction}>批量操作
                    </button>
                    <button className="btn btn-default btn-sm" onClick={this.handleBatchAction}>批量操作2</button>
                </SheetBatchAction>
            </Sheet>
        );
    },
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    },
    handlePage(){
        console.log(arguments);
    },
    handleAction(value, i){
        console.log(value, i);
    },
    handleBatchAction(){
        console.log(_.filter(this.state.list, value => value._gm_select));
    },
    handleSelect(checked, i){
        const list = this.state.list;
        list[i]._gm_select = checked;
        this.setState({
            list
        });
    },
    handleSelectAll(checked){
        this.setState({
            list: _.map(this.state.list, value => {
                value._gm_select = checked;
                return value;
            })
        });
    }
});


// grid
var onClick = function () {
    console.log(arguments);
};

var isShow = function (value, index) {
    console.log(value, index);
    return value.id === 1;
};

var renderId = function () {
    //console.log(arguments);
    return 2;
};

var GridWrap = React.createClass({
    getInitialState: function () {
        return {
            enableSelect: true,
            enablePagination: true,
            enablePaginationText: true,
            loading: false,
            columns: [
                {field: 'id', name: 'id', render: renderId},
                {field: 'name', name: '名字', style: {width: 100}},
                {field: 'age', name: '年龄'}
            ],
            actions: [{
                text: '删除1',
                className: 'btn-primary',
                click: onClick,
                isShow: isShow
            }, {
                text: '删除2',
                click: onClick
            }, {
                render: function () {
                    return (
                        <SplitButton bsSize="xsmall" title={'asdf'} id="adf">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </SplitButton>
                    );
                }
            }],
            // 依赖 enableSelect:true
            batchs: [{
                text: '批量操作',
                className: 'btn-primary',
                click: onClick
            }, {
                text: 'adsf',
                click: onClick
            }],
            list: [{
                id: 1,
                name: '偶们啊啊发骚发所发生的',
                age: '10'
            }, {
                id: 2,
                name: 'haha',
                age: '15'
            }],
            pagination: {
                count: 80,
                offset: 10,
                limit: 10
            },
            select: this.onSelect,
            selectAll: this.onSelectAll,
            toPage: function () {
                console.log(arguments);
            }
        };
    },
    onSelect: function (index) {
        const list = this.state.list;
        list[index]._gm_select = !this.state.list[index]._gm_select;
        this.setState({
            list
        });
    },
    onSelectAll: function (bool) {
        _.each(this.state.list, function (value) {
            value._gm_select = bool;
        });
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <Grid data={this.state}/>
            </div>
        );
    },
    componentDidMount: function () {
        var t = this;
        setTimeout(function () {
            t.setState(t.state);
        }, 3000);
    }
});

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Sheet</h1>
                <SheetWrap></SheetWrap>
                <h1>Grid(Deprecated)</h1>
                <GridWrap></GridWrap>
                <h1>ImportLead</h1>
                <ImportLeadWrap></ImportLeadWrap>
            </div>
        );
    }
});

export default Component;