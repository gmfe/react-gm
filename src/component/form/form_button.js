import React from 'react'

class FormButton extends React.Component {
  render () {
    const { children, ...rest } = this.props
    return (
      <div className='text-center' {...rest}>
        {children}
      </div>
    )
  }
}

export default FormButton
