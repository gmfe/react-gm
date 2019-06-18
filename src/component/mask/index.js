import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Mask extends React.Component {
  render() {
    const { className, style, opacity, ...rest } = this.props

    return (
      <div
        {...rest}
        className={classNames('gm-mask', className)}
        style={Object.assign(
          {
            background: `rgba(0,0,0, ${opacity})`
          },
          style
        )}
      />
    )
  }
}

Mask.propTypes = {
  opacity: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
}

Mask.defaultProps = {
  opacity: 0.5
}

export default Mask
