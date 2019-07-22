import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

function doFilter(data) {
  return _.filter(data, v => {
    if (v.show === false) {
      return false
    }

    if (v.sub) {
      v.sub = doFilter(v.sub)

      return v.sub.length !== 0
    }

    return true
  })
}

const Popup = props => {
  const { data } = props

  return (
    <div className='gm-nav-popup'>
      <Flex>
        {_.map(data, (v, i) => (
          <div key={i} className='gm-nav-two'>
            <div className='gm-text-desc gm-padding-5'>{v.name}</div>
            <div className='gm-border-bottom gm-margin-tb-5' />
            <div>
              {_.map(v.sub, (s, si) => (
                <a key={si} href={s.link} className='gm-nav-there'>
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
  data: PropTypes.array.isRequired
}

const Item = props => {
  const {
    data: { icon, name, link, sub }
  } = props
  return (
    <div className='gm-nav-one-box gm-position-relative'>
      <a href={link} className='gm-nav-one'>
        <div className='text-center'>{icon}</div>
        <div className='text-center'>{name}</div>
      </a>
      <Popup data={sub} />
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object.isRequired
}

const Nav = props => {
  const {
    logo,
    data,
    selected,
    onSelect,
    other,
    className,
    style,
    ...rest
  } = props

  const newData = doFilter(data)

  return (
    <div {...rest} className={classNames('gm-nav', className)}>
      <Flex justifyCenter alignCenter className='gm-nav-logo'>
        {logo}
      </Flex>
      {_.map(newData, (one, i) => (
        <Item key={i} data={one} />
      ))}
      <div>{other}</div>
    </div>
  )
}

Nav.propTypes = {
  logo: PropTypes.element,
  /** 三级菜单 [{link, name, icon, sub: [{link, name, sub: [{link, name}]}]}] */
  data: PropTypes.array.isRequired,
  /** pathname */
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,

  other: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Nav
