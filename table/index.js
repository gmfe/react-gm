import React from 'react'
import Table from './table'
import SelectTable from './select_table'
import ExpandTable from './expand_table'
import 'react-table/react-table.css'
import './style.less'

const TableUtil = {
  OperationHeader: <div className='text-center'><i className='xfont xfont-fun' style={{color: 'rgb(19, 193, 159)'}}/>
  </div>,
  OperationCell: (props) => <div {...props} className={'text-center ' + props.className}/>
}

export {
  Table,
  ExpandTable,
  SelectTable,
  TableUtil
}
