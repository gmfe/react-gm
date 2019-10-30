import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Loading from './index'

class LoadingChunk extends React.Component {
  render() {
    const {
      loading,
      style,
      size,
      text,
      className,
      children,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames(className, {
          'gm-loading-chunk': loading
        })}
      >
        {children || <div style={{ height: (size || 50) + 'px' }} />}
        {loading && (
          <div className='gm-loading-mask'>
            <Loading
              style={{
                ...style,
                width: size + 'px',
                height: size + 'px'
              }}
              text={text}
              size={size}
              className='gm-loading-position'
            />
          </div>
        )}
      </div>
    )
  }
}

LoadingChunk.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

LoadingChunk.defaultProps = {
  size: 50,
  loading: false
}

export default LoadingChunk
