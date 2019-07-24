import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Affix from '../affix'
import _ from 'lodash'

class FormGroup extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    const { onSubmit, onSubmitValidated, formRefs } = this.props

    onSubmit()

    let isPass = true
    _.each(formRefs, form => {
      if (!form.current.apiValidate()) {
        isPass = false
      }
    })
    if (isPass) {
      onSubmitValidated()
    }
  }

  render() {
    const {
      disabled,
      onCancel,
      children,
      formRefs, onSubmit, onSubmitValidated, // eslint-disable-line
      ...rest
    } = this.props

    return (
      <div {...rest} onSubmit={this.handleSubmit}>
        {children}
        <Affix bottom={0}>
          <div className='text-center gm-padding-tb-5 gm-form-group-sticky-bottom'>
            {onCancel && (
              <React.Fragment>
                <button
                  type='button'
                  className='btn btn-default'
                  onClick={onCancel}
                >
                  {getLocale('取消')}
                </button>
                <div className='gm-gap-20' />
              </React.Fragment>
            )}
            <button
              disabled={disabled}
              type='button'
              onClick={this.handleSubmit}
              className='btn btn-primary'
            >
              {getLocale('保存')}
            </button>
          </div>
        </Affix>
      </div>
    )
  }
}

FormGroup.propTypes = {
  disabled: PropTypes.bool,
  onCancel: PropTypes.func,
  formRefs: PropTypes.array,
  onSubmit: PropTypes.func,
  onSubmitValidated: PropTypes.func,
  children: PropTypes.any
}

FormGroup.defaultProps = {
  onSubmit: _.noop,
  onSubmitValidated: _.noop
}

export default FormGroup
