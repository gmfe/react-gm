---
imports:
    import {
        Radio, RadioGroup,
        Checkbox, CheckboxGroup
    } from '../../src/index';
---
## Radio & Checkbox

配合`RadioGroup`一起用，onChange返回的是原始值，非原始radio组件的字符串值

::: demo
```js
class RadioWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: null,
            city2: null,
            city3: [],
            city4: []
        };
    }
    
    render() {
        return (
            <div>
                <RadioGroup name="city" value={this.state.city} onChange={v => this.setState({city: v})}>
                    <Radio value={1} disabled>广州</Radio>
                    <Radio value={2}>深圳</Radio>
                </RadioGroup>
                <hr/>
                <RadioGroup
                    name="city2"
                    inline
                    value={this.state.city2}
                    onChange={v => this.setState({city2: v})}
                >
                    <Radio value={1} disabled>广州</Radio>
                    <Radio value={2}>深圳</Radio>
                </RadioGroup>
                <hr/>
                <CheckboxGroup name="city3" value={this.state.city3} onChange={v => this.setState({city3: v})}>
                    <Checkbox value={1} disabled>广州</Checkbox>
                    <Checkbox value={2}>深圳</Checkbox>
                </CheckboxGroup>
                <hr/>
                <CheckboxGroup
                    name="city4"
                    inline
                    value={this.state.city4}
                    onChange={v => this.setState({city4: v})}
                >
                    <Checkbox value={1} disabled>广州</Checkbox>
                    <Checkbox value={2}>深圳</Checkbox>
                </CheckboxGroup>
            </div>
        );
    }
}
```
```jsx
<RadioWrap/>    
```
:::

### Radio Props
- `value (any)`
- `onChange (func)` 

### RadioGroup Props
- `name (string|isRequired)`
- `value (any)`
- `onChange (func)`
- `inline (bool)` 是否行内排列


## Checkbox

基本同Radio，区别在于`CheckboxGroup`的value是个数组，onChange提供参数回来
