var path = require('path');
var webpack = require('webpack');
//var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        bundle: './index'
    },
    output: {
        path: path.join(__dirname, ''),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //new CommonsChunkPlugin('common.js')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};