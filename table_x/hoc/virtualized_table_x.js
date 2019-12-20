import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { VariableSizeList } from 'react-window'
import { TABLE_X } from '../util'
import _ from 'lodash'

function virtualizedTableXHOC(Component) {
  const VirtualizedTableX = ({
    virtualizedHeight,
    virtualizedItemSize,
    virtualizedDisabled,
    refVirtualized,
    initialScrollOffset,
    ...rest
  }) => {
    const ContainerComponent = ({ rows, Wrap, RenderRow }) => {
      const Container = React.forwardRef(({ children, ...rest }, ref) => {
        return (
          <Wrap ref={ref} {...rest}>
            {children}
          </Wrap>
        )
      })

      const Row = ({ index, style }) => {
        if (index === 0) {
          return <div style={style} />
        }
        return RenderRow({
          index: index - 1,
          style
        })
      }

      const isFun = _.isFunction(virtualizedItemSize)
      const itemSize = index => {
        if (index === 0) {
          return TABLE_X.HEIGHT_HEAD_TR
        }

        if (isFun) {
          return virtualizedItemSize(index - 1)
        }

        return virtualizedItemSize
      }

      return (
        <VariableSizeList
          ref={refVirtualized}
          height={virtualizedHeight}
          itemCount={rows.length + 1}
          itemSize={itemSize}
          innerElementType={Container}
          initialScrollOffset={initialScrollOffset}
          className='gm-table-x-virtualized'
        >
          {Row}
        </VariableSizeList>
      )
    }

    ContainerComponent.propTypes = {
      rows: PropTypes.array.isRequired,
      Wrap: PropTypes.any.isRequired,
      RenderRow: PropTypes.func.isRequired
    }

    return (
      <Component
        {...rest}
        ContainerComponent={
          virtualizedDisabled ? undefined : ContainerComponent
        }
      />
    )
  }

  VirtualizedTableX.propTypes = {
    ...TableX.propTypes,
    /** 需要提供 table 的高度 */
    virtualizedHeight: PropTypes.number.isRequired,
    /** 行的高度 */
    virtualizedItemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
      .isRequired,
    virtualizedDisabled: PropTypes.bool,
    refVirtualized: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    initialScrollOffset: PropTypes.number
  }

  return VirtualizedTableX
}

export default virtualizedTableXHOC
