import React from 'react';
import classNames from 'classnames';

var Flex = React.createClass({
    propTypes: {
        flex: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
        auto: React.PropTypes.bool,
        none: React.PropTypes.bool,
        width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        row: React.PropTypes.bool,
        column: React.PropTypes.bool,
        wrap: React.PropTypes.bool,
        nowrap: React.PropTypes.bool,
        justifyStart: React.PropTypes.bool,
        justifyEnd: React.PropTypes.bool,
        justifyCenter: React.PropTypes.bool,
        justifyBetween: React.PropTypes.bool,
        justifyAround: React.PropTypes.bool,
        alignStart: React.PropTypes.bool,
        alignEnd: React.PropTypes.bool,
        alignCenter: React.PropTypes.bool,
        alignBaseline: React.PropTypes.bool,
        alignStretch: React.PropTypes.bool
    },
    render() {
        const cn = classNames({
            'gm-flex': true,

            'gm-flex-auto': this.props.auto,
            'gm-flex-none': this.props.none || this.props.width || this.props.height,

            'gm-flex-row': this.props.row,
            'gm-flex-column': this.props.column,

            'gm-flex-wrap': this.props.wrap,
            'gm-flex-nowrap': this.props.nowrap,

            'gm-flex-justify-start': this.props.justifyStart,
            'gm-flex-justify-end': this.props.justifyEnd,
            'gm-flex-justify-center': this.props.justifyCenter,
            'gm-flex-justify-between': this.props.justifyBetween,
            'gm-flex-justify-around': this.props.justifyAround,

            'gm-flex-align-start': this.props.alignStart,
            'gm-flex-align-end': this.props.alignEnd,
            'gm-flex-align-center': this.props.alignCenter,
            'gm-flex-align-baseline': this.props.alignBaseline,
            'gm-flex-align-stretch': this.props.alignStretch
        }, this.props.className);

        let style = Object.assign({}, this.props.style);
        if (this.props.flex) {
            style.flex = (typeof this.props.flex === 'boolean') ? 1 : this.props.flex;
        }
        if (this.props.height) {
            style.height = this.props.height;
        }
        if (this.props.width) {
            style.width = this.props.width;
        }

        return <div {...this.props} className={cn} style={style}>{this.props.children}</div>;
    }
});

export default Flex;
