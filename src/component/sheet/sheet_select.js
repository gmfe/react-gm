import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class SheetSelect extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

SheetSelect.displayName = 'SheetSelect';
SheetSelect.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func,
    onChange: PropTypes.func,
    isDisabled: PropTypes.func,
    isRadio: PropTypes.bool
};
SheetSelect.defaultProps = {
    onSelect: _.noop,
    isDisabled: () => false,
    isRadio: false
};

export default SheetSelect;