import Pagination from './pagination.component.js';
import React from 'react';

var GridHead = React.createClass({
    render: function () {
        var columns = this.props.columns;
        var actions = this.props.actions;
        return (
            <thead>
            <tr>
                {columns.map(col => (<th>{col.name}</th>))}
                {actions.length > 0 ? (<th>操作</th>) : ''}
            </tr>
            </thead>
        )
    }
});

var Grid = React.createClass({
    render: function () {
        var t = this;
        var gridData = this.props.gridData;
        var actions = gridData.actions;

        var tableBody = gridData.data.map(function (eData, index) {
            var tds = gridData.columns.map(function (col) {
                // 转换成字符串，避免 true false 没显示
                return (<td>{'' + eData[col.field]}</td>);
            });

            var buttons = actions.map(function (action) {
                var classes = 'btn btn-default btn-xs ' + action.className;
                return (<button onClick={t._onActions.bind(t, eData, index, action)}
                                className={classes}>{action.text}</button>);
            });

            return (
                <tr>
                    {tds}
                    {actions.length > 0 ? (<td>{buttons}</td>) : ''}
                </tr>
            );
        });

        return (
            <div className="gm-grid">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <GridHead columns={gridData.columns} actions={gridData.actions}></GridHead>
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <div className="gm-grid-foot clearfix">
                    <div className="pull-right">
                        <Pagination paginationData={gridData.pagination} onPage={t._onPage.bind(this)}></Pagination>
                    </div>
                </div>
            </div>
        );
    },
    _onActions: function (eData, index, action) {
        console.log(arguments);
        action.click(eData, index);
    },
    _onPage: function () {
        
    }
});


export default Grid;
