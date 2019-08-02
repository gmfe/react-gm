import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'
import ToolTip from '../tool_tip'
import Validator from '../../validator'
import { withWrapContext, colWidthDefault } from './util'
import { warn, devWarnForHook } from '../../util'

const FormControl = ({ children }) => {
  const { className } = children.props

  // 文件类型特殊
  if (
    (children.type === 'input' && children.props.type !== 'file') ||
    children.type === 'textarea' ||
    children.type === 'select' ||
    children.type.displayName === 'InputNumber' ||
    children.type.displayName === 'InputNumberV2'
  ) {
    return React.cloneElement(children, {
      className: classNames('form-control', className)
    })
  }

  return children
}

// 这种方式才会 storybook 才会显示 props 文档
const FormItem = withWrapContext(
  ({
    label,
    labelWidth,
    required,
    canValidate,
    validate,
    error,
    help,
    unLabelTop,
    className,
    children,
    col,
    disabledCol,
    colWidth,
    style,
    toolTip
  }) => {
    devWarnForHook(() => {
      if (label === undefined) return
      if (
        typeof label === 'string' &&
        (label.includes(':') || label.includes('：'))
      ) {
        warn('label 包含了 : or ：。', label)
      }
    })
    const _cw = colWidth ? +colWidth.replace('px', '') : colWidthDefault
    const _style = Object.assign(
      {},
      style,
      disabledCol ? {} : { width: _cw * col }
    )
    if (canValidate && validate !== undefined) {
      if (required) {
        help = validate(function(value) {
          return Validator.validate(Validator.TYPE.required, value)
        })
      } else {
        help = validate()
      }
      error = !!help
    }

    const childList = React.Children.toArray(children)

    return (
      <Flex
        style={_style}
        className={classNames('gm-form-group', className, {
          'has-error': error,
          'gm-has-error': error
        })}
      >
        {label !== undefined && (
          <Flex
            justifyEnd
            width={labelWidth}
            className={classNames('gm-form-label control-label', {
              'gm-form-label-un-top': unLabelTop
            })}
          >
            {required ? <span style={{ color: 'red' }}>*</span> : ''}
            {label}
            {label && ':'}
          </Flex>
        )}
        <Flex flex column>
          <div className='gm-form-field'>
            <FormControl>{childList[0]}</FormControl>
            {childList.slice(1)}
            {!!(error && help) && (
              <div className={classNames({ 'help-block': error })}>{help}</div>
            )}
            {toolTip ? (
              <ToolTip
                popup={toolTip}
                className='gm-padding-lr-5 gm-form-toolTip'
              />
            ) : null}
          </div>
        </Flex>
      </Flex>
    )
  }
)

FormItem.propTypes = {
  /** 占用栏数 */
  col: PropTypes.oneOf([1, 2, 3]),
  /** 顾名思义。请不要包含:，此为组件控制 */
  label: PropTypes.string,
  /** 提示信息 */
  toolTip: PropTypes.element,
  /** 是否必须 */
  required: PropTypes.bool,

  /** label 是有上边距的，为了和表单元素的文本对齐一条线。但是某些场景下是不需要的，比如非表单元素的时候 */
  unLabelTop: PropTypes.bool,

  /** 有 validate, 则 error help无效 */
  validate: PropTypes.func,
  /** 少用 */
  error: PropTypes.bool,
  /** 少用 */
  help: PropTypes.string,

  /** 一般由 Form 传下来，也可自定义 */
  labelWidth: PropTypes.string,

  /** 一般由 Form 传下来，也可自定义 */
  colWidth: PropTypes.string,

  /** Form 传下来，不要动 */
  canValidate: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.object
}

FormItem.defaultProps = {
  col: 1
}

FormItem.displayName = 'FormItem'

export default FormItem
