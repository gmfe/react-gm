import React from 'react'
import PropTypes from 'prop-types'
import Affix from '../affix'
import { getLocale } from '../../locales'
import _ from 'lodash'

class FormGroup extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const { onSubmit, onSubmitValidated, formRefs, apiDoValidate } = this.props

    onSubmit()

    let errList = []
    _.each(formRefs, form => {
      const err = form.current.apiValidate()
      if (err) { errList.push(err) }
    })

    if (errList.length) {
      return apiDoValidate && apiDoValidate(errList)
    }
    onSubmitValidated()
  }

  render () {
    const {
      disabled,
      onCancel,
      children,
      formRefs, onSubmit, onSubmitValidated, apiDoValidate, // eslint-disable-line
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        onSubmit={this.handleSubmit}
      >
        {children}
        <Affix bottom={0}>
          <div className='text-center gm-padding-tb-5 gm-form-group-sticky-bottom'>
            {onCancel && <React.Fragment>
              <button
                type='button'
                className='btn btn-default'
                onClick={onCancel}
              >{getLocale('formGroup', 'cancelBtn')}</button>
              <div className='gm-gap-20'/>
            </React.Fragment>}
            <button
              disabled={disabled}
              type='button'
              onClick={this.handleSubmit}
              className='btn btn-primary'
            >{getLocale('formGroup', 'saveBtn')}</button>
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
  onSubmitValidated: PropTypes.func
}

FormGroup.defaultProps = {
  onSubmit: _.noop,
  onSubmitValidated: _.noop
}

export default FormGroup
