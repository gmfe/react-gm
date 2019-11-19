import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import _ from 'lodash'
import SVGCloseup from '../../svg/closeup.svg'
import SVGExpand from '../../svg/expand.svg'
import { TABLEX_COLUMN_WIDTH, TABLEX_EXPAND_ID } from '../util'

const Expand = ({ active, onChange }) => {
  return (
    <div className='gm-cursor' onClick={onChange}>
      {active ? <SVGCloseup className='gm-text-primary' /> : <SVGExpand />}
    </div>
  )
}

Expand.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

function expandTableXHOC(Component) {
  const ExpandTableX = ({
    columns,
    data,
    SubComponent,
    fixedExpand,
    ...rest
  }) => {
    const [expanded, setExpanded] = useState({})

    const newColumns = [
      {
        id: TABLEX_EXPAND_ID,
        width: TABLEX_COLUMN_WIDTH.FUN_WIDTH,
        maxWidth: TABLEX_COLUMN_WIDTH.FUN_WIDTH,
        fixed: fixedExpand ? 'left' : null,
        Header: () => {
          const isAllExpanded =
            _.filter(expanded, v => v).length === data.length
          return (
            <Expand
              active={isAllExpanded}
              onChange={() => {
                if (isAllExpanded) {
                  setExpanded({})
                } else {
                  const newExpanded = {}
                  _.each(data, (v, i) => {
                    newExpanded[i] = {}
                  })
                  setExpanded(newExpanded)
                }
              }}
            />
          )
        },
        Cell: ({ row }) => {
          const isExpanded = !!expanded[row.index]

          return (
            <Expand
              active={isExpanded}
              onChange={() => {
                setExpanded({
                  ...expanded,
                  [row.index]: !isExpanded
                })
              }}
            />
          )
        }
      }
    ].concat(columns)

    const handleSubComponent = row => {
      const isExpanded = !!expanded[row.index]
      if (!isExpanded) {
        return null
      }

      return SubComponent(row)
    }

    return (
      <Component
        {...rest}
        columns={newColumns}
        data={data}
        SubComponent={handleSubComponent}
      />
    )
  }

  ExpandTableX.propTypes = {
    ...TableX.propTypes,
    fixedExpand: PropTypes.bool,
    SubComponent: PropTypes.func.isRequired
  }

  return ExpandTableX
}

export default expandTableXHOC