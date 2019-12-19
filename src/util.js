import React, { useEffect } from 'react'
import hoistStatics from 'hoist-non-react-statics'

const withDeprecated = warnText => {
  return Component => {
    const Deprecated = props => {
      useEffect(() => {
        console.warn(warnText || 'Deprecated')
      }, [])
      return <Component {...props} />
    }

    return hoistStatics(Deprecated, Component)
  }
}

const warn = function() {
  if (process.env.NODE_ENV !== 'production') {
    console.warn.apply(this, ['[react-gm warn] ', ...arguments])
  }
}

const warnHook = function() {
  useEffect(() => {
    warn.apply(this, arguments)
  }, [])
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

export { withDeprecated, warn, warnHook, devWarn, devWarnForHook }
