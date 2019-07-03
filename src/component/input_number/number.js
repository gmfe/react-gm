import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function processPropsValue(value) {
  if (value === null) {
    return ''
  }
  return value + ''
}

function text2Number(value) {
  if (value === '') {
    return null
  }
  return _.isNaN(parseFloat(value)) ? null : parseFloat(value)
}

function checkValue(value, precision) {
  // 正则说明：前置无限【1-9】的数字加小数点加精度个数字，前置为「0」加小数点加精度个数字
  const reg = new RegExp(
    '(^[1-9]\\d*(\\.\\d{0,' +
      precision +
      '})?$)|(^0(\\.\\d{0,' +
      precision +
      '})?$)'
  )

  if (value.startsWith('-')) {
    value = value.slice(1)
  }

  if (value === '') {
    return true
  }

  return reg.test(value)
}

function fixNumber(value, min, max) {
  if (value !== null) {
    if (max !== undefined && value > max) {
      value = max
    } else if (min !== undefined && value < min) {
      value = min
    }
  }

  return value
}

class InputNumberV2 extends React.Component {
  constructor(props) {
    super(props)

    this.refInput = React.createRef()
    this.__isUnmount = false

    this.state = {
      value: processPropsValue(props.value)
    }
  }

  apiDoFocus() {
    if (this.__isUnmount) {
      return
    }

    this.refInput.current.focus()
  }

  componentWillUnmount() {
    this.__isUnmount = true
  }

  static getDerivedStateFromProps(props, state) {
    // 一旦不一致就应该改，要比较 number 形式
    if (props.value !== text2Number(state.value)) {
      return {
        value: processPropsValue(props.value)
      }
    }

    return null
  }

  handleChange = e => {
    const { min, max, precision, onChange } = this.props

    const eValue = e.target.value

    // 检测是否合法输入
    if (!checkValue(eValue, precision)) {
      return
    }

    const newValue = text2Number(eValue)

    const newFixValue = fixNumber(newValue, min, max)

    // 如果数据有被修正，则同步下修改的值到 state
    if (newFixValue !== newValue) {
      this.setState({
        value: processPropsValue(newFixValue)
      })
    } else {
      this.setState({
        value: eValue
      })
    }

    onChange(newValue)
  }

  render() {
    const {
      value,
      onChange,
      max,
      min,
      precision,
      className,
      ...rest
    } = this.props

    return (
      <input
        {...rest}
        type='text'
        ref={this.refInput}
        value={this.state.value}
        className={classNames('gm-input-number', className)}
        onChange={this.handleChange}
      />
    )
  }
}

InputNumberV2.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  precision: PropTypes.number, // 精确度，保留几位小数
  className: PropTypes.string,
  style: PropTypes.object
}

InputNumberV2.defaultProps = {
  precision: 2
}

export default InputNumberV2
