---
imports:
    import {Cascade, Flex} from '../../src/index.js';
    import _ from 'lodash';
---
## Cascade

多级选择器 (多选版本[CascadeSelect](#/doc/CascadeSelect))

::: demo 以下example依赖的数据
```js
const cascadeData = [{
    value: '0',
    name: '广东',
    children: [{
        value: '0',
        name: '全部'
    },{
        value: '04',
        name: '官方'
    },{
        value: '31',
        name: '上海'
    },{
        value: '01',
        name: '深圳'
    }, {
        value: '02',
        name: '广州'
    }]
}, {
    value: '1',
    name: '上海',
    children: [{
        value: '0',
        name: '全部'
    },{
        value: '11',
        name: '上海1'
    }, {
        value: '12',
        name: '上海2',
        children: [{
        value: '0',
        name: '全部'
    },{
            value: '121',
            name: 'sssss'
        },{
            value: '122',
            name: 'ggggggggggggggggggggggggggggggggggg2'
        },{
            value: '123',
            name: 'tttt'
        },{
            value: '124',
            name: 'eeeee'
        },{
            value: '125',
            name: 'ggghh'
        },{
            value: '126',
            name: 'kjtu'
        },{
            value: '127',
            name: 'rwe345'
        },{
            value: '128',
            name: 'krt'
        },{
            value: '129',
            name: 'mbnbxc'
        }]
    }]
}, {
    value: 'r',
    name: 'rrrr',
    children: [{
        value: '0',
        name: '全部'
    },{
        value: 'rr',
        name: 'yyyy'
    }]
}];
```
:::

::: demo 普通用法
```js
class Cascade1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascadeData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
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
<Cascade1/>
```
:::


::: demo filterable用法
```js
class CascadeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascadeData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
                    filterable
                    onlyChildSelectable
                    data={this.state.data}
                    value={this.state.value}
                    onChange={::this.handleChange}
                />
            </div>
        );
    }
    
    handleChange(value) {
        console.log('handleChange:', value);
        this.setState({
            value
        });
    }
}
```

```jsx
<CascadeFilter/>
```
:::


::: demo 不提供value
```js
class Cascade2 extends React.Component {
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
                    data={cascadeData}
                />
            </div>
        );
    }
}
```
```jsx
<Cascade2/>
```
:::

::: demo 自定义value的显示
```js
class Cascade3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascadeData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
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
<Cascade3/>
```
:::

::: demo 更改input样式（sm尺寸）
```js
class Cascade4 extends React.Component {
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
                    data={cascadeData}
                    inputProps={{className: 'input-sm'}}
                />
            </div>
        );
    }
}
```
```jsx
<Cascade4/>
```
:::

::: demo 自定义children
```js
class Cascade5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['0', '01'],
            data: cascadeData
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
                <Cascade
                    data={this.state.data}
                    onChange={::this.handleChange}
                >
                    <div>
                        {_.map(value, v => v.name).join(',')}
                        <button className="btn btn-primary btn-xs">add +</button>
                    </div>
                </Cascade>
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
<Cascade5/>
```
:::

::: demo 禁止选择
```js
class Cascade6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            data: cascadeData
        };
    }
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Cascade
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
<Cascade6/>
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
- `filterable` 搜索，支持拼音模糊搜索
