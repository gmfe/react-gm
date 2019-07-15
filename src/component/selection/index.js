import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

// TODO multiple
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
      onKeyDown,
      className,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames(
          'gm-selection',
          {
            'gm-selection-close': selected,
            disabled
          },
          className
        )}
      >
        <input
          ref={this.refInput}
          disabled={disabled}
          type='text'
          value={renderSelected(selected)}
          onChange={_.noop}
          onKeyDown={onKeyDown}
          className='form-control'
        />
        {selected && (
          <i
            onClick={!disabled && this.handleClear}
            className='xfont xfont-close-circle gm-cursor gm-selection-close-icon'
          />
        )}
        <i className='gm-arrow-down' />
        <i className='gm-arrow-up' />
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
  onKeyDown: PropTypes.func,
  className: PropTypes.string
}

Selection.defaultProps = {
  renderSelected: item => item.text
}

export default Selection
