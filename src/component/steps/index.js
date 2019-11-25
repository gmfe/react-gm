import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import classNames from 'classnames'
import _ from 'lodash'

const Step = props => {
  const { title, description, index } = props

  return (
    <Flex row className='gm-steps-step gm-margin-top-5'>
      <Flex column alignCenter className='gm-margin-right-10'>
        <div className='gm-steps-step-icon'>{index}</div>
        <div className='gm-steps-step-tag gm-margin-top-5' />
      </Flex>
      <div>
        {title && <div className='gm-steps-step-title'>{title}</div>}
        {description && (
          <div className='gm-steps-step-description'>{description}</div>
        )}
      </div>
    </Flex>
  )
}

Step.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number.isRequired
}

const Steps = props => {
  const { data, className, ...rest } = props

  const renderStep = () => {
    return _.map(data, (item, index) => {
      return (
        <Step
          index={index + 1}
          title={item.title}
          description={item.description}
          key={`step ${index}`}
        />
      )
    })
  }

  return (
    <div {...rest} className={classNames('gm-steps', className)}>
      {renderStep()}
    </div>
  )
}

Steps.propTypes = {
  /** @type {[ {title: string, description: string} ] } */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string
}

export default Steps
