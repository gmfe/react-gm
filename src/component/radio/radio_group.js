import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

/**
 * RadioGroup -- 单选框组
 *
 * 主要配合 Radio 一起使用
 */

const RadioGroup = props => {
  const { onChange, value, inline, className, children, name, ...rest } = props

  return (
    <div {...rest} className={classNames('gm-radio-group radio', className)}>
      {_.map(React.Children.toArray(children), (child, i) => {
        return React.cloneElement(child, {
          key: i,
          index: i,
          checked: child.props.value === value,
          inline,
          onChange: () => {
            onChange(child.props.value)
          },
          name
        })
      })}
    </div>
  )
}

RadioGroup.propTypes = {
  /** 表单名 */
  name: PropTypes.string.isRequired,
  /** 设置当前选中的值 */
  value: PropTypes.any,
  /** 选项变化时的回调函数，传入参数为 Radio value 值 */
  onChange: PropTypes.func,
  /** 定义行内排列 */
  inline: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

RadioGroup.defaultProps = {
  inline: false,
  onChange: _.noop
}

export default RadioGroup
