import React from 'react';

class SheetBatchAction extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

SheetBatchAction.displayName = 'SheetBatchAction';

export default SheetBatchAction;