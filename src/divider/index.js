import React from 'react';

class Divider extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className="gm-divider">
                <div className="gm-divider-content">
                    {typeof children === 'string' ? <h4>{children}</h4> : children}
                </div>
            </div>
        );
    }
}

export default Divider;