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
            loader: 'babel',
            exclude: /dict-zi\.js/
        }, {
            test: /\.md$/,
            loader: 'babel!markdown-it-react-loader'
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css?-autoprefixer!postcss!less'
        }]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
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
