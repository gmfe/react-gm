# 准备
import ReactGM from 'react-gm';
import 'react-gm.css';

grid 组件需要引入样式

# 表现


# 使用
没什么好解释的，看代码
```js
/*
Droper.propTypes = {
    onDrop: React.PropTypes.func,
    onDropAccepted: React.PropTypes.func,
    onDropRejected: React.PropTypes.func,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,

    disableClick: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
    accept: React.PropTypes.string
};

其中accept可以是
image/*
.xlsx
...等等

其中gm-droper-block会包围里面的元素。 
*/

var Droper = ReactGM.Droper;

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
    handleDrop: function (files, event) {
        console.log(arguments);
    }
});
```