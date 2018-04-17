import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

class Left extends React.Component {
    render() {
        const {
            style,
            className,
            children,
            ...rest
        } = this.props;

        return (
            <div
                {...rest}
                style={Object.assign({
                    width: this.context.frameWorkLeftWidth
                }, style)}
                className={classNames("gm-framework-left-default", className)}
            >
                <div className="gm-framework-left-default-inner">
                    {children}
                </div>
            </div>
        );
    }
}

Left.contextTypes = {
    frameWorkLeftWidth: PropTypes.string
};

export default Left;