import React from 'react'
import { getLocale } from '../../locales'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import EVENT_TYPE from '../../src/event_type'
import SVGEmpty from '../../svg/empty.svg'
import { Flex } from '../../src'
import BatchActionBar from '../../table/hoc/select_table/batch_action_bar'
import SortHeader from './sort_header'
import {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit
} from './operation'
import { EditButton, EditOperation } from './edit'

const TABLE_X_SELECT_ID = 'table_x_select_id'
const TABLE_X_EXPAND_ID = 'table_x_expand_id'
const TABLE_X_SUB_TABLE_ID = 'table_x_sub_table_id'
const TABLE_X = {
  HEIGHT_HEAD_TR: 46,
  HEIGHT_TR: 60,
  WIDTH_FUN: 46,
  // 序号
  WIDTH_NO: 56,
  // 操作区
  WIDTH_OPERATION: 100,
  // MoreSelect 类似
  WIDTH_SEARCH: 168,
  // number input
  WIDTH_NUMBER: 80,
  // Select
  WIDTH_SELECT: 148,
  // DatePicker
  WIDTH_DATE: 110
}

const Mask = ({ style, children }) => {
  return (
    <Flex
      column
      alignCenter
      justifyCenter
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: '46px',
        ...style
      }}
    >
      {children}
    </Flex>
  )
}

Mask.propTypes = {
  style: PropTypes.object
}

const Empty = () => {
  return (
    <Mask>
      <div style={{ padding: '10px' }}>
        <SVGEmpty style={{ width: '70px', height: '70px' }} />
        <div className='gm-text-desc'>{getLocale('没有数据了')}</div>
      </div>
    </Mask>
  )
}

const Loading = () => {
  return (
    <Mask
      style={{
        backgroundColor: 'rgba(255,255,255,0.8)'
      }}
    >
      {getLocale('加载数据中...')}
    </Mask>
  )
}

const Resizer = props => (
  <div
    {...props}
    className={classNames('gm-table-x-resizer', props.className)}
  />
)

Resizer.propTypes = {
  className: PropTypes.string
}

const CellEmpty = () => <span className='gm-text-desc'>-</span>

const getColumnStyle = column => {
  // width 200
  // flex: 200 0 auto; width: 200px; max-width: 200px;
  // maxWidth 300
  // flex: 100 0 auto; width: 100px; max-width: 300px;
  // minWidth 200
  // flex: 200 0 auto; width: 200px;
  // minWidth 50 width 100
  // flex: 100 0 auto; width: 100px; max-width: 100px;
  const style = {
    flex: `${column.width} 0 auto`,
    width: `${column.width || column.minWidth}px`,
    maxWidth: (column.maxWidth || column.width) + 'px'
  }

  return style
}

const afterScroll = _.debounce(() => {
  console.log('afterScroll')
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.TABLE_SCROLL))
}, 500)

function getColumnKey(column) {
  // 如果是字符串就取 accessor
  if (_.isString(column.accessor)) {
    return column.accessor
  }
  // 如果 accessor 是函数，则一定会提供 id，否则 react-table 会报错
  else if (_.isFunction(column.accessor) && column.id) {
    return column.id
  }
  // 额外的情况，有些时候只有id，比如 diy 存储就只存了 id，因为 函数没法存储
  else if (column.id) {
    return column.id
  }

  // 其他情况没法获得 key
  return null
}

export {
  TABLE_X,
  TABLE_X_SELECT_ID,
  TABLE_X_EXPAND_ID,
  TABLE_X_SUB_TABLE_ID,
  Empty,
  Loading,
  SortHeader,
  Resizer,
  CellEmpty,
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  EditButton,
  EditOperation,
  BatchActionBar,
  getColumnStyle,
  afterScroll,
  getColumnKey
}
