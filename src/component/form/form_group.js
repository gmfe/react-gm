import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Affix from '../affix'
import { getLocale } from '../../locales'
import _ from 'lodash'
import { is } from 'gm-util'

/**
 * 防重复点击FormGroup
 *
 * onSubmit 和 onSubmitValidated必须二选一
 * */

const FormGroup = props => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    let result = null
    const { onSubmit, onSubmitValidated, formRefs } = props
    if (onSubmit !== _.noop) {
      result = onSubmit(e)
    } else {
      let isPass = true
      _.each(formRefs, form => {
        if (!form.current.apiValidate()) {
          isPass = false
        }
      })
      if (isPass) {
        result = onSubmitValidated(e)
      }
    }

    if (!is.promise(result)) {
      return
    }

    setIsLoading(true)

    Promise.resolve(result)
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const {
    disabled,
    children,
    formRefs,
    onCancel,
    onSubmit,
    onSubmitValidated,
    ...rest
  } = props

  return (
    <div {...rest} onSubmit={handleSubmit}>
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
                {getLocale('formGroup', 'cancelBtn')}
              </button>
              <div className='gm-gap-20' />
            </React.Fragment>
          )}
          <button
            disabled={isLoading || disabled}
            type='button'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            {getLocale('formGroup', 'saveBtn')}
          </button>
        </div>
      </Affix>
    </div>
  )
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
