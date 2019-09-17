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
      funIcon,
      clean,
      disabledClose,
      className,
      onKeyDown,
      isForSelect,
      ...rest
    } = this.props

    const text =
      selected !== null && selected !== undefined
        ? renderSelected(selected)
        : ''

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
        {isForSelect ? (
          <div
            ref={this.refInput}
            className={classNames('form-control gm-selection-selected')}
            disabled={disabled}
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            {text || placeholder}
          </div>
        ) : (
          <input
            ref={this.refInput}
            disabled={disabled}
            type='text'
            value={text}
            onChange={_.noop}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className='form-control gm-selection-selected'
          />
        )}
        {selected && !disabledClose && !clean && (
          <SVGCloseCircle
            onClick={!disabled && this.handleClear}
            className='gm-selection-icon gm-selection-close-icon'
          />
        )}
        {funIcon ? (
          React.cloneElement(funIcon, {
            className: classNames('gm-selection-icon', funIcon.props.className)
          })
        ) : (
          <IconDownUp
            active={(className || '').includes('gm-popover-active')}
            className='gm-selection-icon gm-selection-down-up'
          />
        )}
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
  /** 代替默认的 icon */
  funIcon: PropTypes.element,
  /** 干净模式 */
  clean: PropTypes.bool,
  /** 禁用 x 按钮 */
  disabledClose: PropTypes.bool,
  /** 键盘用 */
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  /** 给 Select 定制的 */
  isForSelect: PropTypes.bool
}

Selection.defaultProps = {
  renderSelected: item => item.text
}

export default Selection
