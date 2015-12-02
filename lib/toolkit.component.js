import React from 'react';

var Hr = React.createClass({
    render() {
        return (
            <div className="hr-divider">
                <h3 className="hr-divider-content hr-divider-heading">
                    {this.props.children}
                </h3>
            </div>
        )
    }
});

var IconInput = React.createClass({
    // getDefaultProps: () => { value: '' },
    render() {
        return (
            <div className="input-with-icon">
                <input
                    className="form-control"
                    type={this.props.type||'text'}
                    {...this.props}
                />
                <span className={'icon ico-' + this.props.icon}></span>
            </div>
        )
    }
});

export {
	Hr,
	IconInput
};