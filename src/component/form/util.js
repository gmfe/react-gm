import React, { useContext } from 'react'
const WrapContext = React.createContext(null)
// 暂定
const colWidth = 360

const withWrapContext = Component => {
  return props => {
    const consumer = useContext(WrapContext)
    return <Component {...consumer} {...props} />
  }
}

export { WrapContext, withWrapContext, colWidth }
