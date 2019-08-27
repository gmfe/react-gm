import { getLocale } from '../../locales'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../../component/flex'
import Collapse from '../../component/collapse'
import classNames from 'classnames'
import SVGUp from '../../../svg/up.svg'
import SVGDown from '../../../svg/down.svg'
import { withDeprecated } from '../../util'

const QuickPanel = props => {
  const [isCollapse, setIsCollapse] = useState(props.in)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  const {
    title,
    collapse,
    right,
    in: isIn, // eslint-disable-line
    className,
    children,
    ...rest
  } = props

  return (
    <div {...rest} className={classNames('gm-quick gm-quick-panel', className)}>
      <Flex flex justifyBetween className='gm-quick-panel-title gm-text-16'>
        <Flex alignEnd className='gm-padding-bottom-15'>
          <div>
            <span style={{ verticalAlign: 'middle' }}>{title}</span>
          </div>
          {collapse && (
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

QuickPanel.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  collapse: PropTypes.bool,
  right: PropTypes.element,
  in: PropTypes.bool,
  className: PropTypes.string
}

QuickPanel.defaultProps = {
  in: true
}

export default withDeprecated(QuickPanel, 'Quick deprecated, use Box instead.')
