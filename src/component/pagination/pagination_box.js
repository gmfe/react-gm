import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import { Select, Option } from '../select'
import Flex from '../flex'

// 每页多少条数据
const sizeArray = [10, 20, 50]

const PageNumber = props => {
  const { resPagination } = props

  if (!resPagination) {
    return null
  }

  if (resPagination.count !== undefined) {
    return <PageNumberWithCount {...props} />
  } else {
    return <PageNumberWithoutCount {...props} />
  }
}

const PageNumberWithCount = props => {
  const { resPagination, currentIndex, limit, handlePage } = props

  const all = Math.ceil(resPagination.count / limit)
  // 当currentIndex为大于等于5时才开始改变begin
  let begin = currentIndex > 3 ? Math.min(currentIndex - 2, all - 5) : 0
  let end = Math.min(all, begin + 5)

  // 如果页数少于10则显示全部页码
  if (all < 10) {
    begin = 0
    end = all
  }

  const pages = (
    <React.Fragment>
      {begin >= 2 ? (
        <React.Fragment>
          <li
            className={classNames({
              active: currentIndex === 0
            })}
          >
            <a href='javascript:;' onClick={handlePage.bind(this, 0)}>
              {1}
            </a>
          </li>
          <li className='disabled'>
            <a href='javascript:;'>...</a>
          </li>
        </React.Fragment>
      ) : null}

      {/* 遍历与currentIndex都由0开始 */}
      {_.map(_.range(begin, end), v => (
        <li
          key={v}
          className={classNames({
            active: v === currentIndex
          })}
        >
          <a href='javascript:;' onClick={handlePage.bind(this, v)}>
            {v + 1}
          </a>
        </li>
      ))}

      {end <= all - 2 ? (
        <li className='disabled'>
          <a href='javascript:;'>...</a>
        </li>
      ) : null}

      {end <= all - 1 ? (
        <li
          className={classNames({
            active: currentIndex === all - 1
          })}
        >
          <a href='javascript:;' onClick={handlePage.bind(this, all - 1)}>
            {all}
          </a>
        </li>
      ) : null}
    </React.Fragment>
  )

  return pages
}

const PageNumberWithoutCount = props => {
  const { resPagination, currentIndex, limit, handlePage } = props
  const begin = Math.max(0, currentIndex - 5)
  const end = Math.min(
    Math.ceil(resPagination.peek / limit) + currentIndex,
    currentIndex + 5
  )

  const pages = _.map(_.range(begin, end), v => (
    <li
      key={v}
      className={classNames({
        active: v === currentIndex
      })}
    >
      <a href='javascript:;' onClick={handlePage.bind(this, v)}>
        {v + 1}
      </a>
    </li>
  ))

  if (Math.ceil(resPagination.peek / limit) > 5) {
    pages.push(
      <li key='...' className='disabled'>
        <a href='javascript:;'>...</a>
      </li>
    )

    // if (resPagination.count) {
    //   const lastIndex = resPagination.count / limit

    //   pages.push(
    //     <li
    //       key={lastIndex}
    //       className={classNames({
    //         active: lastIndex === currentIndex
    //       })}
    //     >
    //       <a
    //         href='javascript:;'
    //         onClick={handlePage.bind(this, lastIndex)}
    //       >
    //         {lastIndex}
    //       </a>
    //     </li>
    //   )
    // }
  }

  // if()

  return pages
}

const SizeSelect = props => {
  const { value, onSelect } = props

  return (
    <React.Fragment>
      <span>{getLocale('每页')} </span>
      <Select value={value} onChange={onSelect}>
        {_.map(sizeArray, (v, index) => {
          return (
            <Option key={index + v} value={v}>
              {v}
            </Option>
          )
        })}
      </Select>
      <span>{getLocale('条')}</span>
    </React.Fragment>
  )
}

