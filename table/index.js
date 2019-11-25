import Table from './table'

import EditTable from './edit/edit_table'

import fixedColumnsTableHOC from './hoc/fixed_columns_table'
import fixedFirstColumnsTableHOC from './hoc/fixed_first_columns_table'
import selectTableV2HOC from './hoc/select_table'
import expandTableHOC from './hoc/expand_table'
import diyTableHOC from './hoc/diy_table'
import subTableHOC from './hoc/sub_table'

import BatchActionBar from './hoc/select_table/batch_action_bar'

// 只暴露些方法
import {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  SortHeader,
  EditTableOperation,
  referOfWidth,
  EditButton
} from './util'

const TableUtil = {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  SortHeader,
  EditTableOperation,
  EditButton,
  referOfWidth,
  BatchActionBar
}

export {
  Table,
  EditTable,
  subTableHOC,
  diyTableHOC,
  fixedColumnsTableHOC,
  fixedFirstColumnsTableHOC,
  selectTableV2HOC,
  expandTableHOC,
  TableUtil
}
