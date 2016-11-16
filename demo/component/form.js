import React from 'react';
import {
    Validate,
    ValidateMixin,
    Switch,
    Switcher,
    InputNumber
} from '../../src/index';

var FormerDom = React.createClass({
    mixins: [ValidateMixin()],
    onChange: function () {
        console.log(arguments);
    },
    render: function () {
        return (
            <div style={{width: 300}}>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>email</label>
                        <input type="text" className="form-control" name="email" onChange={this.validate('e')}/>

                        <div className="text-danger">{this.validateTip('email')}</div>
                    </div>

                    <div className="form-group">
                        <label>三到5位任意字符</label>
                        <input type="text" className="form-control" name="height" onChange={this.validate('s3-5')}/>

                        <div className="text-danger">{this.validateTip('height')}</div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-default" type="submit">submit</button>
                    </div>
                </form>

                <div>
                    {this.validateTip()}
                </div>
            </div>
        );
    },
    onSubmit: function (event) {
        event.preventDefault();
        console.log(this.validateAll(this.refs.myForm));
    }
});

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
                <h1 id="form">表单</h1>
                <h2 id="former">Former(alpha)</h2>
                <FormerDom/>
                <h2 id="switch">Switch（Deprecated）</h2>
                <div>
                    <div>目前Switch的长度有限，所以checkedChildren unCheckedChildren 不能太多字</div>
                    <Switch
                        checked={this.state.checked}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                        onChange={this.handleChange}
                    />
                    <Switch
                        checked={this.state.checked}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                        disabled
                        onChange={this.handleChange}
                    />
                </div>
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

console.log(Validate('*', 'a', true));
console.log(Validate('*3', 'aaaa', true));
console.log(Validate('*3-', 'aa', true));
console.log(Validate('*3-5', 'a', true));

export default Component;