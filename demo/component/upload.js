import React from 'react';
import {
    Droper
} from '../../src/index';

var DroperWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Droper onDrop={this.handleDrop} accept="image/*"/>
                <Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
                    <button className="btn btn-default">upload</button>
                </Droper>
            </div>
        );
    },
    handleDrop: function () {
        console.log(arguments);
    }
});

const Component = React.createClass({
    render(){
        return (
            <div>
                <h1>Droper</h1>
                <DroperWrap></DroperWrap>
            </div>
        );
    }
});

export default Component;