const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json']
    },
    entry: {
        app:path.join(__dirname, 'src/')+'index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader"})
            }
        ]
    },
    plugins: [
        new BabiliPlugin(),
        new ExtractTextPlugin("index.css"), // pack all the sass and css files into index.csss
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template:'./src/index.html'
        })
        ,new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/manifest.json')
        })
    ]
};