import React from 'react'
import Flex from '../flex'
import { Checkbox, CheckboxGroup } from '../checkbox'
import { pinYinFilter } from 'gm-util'
import _ from 'lodash'
import { getLocale } from '../../locales'

class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

    handleChange = (selectedValues) => {
      const {onSelect} = this.props
      onSelect(selectedValues)
    };

    handleSelectAll = (checked) => {
      const {list, onSelect} = this.props

      onSelect(checked.length === 0 ? [] : _.map(list, v => v.value))
    };

    handleQuery = (e) => {
      this.setState({
        query: e.target.value
      })
    };

    render () {
      let {
        list,
        selectedValues,

        style,

        title,
        placeholder,
        withFilter
      } = this.props

      const {
        query
      } = this.state

      let processList
      if (withFilter === true) {
        processList = pinYinFilter(list, query, e => e.name)
      } else if (withFilter) {
        processList = withFilter(list, query)
      }

      return (
        <Flex column className='gm-transfer-box gm-border gm-bg' style={style}>
          {title && (
            <div
              className='gm-transfer-box-title gm-padding-5 gm-back-bg text-center gm-border-bottom'>{title}</div>
          )}

          {withFilter ? (
            <div className='gm-transfer-box-filter'>
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
          <Flex flex column className='gm-bg gm-transfer-box-list gm-overflow-y'>
            <CheckboxGroup
              className='gm-margin-0'
              name={'transferBox' + Math.random()}
              value={selectedValues}
              onChange={this.handleChange}
            >
              {_.map(processList, v => (
                <Checkbox key={v.value} value={v.value} block className='gm-cursor'>{v.name}</Checkbox>
              ))}
            </CheckboxGroup>
          </Flex>

          <Flex justifyBetween alignCenter className='gm-border-top'>
            <CheckboxGroup
              name='transferBoxBottom'
              className='gm-margin-0 gm-padding-5'
              value={[list.length !== 0 && list.length === selectedValues.length]}
              onChange={this.handleSelectAll}
            >
              <Checkbox value>{getLocale('transfer', 'selectAll')}</Checkbox>
            </CheckboxGroup>
            <div className='gm-padding-lr-5 gm-text-desc'>{selectedValues.length}/{list.length}</div>
          </Flex>
        </Flex>
      )
    }
}

export default Box
