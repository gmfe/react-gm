import React from 'react'
import PropTypes from 'prop-types'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import Flex from '../flex'
import classNames from 'classnames'
import { getIndex } from './util'

function getInfo(data) {
  const index = getIndex(data)
  const all = Math.ceil(data.count / data.limit)

  const diff = 2
  const pages = []

  let begin = Math.max(index - diff, 1)

  let end = Math.min(index + diff, all)

  if (all > diff * 2 + 1) {
    if (begin === 1) {
      end = diff * 2 + 1
    } else if (end === all) {
      begin = Math.max(end - 2 * diff, 1)
    }
  }

  for (let i = begin; i <= end; i++) {
    pages.push(i)
  }

  return {
    index,
    all,
    begin,
    end,
    pages
  }
}

const Page = props => {
  const { data, onChange } = props
  const { index, all, begin, end, pages } = getInfo(data)

  const handlePage = _index => {
    // 不处理
    if (index === _index || _index < 1 || _index > all) {
      return
    }

    onChange({
      offset: (_index - 1) * data.limit,
      limit: data.limit
    })
  }

  return (
    <Flex alignCenter className='gm-pagination-page'>
      <div
        className={classNames('gm-pagination-page-item', {
          disabled: index === 1
        })}
        onClick={() => handlePage(index - 1)}
      >
        <SVGLeftSmall />
      </div>

      {begin >= 2 && (
        <div className='gm-pagination-page-item' onClick={() => handlePage(1)}>
          1
        </div>
      )}
      {begin >= 3 && <span className='gm-pagination-page-text'>···</span>}

      {pages.map((page, i) => (
        <div
          key={i}
          className={classNames('gm-pagination-page-item', {
            active: index === page
          })}
          onClick={() => handlePage(page)}
        >
          {page}
        </div>
      ))}

      {end <= all - 2 && <span className='gm-pagination-page-text'>···</span>}
      {end <= all - 1 && (
        <div
          className='gm-pagination-page-item'
          onClick={() => handlePage(all)}
        >
          {all}
        </div>
      )}

      <div
        className={classNames('gm-pagination-page-item', {
          disabled: index === all || all === 0
        })}
        onClick={() => handlePage(index + 1)}
      >
        <SVGRightSmall />
      </div>
    </Flex>
  )
}

Page.propTypes = {
  data: PropTypes.object,
  /* 提供 {index, limit} */
  onChange: PropTypes.func.isRequired
}

export default Page
