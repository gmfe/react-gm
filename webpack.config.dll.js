const webpackConfigDll = require('gm-webpack/webpack.config.dll.js');

const config = webpackConfigDll({
    publicPath: '/react-gm/build/',
    dll: [
        'react', 'react-dom',
        'classnames',
        'react-router', 'react-router-dom',
        'history', 'query-string',
        'lodash', 'moment'
    ]
});

module.exports = config;