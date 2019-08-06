import React from 'react'
import PropTypes from 'prop-types'

const FormButton = ({ children }) => {
  return <div className='text-center'>{children}</div>
}

FormButton.propTypes = {
  children: PropTypes.any
}

export default FormButton
