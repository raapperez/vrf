'use strict';

const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';

console.log(`Running webpack in ${env}`);

var _plugins = [new webpack.DefinePlugin({ 'process.env.NODE_ENV': `'${env}'` })];

const preLoaders = [];

if(env === 'production'){
    _plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: {
        'public/js/vrf': './frontend/src/js/vrf-entry.js'
    },
    output: {
        path: './',
        filename: '[name].js'
    },
    module: {
        preLoaders,
        loaders: [       
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
        ]
    },
    plugins: _plugins
};