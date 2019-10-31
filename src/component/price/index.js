import React from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js'
import _ from 'lodash'
import storage from '../storage'

const eventBus = {
  add(eventName, handler) {
    window.addEventListener(eventName, handler)
  },
  dispatch(eventName, detail) {
    window.dispatchEvent(new window.CustomEvent(eventName, { detail }))
  },
  remove(eventName, handler) {
    window.removeEventListener(eventName, handler)
  }
}

// 默认 _symbol 为货币符号
const symbolKey = 'Price#symbol'
const unitKey = 'Price#unit'

// 默认 _symbol 为货币符号
let _symbol = storage.get(symbolKey) || '¥'
let _unit = storage.get(unitKey) || '元'
// [{ symbol: '￥', type: 'CNY', unit: '元' },...]
let _currencyList = [] // 多币种列表

const getCurrentFromType = type =>
  _.find(_currencyList, item => item.type === type)

class Price extends React.Component {
  rerender = () => {
    this.forceUpdate()
  }

  componentDidMount() {
    eventBus.add('REACT_GM_UPDATE_PRICE', this.rerender)
  }

  componentWillUnmount() {
    eventBus.remove('REACT_GM_UPDATE_PRICE', this.rerender)
  }

  formatValue = (value, precision, keepZero, isFenUnit) => {
    const divRatio = isFenUnit ? 100 : 1
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
  /** 保留几位小数，默认是 2 位 */
  precision: PropTypes.number,
  /** 是否使用千分符 */
  useGrouping: PropTypes.bool,
  /** 货币符号的缩放大小 */
  currencyScale: PropTypes.number,
  /** 是否保留小数点后无效的零 */
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
  if (!symbol || symbol === _symbol) return
  _symbol = symbol
  storage.set(symbolKey, symbol)
  eventBus.dispatch('REACT_GM_UPDATE_PRICE')
}

// 获得符号
Price.getCurrency = (type = '') => {
  const current = type ? getCurrentFromType(type) : null
  return current ? current.symbol : _symbol
}

Price.setUnit = unit => {
  if (!unit || unit === _unit) return
  _unit = unit
  storage.set(unitKey, unit)
}

Price.getUnit = (type = '') => {
  const current = type ? getCurrentFromType(type) : null
  return current ? current.unit : _unit
}

export default Price
