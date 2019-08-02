import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Validator from '../../validator'
import { WrapContext } from './util'
import { devWarn } from '../../util'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canValidate: false
    }

    devWarn(() => {
      if (
        !(props.onSubmit || props.onSubmitValidated || props.hasButtonInGroup)
      ) {
        console.warn('请提供 onSubmit or onSubmitValidated or hasButtonInGroup')
      }
    })
  }

  apiDoValidate = () => {
    const err = this.validateAll()
    // 有错误才打开错误提示，没有错误则不打开
    this.setState({
      canValidate: !!err
    })
    return !err
  }

  getFormItemFields(children, formItems) {
    _.each(React.Children.toArray(children), child => {
      if (child.type && child.type.displayName === 'FormItem') {
        formItems.push(child)
      } else if (child.props && child.props.children) {
        this.getFormItemFields(child.props.children, formItems)
      }
    })
  }

  validateAll() {
    const { children } = this.props
    const helpList = []
    const formItems = []

    this.getFormItemFields(children, formItems)

    _.each(formItems, item => {
      if (item.props.error) {
        helpList.push({
          label: item.props.label,
          help: item.props.error
        })
      } else if (item.props.validate) {
        let help = ''
        if (item.props.required) {
          help = item.props.validate(function(value) {
            return Validator.validate(Validator.TYPE.required, value)
          })
        } else {
          help = item.props.validate()
        }
        if (help) {
          helpList.push({
            label: item.props.label,
            help
          })
        }
      }
    })

    return helpList.length === 0 ? null : helpList
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(e)

    const err = this.validateAll()
    if (!err) {
      this.props.onSubmitValidated()
    }

    // 有错误才打开错误提示，没有错误则不打开
    this.setState({
      canValidate: !!err
    })
  }

  render() {
    const {
      inline,
      labelWidth,
      disabledCol,
      className,
      children,
      hasButtonInGroup,
      onSubmitValidated, //eslint-disable-line
      ...rest
    } = this.props

    return (
      <WrapContext.Provider
        value={{
          labelWidth,
          disabledCol,
          inline,
          canValidate: this.state.canValidate
        }}
      >
        <form
          {...rest}
          className={classNames(
            'gm-form',
            {
              'form-inline': inline
            },
            className
          )}
          onSubmit={this.handleSubmit}
        >
          {children}
          {hasButtonInGroup && (
            <button type='submit' style={{ display: 'none' }}>
              button
            </button>
          )}
        </form>
      </WrapContext.Provider>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func, // 默认处理了 preventDefault,
  onSubmitValidated: PropTypes.func,
  inline: PropTypes.bool,
  disabledCol: PropTypes.bool,
  labelWidth: PropTypes.string,
  hasButtonInGroup: PropTypes.bool, // 只在FormGroup下用。用于添加一个隐藏的按钮，为了触发FormGroup的submit
  className: PropTypes.string,
  style: PropTypes.object
}

export default Form
