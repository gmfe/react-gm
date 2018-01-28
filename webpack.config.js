const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HappyPack = require('happypack');
const env = process.env.NODE_ENV;
const isDev = env === 'development';
const happyThreadPool = HappyPack.ThreadPool({size: 5});
const os = require('os');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');

const config = {
    entry: {
        'index': [
            './demo/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash:8].bundle.js',
        publicPath: '/react-gm/build/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'happypack/loader?id=js',
            exclude: /node_modules\/(^react-hot)/
        }, {
            test: /\.md$/,
            loader: 'happypack/loader?id=md'
        }, {
            test: /\.(css|less)$/,
            loader: 'happypack/loader?id=css'
        }, {
            test: /(glyphicons-halflings-regular|iconfont)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'img/[name].[hash:8].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HappyPack({
            id: 'md',
            threadPool: happyThreadPool,
            loaders: ['babel-loader', 'markdown-it-react-loader']
        }),
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: [{
                path: 'babel-loader'
            }]
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        }),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ]
};

if (isDev) {
    config.entry.index.unshift(`webpack-dev-server/client?http://localhost:3000`);
    config.entry.index.unshift('webpack/hot/only-dev-server');
    config.entry.index.unshift('react-hot-loader/patch');
} else {
    // 压缩
    config.plugins.push(new UglifyJsParallelPlugin({
        workers: os.cpus().length,
        compress: {
            screw_ie8: false,
            warnings: false
        }
    }));
}

module.exports = config;