SizeSelect.propTypes = {
  value: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

const TotalMsg = props => {
  const { count } = props

  return count ? (
    <span>{`${getLocale('共')}${count}${getLocale('条记录')},`}</span>
  ) : null
}

TotalMsg.propTypes = {
  count: PropTypes.number.isRequired
}

const Previous = props => {
  const { currentIndex, handlePre } = props

  return (
    <li
      className={classNames({
        disabled: currentIndex === 0
      })}
    >
      <a href='javascript:;' onClick={handlePre}>
        {'<'}
      </a>
    </li>
  )
}

Previous.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  handlePre: PropTypes.func.isRequired
}

const Next = props => {
  const { resPagination, handleNext, currentIndex, limit } = props

  if (!resPagination) {
    return null
  }

  const { count } = resPagination
  const isDisabled = count
    ? Math.ceil(count / limit) === currentIndex + 1
    : !resPagination.more

  return (
    <li
      className={classNames({
        disabled: isDisabled
      })}
    >
      <a href='javascript:;' onClick={handleNext}>
        {'>'}
      </a>
    </li>
  )
}

Next.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  resPagination: PropTypes.object.isRequired,
  handleNext: PropTypes.func.isRequired
}

// 预估过一个月后自己看不懂
class PaginationBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 给后台
      pageObj: null,
      limit: props.limit, // 不会变
      offset: 0, // 不会变
      peek: props.disablePage ? null : 10 * props.limit, // 不会变 and 页面会显示5页，peek 6页，便于显示 ... 代表还有更多页码

      // 返回的 pagination
      resPagination: null,

      // 组件状态
      loading: false,
      currentIndex: 0, // 从0开始吧
      pageObjArr: [null]
    }

    this.doFirstRequest = this.doFirstRequest.bind(this)
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
  doCurrentPageRequest = () => {
    const { currentIndex } = this.state

    this.handleRequest(this.getParams(currentIndex), currentIndex)
  }

  handleRequest = (params, currentIndex) => {
    const { loading, pageObjArr, pageObj, limit, offset, peek } = this.state

    // currentIndex 成功后才更新state，所以这里要取之前的
    currentIndex =
      currentIndex === undefined ? this.state.currentIndex : currentIndex

    if (loading) {
      return
    }

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

          loading: false,
          currentIndex,
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

  handlePre = () => {
    const { currentIndex } = this.state
    this.handleRequest(this.getParams(currentIndex - 1), currentIndex - 1)
  }

  handleNext = () => {
    const { currentIndex } = this.state
    this.handleRequest(this.getParams(currentIndex + 1), currentIndex + 1)
  }

  handlePage = currentIndex => {
    this.handleRequest(this.getParams(currentIndex), currentIndex)
  }

  handleSizeChange = value => {
    this.setState({
      limit: value
    })

    // 切换每页条数直接跳到第一页
    this.handleRequest(this.getParams(0), 0)
  }

  render() {
    const { children, disablePage } = this.props
    const { loading, resPagination, currentIndex, limit } = this.state
    const count = resPagination ? resPagination.count : null

    return (
      <div className='gm-pagination-box'>
        <div className='gm-pagination-box-list'>
          {_.isFunction(children) ? children({ loading }) : children}
        </div>
        <Flex
          justifyEnd
          alignCenter
          className='gm-pagination text-center gm-padding-top-15'
        >
          <TotalMsg count={count} />
          <SizeSelect value={limit} onSelect={this.handleSizeChange} />
          <ul className='pagination pagination-sm gm-margin-0'>
            <Previous currentIndex={currentIndex} handlePre={this.handlePre} />

            {!disablePage && (
              <PageNumber
                resPagination={resPagination}
                currentIndex={currentIndex}
                limit={limit}
                handlePage={this.handlePage}
              />
            )}

            <Next
              currentIndex={currentIndex}
              limit={limit}
              resPagination={resPagination}
              handleNext={this.handleNext}
            />
          </ul>
        </Flex>
      </div>
    )
  }
}

PaginationBox.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  onRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  limit: PropTypes.number,

  disablePage: PropTypes.bool
}

PaginationBox.defaultProps = {
  limit: 10,
  disablePage: false
}

export default PaginationBox
