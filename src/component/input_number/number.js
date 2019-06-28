import _ from 'lodash'
import Big from 'big.js'
import React from 'react'
import PropTypes from 'prop-types'

class InputNumberV2 extends React.Component {
  constructor(props) {
    super(props)
    this.__unmount = false
    this.state = {
      value: InputNumberV2.processValue(props.value)
    }
  }

  componentWillUnmount() {
    this.__unmount = true
  }

  apiDoFocus() {
    if (this.__unmount) {
      return
    }

    this.refInput.focus()
  }

  static processValue = value => {
    if (value === null) {
      return ''
    }
    // Big把-0转换为'-0'，其余方式如-0+''，String(-0),都会转换为'0'
    if (value === 0 && Big(value).valueOf() === '-0') {
      return '-0'
    }

    return value + ''
  }

  // 拦截onChange后props的变化影响state
  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#preferred-solutions
  static getDerivedStateFromProps(props, state) {
    const pointReg = new RegExp('(^[1-9]\\d*(\\.))')

    if (props.value === null) {
      // 若当前值为props值为null时，不应修改state的值
      // 判断当前state是否为'-'，保证不被onChange后为null的props.value改变
      if (state.value === '-') {
        return null
      }

      return { value: '' }
    } else if (pointReg.test(state.value)) {
      // 当state的最后一位为小数点时，不被props影响
      return null
    }

    return null
  }

  // 返回特殊情况处理后的值，如最大最小
  getHandleValue = value => {
    const { max, min } = this.props
    const compareValue = parseFloat(value)
    let targetValue = value

    if (max !== undefined && compareValue > max) {
      targetValue = max
    } else if (min !== undefined && compareValue < min) {
      targetValue = min
    }

    return targetValue
  }

  // 返回可输出的数据
  getOutputValue = value => {
    console.log(value)
    if (value === '') {
      return null
    }

    // 将parseFloat()结果为NaN的转换成null
    return _.isNaN(parseFloat(value)) ? null : parseFloat(value)
  }

  // 判断输入是否合法，不含最大最小
  checkValue = value => {
    const { precision } = this.props
    const reg = new RegExp(
      '(^[1-9]\\d*(\\.\\d{0,' +
        precision +
        '})?$)|(^0(\\.\\d{0,' +
        precision +
        '})?$)'
    ) // 正则说明：前置无限【1-9】的数字加小数点加精度个数字，前置为「0」加小数点加精度个数字
    let testValue = value

    if (value.indexOf('-') === 0) {
      testValue = value.slice(1)
    }
    // 防止清掉负号后判断为false，不另外做正则处理,且空值也为真
    return testValue === '' || reg.test(testValue)
  }

  // 设置state和onChange的值
  handleSetChange = (stateValue, propsValue) => {
    const { onChange } = this.props

    this.setState({
      value: InputNumberV2.processValue(stateValue)
    })

    onChange(propsValue)
  }

  handleChange = e => {
    const changeValue = e.target.value

    // 输入合法才改变输入的值，其他的不做操作
    if (this.checkValue(changeValue)) {
      const targetValue = this.getHandleValue(changeValue)

      // 处理开头为「-」的情况
      if (changeValue === '-') {
        this.handleSetChange(this.getHandleValue(changeValue), null)
      } else if (changeValue.charAt(changeValue.length - 1) === '.') {
        // 防止数字化处理时把小数点去掉
        this.handleSetChange(
          this.getHandleValue(changeValue),
          this.getOutputValue(targetValue)
        )
      } else {
        // 到此为正常的数据了
        const validValue = this.getOutputValue(targetValue)

        // props和state都需要处理的数据
        this.handleSetChange(validValue, validValue)
      }
    }
  }

  render() {
    const { value, onChange, max, min, precision, ...rest } = this.props

    return (
      <input
        {...rest}
        type='text'
        ref={ref => {
          this.refInput = ref
        }}
        value={this.state.value}
        className='gm-input-number'
        onChange={this.handleChange}
      />
    )
  }
}

InputNumberV2.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  precision: PropTypes.number // 精确度，保留几位小数
}

InputNumberV2.defaultProps = {
  precision: 2
}

export default InputNumberV2
