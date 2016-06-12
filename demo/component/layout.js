import React from 'react';
import {
    Flex
} from '../../src/index';

var FlexWrap = React.createClass({
    render(){
        return (
            <Flex column height="200px">
                <Flex>top</Flex>
                <Flex flex>
                    <Flex>
                        <Flex style={{background: 'red'}}>
                            <div style={{background: 'yellow'}}>left1</div>
                        </Flex>
                    </Flex>
                    <Flex flex>content</Flex>
                </Flex>
            </Flex>
        );
    }
});

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Flex</h1>
                <FlexWrap></FlexWrap>
            </div>
        );
    }
});

export default Component;