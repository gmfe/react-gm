import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.getIconClass = ::this.getIconClass;

    }

    getIconClass() {
        const {status} = this.props;
        return status === 'success' ? 'xfont xfont-success-circle gm-progress-bar-success-icon' : 'xfont xfont-close-circle gm-progress-bar-exception-icon';
    }

    render() {
        const {percentage, status, strokeWidth, textInside, showText, className, ...rest} = this.props;

        return (
            <div className={classnames('gm-progress', className)} {...rest}>
                <div className="gm-progress-bar">
                    <div
                        className="gm-progress-bar-outer"
                        style={{height: `${strokeWidth}px`}}
                    >
                        <div
                            className={classnames("gm-progress-bar-inner",
                                {
                                    'gm-progress-bar-success': status === 'success',
                                    'gm-progress-bar-exception': status === 'exception'
                                })}
                            style={{width: `${percentage}%`}}
                        >
                            {
                                showText && textInside &&
                                <div className="gm-progress-bar-innerText">
                                    {`${percentage}%`}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {
                    showText &&
                    !textInside &&
                    <div
                        className="gm-progress-bar-text"
                        style={{fontSize: `12px`}}
                    >
                        {status ? <i className={this.getIconClass()}/> : `${percentage}%`}
                    </div>
                }
            </div>
        );
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['success', 'exception']),
    strokeWidth: PropTypes.number,
    textInside: PropTypes.bool,
    showText: PropTypes.bool
};

ProgressBar.defaultProps = {
    textInside: false,
    showText: true
};

export default ProgressBar;