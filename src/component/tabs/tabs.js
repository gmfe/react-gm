import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tabs = props => {
  const { tabs, active, defaultActive, lazy, onChange, children } = props
  if (active !== undefined && defaultActive !== undefined) {
    throw new Error(
      'prop `active` and prop `defaultActive` can not exist at the same time!'
    )
  }

  if (active !== undefined && !onChange) {
    throw new Error(
      'prop `active` and prop `onChange` must exist at the same time!'
    )
  }

  const [selected, changeSelected] = useState(defaultActive || 0)

  const currentIndex = active === undefined ? selected : active

  const handleClick = index => {
    if (active !== undefined) {
      onChange(index)
    } else {
      changeSelected(index)
    }
  }

  const tabsChildren = () => (
    <>
      {React.Children.toArray(children).map((item, index) => (
        <div
          key={index}
          className={classNames({
            hidden: currentIndex !== index
          })}
        >
          {item}
        </div>
      ))}
    </>
  )

  const tabsChildrenLazy = () => {
    const elements = React.Children.toArray(children)
    return <div>{elements[currentIndex]}</div>
  }

  return (
    <>
      <div className='gm-tabs-container'>
        <div className='gm-tabs'>
          {tabs.map((tab, index) => (
            <div
              className={classNames('gm-tab', {
                active: index === currentIndex
              })}
              key={index}
              onClick={() => handleClick(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      {lazy ? tabsChildrenLazy() : tabsChildren()}
    </>
  )
}

Tabs.propTypes = {
  /** tab array */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** the index which tab is active */
  active: PropTypes.number,
  /** the default Index which tab is active for uncontrolled component */
  defaultActive: PropTypes.number,
  /** children lazy loading */
  lazy: PropTypes.bool,
  /** the function return the index which is changed */
  onChange: PropTypes.func,
  /** The tabs must be the same length as the children */
  children: ({ tabs, children }, propName, componentName) => {
    if (tabs.length && children.length && tabs.length !== children.length) {
      return new Error(
        'Invalid prop `children` supplied to' +
          ' `' +
          componentName +
          '`, prop `tabs` length is not match prop `children` length'
      )
    }
  }
}

export default Tabs
