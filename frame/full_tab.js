import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import { Flex } from '../src/index'
import Context from './context'

class FullTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active || 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('active' in nextProps) {
      this.setState({
        active: nextProps.active
      })
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
      isStatic,
      active,
      onChange, // eslint-disable-line
      ...rest
    } = this.props

    const activeTab = this.state.active
    const tabPanels = _.map(React.Children.toArray(children), (child, i) => (
      <div
        key={i}
        className={classNames({
          hidden: activeTab !== i
        })}
      >
        {child}
      </div>
    ))

    return (
      <Context.Consumer>
        {({ leftWidth }) => (
          <div
            {...rest}
            className={classNames(
              'gm-framework-full-tabs gm-framework-content-full',
              this.props.className
            )}
          >
            {tabs.length > 1 && (
              <Flex
                column
                justifyEnd
                className='gm-framework-full-tabs-list-box'
              >
                <div
                  className='gm-framework-full-tabs-list'
                  style={{
                    left: leftWidth
                  }}
                >
                  <Flex alignEnd className='gm-framework-full-tabs-list-inner'>
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
                </div>
              </Flex>
            )}
            <div className='gm-framework-full-tabs-content'>
              {isStatic ? tabPanels : tabPanels[activeTab]}
            </div>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

// 如果有active，则一定有handleChange
FullTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.number,
  isStatic: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

FullTab.defaultProps = {
  isStatic: false
}

export default FullTab
