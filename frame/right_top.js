import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../src/index'
import _ from 'lodash'
import Context from './context'
import { is } from 'gm-util'

const RightTop = props => {
  const { breadcrumb, onMenuBtnClick, info } = props
  const { leftWidth } = React.useContext(Context)

  return (
    <div className='gm-framework-right-top-default'>
      <Flex
        style={{ left: leftWidth }}
        className='gm-framework-right-top-default-inner'
        // 随便兼容一下 后期老ui会废弃
        alignCenter={!is.phone()}
      >
        <Flex
          alignCenter
          className='gm-framework-right-top-default-mobile-nav'
          onClick={() => onMenuBtnClick()}
        >
          <i className='glyphicon glyphicon-menu-hamburger gm-padding-lr-10 gm-cursor' />
        </Flex>
        <Flex flex className='gm-framework-breadcrumb'>
          {breadcrumb}
        </Flex>
        <div className='gm-framework-info'>{info}</div>
      </Flex>
    </div>
  )
}

RightTop.propTypes = {
  breadcrumb: PropTypes.element,
  info: PropTypes.element,
  onMenuBtnClick: PropTypes.func
}

RightTop.defaultProps = {
  onMenuBtnClick: _.noop
}

export default RightTop
