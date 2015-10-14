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
                    <th className="gm-grid-select"><input type="checkbox" onClick={this.onSelect}/>
                    </th>) : ''}
                {data.columns.map(col => (<th>{col.name}</th>))}
                {data.actions.length > 0 ? (<th>操作</th>) : ''}
            </tr>
            </thead>
        )
    },
    onSelect: function (event) {
        var onSelect = this.props.onSelect;
        onSelect(event.target.checked);
    }
});

var Grid = React.createClass({
    processData: function (data) {
        data = Object.assign({
            enableSelect: false, // 和 batchs 配合用
            enablePagination: false, // 和 pagination toPage 配合用
            enablePaginationText: false,
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
    getInitialState: function () {
        return {
            data: this.processData(this.props.data)
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: this.processData(nextProps.data)
        });
    },
    render: function () {
        var t = this;
        var data = this.state.data;
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
                    <button onClick={t.onActions.bind(t, elist, index, action)}
                            className={classes}>{action.text}</button>
                );
            });

            return (
                <tr>
                    {data.enableSelect ? (
                        <td><input type="checkbox" checked={elist.___select} onClick={t.onSelect.bind(t, elist)}/>
                        </td>) : ''}
                    {tds}
                    {actions.length > 0 ? (<td>{buttons}</td>) : ''}
                </tr>
            );
        });

        var batchButtons = batchs.map(function (batch) {
            var classes = 'btn btn-default btn-sm ' + batch.className;
            return (
                <button onClick={t.onBatchs.bind(t, batch)} className={classes}>{batch.text}</button>
            );
        });

        var pagination = (
            <div>
                <div className="pull-right">
                    <Pagination data={data.pagination} toPage={t.onToPage}></Pagination>
                </div>
                <div className="pull-right">
                    <PaginationText data={data.pagination}></PaginationText>
                </div>
            </div>
        );

        return (
            <div className="gm-grid">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <GridHead data={data} onSelect={t.onSelectAll}></GridHead>
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <div className="gm-grid-foot clearfix">
                    <div className="pull-left gm-grid-batch">
                        {data.enableSelect ? batchButtons : ''}
                    </div>

                    {data.pagination ? pagination : ''}
                </div>
            </div>
        );
    },
    onActions: function (elist, index, action) {
        action.click(elist, index);
    },
    onBatchs: function (batch) {
        var lists = this.state.data.list.filter(function (elist) {
            return elist.___select;
        });
        if (lists.length > 0) {
            batch.click(lists);
        }
    },
    onSelect: function (elist, event) {
        elist.___select = event.target.checked;
        this.setState({
            list: this.state.data.list
        });
    },
    onSelectAll: function (bool) {
        this.setState({
            list: this.state.data.list.map(function (elist) {
                elist.___select = bool;
            })
        });
    },
    onToPage: function (page) {
        this.state.data.toPage(page);
    }
});


export default Grid;
