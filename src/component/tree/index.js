import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import { Checkbox } from '../checkbox'
import { pinYinFilter } from 'gm-util'
import { getLeaf, filterGroupList } from './util'
import _ from 'lodash'
import classNames from 'classnames'
import { getLocale } from '../../locales'

class Tree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      groupSelected: []
    }
  }

    handleChange = (leaf, checked) => {
      const {onSelectValues, selectedValues, onClickCheckbox} = this.props
      onSelectValues(_.xor([leaf.value], selectedValues))

      if (onClickCheckbox) {
        onClickCheckbox(leaf, checked)
      }
    };

    handleSelectAll = (checked) => {
      const {list, onSelectValues} = this.props
      onSelectValues(checked ? _.map(getLeaf(list), v => v.value) : [])
    };

    handleQuery = (e) => {
      const {list} = this.props
      this.setState({
        query: e.target.value
      })
      if (e.target.value) {
        const processList = this.filterWithQuery(list, e.target.value)
        let newGroupSelected = []
        if (processList.length === 0) return
        const pushValue = (list) => {
          if (list[0].children) {
            _.forEach(list, (group) => {
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
    };

    handleGroup = (value) => {
      const {groupSelected} = this.state

      this.setState({
        groupSelected: _.xor(groupSelected, [value])
      })
    };

    handleSelectGroup = (group, isSelectGroup) => {
      const {onClickCheckbox, selectedValues, onSelectValues} = this.props

      const leafValues = _.map(getLeaf(group.children), item => item.value)
      onSelectValues(isSelectGroup ? _.union(selectedValues, leafValues) : _.difference(selectedValues, leafValues))

      if (onClickCheckbox) {
        onClickCheckbox(group, isSelectGroup)
      }
    };

    filterWithQuery = (list, query) => {
      const {withFilter} = this.props
      let processList
      if (withFilter === true) {
        processList = filterGroupList(list, v => pinYinFilter([v], query, v => v.name).length > 0)
      } else if (withFilter) {
        processList = withFilter(list, query)
      }
      return processList
    }

    renderList (list) {
      const {selectedValues, onClickLeafName, showGroupCheckbox} = this.props
      const {groupSelected} = this.state

      if (list.length === 0) {
        return null
      }

      const isGroupData = !!list[0].children

      if (isGroupData) {
        return (
          <div className='gm-tree-group'>
            {_.map(list, group => {
              const isOpen = _.includes(groupSelected, group.value)

              const leafValues = _.map(getLeaf(group.children), item => item.value)
              const isSelectGroup = _.filter(leafValues, value => _.includes(selectedValues, value)).length === leafValues.length

              return (
                <div key={group.value}>
                  <Flex className='gm-tree-group-name gm-cursor gm-hover-bg'>
                    {showGroupCheckbox(group) && (
                      <Checkbox
                        value
                        checked={isSelectGroup}
                        onChange={() => {
                          this.handleSelectGroup(group, !isSelectGroup)
                        }}
                      />
                    )}
                    <Flex flex alignCenter onClick={() => this.handleGroup(group.value)}>
                      {isOpen ? '-' : '+'}&nbsp;{group.name}
                    </Flex>
                  </Flex>
                  {isOpen && (
                    <div className='gm-tree-group-list'>
                      {this.renderList(group.children)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      }

      return (
        <div>
          {_.map(list, v => {
            const checked = _.includes(selectedValues, v.value)
            return (
              <Flex alignCenter key={v.value} className='gm-hover-bg gm-tree-group-list-item gm-cursor'>
                <Checkbox
                  value={v.value}
                  checked={checked}
                  onChange={() => {
                    this.handleChange(v, !checked)
                  }}
                />
                <Flex flex onClick={() => {
                  if (onClickLeafName) {
                    onClickLeafName(v, checked)
                  } else {
                    this.handleChange(v, !checked)
                  }
                }}>
                  {v.name}
                </Flex>
              </Flex>
            )
          })}
        </div>
      )
    }

    render () {
      const {
        title,
        list,
        selectedValues,
        placeholder,
        withFilter,
        disableSelectAll,

            onSelectValues, onClickLeafName, onClickCheckbox, showGroupCheckbox, // eslint-disable-line

        className,
        ...rest
      } = this.props

      const {
        query
      } = this.state
      const processList = this.filterWithQuery(list, query)

      const leafList = getLeaf(list)

      const checkedAll = leafList.length !== 0 && leafList.length === selectedValues.length

      return (
        <Flex column {...rest} className={classNames('gm-tree gm-border gm-bg', className)}>
          {title && (
            <div
              className='gm-padding-5 gm-back-bg text-center gm-border-bottom'>{title}</div>
          )}
          {withFilter ? (
            <div className='gm-tree-filter'>
              <input
                type='text'
                className='form-control'
                value={query}
                onChange={this.handleQuery}
                placeholder={placeholder}
              />
              <i className='glyphicon glyphicon-search gm-text-desc'/>
            </div>
          ) : null}

          <Flex flex column className='gm-bg gm-overflow-y'>
            {this.renderList(processList)}
          </Flex>

          {!disableSelectAll && (
            <Flex justifyBetween alignCenter className='gm-border-top gm-padding-5'>
              <Checkbox
                value
                checked={checkedAll}
                onChange={() => this.handleSelectAll(!checkedAll)}
              >{getLocale('tree', 'selectAll')}</Checkbox>
              <div className='gm-padding-lr-5 gm-text-desc'>
                {selectedValues.length}/{leafList.length}
              </div>
            </Flex>
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
