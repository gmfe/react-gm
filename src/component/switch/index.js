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
      isReady: false
    }
    this.handleChange = ::this.handleChange
  }

  componentDidMount () {
    // 初始化后开始计算on和off的宽度，取较大值作为switch开关的宽度
    this.setState({
      labelWidth: this.refInputOff.offsetWidth >= this.refInputOn.offsetWidth ? this.refInputOff.offsetWidth + 7 : this.refInputOn.offsetWidth + 7,
      isReady: true
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

    let inputStyle = { width: this.state.labelWidth }
    if (rest.style) inputStyle = Object.assign({}, inputStyle, rest.style)

    return (
      <React.Fragment>
        <input
          {...rest}
          data-text={this.state.checked ? on : off}
          ref={ref => (this.refInputOff = ref)}
          className={classNames('gm-switch gm-switch-' + type, className, {
            'gm-switch-disabled': disabled
          })}
          style={inputStyle}
          data-attr={this.state.labelWidth}
          disabled={disabled}
          type='checkbox'
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {
          !this.state.isReady &&
          <input
            data-text={this.state.checked ? off : on}
            ref={ref => (this.refInputOn = ref)}
            className='gm-switch'
            type='checkbox'
            style={{ position: 'fixed', visibility: 'hidden' }}
          />
        }
      </React.Fragment>
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
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}
Switch.defaultProps = {
  type: 'default',
  on: 'ON',
  off: 'OFF',
  onChange: _.noop
}

export default Switch
