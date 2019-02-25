import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import Collapse from '../collapse'
import classNames from 'classnames'
import { getLocale } from '../../locales'

class QuickFilter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expand: props.expand
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.expand) {
      this.setState({
        expand: nextProps.expand
      })
    }
  }

  handleCollapse = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render () {
    const { collapseRender, children } = this.props

    const { expand } = this.state

    return (
      <div
        className={classNames('gm-quick gm-quick-filter gm-padding-20', this.props.className, {
          'gm-padding-bottom-0': collapseRender
        })}>
        {collapseRender ? <div>
          {!expand && children}

          <Collapse in={expand}>
            {expand && collapseRender()}
          </Collapse>

          <Flex justifyCenter className='gm-padding-10'>
            <a href='javascript:;' className='gm-quick-filter-toggle' onClick={this.handleCollapse}>
              {expand ? getLocale('quickDetail', 'closeDetails') : getLocale('quickDetail', 'showDetails')}&nbsp;
              <i className={classNames('xfont', {
                'xfont-down': !expand,
                'xfont-up': expand
              })}/>
            </a>
          </Flex>
        </div> : children}
      </div>
    )
  }
}

QuickFilter.propTypes = {
  collapseRender: PropTypes.func,
  expand: PropTypes.bool
}

QuickFilter.defaultProps = {
  expand: false
}

export default QuickFilter
