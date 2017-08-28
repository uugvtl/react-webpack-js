const path = require("path"),
    webpack = require("webpack");

const vendors = [
    'lodash',
    'rxjs',
    'react',
    'react-dom',
    'rx-react-container'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "libs.js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "manifest.json"),
            name: "[name]_[hash]",
            context: __dirname
        })
    ]
};