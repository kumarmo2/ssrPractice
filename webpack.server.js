const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const serverConfig = {
    target: 'node',
    mode: 'production',
    entry:{
        server: path.resolve(__dirname, 'server.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/ssr'),
        // publicPath: '/build',
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    externals: [
        webpackNodeExternals(),
    ],
}

module.exports = serverConfig;