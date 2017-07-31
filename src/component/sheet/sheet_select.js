import React from 'react';
import PropTypes from 'prop-types';

class SheetSelect extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

SheetSelect.displayName = 'SheetSelect';
SheetSelect.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    isDisabled: PropTypes.func
};
SheetSelect.defaultProps = {
    isDisabled: () => false
};

export default SheetSelect;