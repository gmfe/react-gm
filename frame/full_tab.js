import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {is} from 'gm-util'
import classNames from 'classnames'
import {Flex} from '../src/index'

class FullTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.active || 0
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('active' in nextProps) {
      this.setState({
        active: nextProps.active
      })
    }
  }

  handleTab (i) {
    const {onChange} = this.props

    if ('active' in this.props) {
      onChange(i)
    } else {
      this.setState({
        active: i
      })
    }
  }

  render () {
    const {
      tabs, children, isStatic,
      active, onChange, // eslint-disable-line
      ...rest
    } = this.props

    let {
      frameWorkLeftWidth
    } = this.context
    frameWorkLeftWidth = is.mobile ? '0' : frameWorkLeftWidth

    const activeTab = this.state.active
    const tabPanels = _.map(children, (child, i) => (
      <div key={i} className={classNames({
        hidden: activeTab !== i
      })}>{child}</div>
    ))

    return (
      <div
        {...rest}
        className={classNames('gm-framework-full-tabs gm-back-bg gm-framework-content-full', this.props.className)}
      >
        { tabs.length > 1 && <div className='gm-framework-full-tabs-list-box'>
          <Flex className='gm-framework-full-tabs-list gm-bg' style={{
            left: frameWorkLeftWidth
          }}>
            {_.map(tabs, (tab, i) => (
              <div
                key={i}
                className={classNames('gm-framework-full-tabs-item', {
                  active: i === activeTab
                })}
                onClick={this.handleTab.bind(this, i)}
              >
                {tab}
              </div>
            ))}
          </Flex>
        </div> }
        <div className='gm-framework-full-tabs-content gm-padding-20'>
          {isStatic ? tabPanels : tabPanels[activeTab]}
        </div>
      </div>
    )
  }
}

// 如果有active，则一定有handleChange
FullTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.number,
  isStatic: PropTypes.bool,
  children: (props, propName, componentName) => {
    if (props.tabs && props.children && (props.tabs.length !== props.children.length)) {
      return new Error(
        'Invalid prop `children` supplied to' +
        ' `' + componentName +
        '`, prop `tabs` length is not match prop `children` length'
      )
    }
  }
}

FullTab.defaultProps = {
  isStatic: false
}

FullTab.contextTypes = {
  frameWorkLeftWidth: PropTypes.string
}

export default FullTab
