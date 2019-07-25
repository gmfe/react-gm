import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { isPathMatch, is } from 'gm-util'

function nav2BreadCrumb(props) {
  const { breadcrumbs, pathname, navConfig } = props
  const result = []

  _.forEach(navConfig, value => {
    if (_.startsWith(pathname, value.link)) {
      result.push(value)
      _.forEach(value.sub, val => {
        _.forEach(val.sub, v => {
          if (isPathMatch(pathname, v.link)) {
            result.push(val)
            result.push(v)
          }
        })
      })
    }
  })

  _.forEach(breadcrumbs, v => {
    if (_.isString(v)) {
      result.push({ name: v })
    } else {
      result.push({ name: v.name, link: v.link || pathname })
    }
  })

  return result
}

const Breadcrumb = props => {
  const data = nav2BreadCrumb(props)

  if (!data || data.length === 0) {
    return <div className='gm-framework-breadcrumb-default' />
  }

  return (
    <ul className='gm-framework-breadcrumb-default breadcrumb'>
      {!is.phone() &&
        _.map(data.slice(0, -1), (v, i) => (
          <li key={i + '_' + v.link}>
            <a
              href={v.link}
              onClick={e => {
                e.preventDefault()
                props.onSelect(v)
              }}
              className='gm-decoration-none gm-text'
            >
              {v.name}
            </a>
          </li>
        ))}
      <li className='active'>{data.slice(-1)[0].name}</li>
    </ul>
  )
}

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  navConfig: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Breadcrumb
