import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { FixedSizeList } from 'react-window'

function virtualizedTableX(Component) {
  const VirtualizedTableX = ({
    virtualizedHeight,
    virtualizedItemSize,
    ...rest
  }) => {
    const RowsContainerComponent = ({ rows, children }) => {
      return (
        <FixedSizeList
          height={virtualizedHeight}
          itemCount={rows.length}
          itemSize={virtualizedItemSize}
        >
          {children}
        </FixedSizeList>
      )
    }

    return (
      <Component {...rest} RowsContainerComponent={RowsContainerComponent} />
    )
  }

  VirtualizedTableX.propTypes = {
    ...TableX.propTypes,
    /** 需要提供 body 的高度 */
    virtualizedHeight: PropTypes.number.isRequired,
    /** 默认表格的最小 */
    virtualizedItemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
      .isRequired
  }

  return VirtualizedTableX
}

export default virtualizedTableX
