import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Flex extends React.Component {
  render() {
    const {
      flex,

      auto,
      none,
      width,
      height,

      row,
      column,

      wrap,
      nowrap,

      justifyStart,
      justifyEnd,
      justifyCenter,
      justifyBetween,
      justifyAround,

      alignStart,
      alignEnd,
      alignCenter,
      alignBaseline,
      alignStretch,

      alignContentStart,
      alignContentEnd,
      alignContentCenter,
      alignContentBetween,
      alignContentAround,
      alignContentStretch,

      block,

      className,
      style,

      ...rest
    } = this.props
    const cn = classNames(
      {
        'gm-flex': true,

        'gm-flex-flex': flex,
        'gm-flex-auto': auto,
        'gm-flex-none': none || width || height,

        'gm-flex-row': row,
        'gm-flex-column': column,

        'gm-flex-wrap': wrap,
        'gm-flex-nowrap': nowrap,

        'gm-flex-justify-start': justifyStart,
        'gm-flex-justify-end': justifyEnd,
        'gm-flex-justify-center': justifyCenter,
        'gm-flex-justify-between': justifyBetween,
        'gm-flex-justify-around': justifyAround,

        'gm-flex-align-start': alignStart,
        'gm-flex-align-end': alignEnd,
        'gm-flex-align-center': alignCenter,
        'gm-flex-align-baseline': alignBaseline,
        'gm-flex-align-stretch': alignStretch,

        'gm-flex-align-content-start': alignContentStart,
        'gm-flex-align-content-end': alignContentEnd,
        'gm-flex-align-content-center': alignContentCenter,
        'gm-flex-align-content-between': alignContentBetween,
        'gm-flex-align-content-around': alignContentAround,
        'gm-flex-align-content-stretch': alignContentStretch,

        'gm-block': block
      },
      className
    )

    const s = Object.assign({}, style)
    if (flex) {
      s.flex = typeof flex === 'boolean' ? 1 : flex
      s.WebKitFlex = typeof flex === 'boolean' ? 1 : flex
    }
    if (height) {
      s.height = height
    }
    if (width) {
      s.width = width
    }

    return (
      <div {...rest} className={cn} style={s}>
        {this.props.children}
      </div>
    )
  }
}

Flex.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  auto: PropTypes.bool,
  none: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  row: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.bool,
  nowrap: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyBetween: PropTypes.bool,
  justifyAround: PropTypes.bool,
  alignStart: PropTypes.bool,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  alignStretch: PropTypes.bool,
  alignContentStart: PropTypes.bool,
  alignContentEnd: PropTypes.bool,
  alignContentCenter: PropTypes.bool,
  alignContentBetween: PropTypes.bool,
  alignContentAround: PropTypes.bool,
  alignContentStretch: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Flex
