import React from 'react';
import {Sheet, SheetColumn} from '../../src/index';

const data = [
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'},
    {id: 1, name: 'adfadfadfaf'}
];

class ComponentGroup extends React.Component {
    render() {
        return (
            <div style={{width: '300px'}}>
                <div>group</div>
                <Sheet list={data}>
                    <SheetColumn name="id" field="id"/>
                    <SheetColumn name="name" field="name"/>
                </Sheet>
            </div>
        );
    }
}

export default ComponentGroup;
