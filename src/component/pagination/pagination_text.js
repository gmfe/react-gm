import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import { warn } from '../../util'

class WithCount extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div className='gm-pagination-text'>
        {getLocale('显示')} {data.offset + 1} ~ {data.offset + data.limit}，
        {getLocale('共')} {data.count} {getLocale('条')}
      </div>
    )
  }
}

WithCount.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  })
}

class WithoutCount extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div className='gm-pagination-text'>
        {getLocale('显示')} {data.offset + 1} ~ {data.offset + data.limit}{' '}
        {getLocale('条')}
      </div>
    )
  }
}

WithoutCount.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  })
}

class PaginationText extends React.Component {
  constructor(props) {
    super(props)

    warn('PaginationText 废弃')
  }

  render() {
    if (this.props.data.count !== undefined) {
      return <WithCount {...this.props} />
    } else {
      return <WithoutCount {...this.props} />
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
