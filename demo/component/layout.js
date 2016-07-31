import React from 'react';
import {
    Flex
} from '../../src/index';

class FlexWrap extends React.Component {
    render() {
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
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="layout">布局</h1>
                <h2 id="Flex">Flex</h2>
                <FlexWrap/>
            </div>
        );
    }
}

export default Component;