const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: 'development',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
               test: /\.css$/i,
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
                type: 'asset/resource', 
                generator: {
                  filename: 'assets/[name][ext]' 
                },
                use: {
                  loader: 'image-webpack-loader',
                  options: { 
                    mozjpeg: { 
                      progressive: true, 
                      quality: 65 // Calidad de la imagen
                    },
                    optipng: { // Optimiza las imágenes png
                      enabled: false, // Habilita la optimización
                    },
                    pngquant: { // Optimiza las imágenes png, a diferencia de optipng, pngquant es más agresivo
                      quality: [0.65, 0.90], // Calidad de la imagen
                      speed: 4 // Velocidad de optimización
                    },
                    gifsicle: { // Optimiza las imágenes gif
                      interlaced: false, // Habilita la optimización entrelazada, o sea, la imagen se va cargando a medida que se va descargando
                    },
                    webp: { // Optimiza las imágenes webp
                      quality: 75 // Calidad de la imagen
                    }
                  }
                },
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index1.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'bundle')
        },
        compress: true,
        port: 5500,
        historyApiFallback: {
            index: '/index1.html'
        }
    }
}