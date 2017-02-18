import React from 'react';
import {Divider} from '../../src/index';

class Component extends React.Component {
    render() {
        return (
            <div>
                demo
                <div>
                    原生分割线
                    <hr/>
                    <Divider/>
                    中间又文字的分割线
                    <Divider>asdf</Divider>
                </div>
            </div>
        );
    }
}

export default Component;