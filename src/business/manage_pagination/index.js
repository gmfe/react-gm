import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Flex from '../../component/flex'
import Pagination from '../../component/pagination/pagination'
import Storage from '../../component/storage'

class ManagePagination extends React.Component {
  constructor(props) {
    super(props)

    const limit =
      (props.id && Storage.get('manage_pagination_' + props.id)) ||
      props.defaultLimit

    this.state = {
      limit,
      offset: 0,
      count: null,

      nextDisabled: false,
      loading: false
    }
  }

  apiDoFirstRequest = params => {
    this.setState(
      {
        offset: 0,
        count: null,

        nextDisabled: false,
        loading: false
      },
      () => {
        this.handleRequest(params)
      }
    )
  }

  apiDoCurrentRequest = () => {
    this.handleRequest()
  }

  handleRequest = (data = {}) => {
    const { limit, offset, loading } = this.state

    if (loading) {
      return
    }

    this.setState({
      loading: true
    })

    const result = this.props.onRequest({
      limit,
      offset,
      ...data
    })

    result
      .then(json => {
        let nextDisabled = false
        if (json.data.length < limit) {
          nextDisabled = true
        }

        this.setState({
          offset: data.offset === undefined ? offset : data.offset,
          limit: data.limit === undefined ? limit : data.limit,
          count: json.pagination && json.pagination.count,
          nextDisabled,
          loading: false
        })

        return json
      })
      .catch(err => {
        this.setState({
          loading: false
        })
        return Promise.reject(err)
      })
  }

  handlePage = data => {
    if (this.props.id) {
      Storage.set('manage_pagination_' + this.props.id, data.limit)
    }

    this.handleRequest(data)
  }

  render() {
    const { onRequest, defaultLimit, children, ...rest } = this.props
    const { limit, offset, count, nextDisabled, loading } = this.state

    return (
      <div {...rest}>
        <div>{_.isFunction(children) ? children({ loading }) : children}</div>
        <Flex justifyEnd className='gm-padding-20'>
          <Pagination
            data={{
              limit,
              offset,
              count
            }}
            toPage={this.handlePage}
            nextDisabled={nextDisabled}
          />
        </Flex>
      </div>
    )
  }
}

ManagePagination.propTypes = {
  /** 请提供唯一id。目前用来记忆 limit */
  id: PropTypes.string,
  /**
   * 参数 pagination。为发请求所需的页码信息。
   * 后台返回 data 是数组
   * 要求返回 promise
   * */
  onRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  defaultLimit: PropTypes.number
}

ManagePagination.defaultProps = {
  defaultLimit: 10
}

export default ManagePagination
