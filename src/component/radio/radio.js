import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

/**
 * Radio -- 单选框
 *
 * 主要配合 RadioGroup 一起用，在多个备选项中选中单个状态
 */

const Radio = props => {
  const { value, checked, onChange, children, inline, name, disabled } = props

  return (
    <div className={inline ? 'radio-inline' : ''}>
      <label
        className={classNames({
          disabled
        })}
      >
        <input
          type='radio'
          className='gm-input-radio'
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span />
        {children}
      </label>
    </div>
  )
}

Radio.propTypes = {
  /** 表单值 */
  value: PropTypes.any,
  /** 选项变化时的回调函数 */
  onChange: PropTypes.func,

  /** 由 RadioGroup 传下来，指定当前是否选中，由RadioGroup value === Radio value 决定 */
  checked: PropTypes.bool,
  /** 由 RadioGroup 传下来，表单名 */
  name: PropTypes.string,
  /** 由 RadioGroup 传下来，定义行内排列 */
  inline: PropTypes.bool,

  /** 是否禁用按钮 */
  disabled: PropTypes.bool,
  children: PropTypes.any
}

Radio.defaultProps = {
  checked: false,
  onChange: _.noop
}

export default Radio
