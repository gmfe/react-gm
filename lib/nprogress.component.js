import React from 'react';
import ReactDOM from 'react-dom';

var containerId = '_gm_nprogress_container' + (Math.random() + '').slice(2);
var container = document.getElementById(containerId);
if (!container) {
    container = document.createElement('div');
    container.className = 'gm-nprogress-container';
    container.id = containerId;
    document.body.appendChild(container);
}

var NProgressStatics = {
    start: function () {
        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<NProgress></NProgress>, container);
    },
    done: function () {
        ReactDOM.render(<NProgress precent={100}></NProgress>, container);
        setTimeout(function () {
            ReactDOM.unmountComponentAtNode(container);
        }, 250);
    }
};

var NProgress = React.createClass({
    statics: NProgressStatics,
    getInitialState: function () {
        return {
            precent: 0
        };
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.precent) {
            clearTimeout(this.timer);
            this.setState({
                precent: nextProps.precent
            });
        }
    },
    render: function () {
        var percent = 100 - this.state.precent;
        return (
            <div className="gm-nprogress" style={{transform: "translate3d(-" + percent +"%, 0px, 0px)"}}>
                <div className="gm-nprogress-head"></div>
            </div>
        );
    },
    componentDidMount: function () {
        this.doInc();
    },
    componentWillUnmount: function () {
        clearTimeout(this.timer);
    },
    doInc: function () {
        var t = this;
        t.timer = setTimeout(function () {
            t.setState({
                precent: t.state.precent + (100 - t.state.precent) * 0.2
            });
            if (t.state.precent < 90) {
                t.doInc();
            }
        }, 150);
    }
});

export default NProgress;