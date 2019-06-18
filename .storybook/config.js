import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src/component', true, /\.stories\.js$/)

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
  header: false
}))

addDecorator(withKnobs)

configure(loadStories, module)

