import React from 'react'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'

class WithCount extends React.Component {
  render () {
    const { data } = this.props
    return (
      <div className='gm-pagination-text'>
        {getLocale('pagination', 'show')} {data.offset + 1} ~ {data.offset + data.limit}，{getLocale('pagination', 'total')} {data.count} {getLocale('pagination', 'item')}
      </div>
    )
  }
}

class WithoutCount extends React.Component {
  render () {
    const { data } = this.props
    return (
      <div className='gm-pagination-text'>
        {getLocale('pagination', 'show')} {data.offset + 1} ~ {data.offset + data.limit} {getLocale('pagination', 'item')}
      </div>
    )
  }
}

class PaginationText extends React.Component {
  render () {
    if (this.props.data.count !== undefined) {
      return <WithCount {...this.props}/>
    } else {
      return <WithoutCount {...this.props}/>
    }
  }
}

PaginationText.displayName = 'PaginationText'
PaginationText.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  })
}

export default PaginationText
