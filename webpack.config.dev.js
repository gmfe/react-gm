var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'index': [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3000',
            './index'
        ]
    },
    output: {
        path: path.join(__dirname, ''),
        filename: '[name].bundle.js',
        publicPath: '/static'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
