import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Option = () => {
  useEffect(() => {
    console.warn('Deprecated. Use Select data instead.')
  }, [])

  return null
}

Option.displayName = 'Option'

Option.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Option
