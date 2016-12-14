var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: './src/index',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'moment': 'moment',
        'underscore': 'underscore'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-gm.js',
        library: 'ReactGM',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('react-gm.css')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
        }]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
    }
};
