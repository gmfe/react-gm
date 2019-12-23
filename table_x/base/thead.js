import PropTypes from 'prop-types'
import React from 'react'
import Th from './th'

const THead = ({ headerGroups, totalWidth }) => {
  return (
    <div className='gm-table-x-thead'>
      {headerGroups.map((headerGroup, i) => (
        <div key={i} className='gm-table-x-tr'>
          {headerGroup.headers.map((column, i) => (
            <Th key={i} column={column} totalWidth={totalWidth} />
          ))}
        </div>
      ))}
    </div>
  )
}

THead.propTypes = {
  headerGroups: PropTypes.array.isRequired,
  totalWidth: PropTypes.number.isRequired
}

export default THead
