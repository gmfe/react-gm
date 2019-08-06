import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'
import _ from 'lodash'
import Validator from '../../validator'
import { WrapContext } from './util'

const FormControl = ({ children }) => {
  const { className, inputClassName } = children.props

  const child = children

  // 文件类型特殊
  if (child.type === 'input' && child.props.type !== 'file') {
    return React.cloneElement(child, {
      className: classNames('form-control', className)
    })
  } else if (child.type === 'textarea') {
    return React.cloneElement(child, {
      className: classNames('form-control', className)
    })
  } else if (child.type === 'select') {
    return React.cloneElement(child, {
      className: classNames('form-control', className)
    })
  } else if (child.type.displayName === 'DatePicker') {
    return React.cloneElement(child, {
      inputClassName: classNames('form-control', inputClassName)
    })
  } else if (child.type.displayName === 'DateRangePicker') {
    return React.cloneElement(child, {
      inputClassName: classNames('form-control', inputClassName)
    })
  } else if (
    child.type.displayName === 'InputNumber' ||
    child.type.displayName === 'Search'
  ) {
    return React.cloneElement(child, {
      className: classNames('form-control', className)
    })
  }
  return child
}

FormControl.propTypes = {
  children: PropTypes.any
}

const FormItemInner = ({
  label,
  labelWidth,
  inline,
  horizontal,
  required,
  canValidate,
  validate,
  error,
  help,
  unLabelTop,
  className,
  children,
  ...rest
}) => {
  let hasLabelSwitchPaddingTop = false
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

  if (!_.isArray(children)) {
    if (children.type.displayName === 'Switch') {
      hasLabelSwitchPaddingTop = true
    }
  }

  return (
    <Flex
      column={!horizontal && !inline}
      {...rest}
      className={classNames('gm-form-group', className, {
        'has-error': error,
        'gm-has-error': error
      })}
    >
      {label && (
        <Flex
          justifyEnd={horizontal}
          width={labelWidth}
          className={classNames(
            'gm-form-label control-label',
            {
              'gm-form-label-untop': unLabelTop
            },
            {
              'gm-form-label-switch-padding-top': hasLabelSwitchPaddingTop
            }
          )}
        >
          {required ? <span style={{ color: 'red' }}>*</span> : ''}
          {label}
        </Flex>
      )}
      <Flex flex column>
        <div className='gm-form-field'>
          {/* 理论上不支持children是数组，但也合理，兼容吧 */}
          {_.isArray(children) ? (
            children
          ) : (
            <FormControl>{children}</FormControl>
          )}
          {error && help ? (
            <div className={classNames({ 'help-block': error })}>{help}</div>
          ) : null}
        </div>
      </Flex>
    </Flex>
  )
}

FormItemInner.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,

  validate: PropTypes.func, // 有 validate, 则 error help无效
  error: PropTypes.bool,
  help: PropTypes.string,

  // 以下不要用， 由context传过来的
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  labelWidth: PropTypes.string,
  canValidate: PropTypes.bool,
  // 以上 由context传过来的

  unLabelTop: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

const FormItem = props => {
  const consumer = useContext(WrapContext)
  return <FormItemInner {...props} {...consumer} />
}

FormItem.displayName = 'FormItem'

export default FormItem
