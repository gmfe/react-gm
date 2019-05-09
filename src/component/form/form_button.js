import React from 'react'
import PropTypes from 'prop-types'

class FormButton extends React.Component {
  render () {
    return (
      <div className='text-center'>
        {this.props.children}
      </div>
    )
  }
}

FormButton.propTypes = {
  children: PropTypes.any
}

export default FormButton
