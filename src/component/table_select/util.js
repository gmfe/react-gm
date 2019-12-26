import _ from 'lodash'

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

export { getColumnKey }
