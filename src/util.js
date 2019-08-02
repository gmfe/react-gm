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

const warn = function() {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  console.warn.apply(this, ['[react-gm warn] ', ...arguments])
}

const devWarnForHook = callback => {
  devWarn(() => {
    useEffect(() => {
      callback()
    }, [])
  })
}

const devWarn = callback => {
  if (process.env.NODE_ENV !== 'production') {
    callback()
  }
}

export { withDeprecated, warn, devWarn, devWarnForHook }
