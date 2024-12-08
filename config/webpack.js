const paths = require('./paths')
const { resolve } = require('path')
const { port, swcConfig } = require('./constants')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: paths.src + '/index.js',
    mode: 'development',
    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: ['web', 'es2021'],
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'swc-loader',
                options: swcConfig,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                ],
            },

        ],
    },
    cache: {
        type: 'filesystem',
        compression: 'gzip',
        cacheLocation: resolve(__dirname, '../.webpack-cache'),
    },

    devServer: {
        port: port,
        liveReload: false,
        historyApiFallback: true,
        open: true,
    },

    plugins: [
        new ReactRefreshWebpackPlugin({ overlay: false }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: paths.src + '/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ]

}