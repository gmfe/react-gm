import React from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js'

// _currency 为货币符号
let _currency = '¥'
let _unit = '元'

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
      ...rest
    } = this.props

    return (
      <span {...rest}>
        {value < 0 ? '-' : ''}
        <span
          style={{
            fontSize: `${currencyScale > 1 ? '1' : currencyScale}em`
          }}
        >
          {_currency}
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
  isFenUnit: PropTypes.bool
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true,
  currencyScale: 0.85,
  keepZero: true,
  isFenUnit: false
}

// 设置符号
Price.setCurrency = currency => {
  if (!currency) return
  _currency = currency
}

// 获得符号
Price.getCurrency = () => {
  return _currency
}
Price.setUnit = unit => {
  if (!unit) return
  _unit = unit
}

Price.getUnit = () => {
  return _unit
}

export default Price
