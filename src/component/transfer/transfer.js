import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Flex from '../flex'
import Box from './box'
import classNames from 'classnames'
import { getLocale } from '../../locales'

class Transfer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftSelectedValues: [],
      rightSelectedValues: []
    }
  }

  handleLeftChange = leftSelectedValues => {
    this.setState({
      leftSelectedValues
    })
  }

  handleRightChange = rightSelectedValues => {
    this.setState({
      rightSelectedValues
    })
  }

  handleToClick = isLeft => {
    const { onSelect, selectedValues } = this.props
    const { leftSelectedValues, rightSelectedValues } = this.state

    onSelect(
      _.xor(selectedValues, isLeft ? rightSelectedValues : leftSelectedValues)
    )

    this.setState({
      leftSelectedValues: [],
      rightSelectedValues: []
    })
  }

  handleToRightClick = () => {
    this.handleToClick(false)
  }

  handleToLeftClick = () => {
    this.handleToClick(true)
  }

  render() {
    let {
      list,
      selectedValues,
      listStyle,

      leftTitle,
      leftWithFilter,
      leftPlaceHolder,

      rightTitle,
      rightWithFilter,
      rightPlaceHolder,

      onSelect, // eslint-disable-line
      className,
      ...rest
    } = this.props

    const { leftSelectedValues, rightSelectedValues } = this.state

    let leftList = []
    let rightList = []
    _.each(list, v => {
      if (selectedValues.indexOf(v.value) > -1) {
        rightList.push(v)
      } else {
        leftList.push(v)
      }
    })

    return (
      <div {...rest} className={classNames('gm-transfer', className)}>
        <Flex>
          <Box
            list={leftList}
            selectedValues={leftSelectedValues}
            onSelect={this.handleLeftChange}
            title={leftTitle}
            style={listStyle}
            withFilter={leftWithFilter}
            placeholder={leftPlaceHolder}
          />

          <div className='gm-gap-5' />
          <Flex
            column
            justifyCenter
            alignCenter
            className='gm-transfer-operation'
          >
            <button
              disabled={leftSelectedValues.length === 0}
              className='btn btn-default btn-block gm-margin-bottom-5'
              onClick={this.handleToRightClick}
            >
              &gt;
            </button>
            <button
              disabled={rightSelectedValues.length === 0}
              className='btn btn-default btn-block'
              onClick={this.handleToLeftClick}
            >
              &lt;
            </button>
          </Flex>
          <div className='gm-gap-5' />

          <Box
            list={rightList}
            selectedValues={rightSelectedValues}
            onSelect={this.handleRightChange}
            title={rightTitle}
            style={listStyle}
            withFilter={rightWithFilter}
            placeholder={rightPlaceHolder}
          />
        </Flex>
      </div>
    )
  }
}

Transfer.propTypes = {
  list: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,

  listStyle: PropTypes.object,

  leftTitle: PropTypes.string,
  leftWithFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  leftPlaceHolder: PropTypes.string,

  rightTitle: PropTypes.string,
  rightWithFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  rightPlaceHolder: PropTypes.string,

  className: PropTypes.string,
  style: PropTypes.object
}

Transfer.defaultProps = {
  listStyle: {
    width: '250px',
    height: '350px'
  },

  leftTitle: getLocale('transfer', 'itemsSource'),
  leftWithFilter: true,
  leftPlaceHolder: getLocale('transfer', 'search'),

  rightTitle: getLocale('transfer', 'target'),
  rightWithFilter: true,
  rightPlaceHolder: getLocale('transfer', 'search')
}

export default Transfer
