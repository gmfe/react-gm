import { getLocale } from '../../locales'
import React, { useMemo, useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Affix from '../affix'
import _ from 'lodash'
import Button from '../button'
import { warn, devWarnForHook } from '../../util'

/** 聚合多个表单，统一处理 submit */
const FormGroup = ({
  disabled,
  onCancel,
  children,
  formRefs,
  onSubmit,
  saveText,
  onSubmitValidated,
  ...rest
}) => {
  devWarnForHook(() => {
    let i = 0
    onSubmit && i++
    onSubmitValidated && i++

    if (i === 0) {
      warn('请提供 onSubmit or onSubmitValidated')
    } else if (i > 1) {
      warn('请仅提供其一 onSubmit or onSubmitValidated')
    }
  })

  const [affix, setAffix] = useState(false)
  const formGroupRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit()

    let isPass = true

    _.each(formRefs, form => {
      if (!form.current.apiDoValidate()) {
        isPass = false
      }
    })

    if (isPass) {
      onSubmitValidated && onSubmitValidated()
    }
  }

  const action = useMemo(
    () => (
      <div className='gm-form-group-sticky-box'>
        {onCancel && (
          <React.Fragment>
            <Button
              disabled={disabled}
              type='button'
              className='btn btn-default'
              onClick={onCancel}
            >
              {getLocale('取消')}
            </Button>
            <div className='gm-gap-10' />
          </React.Fragment>
        )}
        <Button
          disabled={disabled}
          type='button'
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          {saveText}
        </Button>
      </div>
    ),
    [disabled]
  )

  useEffect(() => {
    const { availHeight } = window.screen
    const contentHeight = formGroupRef.current.offsetHeight
    if (contentHeight > availHeight) {
      setAffix(true)
    }
  }, [])

  return (
    <div ref={formGroupRef} {...rest} onSubmit={handleSubmit}>
      {children}
      {affix ? <Affix bottom={0}>{action}</Affix> : action}
    </div>
  )
}

FormGroup.propTypes = {
  formRefs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
  onSubmitValidated: PropTypes.func,
  onCancel: PropTypes.func,
  disabled: PropTypes.bool,
  /** save按钮文案，默认保存 */
  saveText: PropTypes.string
}

FormGroup.defaultProps = {
  saveText: getLocale('保存')
}

export default FormGroup
