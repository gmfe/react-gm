import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch as RRSwitch
} from 'react-router-dom';
import {Bundle, processReactRouterProps} from 'gm-util';
import {Emitter} from '../src/index';

import App from './app';
import Demo from 'bundle-loader?lazy!./component/demo';
import Config from './config';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.afterBundle = ::this.afterBundle;
    }

    afterBundle(component) {
        if (this.component !== component) {
            Emitter.emit('DEMO-PAGE-LOADED');
        }

        this.component = component;
    }

    render() {
        const {path1, path2} = this.props.match.params;
        const load = Config[path1][path2];

        if (!load) {
            return null;
        }

        return (
            <Bundle load={load}>
                {(Component) => {
                    if (Component) {
                        setTimeout(() => this.afterBundle(Component), 500);
                        return <Component {...this.props}/>;
                    } else {
                        return <div>loading</div>;
                    }
                }}
            </Bundle>
        );
    }
}

const getModule = (loaderLazyModule) => {
    return (props) => {
        return (
            <Bundle load={loaderLazyModule}>
                {(Component) => Component ? <Component {...props}/> : <div/>}
            </Bundle>
        );
    };
};

const RouteConfig = () => (
    <Router>
        <Route path="/" component={(props) => (
            <App {...processReactRouterProps(props)}>
                <RRSwitch>
                    <Route exact path="/" render={() => <Redirect from="/" to="/doc/About"/>}/>
                    <Route exact path="/demo" component={getModule(Demo)}/>

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