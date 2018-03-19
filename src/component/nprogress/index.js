import React from 'react';
import PropTypes from 'prop-types';
import LayoutRoot from '../layout_root';

class NProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: this.props.percent || 0
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

    render() {
        const percent = 100 - this.state.percent;
        return (
            <div className="gm-nprogress" style={{transform: "translate3d(-" + percent + "%, 0, 0)"}}>
                <div className="gm-nprogress-head"/>
            </div>
        );
    }
}

const NProgressStatics = {
    start: function () {
        LayoutRoot.setComponent(LayoutRoot.TYPE.NPROGRESS, <NProgress/>);
    },
    done: function () {
        LayoutRoot.setComponent(LayoutRoot.TYPE.NPROGRESS, <NProgress percent={100}/>);
        setTimeout(function () {
            LayoutRoot.removeComponent(LayoutRoot.TYPE.NPROGRESS);
        }, 250);
    }
};

Object.assign(NProgress, NProgressStatics);

NProgress.propTypes = {
    percent: PropTypes.number
};

export default NProgress;