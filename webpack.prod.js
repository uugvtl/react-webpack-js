const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

const PATHS = {
    src :path.join(__dirname, 'src/'),
    dist:path.join(__dirname, 'dist/')
};

module.exports = {
    devtool:"cheap-module-eval-source-map",
    entry: {
        app:PATHS.src+'index.js'
    },
    output: {
        filename: '[name].[chunkHash:6].js',
        path: PATHS.dist
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['stage-2']
                }
            },
            {
                test:/.scss$/,
                exclude: /node_modules/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template:'./src/index.html'
        })
        ,new BabiliPlugin()
        ,new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/manifest.json')
        })
    ]
};