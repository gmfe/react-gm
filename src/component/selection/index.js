import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import SVGCloseCircle from '../../../svg/close-circle.svg'
import SVGDownSmall from '../../../svg/down.svg'
import SVGUpSmall from '../../../svg/up.svg'

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
          <SVGCloseCircle
            onClick={!disabled && this.handleClear}
            className='gm-selection-icon gm-selection-close-icon'
          />
        )}
        <SVGDownSmall className='gm-selection-icon gm-selection-down-small' />
        <SVGUpSmall className='gm-selection-icon gm-selection-up-small' />
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
