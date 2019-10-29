import React, { useContext } from 'react'
const WrapContext = React.createContext(null)

const withWrapContext = Component => {
  return props => {
    const consumer = useContext(WrapContext)
    return <Component {...consumer} {...props} />
  }
}

export { WrapContext, withWrapContext }
