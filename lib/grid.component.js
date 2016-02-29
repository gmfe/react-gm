import React from 'react';
import Pagination from './pagination.component.js';
import PaginationText from './pagination.text.component.js';
import _ from 'underscore';

var GridHead = React.createClass({
    render: function () {
        var data = this.props.data;

        var isSelectAll = false;
        if (data.list.length > 0) {
            isSelectAll = _.filter(data.list, function (value) {
                    return value._gm_select;
                }).length === data.list.length;
        }

        return (
            <thead>
            <tr>
                {data.enableSelect ? (
                    <th className="gm-grid-select"><input type="checkbox" checked={isSelectAll}
                                                          onChange={this.onSelect}/>
                    </th>) : undefined}
                {data.columns.map((col, i) => (<th key={i} style={col.style}>{col.name}</th>))}
                {data.actions.length > 0 ? (<th>操作</th>) : undefined}
            </tr>
            </thead>
        );
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
            loading: false,
            actions: [],
            batchs: [],
            list: [],
            select: function () {
            },
            selectAll: function () {
            },
            toPage: function () {
            }
        }, data);
        data.actions.forEach(function (action) {
            action.isShow = action.isShow || function () {
                    return true;
                };
        });

        data.list.forEach(function (elist) {
            elist._gm_select = elist._gm_select === undefined ? false : elist._gm_select;
        });
        return data;
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: this.processData(nextProps.data)
        });
    },
    render: function () {
        var t = this;
        var data = this.processData(this.props.data);
        var actions = data.actions;
        var batchs = data.batchs;

        var tableBody;
        if (data.loading) {
            tableBody = (<tr>
                <td colSpan="99" className="text-center"><i className="icon icon-spin ico-spinner2"></i></td>
            </tr>);
        } else if (data.list.length === 0) {
            tableBody = (<tr>
                <td colSpan="99" className="text-center">无</td>
            </tr>);
        } else if (data.list.length > 0) {
            tableBody = data.list.map(function (elist, index) {
                var tds = data.columns.map(function (col, i) {
                    // 转换成字符串，避免 true false 没显示
                    if (col.render) {
                        return (<td key={i}>{col.render(elist[col.field], elist)}</td>);
                    } else {
                        return (<td key={i}>{elist[col.field]}</td>);
                    }
                });

                var buttons = actions.map(function (action, i) {
                    var classes = 'btn btn-default btn-xs ' + action.className;
                    if (!!action.isShow(elist, index) === false) {
                        classes += ' hidden';
                    }
                    return (
                        <button key={i} onClick={t.onActions.bind(t, elist, index, action)}
                                className={classes}>{action.text}</button>
                    );
                });

                return (
                    <tr key={index}>
                        {data.enableSelect ? (
                            <td><input type="checkbox" checked={elist._gm_select} onChange={t.onSelect.bind(t, index)}/>
                            </td>) : undefined}
                        {tds}
                        {actions.length > 0 ? (<td>{buttons}</td>) : undefined}
                    </tr>
                );
            });
        }

        var batchButtons = batchs.map(function (batch, i) {
            var classes = 'btn btn-default btn-sm ' + batch.className;
            return (
                <button key={i} onClick={t.onBatchs.bind(t, batch)} className={classes}>{batch.text}</button>
            );
        });

        var pagination = (
            <div>
                {data.enablePagination ? (<div className="pull-right">
                    <Pagination data={data.pagination} toPage={t.onToPage}></Pagination>
                </div>) : undefined}
                {data.enablePaginationText ? (<div className="pull-right">
                    <PaginationText data={data.pagination}></PaginationText>
                </div>) : undefined}
            </div>
        );

        return (
            <div className="gm-grid">
                <div className="gm-grid-top gm-marginBottom5">
                    {data.enableSelect ? <div className="gm-grid-batch">{batchButtons}</div> : undefined}
                </div>

                <table className="table table-striped table-hover table-condensed table-bordered">
                    <GridHead data={data} onSelect={t.onSelectAll}></GridHead>
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <div className="gm-grid-foot clearfix">
                    <div className="pull-left gm-grid-batch">

                    </div>

                    {data.pagination ? pagination : undefined}
                </div>
            </div>
        );
    },
    onActions: function (elist, index, action) {
        action.click(elist, index);
    },
    onBatchs: function (batch) {
        var lists = this.props.data.list.filter(function (elist) {
            return elist._gm_select;
        });
        if (lists.length > 0) {
            batch.click(lists);
        }
    },
    onSelect: function (index) {
        this.props.data.select(index);
    },
    onSelectAll: function (bool) {
        this.props.data.selectAll(bool);
    },
    onToPage: function (page, index) {
        this.state.data.toPage(page, index);
    }
});


export default Grid;
