import React from 'react';

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
    return (match) => {
        console.log('match', match);
        return (
            <Bundle load={loaderLazyModule}>
                {(Component) => Component ? <Component/> : <div/>}
            </Bundle>
        );
    };
};

export {
    getModule,
    Bundle
};