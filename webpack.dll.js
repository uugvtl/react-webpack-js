const path = require("path"),
    webpack = require("webpack");

const vendors = [
    'lodash',
    'rxjs',
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'rx-react-container',
    'babel-polyfill'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, "dist",'assets'),
        filename: "libs.js",
        library: "[name]_[hash]",
        publicPath: "/"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", 'assets',"manifest.json"),
            name: "[name]_[hash]",
            context: __dirname
        })
    ]
};