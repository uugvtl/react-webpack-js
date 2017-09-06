const webpack = require('webpack');
const merge = require('webpack-merge');

const BabiliPlugin = require("babili-webpack-plugin");
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
    module:{
        rules:[
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins: [
        new BabiliPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]

});