import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
    render() {
        return (
            <option {...this.props}/>
        );
    }
}

Option.displayName = 'Option';

Option.propTypes = {
    value: PropTypes.any.isRequired
};

export default Option;