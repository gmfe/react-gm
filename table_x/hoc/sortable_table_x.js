import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import SortableJS from 'sortablejs'
import _ from 'lodash'

function sortableTableX(Component) {
  const SortableTableX = ({ data, onSortChange, keyField, ...rest }) => {
    const id = 'id' + +new Date() + '' + String(Math.random()).slice(2)

    useEffect(() => {
      const target = document.querySelector(`#${id} .gm-table-x-tbody`)

      const sortable = new SortableJS(target, {
        animation: 150,
        onStart: () => {
          target.classList.add('gm-table-x-sortable-active')
        },
        onEnd: () => {
          target.classList.remove('gm-table-x-sortable-active')
        },
        onUpdate: () => {
          const newIds = sortable.toArray()
          const newData = _.sortBy(data.slice(), v =>
            newIds.indexOf(v[keyField])
          )
          onSortChange(newData)
        }
      })

      return () => {
        sortable.destroy()
      }
    }, [data])

    return <Component {...rest} id={id} data={data} keyField={keyField} />
  }

  SortableTableX.propTypes = {
    ...TableX.propTypes,

    keyField: PropTypes.string,
    onSortChange: PropTypes.func.isRequired
  }

  SortableTableX.defaultProps = {
    keyField: 'value'
  }

  return SortableTableX
}

export default sortableTableX
