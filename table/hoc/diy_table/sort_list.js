import React from 'react'
import PropTypes from 'prop-types'
import SVGRemove from '../../../svg/remove.svg'

const SortList = ({ cols, onColsRemove }) => {
  const onRemove = (key, e) => {
    e.stopPropagation()
    onColsRemove(key)
  }

  return (
    <ul className='gm-react-table-diy-modal-sort-list-ul'>
      {cols.map(item => {
        const { diyItemText, Header, key, diyEnable } = item
        const text = diyItemText || Header
        return (
          <li className='gm-react-table-diy-modal-sort-list-li' key={key}>
            {text}
            {diyEnable && (
              <SVGRemove
                onClick={onRemove.bind(this, key)}
                className='gm-cursor gm-react-table-diy-modal-sort-list-li-remove'
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

SortList.propTypes = {
  cols: PropTypes.array.isRequired,
  // onColsChange: PropTypes.func.isRequired,
  onColsRemove: PropTypes.func.isRequired
}

export default SortList
