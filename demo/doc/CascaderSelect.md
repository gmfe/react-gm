---
imports:
    import {CascaderSelect} from '../../src/index';
---
## CascaderSelect

Cascader 的多选版本。按delete可以删除选择。

::: demo 以下example依赖的数据
```js
const cascaderData = [{
    value: '0',
    name: '广东',
    children: [{
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

::: demo 多选
```js
class CascaderSelect1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: [[cascaderData[0], cascaderData[0].children[0]]],
            data: cascaderData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascaderSelect
                multiple
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascaderSelect1/>
```
:::

::: demo 单选
```js
class CascaderSelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            data: cascaderData,
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascaderSelect
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascaderSelect2/>
```
:::

::: demo 自定义显示
```js
class CascaderSelect3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [[cascaderData[0], cascaderData[0].children[0]]],
            data: cascaderData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    // 自定义已选择展示
    selectedRender(value) {
        return value[value.length - 1].name;
    }
    
    handleSelect(selected) {
        console.log(selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascaderSelect
                multiple
                selectedRender={this.selectedRender}
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascaderSelect3/>
```
:::

### Props
- `data (array|isRequired)` 同Cascader的data
- `selected (array)` Cascader的value的数组版本[Cascader.value]
- `onSelect (func|isRequired)` 提供和selected一样的数组
- `multiple (bool)` 是否支持多选
- `selectRender (func)` 自定义已选择渲染
- `disabled (bool)` 禁用CascaderSelect