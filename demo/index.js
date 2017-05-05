import 'gm-bootstrap/dist/css/bootstrap.css';
import 'gm-font/iconfont.css';
import './index.less';
import 'markdown-it-react-loader/index.css';
import 'highlight.js/styles/default.css';

import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './route_config';

ReactDOM.render(<RouteConfig/>, window.document.getElementById('appContainer'));