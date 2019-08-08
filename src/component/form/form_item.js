import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'
import _ from 'lodash'
import Validator from '../../validator'
import { WrapContext } from './util'

const FormControl = ({ children }) => {
  const { className } = children.props

  const child = children

  // 文件类型特殊
  if (child.type === 'input' && child.props.type !== 'file') {
    return React.cloneElement(child, {
      className: classNames('form-control', className)
    })
  } else if (
    child.type.displayName === 'textarea' ||
    child.type.displayName === 'select' ||
    child.type.displayName === 'InputNumber' ||
    child.type.displayName === 'InputNumberV2'
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
      {...rest}
      className={classNames('gm-form-group', className, {
        'has-error': error,
        'gm-has-error': error
      })}
    >
      {label && (
        <Flex
          justifyEnd
          width={labelWidth}
          className={classNames(
            'gm-form-label control-label',
            {
              'gm-form-label-un-top': unLabelTop
            },
            {
              'gm-form-label-switch-padding-top': hasLabelSwitchPaddingTop
            }
          )}
        >
          {required ? <span style={{ color: 'red' }}>*</span> : ''}
          {label}
          {label && '：'}
        </Flex>
      )}
      <Flex flex column>
        <div className='gm-form-field'>
          <FormControl>{children}</FormControl>
          {!!(error && help) && (
            <div className={classNames({ 'help-block': error })}>{help}</div>
          )}
        </div>
      </Flex>
    </Flex>
  )
}

FormItemInner.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  unLabelTop: PropTypes.bool,

  validate: PropTypes.func, // 有 validate, 则 error help无效
  error: PropTypes.bool,
  help: PropTypes.string,

  // 以下不要用， 由context传过来的
  labelWidth: PropTypes.string,
  canValidate: PropTypes.bool,
  // 以上 由context传过来的

  className: PropTypes.string,
  style: PropTypes.object
}

const FormItem = props => {
  const consumer = useContext(WrapContext)
  return <FormItemInner {...consumer} {...props} />
}

FormItem.displayName = 'FormItem'

export default FormItem
