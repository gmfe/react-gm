import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class Checkbox extends React.Component {
  render() {
    const {
      value,
      checked,
      onChange,
      children,
      name,
      inline,
      block,
      disabled,
      col,
      style,
      className,
      ...rest
    } = this.props
    const inner = (
      <label
        {...rest}
        style={{
          width: col ? `${100 / col}%` : 'auto',
          ...style
        }}
        className={classNames(
          'gm-checkbox',
          {
            'checkbox-inline': inline,
            'gm-block': block,
            disabled
          },
          className
        )}
      >
        <input
          type='checkbox'
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  // 如果需要整行可点，则
  block: PropTypes.bool,
  col: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  onChange: _.noop
}

export default Checkbox
