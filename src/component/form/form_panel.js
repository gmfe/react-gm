import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import SVGUp from '../../../svg/up.svg'
import SVGDown from '../../../svg/down.svg'

const FormPanel = ({ title, right, ...rest }) => {
  return <div {...rest} className='gm-form-panel'>
    <Flex flex justifyBetween alignCenter >
      <Flex alignCenter>
        <div className='gm=form-panel-header-'/>
      </Flex>
      <Flex flex />
      <Flex column none>
        {right}
      </Flex>
    </Flex>
  </div>
}

export default FormPanel
