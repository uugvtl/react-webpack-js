const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: {
        app:[path.join(__dirname, 'src', 'index.js')]
    },
    output: {
        filename: 'assets/[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                loader: 'pug-loader'
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/assets/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: [resolve('src/assets/icons')],
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template:'./src/index.pug'
        })
        ,new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/assets/manifest.json')
        })
    ]
};


