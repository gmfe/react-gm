import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Popover from '../popover'

const findItemByValFromChildren = (children, val) => {
  children = React.Children.toArray(children)
  return _.find(children, (el) => (el.props.value === val))
}

class Select extends React.Component {
  ref = React.createRef()

  handleOptionClick (elProps) {
    const { onChange } = this.props
    const {
      value: elPropsValue,
      disabled: elPropsDisabled
    } = elProps

    if (!elPropsDisabled) {
      onChange(elPropsValue)

      setTimeout(() => {
        this.ref.current.click()
      }, 0)
    }
  }

  render () {
    const {
      value,
      children,
      disabled,
      className,
      clean,
      ...rest
    } = this.props

    const selected = findItemByValFromChildren(children, value)
    const selectedChildren = selected && selected.props.children

    const popup = (
      <div className='gm-select-list gm-list gm-border-0'>
        {React.Children.map(children, (el) => (
          React.cloneElement(el, {
            className: classNames(el.props.className, {
              'active': el.props.value === value
            }),
            onClick: this.handleOptionClick.bind(this, el.props)
          })
        ))}
      </div>
    )

    return (
      <Popover
        type='click'
        popup={popup}
        disabled={disabled}
      >
        <div
          {...rest}
          ref={this.ref}
          className={classNames(`gm-select`, {
            'gm-select-clean': clean,
            'disabled': disabled
          }, className)}
        >
          <div className='gm-select-selected'>
            {selectedChildren !== undefined ? selectedChildren : <span>&nbsp;</span>}
          </div>
          <i className='gm-select-arrow'/>
        </div>
      </Popover>
    )
  }
}

Select.displayName = 'Select'

Select.propTypes = {
  clean: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Select
