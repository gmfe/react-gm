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
// 引入 react-table 样式
import 'react-table/react-table.css'
import '../table/table/style.less'

const req = require.context('../src', true, /\.stories\.js$/)
const reqTable = require.context('../table', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
  reqTable.keys().forEach(filename => reqTable(filename))

  require('../keyboard/keyboard.stories')
  require('../frame/framework.stories')
}

addParameters({
  options: {
    panelPosition: 'right'
  }
})

addDecorator(
  withInfo({
    inline: true,
    header: false,
    styles: stylesheet => {
      return {
        ...stylesheet,
        infoBody: {
          ...stylesheet.infoBody,
          padding: '10px',
          fontWeight: 'normal'
        },
        source: {
          ...stylesheet.source,
          marginBottom: '10px'
        }
      }
    }
  })
)

addDecorator(withKnobs)

addDecorator(storeFn => (
  <React.Fragment>
    <Observer>{() => storeFn()}</Observer>
    <LayoutRoot />
  </React.Fragment>
))

configure(loadStories, module)
