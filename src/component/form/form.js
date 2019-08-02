import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Validator from '../../validator'
import { WrapContext } from './util'
// import { devWarn } from '../../util'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canValidate: false
    }

    // devWarn(() => {
    //   let i = 0
    //   props.onSubmit && i++
    //   props.onSubmitValidated && i++
    //   props.hasButtonInGroup && i++
    //   if (i === 0) {
    //     console.warn('请提供 onSubmit or onSubmitValidated or hasButtonInGroup')
    //   } else if (i > 1) {
    //     console.warn(
    //       '请仅提供以下一项 onSubmit or onSubmitValidated or hasButtonInGroup'
    //     )
    //   }
    // })
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
    const { onSubmit, onSubmitValidated } = this.props

    onSubmit && onSubmit(e)

    const err = this.validateAll()
    if (!err) {
      onSubmitValidated && onSubmitValidated()
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
      btnPosition,
      colWidth,
      ...rest
    } = this.props

    return (
      <WrapContext.Provider
        value={{
          labelWidth,
          disabledCol,
          inline,
          btnPosition,
          colWidth,
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
  /** 默认处理了 event.preventDefault，避免犯低级错误 */
  onSubmit: PropTypes.func,
  /** 如果 FormItem 定义了 validate，则此方法就在所有验证通过后才调用 */
  onSubmitValidated: PropTypes.func,
  /** 行内模式，一般用不到。目前在 BoxForm 内部自动使用 */
  inline: PropTypes.bool,
  /** FormItem 默认一栏，会限定宽度。有些场景是不能限定宽度的，比如宽撑满一页，如果是启用此项 */
  disabledCol: PropTypes.bool,
  /** 自定义列宽 */
  colWidth: PropTypes.string,
  labelWidth: PropTypes.string,
  /** 只在 FormGroup 下用。用于添加一个隐藏的按钮，响应 enter */
  hasButtonInGroup: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  btnPosition: PropTypes.oneOf(['center', 'left', 'right'])
}

export default Form
