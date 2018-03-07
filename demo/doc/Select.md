---
imports:
    import {Select, Option} from '../../src/index';
    import _ from 'lodash';
---
## Select
原生select在onChange的时候是字符串，经常要转换，累。

同时隐藏了多选的特别处理逻辑

data-size属性可控制`Select`的大小: `sm`, `md`, `lg`

默认是 `md`

一定要配合`Option`使用

::: demo 单选，提供value的原始值出来，而非原生的字符串。 
```js
const list_1 = _.map(_.range(8), v => ({
    value: 'a_' + v,
    name: 'a_' + v
}));
const list_2 = _.map(_.range(8), v => ({
    value: 'b_' + v,
    name: 'b_' + v
}));
const list_3 = _.map(_.range(8), v => ({
    value: 'c_' + v,
    name: 'c_' + v
}));
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list_1: list_1,
            list_2: list_2,
            list_3: list_3,
            value_1: list_1[0].value,
            value_2: list_2[0].value,
            value_3: list_3[0].value,
        };
    }
    
    handleChange(name, value){
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    render() {
        const {list_1, list_2, list_3, value_1, value_2, value_3} = this.state;

        return (
            <div>
                <Select value={value_1} onChange={this.handleChange.bind(this, 'value_1')} data-size="sm">
                    {_.map(list_1, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>  select-sm
                <div className="gm-margin-15"></div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')}>
                    {_.map(list_2, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>  select-md
                <div className="gm-margin-15"></div>
                <Select value={value_3} onChange={this.handleChange.bind(this, 'value_3')} data-size="lg">
                    {_.map(list_3, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>  select-lg
            </div>
        );
    }
}
```
```jsx
<Component/>
```
:::

::: demo  selection disabled
```js
class Component2 extends React.Component {
    constructor(props){
        super(props);
        const list = _.map(_.range(8), v => ({
            value: v,
            name: 'item' + v
        }));
        this.state = {
            list,
            value: list[0].value
        };
        this.handleChange = ::this.handleChange;
    }
    
    handleChange(value){
        console.log(value);
        this.setState({
            value
        });
    }
    
    render() {
        const {list, value} = this.state;
        
        return (
            <div>
                <Select value={value} onChange={this.handleChange} disabled>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
            </div>
        );
    }
}
```
```jsx
<Component2/>
```
:::

::: demo option disabled
```js
class Component3 extends React.Component {
    constructor(props){
        super(props);
        const list = _.map(_.range(8), v => ({
            value: v,
            name: 'item' + v
        }));
        this.state = {
            list,
            value: list[1].value
        };
        this.handleChange = ::this.handleChange;
    }

    handleChange(value){
        console.log(value);
        this.setState({
            value
        });
    }

    render() {
        const {list, value} = this.state;
        console.log(list, value,'---');
        return (
            <div>
                <Select value={value} onChange={this.handleChange}>
                    <Option value="option disabled" disabled>Option Disabled</Option>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
            </div>
        );
    }
}
```
```jsx
<Component3/>
```
:::

### Props
- `multiple (bool)`
- `value (any|isRequired)`
- `onChange (func)`