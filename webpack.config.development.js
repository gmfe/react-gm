'use strict';

var webpack = require('webpack');

var reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};
var momentExternal = {
    root: 'moment',
    commonjs2: 'moment',
    commonjs: 'moment',
    amd: 'moment'
}

module.exports = {
    externals: {
        'react': reactExternal,
        'react-native': reactExternal,
        'moment': momentExternal
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
        ]
    },
    output: {
        library: 'ReactGM',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
