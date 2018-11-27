import React from 'react'
import PropTypes from 'prop-types'
import Big from 'big.js'

// _currency为国际标准化组织ISO 4217订定标准代号
let _currency = 'CNY'

class Price extends React.Component {
  render () {
    const {
      value,
      useGrouping,
      precision,
      ...rest
    } = this.props

    return (
      <span {...rest}>
        {
          new Intl.NumberFormat('en', {
            style: 'currency',
            // 将‘CNY’的'CN￥'转换成‘￥’
            currency: _currency === 'CNY' ? 'JPY' : _currency,
            useGrouping,
            currencyDisplay: 'symbol',
            // 使用的小数位数的最大数目.
            maximumFractionDigits: precision,
            // 使用的小数位数的最小数目.
            minimumFractionDigits: precision
          }).format(Big(value).div(100))
        }
      </span>
    )
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  precision: PropTypes.number,
  useGrouping: PropTypes.bool
}

Price.defaultProps = {
  precision: 2,
  useGrouping: true
}

Price.setCurrency = currency => {
  _currency = currency
}

export default Price
