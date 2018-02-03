import React from 'react';
import {Flex, DatePicker} from '../../src/';

class Component extends React.Component {
    render() {

        return (
            <div>

                demo
                <input type="text"/>
                <DatePicker
                    date={new Date}
                    placeholder="请选择日期"
                    onChange={this.handleChange}
                />

                <Flex>
                    <DatePicker
                        date={new Date}
                        placeholder="请选择日期"
                        onChange={this.handleChange}
                        inputClassName="form-control"
                    />

                    <input type="email" className="form-control" placeholder="Email"/>
                </Flex>
            </div>
        );
    }
}

export default Component;
