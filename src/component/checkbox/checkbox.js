import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class Checkbox extends React.Component {
  render () {
    const {
      value,
      checked,
      onChange,
      children,
      name,
      inline,
      block,
      disabled,
      col
    } = this.props
    const inner = (
      <label
        style={{
          width: col ? `${100 / col}%` : 'auto'
        }}
        className={classNames('gm-checkbox', {
          'checkbox-inline': inline,
          'gm-block': block,
          disabled
        })}
      >
        <input
          type='checkbox'
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span/>
        {children}
      </label>
    )

    if (!inline) {
      return (
        <div>
          {inner}
        </div>
      )
    }

    return inner
  }
}

Checkbox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,

  // 如果需要整行可点，则
  block: PropTypes.bool,
  col: PropTypes.number,

  // 由CheckboxGroup 传下来
  name: PropTypes.string,
  checked: PropTypes.bool,
  inline: PropTypes.bool,

  disabled: PropTypes.bool
}

Checkbox.defaultProps = {
  checked: false,
  onChange: _.noop
}

export default Checkbox
