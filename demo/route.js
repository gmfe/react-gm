import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch as RRSwitch
} from 'react-router-dom'
import { processReactRouterProps } from 'gm-util'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'

import App from './app'

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div className='text-center'>加载中...</div>
  } else if (error) {
    return <div className='text-center'>发生了错误！</div>
  } else {
    return null
  }
}

class Page extends React.Component {
  render () {
    const { path2 } = this.props.match.params

    const Com = Loadable({
      loader: () => import(`./doc/${path2}.md`),
      loading: Loading
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
          <Route exact path='/demo' component={Loadable({
            loader: () => import('./demo'),
            loading: Loading
          })}/>
          <Route exact path='/demo/service_time' component={Loadable({
            loader: () => import('./demo/service_time'),
            loading: Loading
          })}/>
          <Route exact path='/doc' render={() => <Redirect from='/' to='/doc/About'/>}/>
          <Route exact path='/:path1/:path2' component={(props) => <Page {...props}/>}/>

          <Route exact render={() => <div>无法匹配</div>}/>
        </RRSwitch>
      </App>
    )}/>
  </Router>
)

export default hot(module)(RouteConfig)
