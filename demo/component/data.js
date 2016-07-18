import React from 'react';
import {
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
                count: 60,
                offset: 30,
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
                {null}
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

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Sheet</h1>
                <SheetWrap></SheetWrap>
                <h1>ImportLead</h1>
                <ImportLeadWrap></ImportLeadWrap>
            </div>
        );
    }
});

export default Component;