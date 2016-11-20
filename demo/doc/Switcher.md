---
imports:
    import {Switcher, InputNumber} from '../../src/index';
---
## Switcher
开关切换

::: demo Switcher
```js
const Component = React.createClass({
    getInitialState(){
        return {
            checked: false,
            inputNumberValue: ''
        };
    },
    render(){
        return (
            <div>
                <h2 id="switcher">Switcher</h2>
                <div>
                    <div>
                        default
                        <Switcher
                            checked={this.state.checked}
                            on="是"
                            off="否"
                            onChange={this.handleChange}
                        />
                        disabled
                        <Switcher
                            checked={this.state.checked}
                            disabled
                            on="是"
                            off="否"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        其他文案
                        <Switcher
                            checked={this.state.checked}
                            on="生效中"
                            off="失效中"
                            onChange={this.handleChange}
                        />
                        <Switcher
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Switcher
                            checked={this.state.checked}
                            on="生效中"
                            off="失效中"
                            onChange={this.handleChange}
                        />
                        <Switcher
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        primary
                        <Switcher
                            type="primary"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <Switcher
                            disabled
                            type="primary"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        success
                        <Switcher
                            type="success"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <Switcher
                            disabled
                            type="success"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        info
                        <Switcher
                            type="info"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <Switcher
                            disabled
                            type="success"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        warning
                        <Switcher
                            type="warning"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <Switcher
                            disabled
                            type="success"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        danger
                        <Switcher
                            type="danger"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <Switcher
                            disabled
                            type="success"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <h2 id="input-number">input-number</h2>
                <div>
                    <div>数字输入框</div>
                    <InputNumber
                        value={this.state.inputNumberValue}
                        onChange={this.handleInputNumberChange}
                        placeholder="最大1000，最小0，可保留4为小数，默认2位"
                        max={1000}
                        min={0}
                        precision={4}
                        className="form-control"
                    />
                </div>
            </div>
        );
    },
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    },
    handleInputNumberChange(value){
        this.setState({
            inputNumberValue: value
        });
    }
});
```
```jsx
<Component/>
```
:::

### Props
目前Switch的长度有限，所以`checkedChildren` `unCheckedChildren` 不能太多字
- `checked (bool)`
- `defaultChecked (bool)` 少用吧，默认`false`
- `disable (bool)` true则不可用
- `checkedChildren (node)` 选中的文案，默认`ON`
- `unCheckedChildren (node)` 不选中的文案，默认`OFF`
- `onChange (func)` 切换触发函数
- `className (string)`