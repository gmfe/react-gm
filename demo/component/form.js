import React from 'react';
import {
    ValidateMixin,
    Switch
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
            checked: false
        };
    },
    render(){
        return (
            <div>
                <h1>Former</h1>
                <FormerDom></FormerDom>
                <h1>Switch</h1>
                <div>
                    <Switch
                        defaultChecked={true}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                    ></Switch>
                    <Switch
                        checked={this.state.checked}
                        checkedChildren={"是"}
                        unCheckedChildren={"否"}
                        onChange={this.handleChange}
                    ></Switch>
                    <Switch
                        disabled
                        checkedChildren={"YES"}
                        unCheckedChildren={"NO"}
                    ></Switch>
                </div>
            </div>
        );
    },
    handleChange(){
        this.setState({
            checked: !this.state.checked
        });
    }
});

export default Component;