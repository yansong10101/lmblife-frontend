const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        path.resolve(__dirname, 'src/javascripts/main.js')
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "#inline-source-map",
    resolve: {
        root:['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};
