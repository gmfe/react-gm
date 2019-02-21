import React from 'react'
import Popover from '../../src/component/popover'
import List from '../../src/component/list'
import Flex from '../../src/component/flex'
import { getLocale } from '../../src/locales'

const defaultSelectInputComponent = props => {
  return (
    <input
      type={props.selectType || 'checkbox'}
      checked={props.checked}
      onClick={e => {
        const { shiftKey } = e
        e.stopPropagation()
        props.onClick(props.id, shiftKey, props.row)
      }}
      onChange={() => {}}
    />
  )
}

const selectAllPageTypeComponent = props => {
  return <Flex>
    <input
      type={props.selectType || 'checkbox'}
      checked={props.checked}
      onClick={e => {
        const { shiftKey } = e
        e.stopPropagation()
        props.onClick(props.id, shiftKey, props.row)
      }}
      onChange={() => {}}
    />
    <Popover type='click' popup={
      <List
        selected={props.selectAllPageType}
        data={[
          { value: 1, text: getLocale('sheet', 'currentPage') },
          { value: 2, text: getLocale('sheet', 'allPage') }
        ]}
        onSelect={props.handleSelectAllPageType}
      />
    }>
      <i className='xfont xfont-down-triangle' style={{ cursor: 'pointer', padding: '2px 0 0 5px' }}/>
    </Popover>
  </Flex>
}

export default Component => {
  const wrapper = class RTSelectTable extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        selectAllPageType: 1
      }
    }

    renderTip = () => {
      const { selectAllPageType } = this.state
      return selectAllPageType === 1
        ? <div className='gm-react-table-select-all-tip'>{this.props.selectAllTip}</div>
        : <div className='gm-react-table-select-all-tip'>{this.props.selectAllPageTip}</div>
    }

    handleSelectAllPageType = (type) => {
      this.setState({ selectAllPageType: type })
      const { onSelectAllPage } = this.props
      onSelectAllPage && onSelectAllPage(type)
    }

    rowSelector (row) {
      if (!row || !row.hasOwnProperty(this.props.keyField)) return null
      const { toggleSelection, selectType, keyField, SelectInputComponent } = this.props
      const checked = this.props.isSelected(row[this.props.keyField])
      const inputProps = {
        checked,
        onClick: toggleSelection,
        selectType,
        id: row[keyField],
        row
      }
      return <SelectInputComponent {...inputProps}/>
    }

    headSelector () {
      const { selectType } = this.props
      if (selectType === 'radio') return null

      const { selectAllPageType } = this.state
      const { toggleAll, selectAll: checked, SelectAllInputComponent, SelectAllPageTypeComponent, hasSelectAllPage } = this.props
      const injectProps = {
        checked,
        onClick: toggleAll,
        selectType,
        selectAllPageType,
        handleSelectAllPageType: this.handleSelectAllPageType
      }

      return hasSelectAllPage ? <SelectAllPageTypeComponent {...injectProps}/> : <SelectAllInputComponent {...injectProps}/>
    }

    // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll
    getWrappedInstance () {
      if (!this.wrappedInstance) console.warn('RTSelectTable - No wrapped instance')
      if (this.wrappedInstance.getWrappedInstance) {
        return this.wrappedInstance.getWrappedInstance()
      } else {
        return this.wrappedInstance
      }
    }

    render () {
      const {
        isSelected, toggleSelection, toggleAll, keyField, selectType, SelectAllInputComponent, SelectInputComponent, // eslint-disable-line
        selectAll,
        selectAllTip,
        selectWidth,
        columns: originalCols,
        ...rest
      } = this.props
      const select = {
        id: '_selector',
        accessor: () => 'x', // this value is not important
        Header: this.headSelector.bind(this),
        Cell: ci => {
          return this.rowSelector.bind(this)(ci.original)
        },
        width: selectWidth || 40,
        filterable: false,
        sortable: false,
        resizable: false,
        style: { textAlign: 'left' }
      }
      const columns = [select, ...originalCols]
      const extra = {
        columns
      }
      return <div className='gm-react-table-select'>
        {selectAllTip && selectAll && this.renderTip()}
        <Component {...rest} {...extra} ref={r => (this.wrappedInstance = r)}/>
      </div>
    }
  }

  wrapper.displayName = 'RTSelectTable'
  wrapper.defaultProps = {
    keyField: '_id',
    isSelected: key => {
      console.log('No isSelected handler provided:', { key })
    },
    selectAll: false,
    toggleSelection: (key, shift, row) => {
      console.log('No toggleSelection handler provided:', { key, shift, row })
    },
    toggleAll: () => {
      console.log('No toggleAll handler provided.')
    },
    selectType: 'check',
    SelectInputComponent: defaultSelectInputComponent,
    SelectAllInputComponent: defaultSelectInputComponent,
    SelectAllPageTypeComponent: selectAllPageTypeComponent
  }

  return wrapper
}
