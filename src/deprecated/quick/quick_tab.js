import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { withDeprecated } from '../../util'

class QuickTabItem extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class QuickTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active || 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('active' in nextProps) {
      this.setState({ active: nextProps.active })
    }
  }

  handleTab(i) {
    const { onChange } = this.props
    if ('active' in this.props) {
      onChange(i)
    } else {
      this.setState({
        active: i
      })
    }
  }

  render() {
    const {
      tabs,
      children,
      active,
      onChange,
      isStatic, // eslint-disable-line
      justified,
      ...rest
    } = this.props

    const activeTab = this.state.active

    const tabPanels = _.map(children, (child, i) => (
      <div key={i} className={activeTab !== i ? 'hidden' : ''}>
        {child}
      </div>
    ))

    return (
      <div
        {...rest}
        className={classNames('gm-quick gm-quick-tabs', this.props.className)}
      >
        {this.props.right
          ? React.cloneElement(this.props.right, {
              className: this.props.right.props.className + ' pull-right'
            })
          : null}
        <ul
          className={classNames('nav nav-tabs gm-back-bg', {
            'nav-justified': justified
          })}
        >
          {_.map(tabs, (tab, i) => (
            <li
              key={i}
              className={classNames('gm-quick-tab', {
                active: i === activeTab
              })}
            >
              <a
                className='gm-quick-tab-a'
                href='javascript:;'
                onClick={this.handleTab.bind(this, i)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <div>{isStatic ? tabPanels : tabPanels[activeTab]}</div>
      </div>
    )
  }
}

// 如果有active，则一定有handleChange
QuickTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.number,
  right: PropTypes.element,
  isStatic: PropTypes.bool,
  justified: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

QuickTab.defaultProps = {
  isStatic: false,
  justified: false
}

Object.assign(QuickTab, {
  QuickTabItem
})

export default withDeprecated(QuickTab, 'Deprecated,  Block instead.')
