---
imports:
    import {
        Radio,
        RadioGroup,
        Checkbox,
        CheckboxGroup
    } from '../../src/index'
---
## Radio & Checkbox
配合 `RadioGroup` 一起用，onChange 返回的是原始值，非原始 radio 组件的字符串值
::: demo
```js
class RadioWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: null,
            city2: null,
        };
    }

    render() {
        return (
            <div>
                <RadioGroup
                    name="city" value={this.state.city}
                    onChange={v => this.setState({city: v})}
                >
                    <Radio value={1} disabled>广州</Radio>
                    <Radio value={2}>深圳</Radio>
                    <Radio value={3}>成都</Radio>
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
                    <Radio value={3}>成都</Radio>
                </RadioGroup>
            </div>
        );
    }
}
```
```jsx
<RadioWrap />
```
:::

::: demo
```js
class CheckBoxWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city3: [],
            city4: [],
            city5: []
        };
    }
    render() {
        return (
            <div>
                <CheckboxGroup
                    name="city3"
                    value={this.state.city3}
                    onChange={v => this.setState({city3: v})}
                >
                    <Checkbox value={1} disabled>广州</Checkbox>
                    <Checkbox value={2}>深圳</Checkbox>
                    <Checkbox value={3}>成都</Checkbox>
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
                    <Checkbox value={3}>成都</Checkbox>
                </CheckboxGroup>
                <hr/>
                <CheckboxGroup
                    name="city5"
                    inline
                    value={this.state.city5}
                    col={3}
                    onChange={v => this.setState({city5: v})}
                >
                    <Checkbox value={1} disabled>1</Checkbox>
                    <Checkbox value={2}>2</Checkbox>
                    <Checkbox value={3}>3</Checkbox>
                    <Checkbox value={4}>4</Checkbox>
                    <Checkbox value={5}>5</Checkbox>
                    <Checkbox value={6}>6</Checkbox>
                </CheckboxGroup>
            </div>
        );
    }
}
```
```jsx
<CheckBoxWrap />
```
:::

### Radio Props
- `value (any)` 表单值
- `onChange (func)`

### RadioGroup Props
- `name (string|isRequired)` 表单名
- `value (any)` 选择值
- `onChange (func(value))` value 是选择值 Radio value 值
- `inline (bool)` 是否行内排列

### Checkbox
- `value (any)` 表单值
- `onChange (func)`

### CheckboxGroup
- `name (string|isRequired)` 表单名
- `value (array)` 选择值
- `onChange (func(value))` value 是选择值的 CheckBox value 数组
- `inline (bool)` 是否行内排列
- `col (number)` 列数
