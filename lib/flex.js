import React from 'react';
import classNames from 'classnames';

var Flex = React.createClass({
    render() {
        let cn = classNames({
            'gm-flex': this.props.flex
        });

        cn += ' ' + (this.props.className || '');

        return <div {...this.props} className={cn}>{this.props.children}</div>;
    }
});

export default Flex;
