import { getLocale } from '../../locales'
import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../component/flex'
import _ from 'lodash'
import SVGDown from '../../../svg/down.svg'
import SVGUp from '../../../svg/up.svg'
import { withDeprecated } from '../../util'

class QuickDetail extends React.Component {
  state = {
    show: false
  }

  getChildContext() {
    return { show: this.state.show }
  }

  handleCollapse = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { first, second, operate, third } = this.props
    const { show } = this.state

    const hasCollapse = second.props.data.length > 4

    return (
      <div className='gm-quick-detail gm-border gm-padding-20 gm-padding-bottom-0 gm-bg'>
        <Flex className='gm-margin-bottom-20'>
          <Flex flex column>
            {first}
          </Flex>
          <div>{operate}</div>
        </Flex>
        <Flex>
          <div style={{ marginRight: '40px', width: '200px' }}>{second}</div>
          <Flex flex column>
            {third}
          </Flex>
        </Flex>
        <Flex justifyCenter className='gm-padding-5'>
          {hasCollapse && (
            <a
              href='javascript:;'
              className='gm-quick-filter-toggle'
              onClick={this.handleCollapse}
            >
              {show ? getLocale('收拢详细信息') : getLocale('展开详细信息')}
              &nbsp;
              {show ? <SVGUp /> : <SVGDown />}
            </a>
          )}
        </Flex>
      </div>
    )
  }
}

QuickDetail.propTypes = {
  first: PropTypes.element.isRequired,
  second: PropTypes.element.isRequired,
  operate: PropTypes.element,
  third: PropTypes.element
}

QuickDetail.childContextTypes = {
  show: PropTypes.bool
}

class QuickDetailFirst extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Flex className='gm-quick-detail-first'>
        {_.map(data, (item, i) => (
          <div
            key={i}
            style={{
              marginRight: data.length - 1 === i ? '0px' : '40px'
            }}
          >
            <div>{item.name}:</div>
            <div className='gm-text-20'>{item.value}</div>
          </div>
        ))}
      </Flex>
    )
  }
}

QuickDetailFirst.propTypes = {
  data: PropTypes.array.isRequired // [{name, value}]
}

class QuickDetailSecond extends React.Component {
  render() {
    const { data, nameWidth } = this.props
    const { show } = this.context

    const processData = show ? data : data.slice(0, 4)

    return (
      <div style={{ lineHeight: 1 }}>
        {_.map(processData, (item, i) => (
          <div key={i} className='gm-margin-bottom-10'>
            <span
              className='gm-text-desc gm-inline-block'
              style={{ width: nameWidth }}
            >
              {item.name}:
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    )
  }
}

QuickDetailSecond.propTypes = {
  data: PropTypes.array.isRequired, // [{name, value}]
  nameWidth: PropTypes.string.isRequired
}

QuickDetailSecond.contextTypes = {
  show: PropTypes.bool
}

class QuickDetailThird extends React.Component {
  render() {
    const { result, process, unit } = this.props

    return (
      <Flex>
        <Flex
          flex
          column
          alignCenter
          justifyCenter
          className='gm-padding-10 gm-margin-right-20'
          style={{ backgroundColor: '#f1f0f6', height: '78px' }}
        >
          <div>{result.name}</div>
          <div className='gm-text-20'>
            {result.value}
            <span className='gm-text-12'>{unit}</span>
          </div>
        </Flex>

        <Flex flex={process.length}>
          {_.map(process, (item, i) => (
            <Flex
              flex
              column
              alignCenter
              justifyCenter
              className='gm-padding-10'
              key={i}
              style={{ backgroundColor: '#f1f0f6', height: '78px' }}
            >
              <div>{item.name}</div>
              <div className='gm-text-20'>
                {item.value}
                <span className='gm-text-12'>{unit}</span>
              </div>
            </Flex>
          ))}
        </Flex>
      </Flex>
    )
  }
}

QuickDetailThird.propTypes = {
  result: PropTypes.object.isRequired,
  process: PropTypes.array.isRequired, // [{name, value}]
  unit: PropTypes.string.isRequired
}

Object.assign(QuickDetail, {
  QuickDetailFirst,
  QuickDetailSecond,
  QuickDetailThird
})

export default withDeprecated(QuickDetail, 'Deprecated, use Box instead.')
