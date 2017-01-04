---
imports:
    import {Switcher, InputNumber} from '../../src/index';
---
## Switcher
开关切换

::: demo 数字输入框
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
                <InputNumber
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="最大1000，最小0，可保留4为小数，默认2位"
                    max={1000}
                    min={0}
                    precision={4}
                    className="form-control"
                    minus
                />
            </div>
        );
    }
    
    handleChange(value){
        this.setState({
            value
        });
    }
}
```
```jsx
<Component/>
```
:::

### Props
todo