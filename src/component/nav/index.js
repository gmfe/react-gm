import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

const Popup = props => {
  const { data, selected, onSelect } = props

  return (
    <div className='gm-nav-popup'>
      <Flex>
        {_.map(data, (v, i) => (
          <div key={i} className='gm-nav-two' style={v.style}>
            <div className='gm-nav-two-title'>{v.name}</div>
            <div>
              {_.map(v.sub, (s, si) => (
                <a
                  key={si}
                  href={s.link}
                  className={classNames('gm-nav-there', {
                    active: selected.startsWith(s.link)
                  })}
                  onClick={e => {
                    e.preventDefault()
                    onSelect(s)
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Flex>
    </div>
  )
}

Popup.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

const Item = props => {
  const {
    data: { icon, name, link, sub },
    selected,
    onSelect
  } = props

  const handleClick = e => {
    e.preventDefault()

    onSelect(props.data)
  }

  const handleSelect = data => {
    onSelect(data)
  }

  return (
    <div
      className={classNames('gm-nav-one-box', {
        active: selected.startsWith(link)
      })}
    >
      <a href={link} className='gm-nav-one' onClick={handleClick}>
        <div className='gm-nav-one-icon'>{icon}</div>
        <div className='gm-nav-one-text'>{name}</div>
      </a>
      <div className='gm-nav-one-triangle' />
      <Popup data={sub} onSelect={handleSelect} selected={selected} />
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

const Nav = props => {
  const {
    logo,
    logoActive,
    data,
    selected,
    onSelect,
    other,
    className,
    style,
    ...rest
  } = props

  return (
    <div {...rest} className={classNames('gm-nav', className)}>
      <div
        className={classNames('gm-nav-logo', {
          active: logoActive
        })}
      >
        {logo}
      </div>
      {_.map(data, (one, i) => (
        <Item key={i} data={one} onSelect={onSelect} selected={selected} />
      ))}
      <div className='gm-nav-other'>{other}</div>
    </div>
  )
}

Nav.propTypes = {
  logo: PropTypes.element,
  logoActive: PropTypes.bool,
  /**
   * 三级菜单，其中 2 级有个 style
   * [{link, name, icon, sub: [{link, name, style, sub: [{link, name}]}]}]
   * */
  data: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,

  other: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Nav
