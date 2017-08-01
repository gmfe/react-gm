import React from 'react';
import {Form, FormItem, FormButton, FormBlock, Validator} from '../../src/index';

class Component extends React.Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormBlock>
                        <FormItem label="姓名" required inline width="200px" validate={Validator.create([], '')}>
                            <input type="text"/>
                        </FormItem>
                        <FormItem label="身高" inline>
                            <input type="text"/>
                        </FormItem>
                    </FormBlock>
                    <FormItem label="姓名" required validate={Validator.create([], '')}>
                        <input type="text"/>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
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
