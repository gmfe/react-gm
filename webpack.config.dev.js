var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'index': [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3000',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            filename: 'webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=react,presets[]=es2015'
        }]
    }
};
