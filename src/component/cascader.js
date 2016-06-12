import React from 'react';


class Component extends React.Component {
    static propTypes = {
        selected: React.PropTypes.object,
        onSelect: React.PropTypes.func
    };

    render() {
        return (
            <div className="gm-cascader">
                asdf
            </div>
        );
    }
}

export default Component;