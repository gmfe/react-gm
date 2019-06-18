import React from 'react'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'

class WithCount extends React.Component {
  constructor(props) {
    super(props)
    this.handlePage = ::this.handlePage
  }

  render() {
    let data = Object.assign({}, this.props.data)

    data.index = data.offset / data.limit + 1

    let offset = 2

    let pages = []

    let all = Math.ceil(data.count / data.limit)

    let begin = Math.max(data.index - offset, 1)

    let end = Math.min(data.index + offset, all)

    if (all > offset * 2 + 1) {
      if (begin === 1) {
        end = offset * 2 + 1
      } else if (end === all) {
        begin = Math.max(begin - offset, 1)
      }
    }

    for (let i = begin; i <= end; i++) {
      pages.push(i)
    }

    return (
      <div className='gm-pagination'>
        <ul className='pagination pagination-sm' onClick={this.handlePage}>
          <li className={data.index === 1 ? 'disabled' : ''}>
            <a href='javascript:;' data-page={data.index - 1}>
              {getLocale('pagination', 'previous')}
            </a>
          </li>

          {begin >= 2 ? (
            <li>
              <a href='javascript:;' data-page='1'>
                1
              </a>
            </li>
          ) : (
            undefined
          )}
          {begin >= 3 ? (
            <li className='disabled'>
              <a href='javascript:;'>...</a>
            </li>
          ) : (
            undefined
          )}

          {pages.map((page, i) => (
            <li key={i} className={data.index === page ? 'active' : ''}>
              <a href='javascript:;' data-page={page}>
                {page}
              </a>
            </li>
          ))}

          {end <= all - 2 ? (
            <li className='disabled'>
              <a href='javascript:;'>...</a>
            </li>
          ) : (
            undefined
          )}
          {end <= all - 1 ? (
            <li>
              <a href='javascript:;' data-page={all}>
                {all}
              </a>
            </li>
          ) : (
            undefined
          )}

          <li className={data.index === all || all === 0 ? 'disabled' : ''}>
            <a href='javascript:;' data-page={data.index + 1}>
              {getLocale('pagination', 'next')}
            </a>
          </li>
        </ul>
      </div>
    )
  }

  handlePage(event) {
    const page = ~~event.target.getAttribute('data-page')

    const data = this.props.data

    const count = Math.ceil(data.count / data.limit)

    const toPage = this.props.toPage
    if (!page || page === data.index || page < 1 || page > count) {
      return
    }

    toPage(
      {
        offset: (page - 1) * data.limit,
        limit: data.limit
      },
      page
    )
  }
}

WithCount.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  toPage: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool
}

class WithoutCount extends React.Component {
  constructor(props) {
    super(props)
    this.handlePage = ::this.handlePage
  }

  handlePage(action) {
    const { data, toPage } = this.props

    if (action === -1) {
      if (data.offset === 0) {
        return
      }
      toPage({
        offset: Math.max(data.offset - data.limit, 0),
        limit: data.limit
      })
    } else {
      toPage({
        offset: data.offset + data.limit,
        limit: data.limit
      })
    }
  }

  render() {
    const { data, nextDisabled } = this.props
    return (
      <div className='gm-pagination'>
        <ul className='pagination pagination-sm'>
          <li className={data.offset === 0 ? 'disabled' : ''}>
            <a href='javascript:;' onClick={this.handlePage.bind(this, -1)}>
              {getLocale('pagination', 'previous')}
            </a>
          </li>
          <li className={nextDisabled ? 'disabled' : ''}>
            <a href='javascript:;' onClick={this.handlePage.bind(this, 1)}>
              {getLocale('pagination', 'next')}
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

WithoutCount.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  toPage: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool
}

class Pagination extends React.Component {
  render() {
    if (this.props.data.count !== undefined) {
      return <WithCount {...this.props} />
    } else {
      return <WithoutCount {...this.props} />
    }
  }
}

Pagination.displayName = 'Pagination'
Pagination.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }),
  toPage: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool
}

export default Pagination
