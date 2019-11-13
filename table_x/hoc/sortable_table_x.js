import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import TableX from '../base'
import SortableJS from 'sortablejs'
import _ from 'lodash'

function sortableTableX(Component) {
  const SortableTableX = ({ data, onSortChange, ...rest }) => {
    const id = 'id' + +new Date() + '' + String(Math.random()).slice(2)

    useEffect(() => {
      const target = document.querySelector(`#${id} .gm-tablex-tbody`)

      const sortable = new SortableJS(target, {
        animation: 150,
        onStart: () => {
          target.classList.add('gm-tablex-sortable-active')
        },
        onEnd: () => {
          target.classList.remove('gm-tablex-sortable-active')
        },
        onUpdate: () => {
          const newIds = sortable.toArray()
          const newData = _.sortBy(data.slice(), v => newIds.indexOf(v.value))
          onSortChange(newData)
        }
      })

      return () => {
        sortable.destroy()
      }
    }, [])

    return <Component {...rest} id={id} data={data} />
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
