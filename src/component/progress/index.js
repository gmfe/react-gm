import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SVGSuccessCircle from '../../../svg/success-circle.svg'
import SVGCloseCircle from '../../../svg/close-circle.svg'

class ProgressBar extends React.Component {
  render() {
    const {
      percentage,
      status,
      strokeWidth,
      text,
      textInside,
      textInsideFix,
      showText,
      className,
      textColor,
      strokeColor,
      bgColor,
      ...rest
    } = this.props
    return (
      <div className={classNames('gm-progress', className)} {...rest}>
        <div className='gm-progress-bar'>
          <div
            className='gm-progress-bar-outer'
            style={{ height: `${strokeWidth}px`, backgroundColor: bgColor }}
          >
            <div
              className={classNames('gm-progress-bar-inner', {
                'gm-progress-bar-success': status === 'success',
                'gm-progress-bar-exception': status === 'exception'
              })}
              style={{ width: `${percentage}%`, backgroundColor: strokeColor }}
            >
              {showText && textInside && !textInsideFix && (
                <div
                  className='gm-progress-bar-innerText'
                  style={{ color: textColor }}
                >
                  {text || `${percentage}%`}
                </div>
              )}
            </div>
            {showText && textInside && textInsideFix && (
              <div
                className={classNames('gm-progress-bar-innerTextFix-wrapper')}
                style={{ textAlign: textInsideFix }}
              >
                <div
                  className='gm-progress-bar-innerText'
                  style={{ color: textColor }}
                >
                  {text || `${percentage}%`}
                </div>
              </div>
            )}
          </div>
        </div>
        {showText && !textInside && (
          <div
            className='gm-progress-bar-text'
            style={{ fontSize: `12px`, color: textColor }}
          >
            {status ? (
              status === 'success' ? (
                <SVGSuccessCircle className='gm-progress-bar-success-icon' />
              ) : (
                <SVGCloseCircle className='gm-progress-bar-exception-icon' />
              )
            ) : (
              text || `${percentage}%`
            )}
          </div>
        )}
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  text: PropTypes.string,
  status: PropTypes.oneOf(['success', 'exception']),
  strokeWidth: PropTypes.number,
  textInside: PropTypes.bool,
  textInsideFix: PropTypes.oneOf(['left', 'right', 'center']),
  showText: PropTypes.bool,
  className: PropTypes.string,
  textColor: PropTypes.string,
  strokeColor: PropTypes.string,
  bgColor: PropTypes.string
}

ProgressBar.defaultProps = {
  textInside: false,
  showText: true
}

export default ProgressBar
