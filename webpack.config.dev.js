var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.NODE_ENV;
var isDev = env === 'development';
var HappyPack = require('happypack');

var config = {
    entry: {
        'index': [
            './demo/index'
        ]
    },
    resolve: {
        alias: {}
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
        }),
        new HappyPack({
            id: 'js',
            threads: 4,
            cache: true,
            loaders: isDev ? ['babel?cacheDirectory'] : ['babel']
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['happypack/loader?id=js'],
            exclude: /dict-zi\.js/
        }, {
            test: /\.md$/,
            loader: 'babel!markdown-it-react-loader'
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css?-autoprefixer!postcss!less'
        }],
        noParse: []
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

if (!isDev) {
    // 压缩
    config.plugins.push(new uglifyJsPlugin({
        screw_ie8: false,
        compress: {
            screw_ie8: false,
            warnings: false
        }
    }));
}

// build ++
var deps = [
    'react-router/umd/ReactRouter.min.js',

    'redux/dist/redux.min.js',
    'react-redux/dist/react-redux.min.js',

    'underscore/underscore-min.js',
    'moment/min/moment.min.js'
];
deps.forEach(function (dep) {
    config.resolve.alias[dep.split('/')[0]] = dep;
    config.module.noParse.push(dep);
});

module.exports = config;
