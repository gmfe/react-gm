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

export { withDeprecated }
