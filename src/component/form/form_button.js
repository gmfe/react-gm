import React from 'react'
import PropTypes from 'prop-types'
import { withWrapContext } from './util'

const FormButton = withWrapContext(
  ({ labelWidth, btnPosition, inline, children }) => {
    const style = {
      marginLeft:
        btnPosition === 'left' && !inline && labelWidth ? labelWidth : 0
    }

    const position = btnPosition ? `text-${btnPosition}` : 'text-center'

    return (
      <div style={style} className={position}>
        {children}
      </div>
    )
  }
)

FormButton.propTypes = {
  /** 由 Form 传下来 */
  labelWidth: PropTypes.string,
  /** 由 Form 传下来, 也可自定义 */
  btnPosition: PropTypes.oneOf(['center', 'left', 'right'])
}

export default FormButton
