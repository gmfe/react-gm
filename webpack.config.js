const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        'index': [
            './demo/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/react-gm/build/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.md$/,
            use: [
                'babel-loader',
                'markdown-it-react-loader'
            ]
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular|iconfont)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader?-autoprefixer',
                'postcss-loader',
                'less-loader'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'img/[name].[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        // new webpack.NoEmitOnErrorsPlugin(),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ]
};

if (!isDev) {
    // 压缩
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;