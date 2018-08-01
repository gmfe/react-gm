import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const OperationHeader = (
  <div className='text-center'>
    <i
      className='xfont xfont-fun'
      style={{color: 'rgb(19, 193, 159)'}}
    />
  </div>
)

const OperationCell = function (props) {
  return <div {...props} className={classNames('text-center', props.className)}/>
}

class SortHeader extends React.Component {
  render () {
    const {
      className,
      type,
      ...rest
    } = this.props

    return <span {...rest} className={classNames('gm-react-table-sort-header gm-cursor', {
      'gm-react-table-sort-header-asc': type === 'asc',
      'gm-react-table-sort-header-desc': type === 'desc'
    }, className)}/>
  }
}

SortHeader.propTypes = {
  type: PropTypes.oneOf(['asc', 'desc'])
}

export {
  OperationHeader,
  OperationCell,
  SortHeader
}
