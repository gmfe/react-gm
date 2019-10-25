import { getLocale } from '../../locales'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import { pinYinFilter } from 'gm-util'
import { getLeaf, getUnLeafValues, filterGroupList } from './util'
import _ from 'lodash'
import classNames from 'classnames'
import Bottom from './bottom'
import List from './list'

const filterWithQuery = (list, query, withFilter) => {
  let processList
  if (withFilter === true) {
    processList = filterGroupList(list, v => {
      return pinYinFilter([v], query, v => v.name).length > 0
    })
  } else if (withFilter) {
    processList = withFilter(list, query)
  } else {
    processList = list
  }

  return processList
}

const Tree = ({
  title,
  list,
  selectedValues,
  onSelectValues,
  disabled,
  placeholder,
  withFilter,
  disableSelectAll,

  onClickLeafName,
  onClickGroupName,
  onClickCheckbox,
  onClickExpand,
  showGroupCheckbox,

  renderLeafItem,
  renderGroupItem,

  className,

  isForManage,
  ...rest
}) => {
  const [query, setQuery] = useState('')
  const [filterList, setFilterList] = useState(list)
  // 区分正常的 展开收起 和 搜索导致的展开收起
  const [queryGroupSelected, setQueryGroupSelected] = useState([])
  const [groupSelected, setGroupSelected] = useState([])

  // 响应 list 的变化
  useEffect(() => {
    handleQueryFilter(query)
  }, [list])

  const handleSelectAll = checked => {
    onSelectValues(checked ? _.map(getLeaf(list), v => v.value) : [])
  }

  const handleQueryFilter = query => {
    if (query === '') {
      setFilterList(list)
      setQueryGroupSelected([])
      return
    }

    const processList = filterWithQuery(list, query, withFilter)

    setFilterList(processList)

    const newGroupSelected = []
    getUnLeafValues(processList, newGroupSelected)
    setQueryGroupSelected(newGroupSelected)
  }
  const debounceHandleQueryFilter = _.debounce(handleQueryFilter, 300)

  const handleQuery = e => {
    const query = e.target.value
    setQuery(query)
    debounceHandleQueryFilter(query)
  }

  const handleGroupSelect = groupSelected => {
    setGroupSelected(groupSelected)
  }

  const leafList = getLeaf(list)

  const checkedAll =
    leafList.length !== 0 && leafList.length === selectedValues.length

  const newGS = query ? queryGroupSelected : groupSelected

  return (
    <Flex
      {...rest}
      column
      className={classNames(
        'gm-tree',
        {
          'gm-tree-is-for-manage': isForManage
        },
        className
      )}
    >
      {title && (
        <div className='gm-padding-5 gm-back-bg text-center gm-border-bottom'>
          {title}
        </div>
      )}
      {withFilter && (
        <div className='gm-tree-filter'>
          <input
            disabled={disabled}
            type='text'
            className='form-control'
            value={query}
            onChange={handleQuery}
            placeholder={placeholder}
          />
          <i className='glyphicon glyphicon-search gm-text-desc' />
        </div>
      )}

      <Flex flex column className='gm-bg gm-overflow-y'>
        <List
          groupSelected={newGS}
          onGroupSelect={handleGroupSelect}
          list={filterList}
          selectedValues={selectedValues}
          onSelectValues={onSelectValues}
          showGroupCheckbox={showGroupCheckbox}
          onClickLeafName={onClickLeafName}
          onClickGroupName={onClickGroupName}
          onClickCheckbox={onClickCheckbox}
          onClickExpand={onClickExpand}
          renderLeafItem={renderLeafItem}
          renderGroupItem={renderGroupItem}
          disabled={disabled}
        />
      </Flex>

      {!disableSelectAll && (
        <Bottom
          checkedAll={checkedAll}
          onChange={() => handleSelectAll(!checkedAll)}
          selectValuesLength={selectedValues.length}
          leafListLength={leafList.length}
          disabled={disabled}
        />
      )}
    </Flex>
  )
}

Tree.propTypes = {
  /** [{value, name}] */
  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,
  disabled: PropTypes.bool,

  title: PropTypes.string,
  /** 过滤函数，默认自带，不需要就 false */
  withFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  placeholder: PropTypes.string,
  disableSelectAll: PropTypes.bool,
  showGroupCheckbox: PropTypes.func,
  /** 勾选 checkbox 的时候周知，纯通知 */
  onClickCheckbox: PropTypes.func,
  /** 点击 展开收起 的时候周知，纯通知 */
  onClickExpand: PropTypes.func,

  // 如果 checkbox 和 名字 的点击分开处理，则提供 onClickLeafName
  onClickLeafName: PropTypes.func,
  onClickGroupName: PropTypes.func,
  // 自定义 leaf 渲染格式
  renderLeafItem: PropTypes.func,
  renderGroupItem: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.object,

  // 不知用啥名字好
  isForManage: PropTypes.bool
}

Tree.defaultProps = {
  style: {
    width: '250px',
    height: '350px'
  },
  withFilter: true,
  placeholder: getLocale('搜索'),
  showGroupCheckbox: () => true
}

export default Tree
