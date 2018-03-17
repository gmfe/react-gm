import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch as RRSwitch
} from 'react-router-dom';
import {importComponent, processReactRouterProps} from 'gm-util';
import {Emitter} from '../src/index';

import App from './app';
import Config from './config';

class Page extends React.Component {
    render() {
        const {path1, path2} = this.props.match.params;
        const load = Config[path1][path2];

        if (!load) {
            return null;
        }

        const Com = importComponent(load, {
            onLoad: () => {
                setTimeout(() => Emitter.emit('DEMO-PAGE-LOADED'), 500);
            }
        });

        return <Com {...this.props}/>;
    }
}

const RouteConfig = () => (
    <Router>
        <Route path="/" component={(props) => (
            <App {...processReactRouterProps(props)}>
                <RRSwitch>
                    <Route exact path="/" render={() => <Redirect from="/" to="/doc/About"/>}/>
                    <Route exact path="/demo" component={importComponent(() => import('./component/demo'))}/>

                    <Route exact path="/doc" render={() => <Redirect from="/" to="/doc/About"/>}/>
                    <Route exact path="/standard" render={() => <Redirect from="/" to="/standard/LayoutRule"/>}/>

                    <Route exact path="/:path1/:path2" component={Page}/>
                    <Route exact render={() => <div>无法匹配</div>}/>
                </RRSwitch>
            </App>
        )}/>
    </Router>
);

export default RouteConfig;