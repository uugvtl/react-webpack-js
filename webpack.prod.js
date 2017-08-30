const webpack = require('webpack');
const merge = require('webpack-merge');

const BabiliPlugin = require("babili-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
    module:{
        rules:[
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
        new ExtractTextPlugin("assets/index.css"), // pack all the sass and css files into index.csss
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]

});