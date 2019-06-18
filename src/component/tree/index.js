import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import { pinYinFilter } from 'gm-util'
import { getLeaf, filterGroupList } from './util'
import _ from 'lodash'
import classNames from 'classnames'
import { getLocale } from '../../locales'
import Bottom from './bottom'
import List from './list'

const filterWithQuery = (list, query, withFilter) => {
  let processList
  if (withFilter === true) {
    processList = filterGroupList(
      list,
      v => pinYinFilter([v], query, v => v.name).length > 0
    )
  } else if (withFilter) {
    processList = withFilter(list, query)
  }
  return processList
}

class Tree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      groupSelected: []
    }
  }

  handleSelectAll = checked => {
    const { list, onSelectValues } = this.props
    onSelectValues(checked ? _.map(getLeaf(list), v => v.value) : [])
  }

  handleQuery = e => {
    const { list, withFilter } = this.props
    this.setState({
      query: e.target.value
    })
    if (e.target.value) {
      const processList = filterWithQuery(list, e.target.value, withFilter)
      let newGroupSelected = []
      if (processList.length === 0) return
      const pushValue = list => {
        if (list[0].children) {
          _.forEach(list, group => {
            newGroupSelected = _.xor(newGroupSelected, [group.value])
            pushValue(group.children)
          })
        }
      }
      pushValue(processList)
      this.setState({
        groupSelected: newGroupSelected
      })
    }
  }

  handleGroupSelect = groupSelected => {
    this.setState({
      groupSelected
    })
  }

  render() {
    const {
      title,
      list,
      selectedValues,
      onSelectValues,
      placeholder,
      withFilter,
      disableSelectAll,

      onClickLeafName,
      onClickCheckbox,
      showGroupCheckbox,

      className,
      ...rest
    } = this.props

    const { query, groupSelected } = this.state

    const processList = filterWithQuery(list, query, withFilter)

    const leafList = getLeaf(list)

    const checkedAll =
      leafList.length !== 0 && leafList.length === selectedValues.length

    return (
      <Flex
        {...rest}
        column
        className={classNames('gm-tree gm-border gm-bg', className)}
      >
        {title && (
          <div className='gm-padding-5 gm-back-bg text-center gm-border-bottom'>
            {title}
          </div>
        )}
        {withFilter && (
          <div className='gm-tree-filter'>
            <input
              type='text'
              className='form-control'
              value={query}
              onChange={this.handleQuery}
              placeholder={placeholder}
            />
            <i className='glyphicon glyphicon-search gm-text-desc' />
          </div>
        )}

        <Flex flex column className='gm-bg gm-overflow-y'>
          <List
            groupSelected={groupSelected}
            onGroupSelect={this.handleGroupSelect}
            list={processList}
            selectedValues={selectedValues}
            onSelectValues={onSelectValues}
            showGroupCheckbox={showGroupCheckbox}
            onClickLeafName={onClickLeafName}
            onClickCheckbox={onClickCheckbox}
          />
        </Flex>

        {!disableSelectAll && (
          <Bottom
            checkedAll={checkedAll}
            onChange={() => this.handleSelectAll(!checkedAll)}
            selectValuesLength={selectedValues.length}
            leafListLength={leafList.length}
          />
        )}
      </Flex>
    )
  }
}

Tree.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelectValues: PropTypes.func.isRequired,

  // 如果 checkbox 和 名字 的点击分开处理，则提供 onClickLeafName
  onClickLeafName: PropTypes.func,

  // 勾选 checkbox 的时候周知，纯通知
  onClickCheckbox: PropTypes.func,

  withFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  placeholder: PropTypes.string,

  disableSelectAll: PropTypes.bool,
  showGroupCheckbox: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.object
}

Tree.defaultProps = {
  style: {
    width: '250px',
    height: '350px'
  },
  withFilter: true,
  placeholder: getLocale('tree', 'search'),
  showGroupCheckbox: () => true
}

export default Tree
