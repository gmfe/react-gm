import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Popover } from '../src/index'
import _ from 'lodash'
import SVGMore from '../svg/more.svg'

const Info = props => {
  const { more, children } = props

  return (
    <div className='gm-framework-info-default'>
      <Flex className='gm-framework-info-default-inner'>
        <Flex flex />
        <Flex>{children}</Flex>
        {more && (
          <Popover
            animName
            showArrow
            type='click'
            right
            offset={-5}
            className='gm-framework-info-default-setting-popover'
            popup={
              <div className='list-group gm-margin-bottom-0'>
                {_.map(more, (v, i) => (
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
              <SVGMore />
            </div>
          </Popover>
        )}
      </Flex>
    </div>
  )
}

Info.propTypes = {
  more: PropTypes.array // [{text, onClick}]
}

export default Info
