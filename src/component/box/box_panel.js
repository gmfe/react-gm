import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Collapse from '../../component/collapse'
import Flex from '../flex'
import SVGUp from '../../../svg/up.svg'
import SVGDown from '../../../svg/down.svg'

const BoxPanel = ({
  title,
  collapse,
  right,
  summary,
  className,
  children,
  ...rest
}) => {
  const hasCollapse = collapse !== undefined

  const [isCollapse, setIsCollapse] = useState(hasCollapse ? collapse : true)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <div {...rest} className={classNames('gm-box gm-box-panel', className)}>
      <Flex flex justifyBetween alignCenter className='gm-box-panel-header'>
        <Flex alignCenter>
          {hasCollapse && (
            <a
              onClick={handleCollapse}
              className='gm-text-desc gm-cursor gm-decoration-none'
            >
              {isCollapse ? <SVGUp /> : <SVGDown />}
            </a>
          )}
          <div className='gm-box-panel-title'>{title}</div>
          {summary && (
            <div className='gm-box-panel-summary'>
              {_.map(summary, (s, i) => {
                if (i < summary.length - 1)
                  return s.text + ': ' + s.value + ', '
                else return s.text + ': ' + s.value
              })}
            </div>
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
  /** 汇总信息，数据格式为[{text, value}] */
  summary: PropTypes.array,
  right: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BoxPanel
