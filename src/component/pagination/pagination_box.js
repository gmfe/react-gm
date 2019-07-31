import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import PaginationV2Data from './pagination_v2_data'

class PaginationBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }

    this.paginationDataRef = React.createRef()
  }

  componentDidMount() {
    this.doFirstRequest = this.paginationDataRef.current.doFirstRequest
  }

  handlePage = params => {
    this.setState({
      loading: true
    })

    return this.props
      .onRequest(params)
      .then(json => {
        this.setState({
          loading: false
        })

        return json
      })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    const { children, limit, onRequest, onLimitChange, ...rest } = this.props
    const { loading } = this.state

    return (
      <div className='gm-pagination-box' {...rest}>
        <div>{_.isFunction(children) ? children({ loading }) : children}</div>
        <PaginationV2Data
          toPage={this.handlePage}
          limit={limit}
          ref={this.paginationDataRef}
        />
      </div>
    )
  }
}

PaginationBox.propTypes = {
  /** 用于发请求的function，接收pagination。要返回 promise，且 resolve json */
  onRequest: PropTypes.func.isRequired,
  /** 页码上方区域 */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** 返回条数，默认10 */
  limit: PropTypes.number,
  /** 调用方改变limit */
  onLimitChange: PropTypes.func
}

PaginationBox.defaultProps = {
  onRequest: _.noop
}

export default PaginationBox
