import React from 'react';
import Addons from 'react/addons';
import ReactDOM from 'react-dom';
import Grid from './lib/grid.component.js';
import Droper from './lib/droper.component.js';
import Former from './lib/form.component.js';
import ValidationMixin from './lib/validation.mixin.js';
import Validation, {ValidationTip} from './lib/validation.js';


var onClick = function () {
    console.log(arguments);

};

var isShow = function () {
    //console.log(arguments);
    return false;
};

var renderId = function (value, elist) {
    //console.log(arguments);
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


var onSubmit = function (event) {
    console.log('app onsubmit');
    debugger;
};

var FormerDom = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ValidateMixin()],
    getInitialState: function () {
        return {
            input: 'adf',
            value: '2',
            list: [{
                value: '0',
                text: 'adf'
            }, {
                value: '2',
                text: '234'
            }]
        }
    },
    onChange:function(){
        console.log(arguments);
    },
    onSubmit: function () {
        this.validateAll(this.refs.myForm);
    },
    render: function () {
        return (
            <div>
                <Former ref="myForm" className="" onSubmit={this.onSubmit}>
                    <Former.Input name="name" onChange={this.validate('*', this.onChange)} >
                        <div className="text-danger">{this.validateTip('name')}</div>
                    </Former.Input>

                    <Former.Select name="gender2" value={this.state.value} options={this.state.list} onChange={this.validate('*')}>
                        <option value="">do</option>
                    </Former.Select>
                    <div className="form-group">
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>
                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </Former>
                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<FormerDom></FormerDom> , document.getElementById('form-container'));

console.log(Validate('*', 'a', true));
console.log(Validate('*2', 'a', true));
console.log(Validate('n', 'a', true));
console.log(Validate('n2', 'a', true));
console.log(Validate('s', 'a', true));
console.log(Validate('s2', 'a', true));
console.log(Validate('zh', 'ad2fAf', true));
console.log(Validate('zh3', '你好', true));