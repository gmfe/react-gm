import React from 'react'
import PropTypes from 'prop-types'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import Flex from '../flex'
import classNames from 'classnames'
import { getIndex } from '../pagination/util'
import _ from 'lodash'

const PagePeek = props => {
  const { data, _peekInfo, onChange } = props
  const index = getIndex(data)

  // 往前显示4个页码
  const begin = Math.max(1, index - 4)
  // 往后显示的页码，
  // 最后一页不显示，属于 ...，所以 -1
  // 最多4页
  const end = Math.min(
    Math.ceil(_peekInfo.peek / data.limit) + index - 1,
    index + 4
  )

  const handlePage = _index => {
    // 不处理
    if (index === _index || _index < 1 || !_peekInfo.more) {
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

      {_.map(_.range(begin, end + 1), (page, i) => (
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

      <span
        className='gm-pagination-page-text'
        style={{ display: _peekInfo.more ? 'block' : 'none' }}
      >
        ···
      </span>

      <div
        className={classNames('gm-pagination-page-item', {
          disabled: !_peekInfo.more
        })}
        onClick={() => handlePage(index + 1)}
      >
        <SVGRightSmall />
      </div>
    </Flex>
  )
}

PagePeek.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  _peekInfo: PropTypes.shape({
    more: PropTypes.bool,
    peek: PropTypes.number
  }),
  /* 提供 {index, limit} */
  onChange: PropTypes.func.isRequired
}

export default PagePeek
