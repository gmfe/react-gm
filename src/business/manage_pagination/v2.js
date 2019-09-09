import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Storage from '../../component/storage'
import Transform from './transform'
import Flex from '../../component/flex'
import { warn } from '../../util'

class ManagePaginationV2 extends React.Component {
  constructor(props) {
    super(props)

    const limit =
      (props.id && Storage.get('manage_pagination_v2_' + props.id)) ||
      props.defaultLimit

    this.state = {
      // 给后台
      pageObj: null,
      limit,
      offset: 0, // 不会变
      peek: props.disablePage ? null : 6 * limit, // 不会变 and 页面会显示5页，peek 6页，便于显示 ... 代表还有更多页码

      // 返回的 pagination
      resPagination: null,

      // 组件状态
      loading: false,
      currentIndex: 0, // 从0开始吧
      pageObjArr: [null]
    }
  }

  // 保留旧用法
  doFirstRequest = params => {
    warn('请使用 apiDoFirstRequest')
    return this.apiDoFirstRequest(params)
  }

  // 保留旧用法
  doCurrentRequest = () => {
    warn('请使用 apiDoCurrentRequest')
    return this.apiDoCurrentRequest()
  }

  // 暴露给外面用，首次请求或重新请求
  apiDoFirstRequest = params => {
    const { limit, offset, peek } = this.state

    this.setState(
      {
        pageObj: null,
        limit,
        offset,
        peek, // no this.props.limit

        resPagination: null,

        loading: false,
        currentIndex: 0,
        pageObjArr: [null]
      },
      () => {
        this.handleRequest(params)
      }
    )
  }

  // 当前页刷新
  apiDoCurrentRequest = () => {
    const { currentIndex } = this.state
    this.handleRequest(this.getParams(currentIndex), { currentIndex })
  }

  handleRequest = (params, options = {}) => {
    let { currentIndex, limit } = options
    const { loading, pageObjArr, pageObj, offset, peek } = this.state

    if (loading) {
      return
    }

    // currentIndex 成功后才更新state，所以这里要取之前的
    currentIndex =
      currentIndex === undefined ? this.state.currentIndex : currentIndex
    limit = limit === undefined ? this.state.limit : limit

    this.setState({
      loading: true
    })

    const result = this.props.onRequest(
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

    result
      .then(json => {
        const newPageObjArr = pageObjArr.slice()
        newPageObjArr[currentIndex + 1] = json.pagination.page_obj
        newPageObjArr.length = currentIndex + 2 // 调整数组长度，当前位置之后的 pageobj 都清理掉，不缓存，后面拉新的为准

        this.setState({
          pageObj: json.pagination.page_obj,

          resPagination: json.pagination,

          currentIndex,
          limit,
          loading: false,
          pageObjArr: newPageObjArr
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

  getParams = currentIndex => {
    const { pageObjArr, limit } = this.state

    let i = currentIndex
    while (pageObjArr[i] === undefined && i > 0) {
      i--
    }

    return {
      page_obj: pageObjArr[i] || null,
      offset: (currentIndex - i) * limit
    }
  }

  handleChange = ({ currentIndex, limit }) => {
    if (this.props.id) {
      Storage.set('manage_pagination_v2_' + this.props.id, limit)
    }

    this.handleRequest(this.getParams(currentIndex), {
      currentIndex,
      limit
    })
  }

  render() {
    const {
      id,
      onRequest,
      children,
      defaultLimit,
      disablePage,
      className,
      ...rest
    } = this.props

    const { limit, loading, resPagination, currentIndex } = this.state

    return (
      <div {...rest} className={classNames('gm-manage-pagination', className)}>
        <div className='gm-manage-pagination-list'>
          {_.isFunction(children) ? children({ loading }) : children}
        </div>
        <Flex justifyEnd className='gm-padding-20'>
          <Transform
            count={resPagination && resPagination.count}
            limit={limit}
            currentIndex={currentIndex}
            peek={resPagination && resPagination.peek}
            more={resPagination && resPagination.more}
            onChange={this.handleChange}
          />
        </Flex>
      </div>
    )
  }
}

ManagePaginationV2.propTypes = {
  /** 请提供唯一id。目前用来记忆 limit */
  id: PropTypes.string,
  /**
   * 参数 (pagination)。发请求所需的页码信息，调用方不用关系，只需assign到请求上即可
   * 要求返回 promise
   * */
  onRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /** 默认 10，想要改变则传此参数 */
  defaultLimit: PropTypes.number,
  disablePage: PropTypes.bool,

  className: PropTypes.string,
  style: PropTypes.object
}

ManagePaginationV2.defaultProps = {
  defaultLimit: 10,
  disablePage: false
}

export default ManagePaginationV2
