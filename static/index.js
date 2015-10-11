import React from 'react';
import ReactDOM from 'react-dom';
import  Grid from './grid.component.js';


//let onClick = (() => console.log(arguments));
let onClick = function () {
    console.log(arguments);

};

let gridData = {
    columns: [
        {field: 'id', name: 'id', style: 'color: red;'},
        {field: 'name', name: '名字'},
        {field: 'age', name: '年龄'},
        {field: 'gender', name: '性别'},
        {field: 'isOk', name: '是否'}
    ],
    actions: [{
        text: '删除1',
        className: 'btn-primary',
        click: onClick
    }, {
        text: '删除2'
    }],
    data: [{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10',
        gender: 1,
        isOk: false
    }, {
        id: 1,
        name: 'haha',
        age: '15',
        gender: 1,
        isOk: true
    }],
    getData: function () {
        return getData();
    },
    pagination: {
        total: 100,
        index: 10,
        size: 10
    }
};



function getData() {
    $.when({
        list: [{
            id: 1,
            name: '1123',
            age: '10',
            gender: 1,
            isOk: false
        }, {
            id: 1,
            name: 'haha',
            age: '15',
            gender: 1,
            isOk: true
        }, {
            id: 1,
            name: '有引号"有引号',
            age: '20',
            gender: 1,
            isOk: false
        }, {
            id: 1,
            name: '有逗号,有逗号',
            age: '25',
            gender: 2,
            isOk: false
        }]
    });
}

ReactDOM.render((
    <div>
        <Grid gridData={gridData}></Grid>
    </div>
), document.getElementById('grid-container'));
