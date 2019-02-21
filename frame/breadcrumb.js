import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { isPathMatch, is } from 'gm-util'
import EVENT_TYPE from '../src/event_type'

function nav2BreadCrumb (props) {
  const { breadcrumbs, pathname, navConfig } = props
  let result = []
  let title

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

  // 面包屑
  // https://code.guanmai.cn/front-end/think/issues/24
  _.forEach(breadcrumbs, v => {
    if (_.isString(v)) {
      result.push({ name: v })
    } else {
      result.push({ name: v.name, link: v.link || pathname })
    }
  })

  title = result.length ? result[result.length - 1].name : ''
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.TITLE_CHANGE, {
    detail: title
  }))
  return result
}

const Breadcrumb = props => {
  const { back } = props
  const data = nav2BreadCrumb(props)

  if (!data || data.length === 0) {
    return <div className='gm-framework-breadcrumb-default'/>
  }

  return (
    <ol className='gm-framework-breadcrumb-default breadcrumb'>
      {back && <li>
        <a
          href='javascript:;'
          onClick={() => back()}
          className='gm-framework-breadcrumb-default-back'
        >返回</a>
      </li>}
      {!is.mobile && _.map(data.slice(0, -1), (v, i) => (
        <li key={i + '_' + v.link}>
          {v.name}
        </li>
      ))}
      <li className='active'>{data.slice(-1)[0].name}</li>
    </ol>
  )
}

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array,
  pathname: PropTypes.string,
  navConfig: PropTypes.array,
  name: PropTypes.string,
  back: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
}

export default Breadcrumb
