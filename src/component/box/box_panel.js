import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Collapse from '../../component/collapse'
import Flex from '../flex'
import { getLocale } from '../../../locales'
import SVGUp from '../../../svg/up.svg'
import SVGDown from '../../../svg/down.svg'

const BoxPanel = ({ title, collapse, right, className, children, ...rest }) => {
  const hasCollapse = collapse !== undefined

  const [isCollapse, setIsCollapse] = useState(hasCollapse ? collapse : true)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <div {...rest} className={classNames('gm-box gm-box-panel', className)}>
      <Flex flex justifyBetween alignCenter className='gm-box-panel-header'>
        <Flex alignCenter>
          <div className='gm-box-panel-title gm-text-16'>{title}</div>
          {hasCollapse && (
            <a
              onClick={handleCollapse}
              className='gm-margin-left-20 gm-text-12 gm-cursor gm-decoration-none'
            >
              {isCollapse
                ? getLocale('收拢详细信息')
                : getLocale('展开详细信息')}
              &nbsp;
              {isCollapse ? <SVGUp /> : <SVGDown />}
            </a>
          )}
        </Flex>
        <Flex flex />
        <Flex column none>
          {right}
        </Flex>
      </Flex>
      <Collapse in={isCollapse}>
        <div>{children}</div>
      </Collapse>
    </div>
  )
}

BoxPanel.propTypes = {
  title: PropTypes.string.isRequired,
  /** undefined 就是没有此功能， false 默认收起 true 默认展开 */
  collapse: PropTypes.bool,
  right: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BoxPanel
