import React from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'
import Flex from '../flex'
import _ from 'lodash'

const colorList = [
  '#ff6900',
  '#fcb900',
  '#7bdcb5',
  '#00d084',
  '#8ed1fc',
  '#0693e3',
  '#abb8c3',
  '#eb144c',
  '#f78da7',
  '#9900ef'
]

class Color extends React.Component {
  render () {
    const { color = '', onChange } = this.props

    return (
      <Flex wrap className='gm-color-picker'>
        {_.map(colorList, v => (
          <div
            key={v}
            style={{
              background: v
            }}
            onClick={() => onChange(v)}
          />
        ))}
        <div className='gm-color-picker-addon'>#</div>
        <input type='text' value={color.replace('#', '')} onChange={e => onChange('#' + e.target.value)}/>
        <div className='gm-color-picker-value' style={{ background: color }}/>
      </Flex>
    )
  }
}

Color.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

class ColorPicker extends React.Component {
  render () {
    const { color, onChange, children } = this.props

    return (
      <Popover
        animName
        type='hover'
        showArrow
        popup={<Color color={color} onChange={onChange}/>}
      >
        {children}
      </Popover>
    )
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any.isRequired
}

ColorPicker.deaultProps = {
  onChange: _.noop
}

export default ColorPicker
