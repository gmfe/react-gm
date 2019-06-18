import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
// prams dom:被观察的dom container:容器dom
function isElementOverViewport(dom, rectTargetDom) {
  const rect = dom.getBoundingClientRect()
  return rect.bottom > rectTargetDom.top && rect.top < rectTargetDom.bottom
}

class LazyImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.refImg = React.createRef()
    this.targetDom = window.document.getElementById(props.targetId)
    if (!this.targetDom) console.error(`未找到ID为${props.targetId}的DOM元素`)
    this.rectTargetDom = this.targetDom.getBoundingClientRect()
    this.debounceDoLazy = _.debounce(this.doLazy, props.delay)
  }

  componentDidMount() {
    this.targetDom.addEventListener('scroll', this.debounceDoLazy)
    this.doLazy()
  }

  componentWillUnmount() {
    this.targetDom.removeEventListener('scroll', this.debounceDoLazy)
  }

  doLazy = () => {
    if (isElementOverViewport(this.refImg.current, this.rectTargetDom)) {
      this.setState({
        show: true
      })
      this.targetDom.removeEventListener('scroll', this.debounceDoLazy)
    }
  }

  render() {
    const { className, src, placeholder, delay, targetId, ...rest } = this.props

    return (
      <img
        {...rest}
        ref={this.refImg}
        className={classNames('lazy-img', className)}
        src={this.state.show && src ? src : placeholder}
      />
    )
  }
}

LazyImg.propTypes = {
  src: PropTypes.string,
  placeholder: PropTypes.string,
  targetId: PropTypes.string.isRequired, // 指定监听滚动的dom id
  delay: PropTypes.number,
  className: PropTypes.string
}

LazyImg.defaultProps = {
  delay: 100
}

export default LazyImg
