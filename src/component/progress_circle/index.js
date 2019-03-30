import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../flex'
import classnames from 'classnames'

const radius = 110 // 半径r
const diameter = Math.round(Math.PI * radius * 2) // 周长(路径长度)
const getOffset = (val = 0) => Math.round((100 - Math.min(val, 100)) / 100 * diameter)

class ProgressCircle extends React.Component {
  get text () {
    const { percentage, showText, text } = this.props
    if (!showText) return null

    return text || percentage + '%'
  }

  render () {
    const { text } = this
    const { status, textPosition, percentage, size, lineWidth, progressColor } = this.props
    const { centerColor, bgColor, animate, animationDuration, roundedStroke } = {
      bgColor: '#e4e8f1',
      centerColor: 'white',
      animate: false,
      animationDuration: '1s',
      roundedStroke: false
    }

    const strokeDashoffset = getOffset(percentage)
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined
    const strokeLinecap = roundedStroke ? 'round' : 'butt'

    return (
      <Flex alignCenter>
        { text && textPosition === 'left' && <span className='gm-progress-circle-innerText-left'>{text}</span> }
        <svg width={size} height={size} viewBox='0 0 300 300'>
          <circle stroke={bgColor} cx='150' cy='150' r={radius} strokeWidth={lineWidth} fill={centerColor}/>
          <circle
            className={classnames(
              {
                'gm-progress-circle-success': status === 'success',
                'gm-progress-circle-exception': status === 'exception'
              })}
            transform='rotate(-90 150 150)'
            cx='150'
            cy='150'
            r={radius}
            strokeDasharray={diameter}
            strokeWidth={lineWidth}
            strokeDashoffset={diameter}
            strokeLinecap={strokeLinecap}
            fill='none'
            style={{ strokeDashoffset, transition, stroke: progressColor }}/>
          { text && textPosition === 'center' && <text fill='currentColor' fontSize='45' x='150' y='150' textAnchor='middle' dominantBaseline='central'>{text}</text> }
        </svg>
        { text && textPosition === 'right' && <span className='gm-progress-circle-innerText-right'>{text}</span> }
      </Flex>
    )
  }
}

ProgressCircle.propTypes = {
  percentage: PropTypes.number.isRequired,
  text: PropTypes.string,
  showText: PropTypes.bool,
  textPosition: PropTypes.oneOf(['left', 'center', 'right']),
  status: PropTypes.oneOf(['success', 'exception']),
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  lineWidth: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  progressColor: PropTypes.string
}

ProgressCircle.defaultProps = {
  percentage: 0,
  status: 'success',
  showText: true,
  textPosition: 'center',
  size: '40',
  lineWidth: '60'
}

export default ProgressCircle
