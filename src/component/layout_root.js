import React from 'react';

const TYPE = {
    MODAL: 'modal',
    TIP: 'tip'
};

let setComponentFunc = null;

class LayerRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: null,
            tip: null
        };
    }

    componentDidMount() {
        setComponentFunc = (type, component) => {
            const s = {};
            s[type] = component;
            this.setState(s);
        };
    }

    componentWillUnMount() {
        setComponentFunc = null;
    }

    render() {
        // 有层级关系
        return (
            <div>
                <div>{this.state.modal}</div>
                <div>{this.state.tip}</div>
            </div>
        );
    }
}

LayerRoot.setComponent = (type, com) => {
    if (setComponentFunc) {
        LayerRoot.removeComponent();
        setComponentFunc(type, com);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.removeComponent = (type) => {
    if (setComponentFunc) {
        setComponentFunc(type, undefined);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.TYPE = TYPE;

export default LayerRoot;