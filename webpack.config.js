const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const FileLoader = require('file-loader');

module.exports = {
    entry: {main: './src/index.js'},
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
        // new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pug/pages/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};