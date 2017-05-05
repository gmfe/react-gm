import React from 'react';
import queryString from 'query-string';

class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.props.children(this.state.mod);
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

function processReactRouterProps(props) {
    props.location.query = queryString.parse(props.location.search);
    return props;
}

export {
    getModule,
    Bundle,
    processReactRouterProps
};