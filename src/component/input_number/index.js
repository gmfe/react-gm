import React from 'react'
import PropTypes from 'prop-types'

class InputNumber extends React.Component {
  handleChange = e => {
    const { max, min, precision, minus } = this.props
    let value = e.target.value.replace(/。/g, '.')

    let figure = value

    const reg = new RegExp(
      '(^[1-9]\\d*(\\.\\d{0,' +
        precision +
        '})?$)|(^0(\\.\\d{0,' +
        precision +
        '})?$)'
    )

    if (minus && value.indexOf('-') === 0) {
      // 去掉减号，然后去匹配正则
      figure = value.slice(1)
    }

    if (reg.test(figure) || figure === '' || /^0[1-9]/.test(value)) {
      const currentValue = Number(value)
      if (max !== undefined && currentValue > max) {
        this.props.onChange(max)
      } else if (min !== undefined && currentValue < min) {
        this.props.onChange(min)
      } else {
        // 如果第一个数字是0，第二个是1-9，则选取第二个数字
        this.props.onChange(/^0[1-9]/.test(value) ? value.slice(1) : value)
      }
    } else if (
      value.length < this.props.value.toString().length &&
      reg.test(value)
    ) {
      // 有默认值，且不符合以上的规则，但是是一个删减字符的操作
      this.props.onChange(value)
    }
  }

  render() {
    const {
      precision,
      minus, // eslint-disable-line
      ...rest
    } = this.props

    return <input {...rest} type='text' onChange={this.handleChange} />
  }
}

InputNumber.displayName = 'InputNumber'

InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.number,
  min: PropTypes.number,
  precision: PropTypes.number, // 精确度，保留几位小数
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  minus: PropTypes.bool, // 是否支持输入负数,
  className: PropTypes.string,
  style: PropTypes.object
}

InputNumber.defaultProps = {
  precision: 2,
  minus: false
}

export default InputNumber
