const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const publicPath = '/build/';
settings = [
    {
        name: 'client',
        entry: ['babel-polyfill', './src/ui/js/index.js'],
        target: 'web',
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js',
            publicPath: publicPath,
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '[name].css',
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    drop_debugger: true
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } }
            }),
        ],
        stats: { children: false },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: [
                        {loader: 'babel-loader'}
                    ]
                },
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: { importLoaders: 1}
                            },
                            {
                                loader: 'postcss-loader',
                                options: { plugins: [autoprefixer()]}
                            },
                            {
                                loader: 'sass-loader',
                                options: { importLoaders: 1}
                            },
                        ]
                    })
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ttf|ico)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[ext]'
                        }
                    }]
                }
            ]
        }
    },
    {
        name: 'server',
        entry: './src/server/index.js',
        target: 'node',
        output: {
            path: path.join(__dirname, 'build'),
            libraryTarget: 'commonjs2',
            filename: 'server.js',
            publicPath: publicPath,
        },
        plugins: [
            new StatsPlugin('stats.json', {
                chunkModules: true,
                modules: true,
                chunks: true,
                exclude: [/node_modules[\\\/]react/],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: [
                        {loader: 'babel-loader'},
                    ]
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: 'css-loader/locals',
                            options: { importLoaders: 1}
                        },
                        {
                            loader: 'sass-loader',
                            options: { importLoaders: 1}
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ttf|ico)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[ext]'
                        }
                    }]
                }
            ]
        }
    }
];

module.exports = settings;