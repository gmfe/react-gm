import React from 'react';
import {Flex, DatePicker, Affix} from '../../src/';

class Component extends React.Component {
    handleChange() {

    }

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
                <Affix top offset={50}>
                    <button>adfasfasfa</button>
                </Affix>
                <div style={{height: '1000px', background: 'red'}}/>
                <Affix offset={200}>
                    <button>adfasfasfa</button>
                </Affix>
                <div style={{height: '1000px', background: 'red'}}/>
            </div>
        );
    }
}

export default Component;
