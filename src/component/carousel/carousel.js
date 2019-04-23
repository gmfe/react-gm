import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../flex'

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: props.defaultIndex,
      transitionTime: props.speed,
      size: props.imgData.length
    }

    this.timer = null
  }

  componentDidMount () {
    const { imgData, delay, isAutoPlay } = this.props

    if (imgData.length > 1 && isAutoPlay) {
      this.timer = setTimeout(this.handleSlider, delay)
    }
  }

  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleSlider = () => {
    const { speed, switchType, delay } = this.props
    const { size, currentIndex } = this.state
    clearTimeout(this.timer)

    if (currentIndex >= (size - 1) && switchType === 'fade') {
      // 取消动画，趁别人不注意切换到第一个
      this.setState({
        currentIndex: 0,
        transitionTime: speed
      })
    } else if (currentIndex >= size && switchType === 'move') { // 滑动操作
      this.setState({
        transitionTime: 0,
        currentIndex: 0
      }, () => {
        setTimeout(() => {
          this.setState({ transitionTime: speed, currentIndex: 1 })
        }, 20)
      })// 原理为当前是用第一张作为最后一张图时，通过直接切换到第一张，实现下次加一为0+1
    } else {
      this.setState({
        transitionTime: speed,
        currentIndex: currentIndex + 1
      })
    }

    this.timer = setTimeout(this.handleSlider, delay)
  }

  handleSelect (index) {
    const { speed } = this.props
    this.props.isAutoPlay && clearTimeout(this.timer)

    this.setState({
      currentIndex: index,
      transitionTime: speed
    })

    if (this.props.isAutoPlay && !this.props.isStopCarousel) {
      this.timer = setTimeout(this.handleSlider, this.props.delay)
    }
  }

  handleCancelSelect = () => {
    if (this.props.isAutoPlay) {
      this.timer = setTimeout(this.handleSlider, this.props.delay)
    }
  }

  handleControl (type) {
    const { delay, speed } = this.props
    const { size } = this.state
    let changeIndex = size
    let targetIndex = this.state.currentIndex

    clearTimeout(this.timer)

    if (this.state.currentIndex <= 0 || this.state.currentIndex >= size) {
      type === 'left' ? changeIndex = size : changeIndex = 0
      this.setState({
        transitionTime: 0,
        currentIndex: changeIndex
      }, () => {
        setTimeout(() => {
          type === 'left' ? --changeIndex : ++changeIndex
          this.setState({
            transitionTime: speed,
            currentIndex: changeIndex
          })
        }, 0)
      })
    } else {
      type === 'left' ? --targetIndex : ++targetIndex
      this.setState({
        currentIndex: targetIndex,
        transitionTime: speed
      })
    }

    if (this.props.isAutoPlay) {
      this.timer = setTimeout(this.handleSlider, delay)
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.props.onSelect(this.state.currentIndex >= this.state.size ? 0 : this.state.currentIndex)
  }

  render () {
    const { currentIndex, transitionTime, size } = this.state
    const {
      width,
      height,
      imgData,
      colorData,
      hasSideSwitch,
      hasFooterSwitch,
      switchType,
      className,
      hasBGColor,
      onSelect, isAutoPlay, defaultIndex, isStopCarousel, // eslint-disable-line
      ...rest
    } = this.props

    const currentColorIndex = currentIndex < imgData.length ? currentIndex : 0

    const fadeTransitionStyle = switchType === 'fade' ? {
      transition: `all ${transitionTime}ms ease-in-out`,
      height: '100%'
    } : {}
    const bgColorStyle = (colorData && colorData.length > 0) ? {
      backgroundColor: `${colorData[ currentColorIndex ]}`,
      transition: `all ${transitionTime}ms ease-in-out`
    } : {
      transition: `all ${transitionTime}ms ease-in-out`
    }
    const allItemsStyle = {
      transition: `transform ${transitionTime}ms ease-in-out`,
      height: '100%',
      whiteSpace: 'nowrap',
      transform: (switchType === 'move')
        ? (`translateX(${-parseInt(width) * currentIndex}px)`)
        : 'opx'
    }
    const contentStyle = {
      position: 'relative',
      width: width,
      minWidth: width,
      height: height,
      overflow: 'hidden',
      maxHeight: '100%'
    }

    let carouselData = imgData.slice()
    if (switchType === 'move') {
      carouselData.push(imgData[0])
    }

    return (
      <Flex
        justifyCenter
        style={bgColorStyle}
        className={classNames(
          { 'gm-carousel-move': switchType === 'move' },
          { 'gm-carousel-fade': switchType === 'fade' },
          className
        )}
        {...rest}
      >
        <div style={contentStyle}>
          <div
            style={allItemsStyle}
            onClick={this.handleClick}
            className={classNames({ 'gm-carousel-move-all': switchType === 'move' })}
          >
            {
              _.map(carouselData, (v, index) => {
                return (
                  <div
                    style={fadeTransitionStyle}
                    key={index}
                    className={classNames(
                      { 'gm-carousel-active': (currentIndex >= size ? 0 : parseInt(currentIndex)) === index },
                      'gm-carousel-item'
                    )}
                  >
                    <a>
                      <img className='gm-carousel-item-img' src={v}/>
                    </a>
                  </div>
                )
              })
            }
          </div>
          {hasSideSwitch ? (
            <div className='gm-carousel-control-slide'>
              <i onClick={this.handleControl.bind(this, 'left')} className='xfont xfont-left-small gm-carousel-control-slide-left'/>
              <i onClick={this.handleControl.bind(this, 'right')} className='xfont xfont-right-small gm-carousel-control-slide-right'/>
            </div>
          ) : ''}
          {hasFooterSwitch && (
            <ul className='gm-carousel-control-footer'>
              {
                _.map(_.range(size), v => {
                  return <li
                    className={classNames(
                      { 'gm-carousel-control-footer-hover': (currentIndex >= size ? 0 : parseInt(currentIndex)) === v },
                      'gm-carousel-control-footer-li'
                    )}
                    key={v}
                    onMouseOver={this.handleSelect.bind(this, v)}
                    onMouseLeave={this.handleCancelSelect}
                  />
                })
              }
            </ul>
          )}
        </div>
      </Flex>
    )
  }
}

Carousel.propTypes = {
  imgData: PropTypes.array.isRequired,
  colorData: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  switchType: PropTypes.oneOf(['move', 'fade']),
  delay: PropTypes.number,
  speed: PropTypes.number,
  onSelect: PropTypes.func,
  isAutoPlay: PropTypes.bool,
  defaultIndex: PropTypes.number,
  isStopCarousel: PropTypes.bool,
  hasSideSwitch: PropTypes.bool,
  hasFooterSwitch: PropTypes.bool
}
Carousel.defaultProps = {
  width: '500px', // 轮播区域宽度
  height: '300px', // 轮播区域高度
  switchType: 'fade', // 轮播类型
  delay: 7000, // 轮播时延
  speed: 2000, // 切换时间（ms）
  onSelect: _.noop, // 点击事件
  isAutoPlay: true, // 是否自动轮播
  defaultIndex: 0, // 设置初始索引
  isStopCarousel: true, // 鼠标悬空和点击取消轮播，鼠标离开则开始轮播
  hasSideSwitch: false, // 是否显示左右控制
  hasFooterSwitch: true // 是否显示下标控制
}
export default Carousel
