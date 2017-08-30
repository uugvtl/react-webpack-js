const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        contentBase:path.join(__dirname,'dist'),
        publicPath:'/',
        compress:true,
        port:3000,
        hot: true
    },
    devtool:"source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: {
        app:["promise-polyfill","whatwg-fetch","babel-polyfill",path.join(__dirname, 'src', 'index.js')]
    },
    output: {
        filename: 'assets/[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loaders:['react-hot-loader','babel-loader']
            },
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                exclude: /node_modules/,
                use:['style-loader','css-loader', 'postcss-loader','sass-loader']
            },
            {
                test: /\.pug$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                loader:'pug-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template:'./src/index.pug'
        })
        ,new webpack.HotModuleReplacementPlugin()
        ,new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/assets/manifest.json')
        })
    ]
};


