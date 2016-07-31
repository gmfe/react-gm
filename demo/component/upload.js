import React from 'react';
import {
    Droper
} from '../../src/index';

class DroperWrap extends React.Component {
    render() {
        return (
            <div>
                <Droper onDrop={this.handleDrop} accept="image/*"/>

                <Droper className="gm-droper-wrap" onDrop={this.handleDrop} accept=".xlsx">
                    <button className="btn btn-default">upload</button>
                </Droper>
            </div>
        );
    }

    handleDrop() {
        console.log(arguments);
    }
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="upload">上传</h1>
                <h2 id="Droper">Droper</h2>
                <DroperWrap/>
            </div>
        );
    }
}

export default Component;