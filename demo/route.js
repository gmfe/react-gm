import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch as RRSwitch
} from 'react-router-dom'
import { importComponent, processReactRouterProps } from 'gm-util'
import { Emitter } from '../src/index'
import _ from 'lodash'
import { hot } from 'react-hot-loader'

import App from './app'

class Page extends React.Component {
  render () {
    const {path1, path2} = this.props.match.params
    let load = _.noop

    if (path1 === 'doc') {
      load = () => import(`./doc/${path2}.md`)
    }

    if (!load) {
      return null
    }

    const Com = importComponent(load, {
      onLoad: () => {
        setTimeout(() => Emitter.emit('DEMO-PAGE-LOADED'), 500)
      }
    })

    return <Com {...this.props}/>
  }
}

const RouteConfig = () => (
  <Router>
    <Route path='/' component={(props) => (
      <App {...processReactRouterProps(props)}>
        <RRSwitch>
          <Route exact path='/' render={() => <Redirect from='/' to='/doc/About'/>}/>
          <Route exact path='/demo' component={importComponent(() => import('./demo'))}/>
          <Route exact path='/demo/service_time' component={importComponent(() => import('./demo/service_time'))}/>

          <Route exact path='/doc' render={() => <Redirect from='/' to='/doc/About'/>}/>
          <Route exact path='/:path1/:path2' component={Page}/>

          <Route exact render={() => <div>无法匹配</div>}/>
        </RRSwitch>
      </App>
    )}/>
  </Router>
)

export default hot(module)(RouteConfig)
