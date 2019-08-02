import React, { useEffect } from 'react'

const withDeprecated = (Component, warnText) => {
  const Deprecated = props => {
    useEffect(() => {
      console.warn(warnText || 'Deprecated')
    }, [])
    return <Component {...props} />
  }

  return Deprecated
}

const devWarn = callback => {
  if (process.env.NODE_ENV !== 'production') {
    callback()
  }
}

export { withDeprecated, devWarn }
