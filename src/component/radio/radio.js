import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class Radio extends React.Component {
  render() {
    const {
      value,
      checked,
      onChange,
      onClick,
      children,
      inline,
      name,
      disabled,
      className,
      ...rest
    } = this.props

    const inner = (
      <label
        {...rest}
        className={classNames(
          'gm-radio',
          {
            'radio-inline': inline,
            disabled
          },
          className
        )}
      >
        <input
          type='radio'
          className='gm-input-radio'
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onClick={onClick}
          disabled={disabled}
        />
        <span />
        {children}
      </label>
    )

    if (!inline) {
      return <div>{inner}</div>
    }
    return inner
  }
}

Radio.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

Radio.defaultProps = {
  onChange: _.noop,
  onClick: _.noop
}

export default Radio
