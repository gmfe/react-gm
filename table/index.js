import 'react-table/react-table.css'
import './style.less'

import Table from './table'
import SelectTable from './select_table'
import ExpandTable from './expand_table'
import ExpandSelectTable from './expand_select_table'
import EditTable from './edit/edit_table'
import {
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation
} from './util'

import diyTableHOC from './hoc/diy_table'
import fixedColumnsTableHOC from './hoc/fixed_columns_table'

const TableUtil = {
  OperationHeader,
  OperationCell,
  SortHeader,
  EditTableOperation
}

export {
  Table,
  EditTable,
  ExpandTable,
  ExpandSelectTable,
  SelectTable,
  diyTableHOC,
  fixedColumnsTableHOC,
  TableUtil
}
