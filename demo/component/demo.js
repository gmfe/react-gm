import React from 'react';
import {Form, FormItem} from '../../src/index';

class Demo extends React.Component {

    componentDidMount() {
        console.log(this.formRef);
    }

    render() {
        return (
            <div>
                <Form ref={ref => this.formRef = ref}>
                    <FormItem label="姓名" desc="这里填姓名姓名">
                        <input type="text" name="name" className="form-control"/>
                    </FormItem>
                    <FormItem label="城市" checkbox>
                        <label>
                            <input type="checkbox" name="city"/>
                            广州
                        </label>
                        <label>
                            <input type="checkbox" name="city"/>
                            深圳
                        </label>
                    </FormItem>
                    <FormItem label="单选" radio radioInline>
                        <label>
                            <input type="radio"/>
                            adfa
                        </label>
                        <label>
                            <input type="radio"/>
                            adfa
                        </label>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                </Form>
                <hr/>
                <Form horizontal labelCol={2}>
                    <FormItem label="姓名" required>
                        <input type="text" name="name"/>
                    </FormItem>
                    <FormItem label="多选">
                        <div className="">
                            <label className="checkbox-inline">
                                <input type="checkbox"/>
                                adfa
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox"/>
                                adfa
                            </label>
                        </div>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                </Form>
                <hr/>
                <Form inline>
                    <FormItem label="姓名">
                        <input type="text" name="name"/>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Demo;