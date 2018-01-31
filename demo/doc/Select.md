---
imports:
    import {Select, Option} from '../../src/index';
    import _ from 'lodash';
---
## Select
原生select在onChange的时候是字符串，经常要转换，累。

同时隐藏了多选的特别处理逻辑

一定要配合`Option`使用

::: demo 单选，提供value的原始值出来，而非原生的字符串。 
```js
class Component extends React.Component {
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
        console.log(list, value,'---');
        return (
            <div>
                <Select value={value} onChange={this.handleChange} style={{width: '200px', height: '40px'}}>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
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