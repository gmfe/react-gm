import React from 'react';

class Hr extends React.Component {
    render() {
        return (
            <div className="gm-divider">
                <div className="gm-divider-content">
                    {typeof this.props.children === 'string' ? (
                        <h4>{this.props.children}</h4>
                    ) : this.props.children}
                </div>
            </div>
        );
    }
}

export default Hr;