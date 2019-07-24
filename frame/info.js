import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Popover } from '../src/index'
import _ from 'lodash'
import { is } from 'gm-util'
import SVGMore from '../svg/more.svg'

const Info = props => {
  const { text, notification, settings } = props

  return (
    <div className='gm-framework-info-default'>
      <Flex className='gm-framework-info-default-inner'>
        <Flex flex />
        <Flex>{text}</Flex>
        {notification && <Flex>{notification}</Flex>}
        {settings && (
          <Popover
            animName
            showArrow
            type={is.phone() ? 'click' : 'hover'}
            right
            offset={-5}
            className='gm-framework-info-default-setting-popover'
            popup={
              <div className='list-group gm-margin-bottom-0'>
                {_.map(settings, (v, i) => (
                  <a
                    key={i + '_' + v.text}
                    href='javascript:;'
                    className='list-group-item text-center gm-padding-10 gm-margin-0 gm-border-top-0'
                    onClick={v.onClick}
                  >
                    {v.text}
                  </a>
                ))}
              </div>
            }
          >
            <div className='gm-framework-info-default-settings gm-cursor'>
              <SVGMore className='gm-padding-lr-15' />
            </div>
          </Popover>
        )}
      </Flex>
    </div>
  )
}

Info.propTypes = {
  text: PropTypes.string,
  notification: PropTypes.element,
  settings: PropTypes.array // [{text, onClick}]
}

Info.defaultProps = {
  notification: null
}

export default Info
