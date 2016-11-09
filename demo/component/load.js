import React from 'react';
import {
    Loading,
    NProgress
} from '../../src/index';

const LoadingWrap = () => (
    <div style={{
        'display': 'inline-block',
        'margin': '30px 0'
    }}>
        <Loading size={30}/>
        <Loading size={40}/>
        <Loading />
    </div>
);

// nprogress
class NProgressWrap extends React.Component {
    render() {
        return (
            <div>
                顶部进度条
                <button className="btn btn-primary" onClick={this.handleStart}>start</button>
                <button className="btn btn-primary" onClick={this.handleEnd}>end</button>
            </div>
        );
    }

    handleStart() {
        NProgress.start();
    }

    handleEnd() {
        NProgress.done();
    }
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="loading">加载</h1>
                <h2 id="Loading">Loading</h2>
                <LoadingWrap/>
                <h2 id="NProgress">NProgress</h2>
                <NProgressWrap/>
            </div>
        );
    }
}

export default Component;