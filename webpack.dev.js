const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');


module.exports = merge(baseWebpackConfig, {
    devtool:"source-map",
    devServer: {
        contentBase:path.join(__dirname,'dist'),
        publicPath: '/',
        compress:true,
        port:3000,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loaders:['react-hot-loader','babel-loader']
            },
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                exclude: /node_modules/,
                loaders:['style-loader','css-loader', 'postcss-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]

});

