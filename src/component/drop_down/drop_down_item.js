import React from 'react';

class DropDownItem extends React.Component {
    render() {
        const {children, ...rest} = this.props;
        return (
            <li {...rest}>
                <a href="javascript:;">{children}</a>
            </li>
        );
    }
}

export default DropDownItem;