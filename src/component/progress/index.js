import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function ProgressBar(props) {
    const { percent, text, type = 'success', className, ...rest } = props;

    return (
        <div className={classnames("gm-progress", className)} {...rest}>
            <div className="gm-progress-text">{text}</div>
            <span className={`gm-progress-bar gm-progress-bar-${type}`} style={{ width: percent + '%' }} />
        </div>
    );
}

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    text: PropTypes.string,
    type: PropTypes.string
};

export default ProgressBar;