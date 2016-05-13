var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: './lib/index',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'moment': 'moment',
        'underscore': 'underscore',
        'react-bootstrap': 'react-bootstrap'
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
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
        }]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};
