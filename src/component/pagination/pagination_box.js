import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import PaginationBoxBase from './pagination_box_base'

// 预估过一个月后自己看不懂
class PaginationBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 组件状态
      loading: false
    }
    this.baseRef = React.createRef()
  }

  componentDidMount() {
    this.doFirstRequest = this.baseRef.current.doFirstRequest
  }

  handleLoadingStatus = value => {
    this.setState({
      loading: value
    })
  }

  render() {
    const { children, onRequest, limit, disablePage, ...rest } = this.props
    const { loading } = this.state

    return (
      <div className='gm-pagination-box'>
        <div>{_.isFunction(children) ? children({ loading }) : children}</div>
        <PaginationBoxBase
          ref={this.baseRef}
          onRequest={onRequest}
          loading={loading}
          limit={limit}
          disablePage={disablePage}
          setLoadingStatusFunc={this.handleLoadingStatus}
          {...rest}
        />
      </div>
    )
  }
}

PaginationBox.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  /** 用于发请求的function，接收pagination。要返回 promise，且 resolve json */
  onRequest: PropTypes.func.isRequired,
  /** 页码上方区域 */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** 返回条数，默认10 */
  limit: PropTypes.number,
  /** 隐藏页码，默认false */
  disablePage: PropTypes.bool
}

PaginationBox.defaultProps = {
  limit: 10,
  onRequest: _.noop,
  disablePage: false
}

export default PaginationBox
