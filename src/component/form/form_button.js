import React from 'react';

class FormButton extends React.Component {
    render() {
        return (
            <div className="text-center">
                {this.props.children}
            </div>
        );
    }
}

export default FormButton;