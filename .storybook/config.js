// init lng
const lng = Storage.get('lng') || 'zh'
console.log('lng', lng)
setLocale(lng)

import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { Observer } from 'mobx-react'
import { LayoutRoot, setLocale, Storage } from '../src'
import './style.less'

// 引入 react-gm 样式
import '../src/index.less'
// 引入 frame 样式
import '../frame/style.less'
// 引入 react-table 样式
import 'react-table/react-table.css'
import '../table/style.less'

const reqs = [
  require.context('../src', true, /stories\.js$/),
  require.context('../table', true, /stories\.js$/),
  require.context('../keyboard', true, /stories\.js$/),
  require.context('../sortable', true, /stories\.js$/),
  require.context('../frame', true, /stories\.js$/),
  require.context('../locales', true, /stories\.js$/)
]

function loadStories() {
  reqs.forEach(req => {
    req.keys().forEach(filename => req(filename))
  })
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
