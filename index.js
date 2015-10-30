import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './lib/grid.component.js';
import Droper from './lib/droper.component.js';

//let onClick = (() => console.log(arguments));
let onClick = function () {
    console.log(arguments);

};

let isShow = function () {
    console.log(arguments);
    return false;
};

let renderId = function (value, elist) {
    console.log(arguments);
    return 2;
};

var gridData = {
    enableSelect: true,
    enablePagination: true,
    enablePaginationText: true,
    loading: false,
    columns: [
        {field: 'id', name: 'id', render: renderId},
        {field: 'name', name: '名字'},
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
        id: 1,
        name: 'haha',
        age: '15'
    }],
    pagination: {
        count: 80,
        offset: 10,
        limit: 10
    },
    toPage: function (page) {
        console.log(arguments);
    }
};

var GridWrap = React.createClass({
    getInitialState: function () {
        return gridData;
    },
    render: function () {
        return (
            <div>
                <Grid data={this.state}></Grid>
            </div>
        )
    }
});

ReactDOM.render((
    <div>
        <GridWrap></GridWrap>
    </div>
), document.getElementById('grid-container'));


var DroperWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Droper onDrop={this.handleDrop} accept="image/*"></Droper>
                <Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
                    <button className="btn btn-default">upload</button>
                </Droper>
            </div>
        );
    },
    handleDrop: function () {
        console.log(arguments);
    }
});

ReactDOM.render((
    <div>
        <DroperWrap></DroperWrap>
    </div>
), document.getElementById('uploader-container'));
