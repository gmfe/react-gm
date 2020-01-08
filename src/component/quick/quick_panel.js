import { getLocale } from '../../locales'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import Collapse from '../collapse'
import classNames from 'classnames'
import IconDownUp from '../icon_down_up'
import SVGBill from '../../../svg/bill.svg'
import SVGWhole from '../../../svg/whole.svg'
import SVGNetwork from '../../../svg/network.svg'
import SVGSquare from '../../../svg/square.svg'
import SVGTodo from '../../../svg/todo.svg'
import SVGAccount from '../../../svg/account.svg'
import SVGSettlement from '../../../svg/settlement.svg'
import SVGShop from '../../../svg/shop.svg'
import SVGPie from '../../../svg/pie.svg'

const iconMap = {
  bill: SVGBill,
  whole: SVGWhole,
  network: SVGNetwork,
  square: SVGSquare,
  todo: SVGTodo,
  account: SVGAccount,
  settlement: SVGSettlement,
  restaurant: SVGShop,
  pie: SVGPie
}

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
    in: isIn, // eslint-disable-line
    className,
    children,
    ...rest
  } = props

  const Icon = iconMap[icon]

  return (
    <div {...rest} className={classNames('gm-quick gm-quick-panel', className)}>
      <Flex flex justifyBetween className='gm-quick-panel-title gm-text-16'>
        <Flex alignEnd className='gm-padding-bottom-15'>
          <div>
            {icon && (
              <Icon
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
                ? getLocale('收拢详细信息')
                : getLocale('展开详细信息')}
              &nbsp;
              <IconDownUp active={isCollapse} />
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
