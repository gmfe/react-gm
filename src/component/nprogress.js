import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

const containerId = '_gm_nprogress_container' + (Math.random() + '').slice(2);
let container = document.getElementById(containerId);
if (!container) {
    container = document.createElement('div');
    container.className = 'gm-nprogress-container';
    container.id = containerId;
    document.body.appendChild(container);
}

const NProgressStatics = {
    start: function () {
        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<NProgress/>, container);
    },
    done: function () {
        ReactDOM.render(<NProgress percent={100}/>, container);
        setTimeout(function () {
            ReactDOM.unmountComponentAtNode(container);
        }, 250);
    }
};

class NProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0
        };
        this.timer = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.percent) {
            clearTimeout(this.timer);
            this.setState({
                percent: nextProps.percent
            });
        }
    }

    render() {
        var percent = 100 - this.state.percent;
        return (
            <div className="gm-nprogress" style={{transform: "translate3d(-" + percent + "%, 0px, 0px)"}}>
                <div className="gm-nprogress-head"></div>
            </div>
        );
    }

    componentDidMount() {
        this.doInc();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    doInc() {
        this.timer = setTimeout(() => {
            const {percent} = this.state;
            this.setState({
                percent: percent + (100 - percent) * 0.2
            });
            if (percent < 90) {
                this.doInc();
            }
        }, 150);
    }
}
Object.assign(NProgress, NProgressStatics);

NProgress.propTypes = {
    percent: PropTypes.number
};

export default NProgress;