import React from 'react'
import PropTypes from 'prop-types'
import Affix from '../affix'
import _ from 'lodash'
import { getLocale } from '../../locales'

class FormGroup extends React.Component {
  handleSubmit = (e) => {
    _.forEach(this.props.formRefs, f => {
      f.current.handleSubmit(e)
    })
  }

  render () {
    const { className, disabled, hasCancel, onCancel, children } = this.props
    return (
      <div className={className}>
        {children}
        <Affix bottom={0}>
          <div className='text-center gm-padding-tb-5 gm-form-group-sticky-bottom'>
            <button disabled={disabled} type='submit' className='btn btn-primary' onClick={this.handleSubmit}>{getLocale('formGroup', 'saveBtn')}</button>
            {hasCancel && <React.Fragment>
              <div className='gm-gap-20'/>
              <button type='button' className='btn btn-default' onClick={onCancel}>{getLocale('formGroup', 'cancelBtn')}</button>
            </React.Fragment>}
          </div>
        </Affix>
      </div>
    )
  }
}

FormGroup.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasCancel: PropTypes.bool,
  onCancel: PropTypes.func,
  formRefs: PropTypes.array
}

export default FormGroup
