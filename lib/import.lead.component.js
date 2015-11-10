var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Droper = require('./droper.component');

var ImportLead = React.createClass({
    getInitialState: function () {
        return {
            selectedFile: null
        };
    },
    render: function () {
        var t = this;
        var data = _.extend({columns: [], list: []}, t.props.data);
        var tips = t.props.tips || [];

        var tipsMap = {};

        var lineMap = _.map(data.list, () => false);

        _.each(tips, function (tip, index) {
            tipsMap[tip.index] = tipsMap[tip.index] || {};
            tip._index = index;
            tipsMap[tip.index][tip.field] = tip;

            if (!tip.modifyed) {
                lineMap[tip.index] = true;
            }
        });

        var tableBody = data.list.map(function (elist, index) {

            var tds = data.columns.map(function (col, i) {
                var tip = tipsMap[index] && tipsMap[index][col.field];
                return tip ? (
                    <td key={i} className={tip.modifyed ? "gm-bg-info" : "gm-bg-invalid"}>
                        <input type="text" value={elist[col.field]}
                               onChange={t.handleEdit.bind(t, index, col.field, tip._index)}/>

                        <small className="gm-import-lead-tip badge"><i>{tip.msg}</i></small>
                    </td>
                ) : (
                    <td key={i}>
                        {elist[col.field]}
                    </td>
                );
            });

            return (
                <tr key={index}>{tds}</tr>
            );
        });

        var canSubmit = _.filter(tips, function (value) {
                return value.modifyed === true;
            }).length === tips.length;


        var filename = t.state.selectedFile ? t.state.selectedFile.name : '';

        var fileTempUrl = t.props.fileTempUrl;

        return (
            <div className="gm-import-lead">
                <div>
                    <div>
                        <Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
                            <button className="btn btn-primary btn-sm">上传xlsx</button>
                        </Droper>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button disabled={!canSubmit} className="btn btn-primary btn-sm" onClick={this.handleSubmit}>提交</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {fileTempUrl ? (<a href={fileTempUrl} target="blank">上传模板下载</a>) : undefined}
                        <div>{filename}</div>
                    </div>
                    <div className="gm-import-line clearfix">
                        {lineMap.map((v, i) => (
                            <div key={i} className={v ? "tip": ""} onClick={this.handleLine.bind(this, i)}></div>))}
                    </div>
                </div>
                <div className="gm-import-lead-content" ref="content">
                    {data ? (
                        <table className="table table-condensed table-bordered" ref="table">
                            <thead>
                            <tr>
                                {data.columns.map((col, i) => (
                                    <th key={i}>{col.name}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {tableBody}
                            </tbody>
                        </table>) : undefined}
                </div>
            </div>
        );
    },
    handleEdit: function (index, field, i, event) {
        var t = this;
        if(t.props.onEdit){
            t.props.onEdit(index, field, event.target.value, i);
        }
    },
    handleSubmit: function (event) {
        var t = this;
        event.preventDefault();
        if (t.props.onSubmit) {
            t.props.onSubmit();
        }
    },
    handleLine: function (index) {
        var t = this;
        var content = ReactDOM.findDOMNode(t.refs.content);
        var table = ReactDOM.findDOMNode(t.refs.table);
        content.scrollTop = index / t.props.data.list.length * table.offsetHeight;
    },
    handleDrop: function (files) {
        var t = this;
        t.setState({
            selectedFile: files[0]
        });
        if (files[0] && t.props.onDrop) {
            t.props.onDrop(files[0]);
        }
    }
});

module.exports = ImportLead;
