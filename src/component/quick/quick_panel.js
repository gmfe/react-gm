import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import Collapse from '../collapse'
import classNames from 'classnames'
import { getLocale } from '../../locales'

const QuickPanel = props => {
  const [isCollapse, setIsCollapse] = useState(props.in)

  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  const {
    title,
    collapse,
    right,
    icon,
    iconColor,
    'in': isIn, // eslint-disable-line
    className,
    children,
    ...rest
  } = props

  return (
    <div {...rest} className={classNames('gm-quick gm-quick-panel', className)}>
      <Flex flex justifyBetween className='gm-quick-panel-title gm-text-16'>
        <Flex alignEnd className='gm-padding-bottom-15'>
          <div>
            {icon && (
              <i
                className={`xfont xfont-${icon}`}
                style={{
                  color: iconColor,
                  marginRight: '2px',
                  verticalAlign: 'middle'
                }}
              />
            )}
            <span style={{ verticalAlign: 'middle' }}>{title}</span>
          </div>
          {collapse && (
            <a
              onClick={handleCollapse}
              className='gm-margin-left-20 gm-text-12 gm-cursor gm-decoration-none'
            >
              {isCollapse
                ? getLocale('quickDetail', 'closeDetails')
                : getLocale('quickDetail', 'showDetails')}
              &nbsp;
              <i
                className={classNames('xfont', {
                  'xfont-down': !isCollapse,
                  'xfont-up': isCollapse
                })}
              />
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
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  className: PropTypes.string
}

QuickPanel.defaultProps = {
  in: true,
  iconColor: '#fd5271'
}

export default QuickPanel
