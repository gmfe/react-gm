import React from 'react';
import {
    Sheet,
    Pagination,
    PaginationText,
    Storage
} from '../../src/index';
import _ from 'underscore';
import ImportLeadWrap from './import.lead.js';

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
                <Sheet list={list} loading={loading} enableEmptyTip>
                    <SheetColumn field="id" name="id"/>
                    <SheetColumn field="name" name="name" style={{
                        width: '150px'
                    }}/>
                    <SheetColumn field="name" name="name">
                        {value => '你好 ' + value}
                    </SheetColumn>
                    <SheetColumn field="name" name="name">
                        {value => <strong>你好 {value}</strong>}
                    </SheetColumn>
                    <SheetColumn field="name" name="name">
                        {(value, i) => <strong>你好 {value}，你的id是 {list[i].id}</strong>}
                    </SheetColumn>
                    <SheetColumn field="asfafasfas" name="field乱来">
                        {(value, i) => <strong>你好 {list[i].name}，你的id是 {list[i].id}</strong>}
                    </SheetColumn>
                    <Pagination data={this.state.pagination} toPage={this.handlePage}/>
                    <PaginationText data={this.state.pagination}/>

                    <SheetAction>
                        {(eList, i) => (
                            <div>
                                <button className="btn btn-xs btn-default gm-marginRight5"
                                        onClick={this.handleAction.bind(this, eList, i)}>删除
                                </button>
                            </div>
                        )}
                    </SheetAction>
                    <SheetSelect onSelect={this.handleSelect} onSelectAll={this.handleSelectAll}/>
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

const key = 'testValue';
class StorageWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Storage.get(key) || ''
        };
    }

    render() {
        return (
            <div>
                刷新后看到存储的数据
                <input type="text" value={this.state.value}
                       onChange={event => this.setState({value: event.target.value})}/>
                <Storage name={key} value={this.state.value}/>
            </div>
        );
    }
}

window.Storage = Storage;

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="date">数据</h1>
                <h2 id="sheet">Sheet</h2>
                <SheetWrap/>
                <h2 id="importLead">ImportLead</h2>
                <ImportLeadWrap/>
                <h2 id="Storage">Storage</h2>
                <StorageWrap/>
            </div>
        );
    }
}

export default Component;