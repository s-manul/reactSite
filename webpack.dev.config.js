const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

//const nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
const publicPath = '/build/';
settings = [
    {
        name: 'client',
        devtool: 'source-map',
        entry: ['babel-polyfill', './src/ui/js/index.js'],
        target: 'web',
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js',
            publicPath: publicPath,
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'css/[name].css',
            })
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
                    test: /\.(jpe?g|png|gif|svg|ttf)$/i,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '/media/[name].[ext]',
                            //publicPath: (url)=> url.replace(/build/, ''),
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
        //externals: nodeModules,
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
                    test: /\.(jpe?g|png|gif|svg|ttf)$/i,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '/media/[name].[ext]',
                            //publicPath: (url)=> url.replace(/build/, ''),
                            emitFile: false,
                            emit: false
                        }
                    }]
                }
            ]
        }
    }
];

module.exports = settings;