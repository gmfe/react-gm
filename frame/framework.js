import React from 'react'
import PropTypes from 'prop-types'
import { Flex, LayoutRoot, Emitter } from '../src/index'
import classNames from 'classnames'
import { setTitle } from 'gm-util'
import _ from 'lodash'
import RightSideModal from '../src/component/modal/right_side_modal'

class Framework extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      blur: false,
      overflowFlag: 0
    }

    this.handleTaskListShow = ::this.handleTaskListShow
  }

  getChildContext () {
    return {frameWorkLeftWidth: this.props.leftWidth}
  }

  componentDidMount () {
    // 关闭。 用处不大
    Emitter.on(Emitter.TYPE.MODAL_SHOW, this.addOverflowClass)
    Emitter.on(Emitter.TYPE.MODAL_HIDE, this.removeOverflowClass)

    Emitter.on(Emitter.TYPE.DRAWER_SHOW, this.addOverflowClass)
    Emitter.on(Emitter.TYPE.DRAWER_HIDE, this.removeOverflowClass)

    Emitter.on(Emitter.TYPE.TITLE_CHANGE, (title) => {
      setTitle(title)
    })

    window.addEventListener('scroll', _.throttle(this.doScroll, 200))
  }

  addOverflowClass = () => {
    const {overflowFlag} = this.state
    this.setState({overflowFlag: overflowFlag + 1}, () => {
      this.state.overflowFlag === 1 && window.document.body.classList.add('gm-overflow-hidden')
    })
    // this.setState({blur: true});
  }

  removeOverflowClass = () => {
    const {overflowFlag} = this.state
    this.setState({overflowFlag: overflowFlag - 1}, () => {
      this.state.overflowFlag === 0 && window.document.body.classList.remove('gm-overflow-hidden')
    })
    // this.setState({blur: false});
  }

  doScroll = () => {
    Emitter.emit(Emitter.TYPE.BROWSER_SCROLL)
  }

  handleTaskListShow () {
    RightSideModal.render({
      children: this.props.task.component,
      onHide: RightSideModal.hide,
      opacityMask: true,
      style: {
        width: '300px'
      }
    })
  }

  render () {
    let {showMobileMenu, menu, rightTop, leftWidth, children, task} = this.props

    return (
      <div className={classNames('gm-framework', {
        'gm-framework-mobile-menu': showMobileMenu
      })}>
        <div className={classNames('gm-framework-inner', {
          'gm-filter-blur-transition': this.state.blur
        })}>
          <div className="gm-framework-full-height">
            <Flex className="gm-framework-container">
              {menu && <div className="gm-framework-left">{menu}</div>}
              <Flex flex column className="gm-framework-right" style={{width: `calc(100% - ${leftWidth})`}}>
                {rightTop && <div className="gm-framework-right-top">{rightTop}</div>}
                <div className="gm-framework-content">{children}</div>
              </Flex>
            </Flex>
          </div>
        </div>
        {task && <div className="gm-framework-task gm-border gm-padding-5" onClick={this.handleTaskListShow}>{task.name}</div>}
        <LayoutRoot/>
      </div>
    )
  }
}

Framework.scrollTop = function () {
  window.scroll(0, 0)
}

Framework.propTypes = {
  showMobileMenu: PropTypes.bool,
  menu: PropTypes.element,
  rightTop: PropTypes.element,
  leftWidth: PropTypes.string,
  task: PropTypes.object,
}

Framework.childContextTypes = {
  frameWorkLeftWidth: PropTypes.string
}

export default Framework
