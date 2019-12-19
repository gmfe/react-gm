import { getLocale } from '../../locales'
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import { pinYinFilter } from 'gm-util'
import { getUnLeafValues, filterGroupList, getValues } from './util'
import _ from 'lodash'
import classNames from 'classnames'
import Bottom from './bottom'
import List from './list'

const filterWithQuery = (list, query, withFilter) => {
  let processList
  if (withFilter === true) {
    processList = filterGroupList(list, v => {
      return pinYinFilter([v], query, v => v.text).length > 0
    })
  } else if (withFilter) {
    processList = withFilter(list, query)
  } else {
    processList = list
  }

  return processList
}

const TreeV2 = ({
  title,
  list,
  selectedValues,
  onSelectValues,
  placeholder,
  withFilter,
  className,
  ...rest
}) => {
  const [query, setQuery] = useState('')
  const [filterList, setFilterList] = useState(list)
  const [listHeight, setListHeight] = useState(null)
  const refList = useRef(null)

  useEffect(() => {
    setListHeight(refList.current.offsetHeight)
  }, [])

  // 区分正常的 展开收起 和 搜索导致的展开收起
  const [queryGroupSelected, setQueryGroupSelected] = useState([])
  const [groupSelected, setGroupSelected] = useState([])

  const handleSelectAll = checked => {
    onSelectValues(checked ? getValues(list) : [])
  }

  const handleQueryFilter = query => {
    if (query === '') {
      setFilterList(list)
      setQueryGroupSelected([])
      return
    }

    const processList = filterWithQuery(list, query, withFilter)

    setFilterList(processList)

    const newGroupSelected = getUnLeafValues(processList)
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

  const newGS = query ? queryGroupSelected : groupSelected

  return (
    <Flex {...rest} column className={classNames('gm-tree-v2', className)}>
      {title && (
        <div className='gm-padding-5 gm-back-bg text-center gm-border-bottom'>
          {title}
        </div>
      )}
      {withFilter && (
        <div className='gm-tree-v2-filter'>
          <input
            type='text'
            className='form-control'
            value={query}
            onChange={handleQuery}
            placeholder={placeholder}
          />
        </div>
      )}

      <div className='gm-flex-flex' ref={refList}>
        {!!listHeight && (
          <List
            list={filterList}
            listHeight={listHeight}
            groupSelected={newGS}
            onGroupSelect={handleGroupSelect}
            selectedValues={selectedValues}
            onSelectValues={onSelectValues}
          />
        )}
      </div>

      <Bottom
        list={list}
        selectedValues={selectedValues}
        onChange={handleSelectAll}
      />
    </Flex>
  )
}

TreeV2.propTypes = {
  /** [{value, name, children: []}] */
  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,

  title: PropTypes.string,
  /** 过滤函数，默认自带，不需要就 false */
  withFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  placeholder: PropTypes.string,

  className: PropTypes.string,
  style: PropTypes.object
}

TreeV2.defaultProps = {
  withFilter: true,
  placeholder: getLocale('搜索')
}

export default TreeV2
