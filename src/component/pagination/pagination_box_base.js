import { getLocale } from '../../locales'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import { Select } from '../select'
import Flex from '../flex'
import InputNumberV2 from '../input_number/number'

// 每页多少条数据
const sizeArray = [
  { value: 10, text: 10 },
  { value: 20, text: 20 },
  { value: 50, text: 50 }
]

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
          <li className='block'>
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
        <li className='block'>
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
  const begin = Math.max(0, currentIndex - 4)
  const end = Math.min(
    Math.ceil(resPagination.peek / limit) + currentIndex,
    currentIndex + 4
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
      <li key='...' className='block'>
        <a href='javascript:;'>...</a>
      </li>
    )
  }

  return pages
}

const SizeSelect = props => {
  const { value, onSelect } = props

  return (
    <React.Fragment>
      <span>{getLocale('每页')} </span>
      <Select
        data={sizeArray}
        value={value}
        listProps={{ style: { width: '60px', minWidth: '60px' } }}
        onChange={onSelect}
        disabledClose
        className='gm-margin-lr-5'
        style={{ height: '30px', minWidth: '60px', width: '60px' }}
      />
      <span>{getLocale('条')}</span>
    </React.Fragment>
  )
}

SizeSelect.propTypes = {
  value: PropTypes.any.isRequired,
  onSelect: PropTypes.func.isRequired
}

const TotalMsg = props => {
  const { count } = props

  return count ? (
    <span>{`${getLocale('共')}${count}${getLocale('条记录')},`}</span>
  ) : null
}

TotalMsg.propTypes = {
  count: PropTypes.number
}

const Previous = props => {
  const { currentIndex, handlePre } = props

  return (
    <li
      className={classNames('gm-pagination-box', {
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
      className={classNames('gm-pagination-box', {
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
  resPagination: PropTypes.object,
  handleNext: PropTypes.func.isRequired
}

const JumpPage = props => {
  const { all, currentIndex } = props
  const [pageValue, setPageValue] = useState(currentIndex + 1)

  const handleChangeValue = value => {
    setPageValue(value)
  }

  useEffect(() => {
    setPageValue(currentIndex + 1)
  }, [currentIndex])

  const handleBlurSetPage = value => {
    let jumpValue = pageValue
    if (all < pageValue) {
      jumpValue = all
    }

    if (jumpValue) {
      setPageValue(jumpValue)

      props.jumpFunc(jumpValue - 1)
    }
  }
  return (
    <Flex className='gm-pagination-box-jump gm-margin-right-20'>
      <InputNumberV2
        precision={0}
        value={pageValue}
        className='gm-pagination-box-input'
        onChange={handleChangeValue}
        onBlur={handleBlurSetPage}
      />
      <span className='gm-pagination-box-total-page'>{`/${all}页`}</span>
    </Flex>
  )
}

JumpPage.propTypes = {
  all: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  jumpFunc: PropTypes.func.isRequired
}

class PaginationBoxBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 给后台
      pageObj: null,
      limit: props.limit, // 不会变
      offset: 0, // 不会变
      peek: props.disablePage ? null : 6 * props.limit, // 不会变 and 页面会显示5页，peek 6页，便于显示 ... 代表还有更多页码

      // 返回的 pagination
      resPagination: null,

      // 组件状态
      currentIndex: 0, // 从0开始吧
      pageObjArr: [null]
    }

    this.doFirstRequest = this.doFirstRequest.bind(this)
  }

  // 暴露给外面用，首次请求或重新请求
  doFirstRequest = params => {
    const { limit, offset, peek } = this.state

    this.props.setLoadingStatusFunc(false)

    this.setState(
      {
        pageObj: null,
        limit,
        offset,
        peek, // no this.props.limit

        resPagination: null,

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
    const { pageObjArr, pageObj, limit, offset, peek } = this.state
    const { setLoadingStatusFunc, loading } = this.props
    // currentIndex 成功后才更新state，所以这里要取之前的
    currentIndex =
      currentIndex === undefined ? this.state.currentIndex : currentIndex

    if (loading) {
      return
    }

    setLoadingStatusFunc(true)

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
          pageObjArr: newPageObjArr
        })
        setLoadingStatusFunc(false)

        return json
      })
      .catch(err => {
        setLoadingStatusFunc(false)

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

  handleJumpPage = pageNumber => {
    this.handleRequest(this.getParams(pageNumber), pageNumber)
  }

  render() {
    const { disablePage } = this.props
    const { resPagination, currentIndex, limit } = this.state
    const count = resPagination ? resPagination.count : null

    return (
      <Flex justifyEnd alignCenter className='text-center gm-padding-top-20'>
        <TotalMsg count={count} />
        <SizeSelect value={limit} onSelect={this.handleSizeChange} />
        <ul className='gm-pagination-box-ul gm-margin-0 gm-padding-left-20'>
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
        {count && (
          <JumpPage
            currentIndex={currentIndex}
            all={Math.ceil(count / limit)}
            jumpFunc={this.handleJumpPage}
          />
        )}
      </Flex>
    )
  }
}

PaginationBoxBase.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  /** 用于发请求的function，接收pagination。要返回 promise，且 resolve json */
  onRequest: PropTypes.func.isRequired,
  /** 页码上方区域 */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** 返回条数，默认10 */
  limit: PropTypes.number,
  /** 隐藏页码，默认false */
  disablePage: PropTypes.bool,
  /** loading状态，默认false */
  loading: PropTypes.bool.isRequired,
  /** 父组件设置loading状态 */
  setLoadingStatusFunc: PropTypes.func
}

PaginationBoxBase.defaultProps = {
  limit: 10,
  onRequest: _.noop,
  disablePage: false
}

export default PaginationBoxBase
