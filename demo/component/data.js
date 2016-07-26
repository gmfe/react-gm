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


class SheetWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 3,
                name: '小明',
                age: '10'
            }, {
                id: 4,
                name: '小红',
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
        this.handlePage = ::this.handlePage;
        this.handleSelect = ::this.handleSelect;
        this.handleSelectAll = ::this.handleSelectAll;
        this.handleBatchAction = ::this.handleBatchAction;
    }

    render() {
        const {list, loading} = this.state;
        return (
            <div>
                {/*{list（必填）是列表的数据，最好是数组。 当然有人没注意传了obj（非常不推荐）。因为可能会用到 list.length }*/}
                {/*loading 为true显示loading状态，为false才会显示数据*/}
                {/*enableEmptyTip 显示list为空的时候*/}
                <Sheet list={list} loading={loading} enableEmptyTip>
                    {/*一般用法，提供 field要取数据的那个字段，name是表头列名*/}
                    <SheetColumn field="id" name="id"/>

                    {/*可以传入各种className style自定义*/}
                    <SheetColumn field="name" name="name" style={{
                        width: '150px'
                    }}/>

                    {/*可以自定义显示，children传入一个function，function提供当前数据值，返回要显示的结果*/}
                    <SheetColumn field="name" name="name">
                        {value => '你好 ' + value}
                    </SheetColumn>

                    {/*不止文本，可以返回任何东西。 可交互的input啊，button啊等*/}
                    <SheetColumn field="name" name="name">
                        {value => <strong>你好 {value}</strong>}
                    </SheetColumn>

                    {/*function第二个参数提供当前数据的索引，通过索引你可以找到当前的数据*/}
                    <SheetColumn field="name" name="name">
                        {(value, i) => <strong>你好 {value}，你的id是 {list[i].id}</strong>}
                    </SheetColumn>

                    {/*field你也可以乱来，你喜欢*/}
                    <SheetColumn field="asfafasfas" name="field乱来">
                        {(value, i) => <strong>你好 {list[i].name}，你的id是 {list[i].id}</strong>}
                    </SheetColumn>

                    {/*以上sheetColumn的顺序决定table列的顺序*/}


                    {/*如需页码需要传入Pagination或者PaginationText组件。 Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。*/}
                    <Pagination data={this.state.pagination} toPage={this.handlePage}/>
                    <PaginationText data={this.state.pagination}/>


                    {/*行的操作。Sheet会自动放到表格最后面。children传入一个function，function提供当前数据和当前数据的索引，返回值为渲染内容*/}
                    <SheetAction>
                        {(eList, i) => (
                            <div>
                                <button className="btn btn-xs btn-default gm-marginRight5"
                                        onClick={this.handleAction.bind(this, eList, i)}>删除
                                </button>
                                <SplitButton bsSize="xsmall" title={'下拉框'} id="asdfas">
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                </SplitButton>
                            </div>
                        )}
                    </SheetAction>


                    {/*行的操作。Sheet会自动放到表格最前面。一但用到SheetSelect，就约定了数据list中的_gm_select字段，_gm_select为bool表示是否选中。onSelect当选择一行时触发，onSelectAll当选择所有的时候触发，需要根据select事件自动修改_gm_select属性。*/}
                    <SheetSelect onSelect={this.handleSelect} onSelectAll={this.handleSelectAll}/>

                    {/*批量操作按钮，Sheet会自动放到table的上面。当存在SheetSelect才有效。没啥功能，纯粹一个位置约定而已。在handleBatchAction中要自己判断哪些被选中，做想要的操作（哪些被选中其实也可以交给组件做，犹豫）*/}
                    <SheetBatchAction>
                        <button className="btn btn-primary btn-sm gm-marginRight5" onClick={this.handleBatchAction}>批量操作
                        </button>
                        <button className="btn btn-default btn-sm" onClick={this.handleBatchAction}>批量操作2</button>
                    </SheetBatchAction>

                    <div>还放入其他内容哦，不过意义不大。</div>
                </Sheet>
            </div>
        );
    }

    componentDidMount() {
        // 模拟异步请求
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 2000);
    }

    handlePage() {
        console.log(arguments);
    }

    handleAction(eList, i) {
        console.log(eList, i);
    }

    handleBatchAction() {
        console.log(_.filter(this.state.list, value => value._gm_select));
    }

    handleSelect(checked, i) {
        const list = this.state.list;
        list[i]._gm_select = checked;
        this.setState({
            list
        });
    }

    handleSelectAll(checked) {
        this.setState({
            list: _.map(this.state.list, value => {
                value._gm_select = checked;
                return value;
            })
        });
    }
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="date">数据</h1>
                <h2 id="sheet">Sheet</h2>
                <SheetWrap/>
                <h2 id="importLead">ImportLead</h2>
                <ImportLeadWrap/>
            </div>
        );
    }
}

export default Component;