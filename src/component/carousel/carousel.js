import React from 'react'
import classNames from 'classnames'
import Flex from '../flex'
import PropTypes from 'prop-types'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: props.defaultIndex
    }

    this.timer = null
  }

  componentDidMount() {
    if (React.Children.count(this.props.children) > 0) {
      this.startCarousel()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  setCurrentIndex = () => {
    let index = this.state.currentIndex

    if (index === React.Children.count(this.props.children) - 1) {
      index = 0
    } else {
      index++
    }

    this.setState({
      currentIndex: index
    })
  }

  startCarousel = () => {
    const { delay } = this.props

    this.timer = setInterval(this.setCurrentIndex, delay)
  }

  handleStopCarousel = () => {
    clearInterval(this.timer)
  }

  handleSelect = index => {
    this.handleStopCarousel()

    this.setState({
      currentIndex: index
    })
  }

  handleCancelSelect = () => {
    this.startCarousel()
  }

  renderChildren = () => {
    const { children, transitionTime } = this.props
    const { currentIndex } = this.state
    const fadeTransitionStyle = {
      transition: `all ${transitionTime}ms ease-in-out`
    }

    return React.Children.map(children, (thisArg, index) => {
      return React.cloneElement(thisArg, {
        style: Object.assign({}, thisArg.props.style, fadeTransitionStyle),
        className: classNames(
          'gm-carousel-fade-item',
          { 'gm-carousel-fade-item-active': currentIndex === index },
          thisArg.props.className
        ),
        key: index
      })
    })
  }

  renderFooterController = () => {
    const { children } = this.props
    const { currentIndex } = this.state

    return (
      <ul className='gm-carousel-fade-footer'>
        {React.Children.map(children, (value, index) => {
          return (
            <li
              className={classNames(
                { 'gm-carousel-fade-footer-li-hover': currentIndex === index },
                'gm-carousel-fade-footer-li'
              )}
              key={index}
              onMouseOver={this.handleSelect.bind(this, index)}
              onMouseLeave={this.handleCancelSelect}
            />
          )
        })}
      </ul>
    )
  }

  render() {
    const { className, transitionTime, defaultIndex, ...rest } = this.props

    return (
      <Flex
        justifyCenter
        className={classNames('gm-carousel-fade', className)}
        onMouseOver={this.handleStopCarousel}
        onMouseLeave={this.handleCancelSelect}
        {...rest}
      >
        {this.renderChildren()}
        {this.renderFooterController()}
      </Flex>
    )
  }
}

Carousel.propTypes = {
  defaultIndex: PropTypes.number,
  delay: PropTypes.number,
  transitionTime: PropTypes.number,
  children: PropTypes.array,
  className: PropTypes.string
}

Carousel.defaultProps = {
  defaultIndex: 0, // 设置初始索引
  delay: 3000, // 轮播时延
  transitionTime: 1000 // 切换时间（ms）
}

export default Carousel
