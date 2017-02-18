import React, {PropTypes} from 'react';
import _ from 'underscore';

const prefix = '_react-gm_';
const {localStorage} = window;

const StorageStatics = {
    set(key, value){
        localStorage.setItem(prefix + key, JSON.stringify(value));
    },
    get (key) {
        const v = localStorage.getItem(prefix + key);
        return v ? JSON.parse(v) : v;
    },
    remove (key) {
        localStorage.removeItem(prefix + key);
    },
    clear () {
        localStorage.clear();
    },
    getAll () {
        const result = {};
        _.each(_.range(localStorage.length), i => {
            let key = localStorage.key(i);
            if (key.startsWith(prefix)) {
                key = key.slice(prefix.length);
                result[key] = StorageStatics.get(key);
            }
        });
        return _.keys(result) ? result : null;
    }
};

class Storage extends React.Component {
    componentWillUpdate(nextProps) {
        if (this.props.autoSave) {
            StorageStatics.set(nextProps.name, nextProps.value);
        }
    }

    componentWillMount() {
        StorageStatics.set(this.props.name, this.props.value);
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