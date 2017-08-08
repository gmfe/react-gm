import React from 'react';
import {Form, FormItem, FormButton, FormBlock, Validator, Radio, RadioGroup} from '../../src/index';

class Component extends React.Component {
    handleSubmit() {
        console.log('handleSubmit');
    }

    handleSubmitValidated() {
        console.log('handleValidatedSubmit');
    }

    render() {
        return (
            <div>
                <Form horizontal onSubmit={this.handleSubmit} onSubmitValidated={this.handleSubmitValidated}>
                    <FormBlock>
                        <FormItem label="姓名" required inline width="200px" validate={Validator.create([], '')}>
                            <input type="text"/>
                        </FormItem>
                        <FormItem label="身高" inline>
                            <input type="text"/>
                        </FormItem>
                    </FormBlock>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                    <FormItem label="结款方式">
                        <RadioGroup
                            name="city2"
                            inline
                            value={1}
                            onChange={v => this.setState({city2: v})}
                        >
                            <Radio value={1}>广州</Radio>
                            <Radio value={2}>深圳</Radio>
                        </RadioGroup>
                    </FormItem>

                    <FormItem label="结款方式">
                        <RadioGroup
                            name="city1"
                            value={1}
                            onChange={v => this.setState({city2: v})}
                        >
                            <Radio value={1}>广州</Radio>
                            <Radio value={2}>深圳</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormButton>
                        <button className="btn btn-primary" type="submit">提交</button>
                    </FormButton>
                </Form>
            </div>
        );
    }
}

export default Component;
