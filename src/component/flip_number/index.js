import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import {getNumLength, formatNum, getRawArray, filterForNum} from './utils'

class FlipNumber extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 0,
      heightList: []
    }

    this.height = 0
    this.numberArray = [...Array(10).keys()]

    this.doInitData(props)
  }

  componentDidMount () {
    this.height = this['gm-flip-number-digit0'].clientHeight / (this.numberArray.length + 1)
    this.doInitView(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.to !== this.props.to) {
      window.cancelAnimationFrame(this.requestId)
      clearTimeout(this.timeoutID)
      this.doInitData(nextProps)
      this.doInitView(nextProps)
    }
  }

  doInitData = (props) => {
    const {from, to, decimal, useGroup} = props
    // 小数点 + useGroup
    this.fromStr = formatNum(from, decimal, useGroup)
    this.toStr = formatNum(to, decimal, useGroup)
    // 格式化滚动数字数组
    const totalLen = getNumLength(this.fromStr, this.toStr)
    this.toRawArr = getRawArray(this.toStr, totalLen) // to 的字符串数组
    this.toNumArr = filterForNum(this.toRawArr.rawList).map(Number) // to 的去掉',' '.'后的数字数组
    this.digitLen = this.toNumArr.length
    this.fromRawArr = getRawArray(this.fromStr, totalLen)
    this.fromNumArr = _.map([...Array(this.digitLen)], _ => 0)
  }

  doInitView = (props) => {
    const {delay, duration} = props
    const fromNum = parseInt(filterForNum(this.fromStr.split('')).join(''), 10)
    const heightList = []
    _.forEach(this.toNumArr, (dom, index) => {
      const height = this.onDraw({
        from: this.fromNumArr[index],
        percent: 1,
        alter: Math.floor((fromNum / Math.pow(10, index)))
      })
      heightList.unshift(height)
    })
    this.setState({
      heightList: heightList
    })

    delay ? this.timeoutID = setTimeout(() => this.flipTo(duration), delay) : this.flipTo(duration)
  }

  /**
   * @description 数字的绘制函数，通过上下移动每一条数字轴来实现
   * @argument from 开始滚动的数字
   * @argument percent 已经滚动的时间占总滚动时间 duration 的比例
   * @argument alter from 变成 to 每个数字轴需要改变的距离
   * @returns 返回数字轴应该移动的距离
   */
  onDraw = ({from, percent, alter}) => {
    const expectNum = (percent * alter + from) % 10 // 表示需要滚动多少个数字，小数居多，整数表示刚好显示完全一个数字
    return -expectNum * this.height
  }

  flipTo = (duration) => {
    const {easeFn, individually} = this.props
    this.fromNumArr = filterForNum(this.fromRawArr.rawList).map(Number)
    const draw = percent => {
      let temp = 0
      const heightList = []
      for (let d = this.toNumArr.length - 1; d >= 0; d--) {
        const alter = this.toNumArr[d] - this.fromNumArr[d]
        temp += alter
        const height = this.onDraw({
          from: this.fromNumArr[d],
          percent: easeFn(percent),
          alter: individually ? temp : alter
        })
        heightList.push(height)
        temp *= 10
      }
      this.setState({
        heightList
      })
    }
    const startTime = window.performance.now()
    const tick = now => {
      let timeConsuming = now - startTime
      draw(timeConsuming / duration)
      if (timeConsuming < duration) this.requestId = window.requestAnimationFrame(tick)
      else {
        draw(1)
      }
    }
    this.requestId = window.requestAnimationFrame(tick)
  }

  renderDigitAxis = () => {
    const {heightList} = this.state
    const digitAxis = _.map(this.toNumArr, (item, index) => (
      <div
        style={{transform: `translateY(${heightList[index]}px)`}}
        ref={(rel) => { this[`gm-flip-number-digit${index}`] = rel }}
        className='gm-inline-block gm-position-relative'
        key={`digitAxis${index}`}
      >
        {
          _.map(this.numberArray, (i, d) => (
            <div key={`digitChild${d}`}>{i}</div>
          ))
        }
        <div>{this.numberArray[0]}</div>
      </div>
    ))

    _.forEach(this.toRawArr.symbolList, (item, index) => {
      const symbolAxis = (
        <div className='gm-inline-block' key={`symbolAxis${index}`}>
          {
            _.map(this.numberArray, (i, d) => (
              <div key={`symbolChile${d}`}>{item.symbol}</div>
            ))
          }
          <div>{item.symbol}</div>
        </div>
      )
      digitAxis.splice(item.position, 0, symbolAxis)
    })

    return digitAxis
  }

  render () {
    const {className, to} = this.props
    return <div
      key={`${to}`}
      ref={(rel) => { this.wrap = rel }}
      style={{height: `${this.height}px`}}
      className={classnames('gm-position-relative gm-overflow-hidden', className)}
    >
      {this.renderDigitAxis()}
    </div>
  }
}

FlipNumber.defaultProps = {
  from: 0,
  duration: 1500,
  individually: true,
  decimal: 0,
  useGroup: false,
  /**
   * 缓动函数
   * @see https://github.com/danro/easing-js/blob/4f5e7edbde7f7200a1baf08e357377896c0d207e/easing.js#L39-L42
   */
  easeFn: pos => (pos /= 0.5) < 1
    ? 0.5 * Math.pow(pos, 3)
    : 0.5 * (Math.pow((pos - 2), 3) + 2)
}

FlipNumber.propTypes = {
  to: PropTypes.number.isRequired, // 最后要显示的数字
  from: PropTypes.number, // 滚动的起始数，默认为 0
  delay: PropTypes.number, // 延迟，默认为 0
  duration: PropTypes.number, // 滚动时长，默认为 1500 毫秒
  easeFn: PropTypes.func, // 缓动函数，控制滚动的加速度，默认起末慢，中间快
  individually: PropTypes.bool, // 是否逐个数字滚动, 默认 true
  decimal: PropTypes.number, // 小数点个数，默认无小数点
  useGroup: PropTypes.bool // 是否启用大数逗号分组
}

export default FlipNumber
