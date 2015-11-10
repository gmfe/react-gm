import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './lib/grid.component.js';
import Droper from './lib/droper.component.js';
import ImportLead from './lib/import.lead.component.js';
import _ from 'underscore';

var gridData = {
    loading: false,
    columns: [
        {field: 'id', name: 'id'},
        {field: 'name', name: '名字'},
        {field: 'age', name: '年龄'}
    ],
    list: [{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    },{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    },{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    },{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    },{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }, {
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 2,
        name: 'haha',
        age: '15'
    }]
};
//var gridData = null;
var tipsData = [
    {"index": 1, "msg": "sdf", "field": "id"},
    {"index": 3, "msg": "sdf", "field": "name"},
    {"index": 7, "msg": "sdf", "field": "id"},
    {"index": 4, "msg": "sdf", "field": "name"},
    {"index": 0, "msg": "这里不对啊", "field": "id"}
];

var ImportLeadWrap = React.createClass({
    getInitialState: function () {
        return {
            data: gridData,
            tips: tipsData
        };
    },
    render: function () {
        var data = this.state.data;
        var tips = this.state.tips;

        return (
            <div style={{height: 600}}>
                <ImportLead data={data} tips={tips} fileTempUrl="http://www.baidu.com"
                            onEdit={this.handleEdit}></ImportLead>
            </div>
        );
    },
    componentDidMount: function(){
        var t = this;
        setTimeout(function () {

            t.setState(t.state);
        }, 5000);
    },
    handleEdit: function () {
        console.log(arguments);
    }
});


ReactDOM.render(<ImportLeadWrap></ImportLeadWrap>, document.getElementById('import-lead-container'));