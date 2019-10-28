import React from 'react'

/** 约定 Component 的子元素 存在 data-id */
const withSortable = Component => {
  return props => <Component {...props} />
}

export default withSortable
