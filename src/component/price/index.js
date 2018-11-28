import React from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js'

// _currency 为货币符号
let _currency = '￥'

class Price extends React.Component {
  formatValue = (value, precision, keepZero) => {
    return keepZero ? Big(Math.abs(value)).div(100).toFixed(precision) : parseFloat(Big(Math.abs(value)).div(100).toFixed(precision))
  }

  // 增加千分符
  addComma = (useGrouping, num) => {
    if (!useGrouping) return num

    return num && num.toString()
      .replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
  }

  render () {
    const {
      value,
      useGrouping,
      precision,
      currencyScale,
      keepZero,
      ...rest
    } = this.props

    return (
      <span {...rest}>
        {value < 0 ? '-' : ''}<span style={{fontSize: `${Big(currencyScale).times(100)}%`}}>{_currency}</span>{this.addComma(useGrouping, this.formatValue(value, precision, keepZero))}
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
  keepZero: PropTypes.bool
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true,
  currencyScale: 1,
  keepZero: true
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

export default Price
