var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        'index': [
            './index'
        ],
        'import.lead': [
            './import.lead'
        ]
    },
    output: {
        path: path.join(__dirname, ''),
        filename: '[name].[hash].bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            filename: 'webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=react,presets[]=es2015',
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css!less'
        }]
    }
};
