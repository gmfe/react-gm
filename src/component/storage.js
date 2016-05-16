import React from 'react';
import _ from 'underscore';

var PropTypes = React.PropTypes;

var prefix = '_react-gm_';

var Storage = React.createClass({
    statics: {
        set: function (key, value) {
            localStorage.setItem(prefix + key, JSON.stringify(value));
        },
        get: function (key) {
            var v = localStorage.getItem(prefix + key);
            return v ? JSON.parse(v) : v;
        },
        remove: function (key) {
            localStorage.removeItem(prefix + key);
        },
        clear: function () {
            localStorage.clear();
        },
        getAll: function () {
            var result = {};
            var key;
            for(var i = 0; i < localStorage.length ; i ++){
                key = localStorage.key(i);
                if(key.startsWith(prefix)){
                    key = key.slice(prefix.length);
                    result[key] = Storage.get(key);
                }
            }
            return _.keys(result) ? result : null;
        }
    },
    propTypes: {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        autoSave: PropTypes.bool
    },
    getDefaultProps: function(){
        return {
            useRaw: false,
            autoSave: true
        };
    },
    save: function(){
        Storage.set(this.props.name, this.props.value);
    },
    componentWillUpdate: function(){
        if(this.props.autoSave){
            this.save();
        }
    },
    componentWillMount: function () {
        this.save();
    },
    render: function () {
        return null;
    }
});

export default Storage;