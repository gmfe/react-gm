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
  const { paginationData } = props

  if (!paginationData) {
    return null
  }

  if (paginationData.count !== undefined) {
    return <PageNumberWithCount {...props} />
  } else {
    return <PageNumberWithoutCount {...props} />
  }
}

PageNumber.propTypes = {
  paginationData: PropTypes.object
}

const PageNumberWithCount = props => {
  const { paginationData, currentIndex, limit, handlePage } = props

  const all = Math.ceil(paginationData.count / limit)
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
  const { paginationData, currentIndex, limit, handlePage } = props
  const begin = Math.max(0, currentIndex - 4)
  const end = Math.min(
    Math.ceil(paginationData.peek / limit) + currentIndex,
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

  if (Math.ceil(paginationData.peek / limit) > 5) {
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
  const { paginationData, handleNext, currentIndex, limit } = props

  if (!paginationData) {
    return null
  }

  const { count } = paginationData
  const isDisabled = count
    ? Math.ceil(count / limit) === currentIndex + 1
    : !paginationData.more

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
  paginationData: PropTypes.object,
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

const PaginationV2 = props => {
  const [currentLimit, setCurrentLimit] = useState(10)
  const [loading, setLoading] = useState(false)

  const myLimit = props.limit || currentLimit

  const handleAnyPageChange = (propFunc, index, limit) => {
    if (!loading) {
      setLoading(true)

      Promise.resolve(propFunc(index, limit))
        .then(() => {
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)

          return Promise.reject(err)
        })
    }
  }

  const handlePre = () => {
    const { currentIndex } = props

    handleAnyPageChange(props.onCurrentIndexChange, currentIndex - 1, myLimit)
  }

  const handleNext = () => {
    const { currentIndex } = props

    handleAnyPageChange(props.onCurrentIndexChange, currentIndex + 1, myLimit)
  }

  const handlePage = currentIndex => {
    handleAnyPageChange(props.onCurrentIndexChange, currentIndex, myLimit)
  }

  const handleSizeChange = value => {
    if (!props.limit) {
      setCurrentLimit(value)
      handleAnyPageChange(props.onCurrentIndexChange, 0, myLimit)
    } else {
      handleAnyPageChange(props.onLimitChange, 0, value)
    }
  }

  const handleJumpPage = pageNumber => {
    handleAnyPageChange(props.onCurrentIndexChange, pageNumber, myLimit)
  }

  const {
    paginationData,
    currentIndex,
    onCurrentIndexChange,
    onLimitChange,
    ...rest
  } = props

  const count = paginationData ? paginationData.count : null

  return (
    <Flex
      justifyEnd
      alignCenter
      className='text-center gm-padding-top-20 gm-pagination-box'
      {...rest}
    >
      <TotalMsg count={count} />
      <SizeSelect value={myLimit} onSelect={handleSizeChange} />
      <ul className='gm-pagination-box-ul gm-margin-0 gm-padding-left-20'>
        <Previous currentIndex={currentIndex} handlePre={handlePre} />
        <PageNumber
          paginationData={paginationData}
          currentIndex={currentIndex}
          limit={myLimit}
          handlePage={handlePage}
        />
        <Next
          currentIndex={currentIndex}
          limit={myLimit}
          paginationData={paginationData}
          handleNext={handleNext}
        />
      </ul>
      {count && (
        <JumpPage
          currentIndex={currentIndex}
          all={Math.ceil(count / myLimit)}
          jumpFunc={handleJumpPage}
        />
      )}
    </Flex>
  )
}

PaginationV2.propTypes = {
  /** 页码需要的数据，含count(可选)，peek，more（其中peek和more仅当without count时必要） */
  paginationData: PropTypes.shape({
    count: PropTypes.number,
    peek: PropTypes.number,
    more: PropTypes.bool
  }).isRequired,
  /** 页码变化回调，返回参数（currentPage, pageSize) */
  onLimitChange: PropTypes.func,
  currentIndex: PropTypes.number.isRequired,
  onCurrentIndexChange: PropTypes.func.isRequired,
  /** 每页条数，不传默认10 */
  limit: PropTypes.number
}

PaginationV2.defaultProps = {
  onCurrentIndexChange: _.noop,
  onLimitChange: _.noop
}

export default PaginationV2
