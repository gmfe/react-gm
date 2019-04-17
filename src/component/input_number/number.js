import './style.less'
import _ from 'lodash'
import Big from 'big.js'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class InputNumberV2 extends React.Component {
  constructor (props) {
    super(props)
    this.refInput = React.createRef()
    this.__unmount = false
    this.state = {
      value: InputNumberV2.processValue(props.value)
    }
  }

  static processValue = (value) => {
    if (value === null) {
      return ''
    }
    return value + ''
  }

  apiDoFocus () {
    if (this.__unmount) {
      return
    }
    const d = ReactDOM.findDOMNode(this.refInput.current)
    d.focus()
  }

  componentWillUnmount () {
    this.__unmount = true
  }

  processOutValue = (value) => {
    if (value === '') {
      return null
    }
    return parseFloat(value)
  }

  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#preferred-solutions
  static getDerivedStateFromProps (props, state) {
    if (props.value === null) {
      return { value: '' }
    }
    if (parseFloat(props.value) !== parseFloat(state.value)) {
      return {
        value: InputNumberV2.processValue(props.value)
      }
    }
    return null
  }

  checkValue = (value) => {
    const {
      max, min, precision
    } = this.props

    const v = Number(value)
    if (max !== undefined && v > max) {
      return false
    }
    if (min !== undefined && v < min) {
      return false
    }

    if (parseInt(Big(value).times(Math.pow(10, precision))) !== +Big(value).times(Math.pow(10, precision))) {
      return false
    }

    return true
  }

  handleChange = (e) => {
    // onInput 可以提供一个规范的数字
    let nV = e.target.value

    const { onChange } = this.props

    if (_.isNaN(Number(nV))) {
      nV = ''
    }

    // 到此是一个正常的数字了

    // 建议不通过，啥也不做
    if (nV !== '' && !this.checkValue(nV)) {
      return
    }

    this.setState({
      value: nV
    })

    onChange(this.processOutValue(nV))
  }

  render () {
    const {
      value, onChange,
      max, min, precision,
      ...rest
    } = this.props

    return (
      <input
        {...rest}
        type='number'
        ref={this.refInput}
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
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  precision: PropTypes.number // 精确度，保留几位小数
}

InputNumberV2.defaultProps = {
  precision: 2
}

export default InputNumberV2
