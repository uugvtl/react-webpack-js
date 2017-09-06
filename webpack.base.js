const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    devtool:"source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: {
        app:[path.join(__dirname, 'src', 'index.jsx')]
    },
    output: {
        filename: 'assets/[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader:'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                })
            },
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
        new ExtractTextPlugin("assets/styles/index.css"), // pack all the sass and css files into index.csss
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template:'./src/index.pug'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/assets/manifest.json')
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require( './postcss.config.js')
            }
        })
    ]
};


