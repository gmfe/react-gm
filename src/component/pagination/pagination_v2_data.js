import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import PaginationV2 from './pagination_v2'
// 接收paginationV2返回的的limit和CurrentIndex

// 处理paginationV2返回的值 作为onRequest参数
// 中间组件是为了业务层做的设计
// 底层组件是普通分页组件，接收limit,currentIndex,onLimitChange,onIndexChange,paginationData{count,peek,more}
// 最高层组件是调用方直接调用的组件，内含包装分页的内容,onRequest, limit， onLimitChange
class PaginationV2Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 组件状态
      loading: false,
      pageObjArr: [null],

      // 给后台
      pageObj: null,
      limit: props.limit,
      offset: 0,
      peek: 6 * props.limit,

      // 返回的 pagination
      resPagination: null,

      currentIndex: 0
    }
  }

  // 暴露给外面用，首次请求或重新请求
  doFirstRequest = params => {
    const { limit, offset, peek } = this.state

    this.setState(
      {
        pageObj: null,
        limit,
        offset,
        peek, // no this.props.limit

        loading: false,

        resPagination: null,

        currentIndex: 0,
        pageObjArr: [null]
      },
      () => {
        this.handleRequest(params)
      }
    )
  }

  getPaginationMsg = (currentIndex, limit) => {
    this.setState({
      currentIndex
    })

    if (this.props.limit) {
      this.props.onLimitChange(limit)
    }

    return this.handleRequest(
      this.getParams(currentIndex, limit),
      currentIndex,
      limit
    )
  }

  handleRequest = (params, currentIndex, limit) => {
    const { pageObjArr, pageObj, offset, peek, loading } = this.state

    currentIndex =
      currentIndex === undefined ? this.state.currentIndex : currentIndex
    limit = limit === undefined ? this.props.limit : limit

    if (loading) {
      return
    }

    this.setState({
      loading: true
    })

    const result = this.props.toPage(
      Object.assign(
        {
          limit,
          offset,
          peek,
          page_obj: pageObj
        },
        params
      )
    )

    return Promise.resolve(result)
      .then(json => {
        const newPageObjArr = pageObjArr.slice()

        newPageObjArr[currentIndex + 1] = json.pagination.page_obj
        newPageObjArr.length = currentIndex + 2 // 调整数组长度，当前位置之后的 pageobj 都清理掉，不缓存，后面拉新的为准

        this.setState({
          pageObj: json.pagination.page_obj,

          resPagination: json.pagination,

          currentIndex,
          pageObjArr: newPageObjArr,
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

  getParams = (currentIndex, limit) => {
    const { pageObjArr } = this.state

    let i = currentIndex
    while (pageObjArr[i] === undefined && i > 0) {
      i--
    }

    return {
      limit,
      page_obj: pageObjArr[i] || null,
      offset: (currentIndex - i) * (limit || this.props.limit)
    }
  }

  render() {
    const { limit, onLimitChange, toPage, ...rest } = this.props
    const { resPagination, currentIndex } = this.state

    return (
      <div {...rest}>
        <PaginationV2
          paginationData={resPagination}
          onLimitChange={this.getPaginationMsg}
          onCurrentIndexChange={this.getPaginationMsg}
          limit={this.props.limit || null}
          currentIndex={currentIndex}
        />
      </div>
    )
  }
}

PaginationV2Data.propTypes = {
  /** 用于发请求的function，接收pagination。要返回 promise，且 resolve json */
  toPage: PropTypes.func.isRequired,
  /** 返回条数，默认10 */
  limit: PropTypes.number,
  /** limit改变 */
  onLimitChange: PropTypes.func
}

PaginationV2Data.defaultProps = {
  toPage: _.noop,
  onLimitChange: _.noop
}

export default PaginationV2Data
