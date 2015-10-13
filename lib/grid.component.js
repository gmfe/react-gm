import React from 'react';
import Pagination from './pagination.component.js';
import PaginationText from './pagination.text.component.js';


var GridHead = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <thead>
            <tr>
                {data.enableSelect ? (
                    <th className="gm-grid-select"><input type="checkbox" onClick={this._onSelect}/>
                    </th>) : ''}
                {data.columns.map(col => (<th>{col.name}</th>))}
                {data.actions.length > 0 ? (<th>操作</th>) : ''}
            </tr>
            </thead>
        )
    },
    _onSelect: function (event) {
        var onSelect = this.props.onSelect;
        onSelect(event.target.checked);
    }
});

var Grid = React.createClass({
    _processData: function (data) {
        data = Object.assign({
            enableSelect: false,
            actions: [],
            batchs: [],
            list: [],
            toPage: function () {
            }
        }, data);
        data.actions.forEach(function (action) {
            action.isShow = action.isShow || function () {
                    return true;
                };
        });

        data.list.forEach(function (elist) {
            elist.___select = false;
        });
        return data;
    },
    render: function () {
        var t = this;
        var data = this._processData(this.props.data);
        var actions = data.actions;
        var batchs = data.batchs;

        var tableBody = data.list.map(function (elist, index) {
            var tds = data.columns.map(function (col) {
                // 转换成字符串，避免 true false 没显示
                if (col.render) {
                    return (<td>{'' + col.render(elist[col.field], elist)}</td>);
                } else {
                    return (<td>{'' + elist[col.field]}</td>);
                }
            });

            var buttons = actions.map(function (action) {
                var classes = 'btn btn-default btn-xs ' + action.className;
                if (action.isShow(elist, index) === false) {
                    classes += ' hidden';
                }
                return (
                    <button onClick={t._onActions.bind(t, elist, index, action)}
                            className={classes}>{action.text}</button>
                );
            });

            return (
                <tr>
                    {data.enableSelect ? (<td><input type="checkbox" onClick={t._onSelect.bind(t)}/></td>) : ''}
                    {tds}
                    {actions.length > 0 ? (<td>{buttons}</td>) : ''}
                </tr>
            );
        });

        var batchButtons = batchs.map(function (batch) {
            var classes = 'btn btn-default btn-sm ' + batch.className;
            return (
                <button onClick={t._onBatchs.bind(t, batch)} className={classes}>{batch.text}</button>
            );
        });

        return (
            <div className="gm-grid">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <GridHead data={data} onSelect={t._onSelectAll}></GridHead>
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <div className="gm-grid-foot clearfix">
                    <div className="pull-left gm-grid-batch">
                        {data.enableSelect ? batchButtons : ''}
                    </div>

                    <div className="pull-right">
                        <Pagination data={data.pagination} toPage={t._onToPage}></Pagination>
                    </div>
                    <div className="pull-right">
                        <PaginationText data={data.pagination}></PaginationText>
                    </div>
                </div>
            </div>
        );
    },
    _onActions: function (elist, index, action) {
        action.click(elist, index);
    },
    _onBatchs: function (batch) {
        var lists = [];
        batch.click(lists);
    },
    _onSelect: function () {
        // TODO 还没搞清楚如何设计
    },
    _onSelectAll: function () {
        // TODO 还没有搞清楚如何设计
    },
    _onToPage: function (page) {
        this.props.data.toPage(page);
    }
});


export default Grid;
