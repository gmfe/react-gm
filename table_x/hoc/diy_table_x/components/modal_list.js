import React from 'react'
import PropTypes from 'prop-types'
import SVGRemove from '../../../../svg/remove.svg'

const ModalList = ({ cols, onColsRemove }) => {
  const onRemove = (key, e) => {
    e.stopPropagation()
    onColsRemove(key)
  }

  return (
    <ul className='gm-react-table-x-diy-modal-list-ul'>
      {cols.map(item => {
        const { diyItemText, Header, key, diyEnable } = item
        const text = diyItemText || Header
        return (
          <li className='gm-react-table-x-diy-modal-list-li' key={key}>
            {text}
            {diyEnable && (
              <SVGRemove
                onClick={onRemove.bind(this, key)}
                className='gm-cursor gm-react-table-x-diy-modal-list-li-remove'
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

ModalList.propTypes = {
  cols: PropTypes.array.isRequired,
  onColsRemove: PropTypes.func.isRequired
}

export default ModalList
