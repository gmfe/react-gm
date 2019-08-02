import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import SVGCloseCircle from '../../../svg/close-circle.svg'

// TODO multiple

/**
 * 库内部用的组件
 * */
class Selected extends React.Component {
  refInput = React.createRef()

  apiDoFocus = () => {
    this.refInput.current.focus()
  }

  handleClearDate = () => {
    this.props.onSelect(null)
  }

  render() {
    const {
      selected,
      onSelect,
      multiple,
      disabled,
      renderText,
      placeholder,
      funIcon,
      className,
      onKeyDown,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames(
          'gm-selected',
          {
            'gm-selected-fun-icon': funIcon,
            disabled
          },
          className
        )}
      >
        <input
          ref={this.refInput}
          type='text'
          className='form-control'
          disabled={disabled}
          value={selected !== null ? renderText(selected) : ''}
          onChange={_.noop}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
        {selected && (
          <SVGCloseCircle
            className='gm-selected-icon gm-selected-clean'
            onClick={disabled || this.handleClearDate}
          />
        )}
        {React.cloneElement(funIcon, {
          className: classNames('gm-selected-icon', funIcon.props.className)
        })}
      </div>
    )
  }
}

Selected.propTypes = {
  selected: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  renderText: PropTypes.func,
  placeholder: PropTypes.string,
  funIcon: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,

  onKeyDown: PropTypes.func
}

Selected.defaultProps = {
  onKeyDown: _.noop
}

export default Selected
