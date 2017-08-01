import React from 'react';
import {Sheet, SheetColumn} from '../../src/index';

class ComponentGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: '啦啦', __gm_expanded: true},
                {id: 1, name: '啦啦'},
                {id: 1, name: '啦啦', __gm_expanded: true},
                {id: 1, name: '啦啦'},
                {id: 1, name: '啦啦'}
            ]
        };

        this.renderExpandedRowRender = ::this.renderExpandedRowRender;
        this.handleExpand = ::this.handleExpand;
    }

    renderExpandedRowRender() {
        return (
            <Sheet list={this.state.data}>
                <SheetColumn name="id" field="id"/>
                <SheetColumn name="name" field="name"/>
            </Sheet>
        );
    }

    handleExpand(index) {
        const {data} = this.state;
        data[index].__gm_expanded = !data[index].__gm_expanded;
        this.setState({
            data
        });
    }

    render() {
        return (
            <div style={{width: '500px'}}>
                <Sheet
                    list={this.state.data}
                    expandedRowRender={this.renderExpandedRowRender}
                    onExpand={this.handleExpand}
                >
                    <SheetColumn name="id" field="id"/>
                    <SheetColumn name="name" field="name"/>
                    <SheetColumn name="name" field="name"/>
                </Sheet>
            </div>
        );
    }
}

export default ComponentGroup;
