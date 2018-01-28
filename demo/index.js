import 'gm-font/iconfont.css';
import './index.less';
import 'markdown-it-react-loader/index.css';
import 'highlight.js/styles/default.css';

import '../src/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import {AppContainer} from 'react-hot-loader';

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Route/>
        </AppContainer>
        , window.document.getElementById("appContainer"));
};

renderApp();

if (module.hot) {
    module.hot.accept(() => renderApp());
}
