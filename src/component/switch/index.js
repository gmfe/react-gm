import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

class Switch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked,
      labelWidth: null,
      onWidth: null
    }
    this.handleChange = ::this.handleChange
  }

  componentDidMount () {
    // 初始化后开始计算on和off的宽度，取较大值作为switch开关的宽度
    this.setState({
      labelWidth: this.refInputOff.offsetWidth >= this.refInputOn.offsetWidth ? this.refInputOff.offsetWidth + 6 : this.refInputOn.offsetWidth + 6,
      onWidth: 0
    })
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      })
    }
  }

  setChecked (checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked
      })
    }
    this.props.onChange(checked)
  }

  handleChange (e) {
    if (this.props.disabled) {
      return
    }
    this.setChecked(e.target.checked)
  }

  render () {
    const {
      className, // checked, onChange, // eslint-disable-line
      type, disabled, on, off,
      ...rest
    } = this.props

    const inputStyle = {}
    inputStyle.width = this.state.labelWidth

    return (
      <span>
        <input
          data-text={this.state.checked ? on : off}
          ref={ref => (this.refInputOff = ref)}
          style={inputStyle}
          data-attr={this.state.labelWidth}
          disabled={disabled}
          {...rest}
          className={classNames('gm-switch gm-switch-' + type, className, {
            'gm-switch-disabled': disabled
          })}
          type='checkbox'
          checked={this.state.checked}
          onChange={this.handleChange}
        />

        <input
          data-text={on}
          ref={ref => (this.refInputOn = ref)}
          style={{visibility: 'hidden', width: this.state.onWidth}}
          disabled={disabled}
          className='gm-switch'
          type='checkbox'
        />

      </span>
    )
  }
}

Switch.displayName = 'Switch'

Switch.propTypes = {
  type: PropTypes.string, // default primary success info warning danger
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  on: PropTypes.any, // 请保证 on off 的宽度一样
  off: PropTypes.any,
  onChange: PropTypes.func
}
Switch.defaultProps = {
  type: 'default',
  on: 'ON',
  off: 'OFF',
  onChange: _.noop
}

export default Switch
