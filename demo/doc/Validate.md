做校验是件很必须且烦心的事情，需要各种判断，各种正则。
然而正则本身就是件很成本高的理解，复杂的正则可读和维护都不堪。

于是就有了 **Validate**

# 使用
举个例子
- 校验不为空
```js
var Validate from 
// 如果通过校验则返回true，否则返回false
Validate('*', value); 
```

- 校验5位数字，至少5位数字，3到5位数字
```js
// 如果通过校验则返回true，否则返回false
Validate('n5', value);
Validate('n5-', value);
Validate('n3-5', value);
```

- 校验手机号码
```js
// 如果通过校验则返回true，否则返回false
Validate('m')
```

# 规则
```js
// 以下是可重复的
// *：任何字符
// n：数字（只0-9的重复）
// s：字符
// l：字母
// nl: 数字和字母
// zh: 中文

// 以下是某具体类型
// num:  数字 123  0.123
// p：邮政编码
// m：手机号码
// e：email
// url：网址
```

如果以上规则都没有，你还可以传入正则，不过这没啥意思。后面我们再介绍自定义规则。
```js
Validate(/\d+/, value);
```

# 错误信息
除了校验返回true，false。失败的时候还可以返回具体的错误信息。
```js
// 传递第三个参数true即可
Validate('n5', value, true); // 成功true，失败"请填入5位数字！"
Validate('n5-', value, true); // 成功true，失败"请填入至少5位数字！"
Validate('n3-5', value, true); // 成功true，失败"请填入3到5位数字！"
```

# 自定义规则
`Validate`是一个函数，其下还有个方法`Validate.factory`。
其实上面的规则就是通过`Validate.factory`定义的。
```js
Validate.factory('*', function () {
    return {
        range: true,
        rule: '[\\w\\W]',
        tip: ['不能为空！', '请填写{min}位任意字符！', '请填写至少{min}位任意字符！', '请填写{min}到{max}位任意字符！']
    };
});

Validate.factory('url', function () {
    return {
        rule: '(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*',
        tip: '请填写网址'
    };
});
```

**什么用**
内置的规则有限，而且很难覆盖业务上的规则。
比如'K12345,K123123'这种很业务的校验只能在业务代码定义了。 
我们可以开个`validate.gmb.js`模块专门写业务校验。

# 最后
看到这里，Validate本身很简单，无非就是
- 有范围的校验
- 无范围的校验
- 错误提示
- 自定义规则

Validate会随着越来越多的使用而增加更多的内置方法。希望一起来壮大。
