import React from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js'
import _ from 'lodash'

// 默认 _symbol 为货币符号
let _symbol = '¥'
let _unit = '元'
// [{ symbol: '￥', type: 'CNY', unit: '元' },...]
let _currencyList = [] // 多币种列表

const getCurrentFromType = type =>
  _.find(_currencyList, item => item.type === type)

class Price extends React.Component {
  formatValue = (value, precision, keepZero, isFenUnit) => {
    let divRatio = isFenUnit ? 100 : 1
    const result = Big(Math.abs(value))
      .div(divRatio)
      .toFixed(precision)
    return keepZero ? result : parseFloat(result)
  }

  // 增加千分符
  addComma = (useGrouping, num) => {
    if (!useGrouping) return num

    return num
      .toString()
      .replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
  }

  render() {
    const {
      value,
      useGrouping,
      precision,
      currencyScale,
      keepZero,
      isFenUnit,
      feeType,
      ...rest
    } = this.props
    const current = getCurrentFromType(feeType)

    return (
      <span {...rest}>
        {value < 0 ? '-' : ''}
        <span
          style={{
            fontSize: `${currencyScale > 1 ? '1' : currencyScale}em`
          }}
        >
          {current ? current.symbol : _symbol}
        </span>
        {this.addComma(
          useGrouping,
          this.formatValue(value, precision, keepZero, isFenUnit)
        )}
      </span>
    )
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  precision: PropTypes.number,
  useGrouping: PropTypes.bool,
  currencyScale: PropTypes.number,
  // 是否保留小数点后无效的零
  keepZero: PropTypes.bool,
  isFenUnit: PropTypes.bool,
  feeType: PropTypes.string // 多币种
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true,
  currencyScale: 0.85,
  keepZero: true,
  isFenUnit: false,
  feeType: ''
}

Price.setCurrencyList = (list = []) => {
  if (!list || !list.length) return
  _currencyList = list
}

// 设置符号
Price.setCurrency = symbol => {
  if (!symbol) return
  _symbol = symbol
}

// 获得符号
Price.getCurrency = (type = '') => {
  let current = type ? getCurrentFromType(type) : null
  return current ? current.symbol : _symbol
}

Price.setUnit = unit => {
  if (!unit) return
  _unit = unit
}

Price.getUnit = (type = '') => {
  let current = type ? getCurrentFromType(type) : null
  return current ? current.unit : _unit
}

export default Price
