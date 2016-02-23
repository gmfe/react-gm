import React from 'react';
import classNames from 'classnames';

var Layout = React.createClass({
    render() {
        let cn = classNames({
            'gm-layout': true,

            'gm-layout-row': this.props.row,
            'gm-layout-column': this.props.column,

            'gm-layout-wrap': this.props.wrap,
            'gm-layout-nowrap': this.props.nowrap,

            'gm-layout-justify-start': this.props.justifyStart,
            'gm-layout-justify-end': this.props.justifyEnd,
            'gm-layout-justify-center': this.props.justifyCenter,
            'gm-layout-justify-between': this.props.justifyBetween,
            'gm-layout-justify-around': this.props.justifyAround,

            'gm-layout-align-start': this.props.alignStart,
            'gm-layout-align-end': this.props.alignEnd,
            'gm-layout-align-center': this.props.alignCenter,
            'gm-layout-align-baseline': this.props.alignBaseline,
            'gm-layout-align-stretch': this.props.alignStretch
        });

        cn += ' ' + (this.props.className || '');

        return <div {...this.props} className={cn}>{this.props.children}</div>;
    }
});

export default Layout;
