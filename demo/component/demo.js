import React from 'react';
import {Divider} from '../../src/index';
import {history} from '../service';

class Component extends React.Component {
    handleClick() {
        history.push({
            pathname: '/demo',
            query: {
                a: 1,
                name: '李雅堂'
            }
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    原生分割线
                    <hr/>
                    <Divider/>
                    中间又文字的分割线
                    <Divider>asdf</Divider>
                    <button onClick={this.handleClick}>push</button>
                </div>
            </div>
        );
    }
}

export default Component;