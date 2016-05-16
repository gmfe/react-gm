var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: 'eval',
    entry: {
        'index': [
            './demo/index'
        ],
        'import.lead': [
            './demo/import.lead'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/react-gm/build/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css!postcss!less'
        }]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    devServer: {
        proxy: {
            "/station/*": {
                "target": "http://localhost:8570",
                "secure": false
            }
        }
    }
};
