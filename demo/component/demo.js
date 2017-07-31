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

    renderExpandedRowRender() {

    }

    render() {
        return (
            <div style={{width: '500px'}}>
                <Sheet list={data} expandedRowRender={this.renderExpandedRowRender}>
                    <SheetColumn name="id" field="id"/>
                    <SheetColumn name="name" field="name"/>
                </Sheet>
            </div>
        );
    }
}

export default ComponentGroup;
