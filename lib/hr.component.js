import React from 'react';

var Hr = React.createClass({
    render() {
        return (
            <div className="gm-divider clearfix">
                <div className="gm-divider-content">
                    {typeof this.props.children === 'string' ? (
                        <h4>{this.props.children}</h4>
                    ): this.props.children}
                </div>
            </div>
        )
    }
});

export default Hr;