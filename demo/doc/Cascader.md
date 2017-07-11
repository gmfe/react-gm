---
imports:
    import {Cascader, Flex} from '../../src/index.js';
    import _ from 'lodash';
---
## Cascader

多级选择器 (多选版本[CascaderSelect](#/doc/CascaderSelect))

::: demo 以下example依赖的数据
```js
const cascaderData = [{
    value: '0',
    name: '广东',
    children: [{
        value: '01',
        name: '深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳'
    }, {
        value: '02',
        name: '广州'
    }]
}, {
    value: '1',
    name: '上海',
    children: [{
        value: '11',
        name: '上海1'
    }, {
        value: '12',
        name: '上海2',
        children: [{
            value: '121',
            name: 'adfadf'
        }]
    }]
}];
```
:::

::: demo 普通用法
```js
class Cascader1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascaderData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    data={this.state.data}
                    value={this.state.value}
                    onChange={::this.handleChange}
                />
            </div>
        );
    }
    
    handleChange(value) {
        console.log(value);
        this.setState({
            value
        });
    }
}
```

```jsx
<Cascader1/>
```
:::

::: demo 不提供value
```js
class Cascader2 extends React.Component {
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    data={cascaderData}
                />
            </div>
        );
    }
}
```
```jsx
<Cascader2/>
```
:::

::: demo 自定义value的显示
```js
class Cascader3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascaderData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    data={this.state.data}
                    value={this.state.value}
                    valueRender={(value) => (value && value.length > 0 ? value[value.length - 1].name : '')}
                    onChange={::this.handleChange}
                />
            </div>
        );
    }
    
    handleChange(value) {
        console.log(value);
        this.setState({
            value
        });
    }
}
```
```jsx
<Cascader3/>
```
:::

::: demo 更改input样式（sm尺寸）
```js
class Cascader4 extends React.Component {
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    data={cascaderData}
                    inputProps={{className: 'input-sm'}}
                />
            </div>
        );
    }
}
```
```jsx
<Cascader4/>
```
:::

::: demo 自定义children
```js
class Cascader5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascaderData
        };
    }
    
    render() {
        let value = [];
        if (this.state.value.length > 0) {
            _.each(this.state.value, (v, i) => {
                const match = _.find(i === 0 ? this.state.data : value[i - 1].children, val => {
                    return v === val.value;
                });
                value.push(match);
            });
        }
        
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    data={this.state.data}
                    onChange={::this.handleChange}
                >
                    <div>
                        {_.map(value, v => v.name).join(',')}
                        <button className="btn btn-primary btn-xs">add +</button>
                    </div>
                </Cascader>
            </div>
        );
    }
    
    handleChange(value) {
        console.log(value);
        this.setState({
            value
        });
    }
}
```
```jsx
<Cascader5/>
```
:::

::: demo 禁止选择
```js
class Cascader6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            data: cascaderData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascader
                    disabled
                    data={this.state.data}
                    value={this.state.value}
                    onChange={::this.handleChange}
                />
            </div>
        );
    }
    
    handleChange(value) {
        console.log(value);
        this.setState({
            value
        });
    }
}
```

```jsx
<Cascader6/>
```
:::



### Props
- `data (array|isRequired)` 格式如上面的data，`{'[{value: 1, name: \'深圳\', children: [{...}]}]'}` 。
- `value (array)` 一个数组或者null，表示选中了那些数据。 ['0']则选择了广东，['0', '01']则选择了广东，深圳
- `defaultValue` 同上
- `onChange (func)` 提供和value一样的数组
- `inputProps (object)` 定义里面input的props
- `valueRender (func)` 自定义value的展现
- `children` 自定义children的展现
- `disabled` 禁止选择