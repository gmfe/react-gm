import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SortableJS from 'sortablejs'

const store = {
  nextSibling: null,
  activeComponent: null
}

// 修改
// 增加 disabled

class SortableBase extends Component {
  sortable = null

  componentDidMount() {
    const options = { ...this.props.options, disabled: this.props.disabled }

    ;[
      'onChoose',
      'onStart',
      'onEnd',
      'onAdd',
      'onUpdate',
      'onSort',
      'onRemove',
      'onFilter',
      'onMove',
      'onClone'
    ].forEach(name => {
      const eventHandler = options[name]

      options[name] = (...params) => {
        const [evt] = params

        if (name === 'onChoose') {
          store.nextSibling = evt.item.nextElementSibling
          store.activeComponent = this
        } else if (
          (name === 'onAdd' || name === 'onUpdate') &&
          this.props.onChange
        ) {
          const items = this.sortable.toArray()
          const remote = store.activeComponent
          const remoteItems = remote.sortable.toArray()

          const referenceNode =
            store.nextSibling && store.nextSibling.parentNode !== null
              ? store.nextSibling
              : null
          evt.from.insertBefore(evt.item, referenceNode)
          if (remote !== this) {
            const remoteOptions = remote.props.options || {}

            if (
              typeof remoteOptions.group === 'object' &&
              remoteOptions.group.pull === 'clone'
            ) {
              // Remove the node with the same data-reactid
              evt.item.parentNode.removeChild(evt.item)
            }

            remote.props.onChange &&
              remote.props.onChange(remoteItems, remote.sortable, evt)
          }

          this.props.onChange && this.props.onChange(items, this.sortable, evt)
        }

        if (evt.type === 'move') {
          const [evt, originalEvent] = params
          const canMove = eventHandler ? eventHandler(evt, originalEvent) : true
          return canMove
        }

        setTimeout(() => {
          eventHandler && eventHandler(evt)
        }, 0)
      }
    })

    this.sortable = SortableJS.create(this.node, options)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.sortable.option('disabled', nextProps.disabled)
    }
  }

  shouldComponentUpdate(nextProps) {
    // If onChange is null, it is an UnControlled component
    // Don't let React re-render it by setting return to false
    if (!nextProps.onChange) {
      return false
    }
    return true
  }

  componentWillUnmount() {
    if (this.sortable) {
      this.sortable.destroy()
      this.sortable = null
    }
  }

  render() {
    const { tag: Component, options, onChange, disabled, ...props } = this.props

    return (
      <Component
        {...props}
        ref={node => {
          this.node = node
        }}
      />
    )
  }
}

SortableBase.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  tag: PropTypes.element,
  style: PropTypes.object
}

SortableBase.defaultProps = {
  options: {},
  tag: 'div',
  style: {}
}

export default SortableBase
