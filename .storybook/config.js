import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { Observer } from 'mobx-react'
import { LayoutRoot } from '../src'
import './style.less'

// 引入 react-gm 样式
import 'gm-xfont/iconfont.css'
import '../src/index.less'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    panelPosition: 'right'
  }
})

addDecorator(withInfo({
  inline: true,
  header: false,
  styles: stylesheet => {
    console.log(stylesheet)
    return {
      ...stylesheet,
      infoBody: {
        ...stylesheet.infoBody,
        padding: '10px'
      },
      source: {
        ...stylesheet.source,
        marginBottom: '10px'
      }
    }
  }
}))

addDecorator(withKnobs)

addDecorator(storeFn => (
  <React.Fragment>
    <Observer>{() => storeFn()}</Observer>
    <LayoutRoot />
  </React.Fragment>
))

configure(loadStories, module)

