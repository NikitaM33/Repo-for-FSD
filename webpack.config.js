const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const FileLoader = require('file-loader');

module.exports = {
    entry: {
        main: './src/index.js',
        searchedRoom: './src/pug/pages/searchedRoom/searchedRoom.js',
        roomDitails: './src/pug/pages/roomDitails/roomDitails.js',
        signup: './src/pug/pages/signup/signup.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },

            {
                test: /\.pug$/,
                use: ['pug-loader', 'html-loader?attrs=false', 'pug-html=loader']
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: './src/assets/fonts/[name].[ext]'
                }
            },

            {
                test: /\.(jpg|JPG|jpeg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './src/image/[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        // new CleanWebpackPlugin(['dist']), // с этим падает ошибка "CleanWebpackPlugin не является конструктором" 
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pug/pages/index.html',
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pug/pages/searchedRoom/searchedRoom.html',
            filename: 'searchedRoom.html'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pug/pages/roomDitails/roomditails.html',
            filename: 'roomditails.html'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pug/pages/signup/signup.html',
            filename: 'signup.html'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new WebpackMd5Hash()
    ]
};