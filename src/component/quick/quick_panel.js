import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import Collapse from '../collapse'
import classNames from 'classnames'
import { getLocale } from '../../locales'

class QuickPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      in: props.in
    }
  }

  handleCollapse () {
    this.setState({
      in: !this.state.in
    })
  }

  render () {
    const {
      title,
      collapse,
      right,
      icon, iconColor,
      'in': isIn, // eslint-disable-line
      className,
      children,
      ...rest
    } = this.props

    return (
      <div {...rest} className={classNames('gm-quick gm-quick-panel', className)}>
        <Flex flex justifyBetween className='gm-quick-panel-title'>
          <Flex alignEnd className='gm-padding-bottom-15'>
            <span>
              {icon && <i
                className={`xfont xfont-${icon}`}
                style={{ color: iconColor, marginRight: '2px', verticalAlign: 'middle' }}
              />}
              <span style={{ verticalAlign: 'middle' }}>{title}</span>
            </span>
            {collapse ? (
              <a onClick={::this.handleCollapse} className='gm-margin-left-20 gm-font-12'>
                {this.state.in ? getLocale('quickDetail', 'closeDetails') : getLocale('quickDetail', 'showDetails')}&nbsp;
                <i className={classNames('xfont', {
                  'xfont-down': !this.state.in,
                  'xfont-up': this.state.in
                })}/>
              </a>
            ) : undefined}
          </Flex>
          <Flex flex/>
          <Flex column none>{right}</Flex>
        </Flex>
        <Collapse in={this.state.in}>
          <div>
            {children}
          </div>
        </Collapse>
      </div>
    )
  }
}

QuickPanel.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element.isRequired]),
  collapse: PropTypes.bool,
  right: PropTypes.element,
  in: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string
}

QuickPanel.defaultProps = {
  in: true,
  iconColor: '#fd5271'
}

export default QuickPanel
