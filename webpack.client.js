const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig = {
    target: 'web',
    mode: 'production',
    entry:{
        client: path.join(__dirname, 'src', 'client.js'),
    },
    output: {
        filename: '[name].[contenthash:9].js',
        chunkFilename: '[name].[contenthash:9].js',
        path: path.resolve(__dirname, 'build'),
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
        new LoadablePlugin(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // which modules should be part of this cacheGroup.
                    name: 'vendor'
                }
            }
        }
    }
}

module.exports = clientConfig;