import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import IconDownUp from '../icon_down_up'

const More = props => {
  const [open, setOpen] = useState(false)

  const handleToggle = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <>
      <div
        style={{
          marginTop: '-10px',
          paddingBottom: open ? '10px' : '20px'
        }}
      >
        <button
          type='button'
          className='btn-link gm-padding-right-0'
          onClick={handleToggle}
        >
          {open ? '收起' : '展开'}更多设置 <IconDownUp active={open} />
        </button>
      </div>
      {open ? props.children : null}
    </>
  )
}

const FormPanel = ({ title, right, children, ...rest }) => {
  return (
    <div {...rest} className='gm-form-panel'>
      <Flex flex className='gm-form-panel-header'>
        <div className='gm-form-panel-header-tag' />
        <Flex
          flex
          alignCenter
          justifyBetween
          className='gm-form-panel-header-content'
        >
          <div className='gm-form-panel-header-content-title'>{title}</div>
          <Flex flex />
          <Flex column none>
            {right}
          </Flex>
        </Flex>
      </Flex>
      <div className='gm-form-panel-content'>{children}</div>
    </div>
  )
}

FormPanel.More = More

FormPanel.propTypes = {
  title: PropTypes.string,
  right: PropTypes.element
}

export default FormPanel
