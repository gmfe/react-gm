# 准备
import ReactGM from 'react-gm';
import 'react-gm.css';

grid 组件需要引入样式

# 表现


# 使用

```js
var Grid = ReactGM.Grid;

var renderId = function(value){
    return value + ' something';
};

var onClick = function(colValue, index){
    // something
};

var isShow = function(colValue, index){
    // something
};

var onBatchClick = function(selectCols){
    // something
};

var gridData = {

    // 是否允许checkbox，配合下面的batchs 使用
    enableSelect: true,
    
    // 是否有页码，一共两种形式
    enablePagination: true,
    enablePaginationText: true,
    
    // load true 表示在拉取数据，此时表格只有thead，tbody是loading图标。
    // 注意，loading 为true时优先级高，list有内容也没用，加载完后记得设置回false
    loading: true,
    
    // 定义表格数据对应。
    // 其中render为一个函数做特殊渲染，参数value。 
    // 比如 pay_method是1， 可以通过render渲染“线上支付”到界面。
    // 比如 date对象，通过render来对date转换成 2015-11-11等。
    // 其实对list赋值前做转换就好了啊，为什么要引入render？ 建议不修改原数据，数据归数据，展现归展现。
    columns: [
        {field: 'id', name: 'id', render: renderId},
        {field: 'name', name: '名字'},
        {field: 'age', name: '年龄'}
    ],
    
    // 操作。如果提供则表格右侧会出现操作栏。 
    // click为一个函数，参数该列的数据和索引.
    // isShow同上
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
    // batchs是批量操作，click函数提供勾选后的列数据集。
    batchs: [{
        text: '批量操作',
        className: 'btn-primary',
        click: onBatchClick
    }, {
        text: 'adsf',
        click: onBatchClick
    }],
    
    // grid 的数据原
    list: [{
        id: 1,
        name: '偶们啊啊发骚发所发生的',
        age: '10'
    }, {
        id: 1,
        name: 'haha',
        age: '15'
    }],
    
    // 页码部分 
    pagination: {
        count: 80,
        offset: 10,
        limit: 10
    },
    
    // page格式是{offset:20, limit:20}
    toPage: function (page) {
        console.log(arguments);
    }
};

var GridWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Grid data={gridData}></Grid>
            </div>
        )
    }
});
```