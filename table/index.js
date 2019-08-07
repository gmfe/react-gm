import 'react-table/react-table.css'

import Table from './table'
import EditTable from './edit/edit_table'

import diyTableHOC from './hoc/diy_table'
import fixedColumnsTableHOC from './hoc/fixed_columns_table'
import fixedFirstColumnsTableHOC from './hoc/fixed_first_columns_table'
import selectTableHOC from './hoc/select_table'
import expandTableHOC from './hoc/expand_table'

// 只暴露些方法
import {
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation,
  referOfWidth
} from './util'

// 向下兼容，保留，会逐步废弃
const SelectTable = selectTableHOC(Table)

const TableUtil = {
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation,
  referOfWidth
}

export {
  Table,
  EditTable,
  SelectTable,
  diyTableHOC,
  fixedColumnsTableHOC,
  fixedFirstColumnsTableHOC,
  selectTableHOC,
  expandTableHOC,
  TableUtil
}
