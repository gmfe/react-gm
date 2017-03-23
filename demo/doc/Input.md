---
imports:
    import {Input} from '../../src/index';
---
## Input

::: demo 去空格输入框
```js
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = ::this.handleChange;
    }

    render(){
        return (
            <div>
                去掉空格：
                <Input
                    type="text"
                    trim={true}
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="去掉输入内容空格"
                    className="form-control"
                />
            </div>
        );
    }

    handleChange(value){
        this.setState({value});
    }
}
```
```jsx
<Component/>
```
:::

### Props
- `trim (bool)` 是否去掉空格 只对type为text生效
- `type (string)` input的type属性 例如 `text` `password` `radio` `text` `checkbox` 默认为`text`