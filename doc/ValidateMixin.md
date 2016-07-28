---已经稳定在冲账系统中使用---

# 先看看应用场景
![form](https://cloud.githubusercontent.com/assets/1010130/11001619/088f41dc-84e3-11e5-8c40-542704e8d1de.gif)

# 痛点
做校验是个烦人的事情，表单验证就更麻烦了
所以才有了 [Validate](https://github.com/gmfe/react-gm/issues/5) 和 ValidateMixin

ValidateMixin 连接 form 和 Validate。 
Validate专注做校验，ValidateMixin专注校验的展示。

废话好多...

# demo
```js
var FormerDom = React.createClass({
    mixins: [ValidateMixin()],
    onChange: function () {
        console.log(arguments);
    },
    render: function () {
        return (
            <div style={{width: 300}}>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type="text" className="form-control" name="email" onChange={this.validate('e')}/>

                        <div className="text-danger">{this.validateTip('email')}</div>
                    </div>

                    <div className="form-group">
                        <label>三到5位任意字符</label>
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>

                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </form>

                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(this.validateAll(this.refs.myForm));
    }
});
```

# 说明
首先 ValidateMixin() ，运行一个函数的目的是为了以后更好的扩展。虽然目前没鸟用。

其次，监听onChange变化实时校验。 当然也可以onFocus onBlue 都是ok的。
validate('e') 的 规则 'e' 可以去查看 Validate 组件。
```js
<input type="text" className="form-control" name="email" onChange={this.validate('e')}/> 
```

然后，展示错误信息。 其中 'email' 是具体的 input name。 在表单中设置input的name是个好习惯，而且有很多好处。 [Former](https://github.com/gmfe/react-gm/issues/3) 中会介绍。
```js
<div className="text-danger">{this.validateTip('email')}</div>
```

也许你发现了输入框会变红，那是因为如果校验不通过会给元素增加 gm-invalid className，成功就会去掉。

如果你想在某个地方展示表单整体的错误情况。 区别是不提供参数。
```js
this.validateTip()
```

最后我们要提交表单啦。  当然提交前还是要校验的。
需要提供form 元素的引用。 为啥？原因是某些技术点没摸透，得通过ref去查找使用validate的地方。（求各路大侠献策）
```js
this.validateAll(this.refs.myForm)
```

# end
就这些...