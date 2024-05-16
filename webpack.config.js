const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
               test: /\.css$/,
               use: [
                MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    }
               ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ['file-loader?name=assets/[name].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filname: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: '/src/index.html'
        }
    }
}