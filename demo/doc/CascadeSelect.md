---
imports:
    import {CascadeSelect} from '../../src/index';
---
## CascadeSelect

Cascade 的多选版本。按delete可以删除选择。

::: demo 以下example依赖的数据
```js
const cascadeData = [{
    value: '0',
    name: '广东',
    children: [{
        value: '01',
        name: '深圳'
    }, {
        value: '02',
        name: '广州',
        children: [{
            value: 'ddddd',
            name: 'ddddd',
            children: [{
                value: 'eeeee',
                name: 'eeeee'
            }]
        }]
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
class CascadeSelect1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: [[cascadeData[0], cascadeData[0].children[0]]],
            data: cascadeData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
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
<CascadeSelect1/>
```
:::

::: demo 多选带搜索
```js
class CascadeSelectWithFilter1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: [[cascadeData[0], cascadeData[0].children[0]]],
            data: cascadeData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                multiple
                filterable
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascadeSelectWithFilter1/>
```
:::

::: demo 单选
```js
class CascadeSelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            data: cascadeData,
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascadeSelect2/>
```
:::

::: demo 单选带搜索
```js
class CascadeSelectWithFilter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            data: cascadeData,
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                filterable
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascadeSelectWithFilter2/>
```
:::

::: demo 单选带搜索 & onlyChildSelectable
```js
class CascadeSelectWithFilter3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            data: cascadeData,
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                filterable
                onlyChildSelectable
                data={this.state.data}
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
```
```jsx
<CascadeSelectWithFilter3/>
```
:::


::: demo 自定义显示
```js
class CascadeSelect3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [[cascadeData[0], cascadeData[0].children[0]]],
            data: cascadeData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    // 自定义已选择展示
    selectedRender(value) {
        return value[value.length - 1].name;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
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
<CascadeSelect3/>
```
:::

::: demo 禁止点击and选择
```js
class CascadeSelect4 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: [[cascadeData[0], cascadeData[0].children[0]]],
            data: cascadeData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                disabled
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
<CascadeSelect4/>
```
:::

::: demo inputProps的使用
```js
class CascadeSelect5 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: [[cascadeData[0], cascadeData[0].children[0]]],
            data: cascadeData
        };
        this.handleSelect = ::this.handleSelect;
    }
    
    handleSelect(selected) {
        console.log('handleSelect', selected);
        this.setState({
            selected
        });
    }
    
    render() {
        return (
            <CascadeSelect
                inputProps={{
                    'placeholder': '请选择...'
                }}
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
<CascadeSelect5/>
```
:::

### Props
- `data (array|isRequired)` 同Cascade的data
- `selected (array)` Cascade的value的数组版本[Cascade.value]
- `onSelect (func|isRequired)` 提供和selected一样的数组
- `multiple (bool)` 是否支持多选
- `selectRender (func)` 自定义已选择渲染
- `inputProps (object)` 定义里面input的props
- `disabled (bool)` 禁用CascadeSelect
- `valueRender (func)` 自定义value的展现
- `filterable` 搜索，支持拼音模糊搜索
