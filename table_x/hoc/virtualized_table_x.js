import React from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import { VariableSizeList } from 'react-window'
import { TABLE_X } from '../util'
import _ from 'lodash'

function virtualizedTableX(Component) {
  const ContainerComponent = ({
    Wrap,
    wrapProps,
    rows,
    RenderRow,
    virtualizedProps
  }) => {
    const refVirtualized = React.useRef(null)
    const virtualizedHeight = 400
    const virtualizedItemSize = 60
    // const {
    //   refVirtualized,
    //   virtualizedHeight,
    //   virtualizedItemSize
    // } = virtualizedProps

    const Container = React.forwardRef(({ children, ...rest }, ref) => {
      return (
        <Wrap ref={ref} {...wrapProps} {...rest}>
          {children}
        </Wrap>
      )
    })

    const Row = ({ index, style }) => {
      if (index === 0) {
        return null
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
      >
        {Row}
      </VariableSizeList>
    )
  }

  ContainerComponent.propTypes = {
    Wrap: PropTypes.any.isRequired,
    wrapProps: PropTypes.object.isRequired,
    rows: PropTypes.array.isRequired,
    RenderRow: PropTypes.func.isRequired,
    virtualizedProps: PropTypes.object.isRequired
  }

  const VirtualizedTableX = ({
    virtualizedHeight,
    virtualizedItemSize,
    virtualizedDisabled,
    refVirtualized,
    ...rest
  }) => {
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
    refVirtualized: PropTypes.object
  }

  return VirtualizedTableX
}

export default virtualizedTableX
