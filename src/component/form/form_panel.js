import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import IconDownUp from '../icon_down_up'

const FormPanelContext = React.createContext({
  open: false
})

const More = props => {
  return (
    <FormPanelContext.Consumer>
      {({ open, onToggle }) => {
        return (
          <>
            <div className='gm-form-panel-collapse'>
              <button
                className='btn btn-link gm-padding-right-0'
                onClick={onToggle}
              >
                {open ? '收起' : '展开'}更多设置 <IconDownUp active={open} />
              </button>
            </div>
            {open ? props.children : null}
          </>
        )
      }}
    </FormPanelContext.Consumer>
  )
}

const FormPanel = ({ title, right, children, ...rest }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = e => {
    e.preventDefault()
    setOpen(!open)
  }

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
      <div className='gm-form-panel-content'>
        <FormPanelContext.Provider
          value={{
            open,
            onToggle: handleToggle
          }}
        >
          {children}
        </FormPanelContext.Provider>
      </div>
    </div>
  )
}

FormPanel.More = More

FormPanel.propTypes = {
  title: PropTypes.string,
  right: PropTypes.element
}

export default FormPanel
