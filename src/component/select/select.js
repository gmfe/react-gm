import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'
import { contains } from 'gm-util'
import _ from 'lodash'

const findItemByValFromChildren = (children, val) => {
  children = React.Children.toArray(children)
  return _.find(children, (el) => (el.props.value === val))
}

class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }

    this.handleBodyClick = ::this.handleBodyClick
    this.handleSelectionClick = ::this.handleSelectionClick
  }

  componentDidMount () {
    window.document.body.addEventListener('click', this.handleBodyClick)
  }

  componentWillUnmount () {
    window.document.body.removeEventListener('click', this.handleBodyClick)
  }

  handleBodyClick (e) {
    const target = e.target
    const selectDOM = findDOMNode(this)

    if (this.state.show && !contains(selectDOM, target)) {
      this.setState({ show: false })
    }
  }

  handleSelectionClick () {
    const { disabled } = this.props
    const { show } = this.state

    if (!disabled) {
      this.setState({
        show: !show
      })
    }
  }

  handleOptionClick (elProps) {
    const { onChange } = this.props
    const {
      value: elPropsValue,
      disabled: elPropsDisabled
    } = elProps

    if (!elPropsDisabled) {
      onChange(elPropsValue)
      this.setState({ show: false })
    }
  }

  render () {
    const { show } = this.state
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

    return (
      <div
        {...rest}
        className={classNames(className, `gm-select`, {
          'gm-select-clean': clean,
          'gm-select-open': show,
          'disabled': disabled
        })}
      >
        <div
          className='gm-select-selection'
          onClick={this.handleSelectionClick}
        >
          <div className='gm-select-selected'>
            {selectedChildren !== undefined ? selectedChildren : <span>&nbsp;</span>}
          </div>
          <i className={classNames({
            'gm-arrow-up': show,
            'gm-arrow-down': !show
          })}/>
        </div>

        {show && (
          <div key='list' className='gm-select-list gm-animated gm-animated-fade-in-right'>
            {React.Children.map(children, (el) => (
              React.cloneElement(el, Object.assign({}, el.props, {
                className: classNames(el.props.className, {
                  'selected': el.props.value === value
                }),
                onClick: this.handleOptionClick.bind(this, el.props)
              }))
            ))}
          </div>
        )}
      </div>
    )
  }
}

Select.displayName = 'Select'

Select.propTypes = {
  clean: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select
