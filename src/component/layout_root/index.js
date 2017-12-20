import React from 'react';
import _ from 'lodash';

const TYPE = {
    _POPOVER: '_popover',
    POPUP: 'popup', // TODO
    MODAL: 'modal',
    TIP: 'tip',
    FULLLOADING: 'fullloading',
    NPROGRESS: 'nprogress'
};

let setComponentFunc = null;

class LayerRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _popover: null,
            popup: null,
            modal: null,
            popover: null,
            tip: null,
            nprogress: null
        };
    }

    componentDidMount() {
        setComponentFunc = (type, component) => {
            const s = {};
            s[type] = component;
            this.setState(s);
        };
    }

    componentWillUnmount() {
        setComponentFunc = null;
    }

    render() {
        // 有层级关系
        return (
            <div>
                <div>{_.map(this.state._popover, v => React.cloneElement(v.com, Object.assign({
                    key: v.id
                }, v.com.props)))}</div>
                <div>{this.state.popup}</div>
                <div>{this.state.modal}</div>
                <div>{this.state.popover}</div>
                <div>{this.state.tip}</div>
                <div>{this.state.fullloading}</div>
                <div>{this.state.nprogress}</div>
            </div>
        );
    }
}

const popupList = [];
LayerRoot._setComponentPopup = (id, com) => {
    if (setComponentFunc) {
        const index = _.findIndex(popupList, v => v.id === id);
        if (index === -1) {
            popupList.push({id, com});
        } else {
            popupList[index] = {id, com};
        }

        setComponentFunc(LayerRoot.TYPE._POPOVER, popupList);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot._removeComponentPopup = (id) => {
    if (setComponentFunc) {
        _.remove(popupList, v => v.id === id);
        setComponentFunc(LayerRoot.TYPE._POPOVER, popupList);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

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