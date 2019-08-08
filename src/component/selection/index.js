import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import SVGCloseCircle from '../../../svg/close-circle.svg'
import IconDownUp from '../icon_down_up'

// TODO multiple
/** 内部用 选择区域 */
class Selection extends React.Component {
  refInput = React.createRef()

  apiDoFocus = () => {
    this.refInput.current.focus()
  }

  handleClear = () => {
    const { onSelect } = this.props

    onSelect(null)
  }

  render() {
    const {
      selected,
      onSelect,
      disabled,
      renderSelected,
      placeholder,
      clean,
      disabledClose,
      className,
      onKeyDown,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames(
          'gm-selection',
          {
            disabled,
            'gm-selection-disabled-clean': clean,
            'gm-selection-disabled-close': disabledClose
          },
          className
        )}
      >
        <input
          ref={this.refInput}
          disabled={disabled}
          type='text'
          value={
            selected !== null && selected !== undefined
              ? renderSelected(selected)
              : ''
          }
          onChange={_.noop}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className='form-control'
        />
        {selected && !disabledClose && !clean && (
          <SVGCloseCircle
            onClick={!disabled && this.handleClear}
            className='gm-selection-icon gm-selection-close-icon'
          />
        )}
        <IconDownUp
          active={className.includes('gm-popover-active')}
          className='gm-selection-icon gm-selection-down-up'
        />
      </div>
    )
  }
}

Selection.propTypes = {
  /** 单选情况 无 or {value, text} */
  selected: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  renderSelected: PropTypes.func,
  placeholder: PropTypes.string,
  /** 干净模式 */
  clean: PropTypes.bool,
  /** 禁用 x 按钮 */
  disabledClose: PropTypes.bool,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

Selection.defaultProps = {
  renderSelected: item => item.text
}

export default Selection
