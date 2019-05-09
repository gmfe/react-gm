import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

class CheckboxGroup extends React.Component {
  handleChange (checkboxValue) {
    const { onChange, value } = this.props
    if (value.indexOf(checkboxValue) > -1) {
      onChange(_.without(value, checkboxValue))
    } else {
      onChange([...value, checkboxValue])
    }
  }

  render () {
    const {
      onChange,
      value,
      inline,
      className,
      children,
      name,
      col,
      ...rest
    } = this.props

    const childList = React.Children.toArray(children)

    return (
      <div {...rest} className={classNames('gm-checkbox-group checkbox', className)}>
        {_.map(childList, (child, i) => {
          return React.cloneElement(child, {
            index: i,
            key: i,
            checked: value.indexOf(child.props.value) > -1,
            inline,
            onChange: this.handleChange.bind(this, child.props.value),
            name,
            col
          })
        })}
      </div>
    )
  }
}

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  inline: PropTypes.bool,
  col: PropTypes.number,

  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

CheckboxGroup.defaultProps = {
  inline: false,
  value: [],
  onChange: _.noop
}

export default CheckboxGroup
