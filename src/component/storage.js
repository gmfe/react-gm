import React, {PropTypes} from 'react';
import _ from 'underscore';

const prefix = '_react-gm_';

const StorageStatics = {
    set: function (key, value) {
        window.localStorage.setItem(prefix + key, JSON.stringify(value));
    },
    get: function (key) {
        var v = window.localStorage.getItem(prefix + key);
        return v ? JSON.parse(v) : v;
    },
    remove: function (key) {
        window.localStorage.removeItem(prefix + key);
    },
    clear: function () {
        window.localStorage.clear();
    },
    getAll: function () {
        var result = {};
        var key;
        for (var i = 0; i < window.localStorage.length; i++) {
            key = window.localStorage.key(i);
            if (key.startsWith(prefix)) {
                key = key.slice(prefix.length);
                result[key] = Storage.get(key);
            }
        }
        return _.keys(result) ? result : null;
    }
};

class Storage extends React.Component {
    save() {
        Storage.set(this.props.name, this.props.value);
    }

    componentWillUpdate() {
        if (this.props.autoSave) {
            this.save();
        }
    }

    componentWillMount() {
        this.save();
    }

    render() {
        return null;
    }
}

Object.assign(Storage, StorageStatics);

Storage.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
    ]),
    autoSave: PropTypes.bool
};
Storage.defaultProps = {
    useRaw: false,
    autoSave: true
};

export default Storage;