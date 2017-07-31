import React from 'react';
import PropTypes from 'prop-types';

class SheetColumn extends React.Component {
    render() {
        return <div/>;
    }
}

SheetColumn.displayName = 'SheetColumn';
SheetColumn.propTypes = {
    field: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.element.isRequired
    ])
};

export default SheetColumn;